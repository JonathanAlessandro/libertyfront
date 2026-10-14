(() => {
  const button = document.querySelector('.wa-float');
  if (!button) return;
  const key = 'liberty-mascot-position';
  const margin = 8;
  let start;
  let dragged = false;
  let suppressClick = false;

  function place(left, top) {
    const maxLeft = Math.max(margin, innerWidth - button.offsetWidth - margin);
    const maxTop = Math.max(margin, innerHeight - button.offsetHeight - margin);
    button.style.left = `${Math.min(maxLeft, Math.max(margin, left))}px`;
    button.style.top = `${Math.min(maxTop, Math.max(margin, top))}px`;
    button.style.right = 'auto';
    button.style.bottom = 'auto';
  }

  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Number.isFinite(saved?.left) && Number.isFinite(saved?.top)) place(saved.left, saved.top);
  } catch (_) { /* Storage may be unavailable. */ }

  button.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const rect = button.getBoundingClientRect();
    start = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top };
    dragged = false;
    button.setPointerCapture(event.pointerId);
  });

  button.addEventListener('pointermove', event => {
    if (!start || event.pointerId !== start.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!dragged && Math.hypot(dx, dy) < 7) return;
    dragged = true;
    button.classList.add('is-dragging');
    place(start.left + dx, start.top + dy);
  });

  function finish(event) {
    if (!start || event.pointerId !== start.pointerId) return;
    if (dragged) {
      suppressClick = true;
      setTimeout(() => { suppressClick = false; }, 300);
      try { localStorage.setItem(key, JSON.stringify({ left: button.offsetLeft, top: button.offsetTop })); } catch (_) { /* Storage may be unavailable. */ }
    }
    start = undefined;
    dragged = false;
    button.classList.remove('is-dragging');
  }
  button.addEventListener('pointerup', finish);
  button.addEventListener('pointercancel', finish);
  button.addEventListener('click', event => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick = false;
  }, true);
  window.addEventListener('resize', () => {
    if (button.style.left) place(button.offsetLeft, button.offsetTop);
  });
})();
