const { test, expect } = require('@playwright/test');
const routes = require('../src/routes.json');

test('todas as URLs abrem diretamente com conteúdo, metadados e hidratação sem erros', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const missing = [];
  page.on('response', response => { if (response.status() >= 400 && response.url().startsWith('http://127.0.0.1')) missing.push(response.url()); });
  for (const route of routes) {
    const response = await request.get(route.path);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('<h1');
    await page.goto(route.path);
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('body')).toHaveAttribute('data-page', route.id);
    await expect(page).toHaveTitle(route.tags.find(tag => tag.tag === 'title').text.trim());
    if (['home', 'amil-saude-landing', 'cotacao'].includes(route.id)) await page.screenshot({ path: `.build/qa/${route.id}.png`, animations: 'disabled' });
  }
  expect(missing).toEqual([]);
  expect(errors).toEqual([]);
});

test('navegação React, estilos isolados, histórico e metadados entre páginas', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => { window.__navigationSentinel = 'same-document'; });
  const homeFont = await page.locator('body').evaluate(body => getComputedStyle(body).fontFamily);
  await page.locator('a.op-card[href="/pages/amil-saude-landing.html"]').click();
  await expect(page).toHaveURL(/amil-saude-landing/);
  await expect(page.locator('body')).toHaveAttribute('data-page', 'amil-saude-landing');
  expect(await page.evaluate(() => window.__navigationSentinel)).toBe('same-document');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', 'https://libertysaude.com.br/pages/amil-saude-landing.html');
  await page.locator('.nav-cta').click();
  await expect(page).toHaveURL(/cotacao.html/);
  await expect(page.getByRole('heading', { name: 'Você possui plano de saúde?' })).toBeVisible();
  expect(await page.locator('body').evaluate(body => getComputedStyle(body).fontFamily)).not.toBe(homeFont);
  await page.getByRole('link', { name: 'Voltar ao site' }).click();
  await expect(page).toHaveURL('/');
  expect(await page.evaluate(() => window.__navigationSentinel)).toBe('same-document');
  expect(await page.locator('body').evaluate(body => getComputedStyle(body).fontFamily)).toBe(homeFont);
  await page.goBack();
  await expect(page).toHaveURL(/cotacao.html/);
});

test('menu móvel e navegação por âncoras', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.screenshot({ path: '.build/qa/mobile-menu.png', animations: 'disabled' });
  const menuButton = await page.getByRole('button', { name: 'Fechar menu' }).boundingBox();
  expect(menuButton.x + menuButton.width).toBeLessThanOrEqual(390);
  await page.getByRole('link', { name: 'Plano Empresarial', exact: true }).click();
  await expect(page).toHaveURL(/plano-de-saude-empresarial/);
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
  await page.goto('/pages/amil-saude-landing.html');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.locator('.nav-links').getByRole('link', { name: 'Planos', exact: true }).click();
  await expect(page).toHaveURL(/#planos$/);
  await expect(page.locator('#planos')).toBeInViewport();
});

