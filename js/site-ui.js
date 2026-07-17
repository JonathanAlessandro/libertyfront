(function(){
  const currentPath = location.pathname.replace(/\\/g, '/');
  const rootPath = 'https://libertysaude.com.br/';

  const navItems = [
    { label: 'Início', href: 'index.html' },
    { label: 'Quem somos', href: 'pages/quem-somos.html' },
    // { label: 'Contato', href: 'pages/contato.html' }
  ];

  const planItems = [
    { label: 'Alice', href: 'pages/alice.html' },
    { label: 'Amil', href: 'pages/amil.html' },
    { label: 'Bradesco Saúde', href: 'pages/bradesco.html' },
    { label: 'HapVida', href: 'pages/hapvida.html' },
    { label: 'Porto Seguro', href: 'pages/porto-seguro.html' },
    { label: 'SulAmérica', href: 'pages/sulamerica.html' }
  ];

  const footerLinks = [
    ...navItems,
    { label: 'Privacidade', href: 'pages/politica-de-privacidade.html' }
  ];

  const resolve = path => rootPath + path;
  const getCurrentFile = () => {
    const file = currentPath.split('/').pop();
    return file || 'index.html';
  };
  const currentPage = getCurrentFile();
  const isActive = href => href.split('/').pop() === currentPage;

  const logoPath = resolve('assets/images/logo.svg');

  const buildLink = ({ label, href }, extraClass = '') => {
    const active = isActive(href) ? ' active' : '';
    return `<a href="${resolve(href)}" class="${extraClass}${active}">${label}</a>`;
  };

  const buildHeader = () => {
    const container = document.getElementById('site-header');
    if (!container) return;
    container.innerHTML = `
      <div class="container nav-wrap">
        <a class="brand" href="${resolve('index.html')}">
          <img src="${logoPath}" alt="Liberty Saúde" class="brand-logo">
        </a>
        <button class="menu-btn" aria-label="Abrir menu">☰</button>
        <nav class="main-nav">
          ${buildLink(navItems[0])}
          ${buildLink(navItems[1])}
          <div class="dropdown">
            <button type="button">Planos ▾</button>
            <div class="dropdown-menu">
              ${planItems.map(item => buildLink(item)).join('')}
            </div>
          </div>
          ${buildLink(navItems[2])}
          <a class="btn btn-primary" href="${resolve('pages/formulario.html')}">Cotação</a>
        </nav>
      </div>
    `;
  };

  const buildFooter = () => {
    const container = document.getElementById('site-footer');
    if (!container) return;
    container.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="${resolve('index.html')}">
              <img src="${logoPath}" alt="Liberty Saúde" class="brand-logo">
            </a>
            <p>Consultoria para encontrar planos de saúde com atendimento humano e acompanhamento em toda a jornada.</p>
          </div>
          <div>
            <h3>Navegação</h3>
            ${footerLinks.map(item => buildLink(item)).join('')}
          </div>
          <div>
            <h3>Atendimento</h3>
            <a data-whatsapp href="#">WhatsApp</a>
            <p>São Paulo, SP</p>
          </div>
        </div>
        <div class="copyright">© <span data-year></span> Liberty Saúde. Todos os direitos reservados.</div>
      </div>
    `;
  };

  const updateYear = () => {
    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  };

  buildHeader();
  buildFooter();
  updateYear();
})();
