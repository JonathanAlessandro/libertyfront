const API_URL = 'http://twlm4h21plszdybor5mfvyif.200.234.212.102.sslip.io/api/clientes';

function toggleDocumento() {
  const tipo = document.querySelector('input[name="tipoDocumento"]:checked').value;
  const cpfGroup = document.getElementById('cpfGroup');
  const cnpjGroup = document.getElementById('cnpjGroup');
  const cpfInput = document.getElementById('cpf');
  const cnpjInput = document.getElementById('cnpj');

  if (tipo === 'cpf') {
    cpfGroup.style.display = 'block';
    cnpjGroup.style.display = 'none';
    cnpjInput.value = '';
    cpfInput.required = true;
    cnpjInput.required = false;
  } else {
    cpfGroup.style.display = 'none';
    cnpjGroup.style.display = 'block';
    cpfInput.value = '';
    cpfInput.required = false;
    cnpjInput.required = true;
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
  const semPlano = document.getElementById('semPlano').checked;
  const plano_atual = document.getElementById('plano_atual').value.trim();
  const idades = document.getElementById('idades').value.trim();
  const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked').value;
  const cpf = getDocumentoSemMascara('cpf').trim();
  const cnpj = getDocumentoSemMascara('cnpj').trim();

  if (!nome) {
    mostrarMensagem('Nome é obrigatório', 'error');
    return false;
  }
  if (!email) {
    mostrarMensagem('Email é obrigatório', 'error');
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
  if (tipoDocumento === 'cpf' && !cpf) {
    mostrarMensagem('CPF é obrigatório', 'error');
    return false;
  }
  if (tipoDocumento === 'cnpj' && !cnpj) {
    mostrarMensagem('CNPJ é obrigatório', 'error');
    return false;
  }

  return true;
}

function mostrarMensagem(texto, tipo) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = texto;
  messageDiv.className = `message ${tipo}`;
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

  const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked').value;
  const semPlano = document.getElementById('semPlano').checked;
  const data = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: document.getElementById('telefone').value.trim() || null,
    plano_atual: semPlano ? 'não possuo plano' : document.getElementById('plano_atual').value.trim(),
    idades: parseIdades(document.getElementById('idades').value.trim()),
    aceitaEmails: document.getElementById('aceitaEmails').checked,
  };

  if (tipoDocumento === 'cpf') {
    data.cpf = getDocumentoSemMascara('cpf');
  } else {
    data.cnpj = getDocumentoSemMascara('cnpj');
  }

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
      toggleDocumento();
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

document.getElementById('cpf').addEventListener('input', function () {
  formatarDocumento(this);
});

document.getElementById('cnpj').addEventListener('input', function () {
  formatarDocumento(this);
});

document.getElementById('cadastroForm').addEventListener('submit', handleSubmit);
