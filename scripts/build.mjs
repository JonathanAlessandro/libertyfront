import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

const root = process.cwd();
const dist = path.join(root, 'dist');
// Only remove build output inside this repository.
if (path.dirname(dist) !== root || path.basename(dist) !== 'dist') throw new Error('Invalid output directory');
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(path.join(dist, 'assets'), { recursive: true });
await fs.cp('public', dist, { recursive: true });
const routes = JSON.parse(await fs.readFile('src/routes.json', 'utf8'));
let css = '';
for (const route of routes) {
  const scope = `body[data-page="${route.id}"]`;
  for (const stylesheet of route.styles) {
    const tree = postcss.parse(await fs.readFile(`src/styles/${stylesheet}`, 'utf8'));
    const animations = new Map();
    tree.walkAtRules(/keyframes$/, rule => {
      const previous = rule.params;
      animations.set(previous, `${route.id}-${previous}`);
      rule.params = animations.get(previous);
    });
    tree.walkDecls(/^animation/, declaration => {
      for (const [before, after] of animations) declaration.value = declaration.value.replace(new RegExp(`\\b${before}\\b`, 'g'), after);
    });
    tree.walkRules(rule => {
      if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) return;
      rule.selector = selectorParser(selectors => {
        selectors.each(selector => {
          let rootSelector = false;
          selector.walk(node => {
            if ((node.type === 'pseudo' && node.value === ':root') || (node.type === 'tag' && ['body', 'html'].includes(node.value))) {
              rootSelector = true;
              node.replaceWith(...selectorParser().astSync(scope).first.nodes.map(part => part.clone()));
            }
          });
          if (!rootSelector) {
            selector.prepend(selectorParser.combinator({ value: ' ' }));
            for (const node of [...selectorParser().astSync(scope).first.nodes].reverse()) selector.prepend(node.clone());
          }
        });
      }).processSync(rule.selector);
    });
    // Fonts are shared outside the per-page selectors.
    tree.walkAtRules('import', rule => rule.remove());
    css += tree.toString() + '\n';
  }
}
css += await fs.readFile('src/styles/site.css', 'utf8');
const cssResult = await build({ stdin: { contents: css, loader: 'css', resolveDir: root }, bundle: true, minify: true, outfile: 'dist/assets/site.css', entryNames: '[name]-[hash]', metafile: true });
const jsResult = await build({ entryPoints: ['src/client.jsx'], bundle: true, minify: true, format: 'esm', outfile: 'dist/assets/site.js', entryNames: '[name]-[hash]', metafile: true, define: { 'process.env.NODE_ENV': '"production"' } });
const cssFile = '/' + Object.keys(cssResult.metafile.outputs).find(file => file.endsWith('.css')).replace(/^dist\//, '');
const jsFile = '/' + Object.keys(jsResult.metafile.outputs).find(file => file.endsWith('.js')).replace(/^dist\//, '');
await fs.mkdir('.build', { recursive: true });
await build({ entryPoints: ['src/server.jsx'], bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: '.build/server.mjs', define: { 'process.env.NODE_ENV': '"production"' } });
const { render } = await import(pathToFileURL(path.join(root, '.build/server.mjs')).href + `?v=${Date.now()}`);
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function headTags(tags) {
  return tags.filter(({ tag, attrs }) => !(tag === 'meta' && ('charset' in attrs || attrs.name === 'viewport'))).map(({ tag, attrs, text }) => {
    const attributes = Object.entries(attrs).map(([key, value]) => ` ${key}="${escape(value)}"`).join('');
    return `<${tag} data-route-head${attributes}>${text ? tag === 'script' ? text.replace(/<\/script/gi, '<\\/script') : escape(text) : ''}${['meta', 'link'].includes(tag) ? '' : `</${tag}>`}`;
  }).join('\n');
}
function shell(route, url) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${headTags(route.tags)}<link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Work+Sans:wght@300;400;500;600;700&display=swap"><link rel="stylesheet" href="${cssFile}"><script type="module" src="${jsFile}"></script></head><body data-page="${route.id}"><div id="root">${render(url)}</div></body></html>`;
}
for (const route of routes) {
  const file = path.join(dist, route.path === '/' ? 'index.html' : route.path.slice(1));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, shell(route, route.path));
}
const missing = { id: 'not-found', tags: [{ tag: 'title', attrs: {}, text: 'Página não encontrada | Liberty Saúde' }, { tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' }, text: '' }] };
await fs.writeFile(path.join(dist, '404.html'), shell(missing, '/404.html'));
console.log(`Build concluído: ${routes.length} páginas React pré-renderizadas em dist/.`);
