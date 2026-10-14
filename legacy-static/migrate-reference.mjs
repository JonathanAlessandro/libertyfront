import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parse, parseFragment } from 'parse5';
import postcss from 'postcss';

for (const dir of ['src/pages', 'src/components', 'src/styles', 'public/assets/images']) fs.mkdirSync(dir, { recursive: true });
fs.cpSync('assets/images', 'public/assets/images', { recursive: true });
for (const file of ['sitemap.xml']) fs.copyFileSync(file, `public/${file}`);
fs.copyFileSync('assets/images/favicon.ico', 'public/favicon.ico');
for (const file of fs.readdirSync('assets/css')) if (!['form_animacao.css'].includes(file)) fs.copyFileSync(`assets/css/${file}`, `src/styles/${file}`);
const voids = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
const attrNames = { class:'className', for:'htmlFor', tabindex:'tabIndex', viewbox:'viewBox', fetchpriority:'fetchPriority', srcset:'srcSet', crossorigin:'crossOrigin', readonly:'readOnly', autocomplete:'autoComplete', inputmode:'inputMode', maxlength:'maxLength', 'http-equiv':'httpEquiv', charset:'charSet', 'stroke-width':'strokeWidth', 'stroke-linecap':'strokeLinecap', 'stroke-linejoin':'strokeLinejoin', 'fill-rule':'fillRule', 'clip-rule':'clipRule', 'clip-path':'clipPath', 'stroke-dasharray':'strokeDasharray', 'stroke-dashoffset':'strokeDashoffset', 'stop-color':'stopColor', 'stop-opacity':'stopOpacity' };
const booleans = new Set(['required','disabled','checked','selected','multiple','hidden','open','autofocus']);
const getAttr = (node,name) => node.attrs?.find(attr=>attr.name===name)?.value;
function absolute(value, route) {
 if (!value || /^(https?:|data:|mailto:|tel:|#|\/\/)/.test(value)) return value;
 const url = new URL(value, `https://libertysaude.com.br${route}`);
 return url.pathname + url.search + url.hash;
}
function styleObject(value) {
 const result = {};
 postcss.parse(`a{${value}}`).first.nodes.forEach(decl => {
  if (decl.type !== 'decl') return;
  const key = decl.prop.startsWith('--') ? decl.prop : decl.prop.replace(/-([a-z])/g,(_,letter)=>letter.toUpperCase());
  result[key] = decl.value.replace(/\s*!important$/, '');
 });
 return result;
}
function jsx(node, route) {
 if (node.nodeName === '#text') return node.value.trim() ? `{${JSON.stringify(node.value)}}` : '\n';
 if (!node.tagName) return '';
 if (['script','style'].includes(node.tagName)) return '';
 const id = getAttr(node,'id');
 if (id === 'navbar-container') return '<div id="navbar-container"><Navbar/></div>';
 if (id === 'footer-container') return '<div id="footer-container"><Footer/></div>';
 let tag = node.tagName;
 const attrs = [];
 const href = getAttr(node,'href');
 const internal = tag === 'a' && href !== undefined && !/^(https?:|mailto:|tel:|\/\/)/.test(href);
 if (internal) tag = 'Link';
 if (node.tagName === 'nav') tag = 'Navigation';
 if (id === 'chatWidget') tag = 'ChatWidget';
 for (const attr of node.attrs || []) {
  if (/^on/.test(attr.name)) continue;
  let name = attrNames[attr.name] || attr.name;
  let value = attr.value;
  if (name === 'style') { attrs.push(`style={${JSON.stringify(styleObject(value))}}`); continue; }
  if (booleans.has(name)) { attrs.push(`${name}={true}`); continue; }
  if (name === 'src' && value.startsWith('data:image/')) {
   const match=value.match(/^data:image\/(\w+);base64,(.*)$/s);
   if (match) { const filename=`embedded-${crypto.createHash('sha256').update(value).digest('hex').slice(0,12)}.${match[1]}`;fs.writeFileSync(`public/assets/images/${filename}`,Buffer.from(match[2],'base64'));value=`/assets/images/${filename}`; }
  }
  if (['href','src'].includes(name)) value=absolute(value,route);
  if (name === 'href' && internal) name='to';
  attrs.push(`${name}={${JSON.stringify(value)}}`);
 }
 const children=(node.childNodes||[]).map(child=>jsx(child,route)).join('');
 const start=`<${tag}${attrs.length?' '+attrs.join(' '):''}`;
 return voids.has(tag) ? `${start}/>` : `${start}>${children}</${tag}>`;
}
function find(node, tag) { if(node.tagName===tag)return node; for(const child of node.childNodes||[]){const found=find(child,tag);if(found)return found;} }
const imports = `import React from 'react';\nimport { Link } from 'react-router-dom';\nimport Navbar from '../components/Navbar.jsx';\nimport Footer from '../components/Footer.jsx';\nimport Navigation from '../components/Navigation.jsx';\nimport ChatWidget from '../components/ChatWidget.jsx';\n`;
for (const [name,file] of [['Navbar','navbar'],['Footer','footer']]) {
 const nodes=parseFragment(fs.readFileSync(`assets/components/${file}.html`,'utf8')).childNodes;
 fs.writeFileSync(`src/components/${name}.jsx`,`import React from 'react';\nimport { Link } from 'react-router-dom';\nimport Navigation from './Navigation.jsx';\nexport default function ${name}(){return <>${nodes.map(node=>jsx(node,'/')).join('')}</>;}`);
}
const files=['index.html',...fs.readdirSync('pages').filter(f=>f.endsWith('.html')).map(f=>`pages/${f}`),'politica-de-privacidade.html','termos-de-servico.html'];
const routes=[];
for (const file of files) {
 const route=file==='index.html'?'/':`/${file}`;
 const id=file==='index.html'?'home':path.basename(file,'.html');
 const component=id.split('-').map(part=>part[0].toUpperCase()+part.slice(1)).join('');
 const doc=parse(fs.readFileSync(file,'utf8'));
 const head=find(doc,'head');const body=find(doc,'body');
 const tags=[]; const styles=[];
 for (const node of head.childNodes) {
  if (!node.tagName) continue;
  if (node.tagName==='style') {const css=node.childNodes.map(n=>n.value||'').join('');const name=`${id}-inline.css`;fs.writeFileSync(`src/styles/${name}`,css);styles.push(name);continue;}
  const attrs=Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));
  if(node.tagName==='link' && attrs.rel==='stylesheet' && !attrs.href.startsWith('https:')){if(!attrs.href.includes('form_animacao'))styles.push(path.basename(attrs.href));continue;}
  if(node.tagName==='noscript')continue;
  if(node.tagName==='script' && attrs.type!=='application/ld+json')continue;
  if(node.tagName==='link' && attrs.rel==='preload' && attrs.as==='style')continue;
  if(attrs.onload){delete attrs.onload;delete attrs.media;}
  if(attrs.href)attrs.href=absolute(attrs.href,route);
  if(attrs.href?.includes('/favicon.ico'))attrs.href='/favicon.ico';
  tags.push({tag:node.tagName,attrs,text:node.childNodes?.map(n=>n.value||'').join('')||''});
 }
 fs.writeFileSync(`src/pages/${component}.jsx`,`${imports}\nexport default function ${component}(){return <>${body.childNodes.map(node=>jsx(node,route)).join('')}</>;}\n`);
 routes.push({id,path:route,component,tags,styles});
}
routes.push({id:'cotacao',path:'/cotacao.html',component:'Cotacao',styles:['cotacao.css'],tags:[{tag:'title',attrs:{},text:'Sua cotação | Liberty Saúde'},{tag:'meta',attrs:{name:'description',content:'Solicite sua cotação de plano de saúde com a Liberty Saúde. Uma pergunta de cada vez, de forma simples e gratuita.'},text:''},{tag:'link',attrs:{rel:'canonical',href:'https://libertysaude.com.br/cotacao.html'},text:''}]});
fs.writeFileSync('src/routes.json',JSON.stringify(routes,null,2));
fs.writeFileSync('src/pages.jsx',routes.map(r=>`import ${r.component} from './${r.id==='cotacao'?'cotacao.jsx':`pages/${r.component}.jsx`}';`).join('\n')+`\nexport const pages = { ${routes.map(r=>`${JSON.stringify(r.id)}: ${r.component}`).join(', ')} };\n`);
console.log(`Convertidas ${routes.length} páginas em componentes React.`);
