import { watch } from 'node:fs';
import { spawn } from 'node:child_process';

function build() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['scripts/build.mjs'], { stdio: 'inherit', windowsHide: true });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`Build terminou com código ${code}`)));
  });
}
await build();
const server = spawn(process.execPath, ['scripts/serve.mjs'], { stdio: 'inherit', windowsHide: true });
let timer;
let running = false;
let pending = false;
async function rebuild() {
  if (running) { pending = true; return; }
  running = true;
  try { await build(); console.log('Site atualizado. Recarregue o navegador para ver suas alterações.'); }
  catch (error) { console.error(error.message); }
  finally { running = false; if (pending) { pending = false; void rebuild(); } }
}
const watchers = ['src', 'public'].map(directory => watch(directory, { recursive: true }, () => {
  clearTimeout(timer);timer = setTimeout(rebuild, 180);
}));
function stop() { clearTimeout(timer);watchers.forEach(watcher => watcher.close());server.kill();process.exit(); }
process.on('SIGINT', stop);process.on('SIGTERM', stop);