test('formulário preserva respostas e trata validação, erro e sucesso sem recarga', async ({ page }) => {
  let payload;let failure = true;let count = 0;
  await page.route('https://api.libertysaude.com.br/api/clientes', async route => {
    count++;payload = route.request().postDataJSON();
    await route.fulfill({status: failure ? 500 : 201, contentType: 'application/json', body: JSON.stringify(failure ? {message:'Tente novamente'} : {success:true})});
  });
  await page.goto('/cotacao.html');
  const next = () => page.getByRole('button', {name:'Continuar →',exact:true}).click();
  await expect(page.getByRole('button', {name:'Continuar →',exact:true})).toHaveCount(0);
  await page.getByRole('button', {name:'Sim',exact:true}).click();
  await page.getByLabel('Hospital de preferência').fill('São Luiz');await next();
  await page.getByLabel('Idades dos beneficiários').fill('35, texto');await next();
  await expect(page.getByRole('alert')).toContainText('Informe as idades');
  await page.getByLabel('Idades dos beneficiários').fill('35, 0');await next();
  await page.getByRole('button', {name:'Sim',exact:true}).click();
  await page.getByLabel('CNPJ (opcional)', {exact:true}).fill('11222333000181');await next();
  await page.getByRole('button', {name:'Voltar'}).click();
  await expect(page.getByLabel('CNPJ (opcional)', {exact:true})).toHaveValue('11222333000181');await next();
  await page.getByRole('button', {name:'Solicitar minha cotação'}).click();
  await expect(page.getByRole('alert')).toContainText('Informe seu nome');
  await page.getByLabel('Nome completo').fill('Pessoa Teste');
  await expect(page.getByRole('checkbox')).toHaveCount(0);
  await page.getByLabel('Telefone com DDD').fill('11999998888');
  await page.getByRole('button', {name:'Solicitar minha cotação'}).click();
  await expect(page.getByRole('alert')).toContainText('Tente novamente');
  await expect(page.getByLabel('Nome completo')).toHaveValue('Pessoa Teste');
  failure=false;await page.getByRole('button', {name:'Solicitar minha cotação'}).click();
  await expect(page.getByRole('heading', {name:'Sua solicitação foi enviada!'})).toBeVisible();
  const whatsapp = page.getByRole('link', {name:'Conversar no WhatsApp'});
  await expect(whatsapp).toHaveCount(0);
  await expect(page.locator('.success-tick')).toBeVisible();
  await expect(whatsapp).toBeVisible();
  await expect(whatsapp).toHaveAttribute('href', /^https:\/\/wa\.me\/5511989152642\?text=/);
  await expect(whatsapp).toHaveAttribute('target', '_blank');
  expect(new URL(await whatsapp.getAttribute('href')).searchParams.get('text')).toBe('Preenchi seu formulário solicitando uma cotação e gostaria de saber mais.');
  await expect(page.getByRole('link', {name:'Voltar ao início'})).toBeVisible();
  expect(payload.aceitaEmails).toBe(false);expect(payload.aceitaWhatsapp).toBe(false);
  expect(payload.plano_atual).toBe('possui plano de saúde');expect(count).toBe(2);expect(payload.email).toBe('');expect(payload.telefone).toBe('11999998888');expect(payload.idades).toEqual([35,0]);
});

test('formulário sem plano, hospital ou CNPJ no celular', async ({ page }) => {
  let payload;
  await page.route('https://api.libertysaude.com.br/api/clientes', async route => {payload=route.request().postDataJSON();await route.fulfill({status:201,contentType:'application/json',body:'{"success":true}'});});
  await page.setViewportSize({width:375,height:812});await page.goto('/cotacao.html');
  const next=()=>page.getByRole('button',{name:'Continuar →',exact:true}).click();
  await page.getByRole('button',{name:'Não',exact:true}).click();
  await expect(page.getByLabel('Não tenho preferência de hospital')).toHaveCount(0);
  await expect(page.getByLabel('Hospital de preferência')).not.toHaveAttribute('required');
  await next();
  await page.getByLabel('Idades dos beneficiários').fill('28');await next();
  await page.getByRole('button',{name:'Não',exact:true}).click();
  await page.getByLabel('Nome completo').fill('Pessoa Teste');await page.getByLabel('Telefone com DDD').fill('1133334444');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
  await page.getByRole('button',{name:'Solicitar minha cotação'}).click();
  await expect(page.getByRole('heading',{name:'Sua solicitação foi enviada!'})).toBeVisible();
  expect(payload.hospital).toBe('');expect(payload.noCnpj).toBe(true);expect(payload.cnpj).toBeNull();expect(payload.plano_atual).toBe('não possuo plano');
});

