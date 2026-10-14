import React, { useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from './routes.json';
import { pages } from './pages.jsx';

export function findRoute(pathname) {
  return routes.find(route => route.path === (pathname === '/index.html' ? '/' : pathname));
}
function RouteEffects({ route }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.body.dataset.page = route?.id || 'not-found';
  }, [route]);
  useEffect(() => {
    document.querySelectorAll('[data-route-head]').forEach(node => node.remove());
    const tags = route?.tags || [{ tag: 'title', attrs: {}, text: 'Página não encontrada | Liberty Saúde' }];
    tags.forEach(({ tag, attrs, text }) => {
      if (tag === 'meta' && ('charset' in attrs || attrs.name === 'viewport')) return;
      const element = document.createElement(tag);
      Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
      element.setAttribute('data-route-head', '');
      if (text) element.textContent = text;
      document.head.append(element);
    });
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        try { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(); } catch { /* Ignore malformed bookmarks. */ }
      } else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      const title = document.querySelector('main h1, h1');
      if (title && !location.hash) { title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true }); }
    });
    return () => cancelAnimationFrame(frame);
  }, [route, location.key, location.hash]);
  return null;
}
export default function App() {
  const location = useLocation();
  const route = findRoute(location.pathname);
  const Page = route && pages[route.id];
  return <><RouteEffects route={route}/>{Page ? <Page key={route.id}/> : <main className="not-found"><h1>Página não encontrada</h1><p>O endereço pode ter mudado.</p><Link to="/">Voltar ao início</Link></main>}</>;
}
