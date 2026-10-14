import React, { createContext, useContext, useEffect, useState } from 'react';

const ChatContext = createContext(null);
export function ChatProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(timer);
  }, [dismissed]);
  return <ChatContext.Provider value={{ open, setOpen, setDismissed }}><div onClick={event => {
    if (event.target.closest('#waFloatBtn') && !open) {
      event.preventDefault(); setDismissed(false); setOpen(true);
    }
  }}>{children}</div></ChatContext.Provider>;
}
export default function ChatWidget({ children, className = 'chat-widget', ...props }) {
  const { open, setOpen, setDismissed } = useContext(ChatContext);
  return <div {...props} className={`${className}${open ? ' is-open' : ''}`} onClick={event => {
    if (event.target.closest('#chatCloseBtn')) { setOpen(false); setDismissed(true); }
    if (event.target.closest('#chatCtaBtn')) {
      const link = document.querySelector('a.wa-float')?.href;
      if (link) window.open(link, '_blank', 'noopener,noreferrer');
    }
  }}>{children}</div>;
}
