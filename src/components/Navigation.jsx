import React, { Children, cloneElement, isValidElement, useState } from 'react';

export default function Navigation({ children, className = 'nav', ...props }) {
  const [open, setOpen] = useState(false);
  const toggle = <button key="menu-toggle" type="button" className="mobile-menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? '✕' : '☰'}</button>;
  return <nav {...props} className={`${className}${open ? ' menu-open' : ''}`} onClick={event => { if (event.target.closest('a[href]')) setOpen(false); }} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
    {Children.map(children, child => isValidElement(child) && child.props.className?.includes('nav-inner') ? cloneElement(child, {}, [...Children.toArray(child.props.children), toggle]) : child)}
  </nav>;
}
