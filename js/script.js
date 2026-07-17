const API_URL = 'https://api.libertysaude.com.br/api/clientes';

function toggleCnpj() {
  const noCnpj = document.getElementById('noCnpj').checked;
  const cnpjInput = document.getElementById('cnpj');

  cnpjInput.disabled = noCnpj;
  cnpjInput.required = !noCnpj;

  if (noCnpj) {
    cnpjInput.value = '';
  }
}

function togglePlano() {
  const semPlano = document.getElementById('semPlano').checked;
  const planoInput = document.getElementById('plano_atual');

  planoInput.disabled = semPlano;

  if (semPlano) {
    planoInput.value = '';
  }
}

function formatarDocumento(input) {
  const tipo = input.id === 'cpf' ? 'cpf' : 'cnpj';
  let value = input.value.replace(/\D/g, '');

  if (tipo === 'cpf') {
    value = value.slice(0, 11);

    if (value.length <= 3) {
      input.value = value;
      return;
    }
    if (value.length <= 6) {
      input.value = `${value.slice(0, 3)}.${value.slice(3)}`;
      return;
    }
    if (value.length <= 9) {
      input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
      return;
    }

    input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    return;
  }

  value = value.slice(0, 14);

  if (value.length <= 2) {
    input.value = value;
    return;
  }
  if (value.length <= 5) {
    input.value = `${value.slice(0, 2)}.${value.slice(2)}`;
    return;
  }
  if (value.length <= 8) {
    input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
    return;
  }
  if (value.length <= 12) {
    input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;
    return;
  }

  input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12)}`;
}

function getDocumentoSemMascara(inputId) {
  return document.getElementById(inputId).value.replace(/\D/g, '');
}

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const noCnpj = document.getElementById('noCnpj').checked;
  const cnpj = getDocumentoSemMascara('cnpj').trim();
  const hospital = document.getElementById('hospital').value.trim();
  const semPlano = document.getElementById('semPlano').checked;
  const plano_atual = document.getElementById('plano_atual').value.trim();
  const idades = document.getElementById('idades').value.trim();

  if (!nome) {
    mostrarMensagem('Nome é obrigatório', 'error');
    return false;
  }
  if (!email) {
    mostrarMensagem('Email é obrigatório', 'error');
    return false;
  }
  if (!telefone) {
    mostrarMensagem('Telefone é obrigatório', 'error');
    return false;
  }
  if (!noCnpj && !cnpj) {
    mostrarMensagem('CNPJ é obrigatório', 'error');
    return false;
  }
  if (!hospital) {
    mostrarMensagem('Hospital de preferência é obrigatório', 'error');
    return false;
  }
  if (!semPlano && !plano_atual) {
    mostrarMensagem('Plano atual é obrigatório', 'error');
    return false;
  }
  if (!idades) {
    mostrarMensagem('Idades são obrigatórias', 'error');
    return false;
  }

  return true;
}

function mostrarMensagem(texto, tipo) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = texto;
  messageDiv.className = `form-message ${tipo}`;
  messageDiv.style.display = 'block';
}

function parseIdades(idadesStr) {
  return idadesStr.split(',').map(idade => parseInt(idade.trim())).filter(idade => !isNaN(idade));
}

async function handleSubmit(e) {
  e.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Cadastrando...';

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
    aceitaEmails: document.getElementById('aceitaEmails').checked,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      mostrarMensagem('Solicitação enviada com sucesso!', 'success');
      document.getElementById('cadastroForm').reset();
      toggleCnpj();
      togglePlano();
    } else {
      mostrarMensagem(result.message || 'Erro ao enviar solicitação', 'error');
    }
  } catch (error) {
    console.error(error);
    mostrarMensagem('Erro de conexão com o servidor', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Cadastrar';
  }
}

document.getElementById('cnpj').addEventListener('input', function () {
  formatarDocumento(this);
});

document.getElementById('noCnpj').addEventListener('change', toggleCnpj);

document.getElementById('cadastroForm').addEventListener('submit', handleSubmit);
