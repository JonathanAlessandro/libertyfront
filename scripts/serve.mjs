import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const port = Number(process.env.PORT || 8080);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403);res.end();return; }
    try {
      const data = await fs.readFile(filename);
      res.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });res.end(data);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });res.end(await fs.readFile(path.join(root, '404.html')));
    }
  } catch { res.writeHead(400);res.end(); }
});
server.listen(port, '127.0.0.1', () => console.log(`Liberty Saúde: http://localhost:${port}`));
