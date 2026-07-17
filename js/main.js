(function(){
  const cfg = window.LIBERTY_CONFIG || {};
  const nav = document.querySelector('.main-nav');
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => nav && nav.classList.remove('open'));
    const current = location.pathname.split('/').pop() || 'index.html';
    const href = link.getAttribute('href') || '';
    if (href.endsWith(current)) link.classList.add('active');
  });

  const cookie = document.querySelector('.cookie');
  if (cookie) {
    cookie.hidden = localStorage.getItem('cookies-ok') === '1';
    cookie.querySelector('button')?.addEventListener('click', () => {
      localStorage.setItem('cookies-ok','1');
      cookie.hidden = true;
    });
  }

  document.querySelectorAll('[data-whatsapp]').forEach(a => {
    const defaultText = 'Recebi seu email, e gostaria de uma cotação personalizada';
    const encodedText = encodeURIComponent(defaultText);
    a.href = `https://wa.me/${cfg.whatsapp || '5511989152642'}?text=${encodedText}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    
    // Determinar o caminho correto para o SVG baseado na localização atual
    const isInPages = location.pathname.includes('/pages/');
    const svgPath = isInPages ? '../assets/images/whatsapplogo.svg' : 'assets/images/whatsapplogo.svg';
    
    // Substituir conteúdo pelo SVG do WhatsApp (remover texto)
    a.innerHTML = `<img src="${svgPath}" alt="WhatsApp" style="width: 100%; height: 100%; object-fit: contain;">`;
  });

  document.querySelectorAll('.lead-form').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      const submit = form.querySelector('[type="submit"]');
      const payload = Object.fromEntries(new FormData(form).entries());
      message.className = 'form-message';
      message.textContent = '';
      submit.disabled = true;
      submit.textContent = 'Enviando...';
      try {
        if (!cfg.leadEndpoint) {
          console.log('[LEAD MODO TESTE]', payload);
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), cfg.requestTimeoutMs || 15000);
          const response = await fetch(cfg.leadEndpoint, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload),
            signal: controller.signal
          });
          clearTimeout(timer);
          if (!response.ok) throw new Error(`Falha no envio (${response.status})`);
        }
        message.classList.add('success');
        message.textContent = 'Recebemos seus dados. Em breve entraremos em contato.';
        form.reset();
      } catch (error) {
        message.classList.add('error');
        message.textContent = error.name === 'AbortError' ? 'O envio demorou demais. Tente novamente.' : 'Não foi possível enviar agora. Tente novamente.';
        console.error(error);
      } finally {
        submit.disabled = false;
        submit.textContent = 'Enviar';
      }
    });
  });
})();