test('chat abre e fecha após navegação e página inexistente retorna 404', async ({ page, request }) => {
  await page.goto('/pages/amil-saude-landing.html');
  await expect(page.locator('#chatWidget')).toHaveClass(/is-open/, { timeout: 7000 });
  await page.getByRole('button',{name:'Fechar chat'}).click();
  await expect(page.locator('#chatWidget')).not.toHaveClass(/is-open/);
  await page.locator('#waFloatBtn').click();await expect(page.locator('#chatWidget')).toHaveClass(/is-open/);
  const response=await request.get('/pagina-que-nao-existe');expect(response.status()).toBe(404);
  await page.goto('/pagina-que-nao-existe');await expect(page.getByRole('heading',{name:'Página não encontrada'})).toBeVisible();
});

test('seleções avançam uma vez, permitem mudar a resposta ao voltar e respeitam movimento reduzido', async ({ page }) => {
  await page.goto('/cotacao.html');
  await page.getByRole('button', {name:'Sim',exact:true}).evaluate(button => { button.click(); button.click(); });
  await expect(page.getByRole('heading', {name:'Qual hospital você prefere?'})).toBeVisible();
  await expect(page.locator('form')).toHaveAttribute('aria-busy', 'false');
  await page.getByRole('button', {name:'Voltar'}).click();
  await expect(page.getByRole('heading', {name:'Você possui plano de saúde?'})).toBeVisible();
  await page.getByRole('button', {name:'Não',exact:true}).click();
  await expect(page.getByRole('heading', {name:'Qual hospital você prefere?'})).toBeVisible();
  await expect(page.getByLabel('Plano atual')).toHaveCount(0);
  await page.emulateMedia({reducedMotion:'reduce'});
  expect(await page.locator('form').evaluate(form => getComputedStyle(form).animationName)).toBe('none');
  await page.getByRole('button', {name:'Voltar'}).click();
  await expect(page.getByRole('heading', {name:'Você possui plano de saúde?'})).toBeVisible();
  await page.getByRole('button', {name:'Sim',exact:true}).click();
  await expect(page.getByLabel('Hospital de preferência')).toBeVisible();
  await expect(page.getByLabel('Plano atual')).toHaveCount(0);
});

for (const clearIncomplete of [false, true]) {
  test(`CNPJ opcional: ${clearIncomplete ? 'limpar número incompleto e continuar' : 'continuar com campo vazio'}`, async ({ page }) => {
    let payload;
    await page.route('https://api.libertysaude.com.br/api/clientes', async route => {
      payload = route.request().postDataJSON();
      await route.fulfill({status:201,contentType:'application/json',body:'{"success":true}'});
    });
    await page.goto('/cotacao.html');
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.getByRole('button',{name:'Não',exact:true}).click();
    await page.getByRole('button',{name:'Continuar',exact:false}).click();
    await page.getByLabel('Idades dos beneficiários').fill('30');
    await page.getByRole('button',{name:'Continuar',exact:false}).click();
    await page.getByRole('button',{name:'Sim',exact:true}).click();
    await expect(page.getByText('Com o CNPJ, podemos preparar', {exact:false})).toBeVisible();
    const cnpj = page.getByLabel('CNPJ (opcional)');
    await expect(cnpj).not.toHaveAttribute('required');
    await expect(page.getByRole('button',{name:'Continuar sem informar'})).toHaveCount(0);
    if (clearIncomplete) {
      await cnpj.fill('123');
      await page.getByRole('button',{name:'Continuar →',exact:true}).click();
      await expect(page.getByRole('alert')).toContainText('14 números');
      await cnpj.fill('');
      await page.getByRole('button',{name:'Continuar →',exact:true}).click();
    } else await page.getByRole('button',{name:'Continuar →',exact:true}).click();
    await page.getByLabel('Nome completo').fill('Pessoa Teste');
    await page.getByLabel('Telefone com DDD').fill('11999998888');
    await page.getByRole('button',{name:'Solicitar minha cotação'}).click();
    await expect(page.getByRole('heading',{name:'Sua solicitação foi enviada!'})).toBeVisible();
    expect(payload.cnpj).toBeNull();
    expect(payload.noCnpj).toBe(false);
  });
}
