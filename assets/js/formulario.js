const API_URL = 'https://api.libertysaude.com.br/api/clientes';

function toggleCnpj() {
  const noCnpj = document.getElementById('noCnpj').checked;
  const cnpjInput = document.getElementById('cnpj');

  cnpjInput.disabled = noCnpj;
  cnpjInput.required = !noCnpj;

  if (noCnpj) cnpjInput.value = '';
}

function togglePlano() {
  const semPlano = document.getElementById('semPlano').checked;
  const planoInput = document.getElementById('plano_atual');

  planoInput.disabled = semPlano;
  planoInput.required = !semPlano;

  if (semPlano) planoInput.value = '';
}

function formatarDocumento(input) {
  let value = input.value.replace(/\D/g, '').slice(0, 14);

  if (value.length <= 2) return input.value = value;
  if (value.length <= 5) return input.value = `${value.slice(0, 2)}.${value.slice(2)}`;
  if (value.length <= 8) return input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
  if (value.length <= 12) return input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;

  input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12)}`;
}

function getDocumentoSemMascara(inputId) {
  return document.getElementById(inputId).value.replace(/\D/g, '');
}

function mostrarMensagem(texto, tipo) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = texto;
  messageDiv.className = `form-message ${tipo}`;
}

function parseIdades(idadesStr) {
  return idadesStr
    .split(',')
    .map(idade => Number.parseInt(idade.trim(), 10))
    .filter(idade => Number.isInteger(idade) && idade >= 0);
}

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const noCnpj = document.getElementById('noCnpj').checked;
  const cnpj = getDocumentoSemMascara('cnpj');
  const hospital = document.getElementById('hospital').value.trim();
  const semPlano = document.getElementById('semPlano').checked;
  const planoAtual = document.getElementById('plano_atual').value.trim();
  const idades = parseIdades(document.getElementById('idades').value.trim());

  if (!nome) return mostrarMensagem('Nome é obrigatório.', 'error'), false;
  if (!email) return mostrarMensagem('E-mail é obrigatório.', 'error'), false;
  if (!telefone) return mostrarMensagem('Telefone é obrigatório.', 'error'), false;
  if (!noCnpj && cnpj.length !== 14) return mostrarMensagem('Informe um CNPJ válido ou marque que não possui CNPJ.', 'error'), false;
  if (!hospital) return mostrarMensagem('Hospital de preferência é obrigatório.', 'error'), false;
  if (!semPlano && !planoAtual) return mostrarMensagem('Informe o plano atual ou marque que não possui plano.', 'error'), false;
  if (!idades.length) return mostrarMensagem('Informe ao menos uma idade válida.', 'error'), false;

  return true;
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!validarFormulario()) return;

  const form = document.getElementById('cadastroForm');
  const submitBtn = document.getElementById('submitBtn');
  const textoOriginal = submitBtn.textContent;
  const noCnpj = document.getElementById('noCnpj').checked;
  const semPlano = document.getElementById('semPlano').checked;

  const data = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: document.getElementById('telefone').value.trim() || null,
    cnpj: noCnpj ? null : getDocumentoSemMascara('cnpj'),
    noCnpj,
    hospital: document.getElementById('hospital').value.trim(),
    plano_atual: semPlano ? 'não possuo plano' : document.getElementById('plano_atual').value.trim(),
    idades: parseIdades(document.getElementById('idades').value.trim()),
    aceitaEmails: document.getElementById('aceitaEmails').checked
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Cadastrando...';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    let result = {};
    try { result = await response.json(); } catch (_) {}

    if (!response.ok) {
      throw new Error(result.message || `Erro ao enviar solicitação (${response.status}).`);
    }

    mostrarMensagem('Solicitação enviada com sucesso!', 'success');
    form.reset();
    toggleCnpj();
    togglePlano();
  } catch (error) {
    console.error(error);
    mostrarMensagem(error.message || 'Erro de conexão com o servidor.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = textoOriginal;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const cnpj = document.getElementById('cnpj');
  const noCnpj = document.getElementById('noCnpj');
  const semPlano = document.getElementById('semPlano');

  if (!form || !cnpj || !noCnpj || !semPlano) return;

  cnpj.addEventListener('input', () => formatarDocumento(cnpj));
  noCnpj.addEventListener('change', toggleCnpj);
  semPlano.addEventListener('change', togglePlano);
  form.addEventListener('submit', handleSubmit);

  toggleCnpj();
  togglePlano();
});
