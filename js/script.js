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

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const plano_atual = document.getElementById('plano_atual').value.trim();
  const idades = document.getElementById('idades').value.trim();
  const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked').value;
  const cpf = document.getElementById('cpf').value.trim();
  const cnpj = document.getElementById('cnpj').value.trim();

  if (!nome) {
    mostrarMensagem('Nome é obrigatório', 'error');
    return false;
  }
  if (!email) {
    mostrarMensagem('Email é obrigatório', 'error');
    return false;
  }
  if (!plano_atual) {
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
  const data = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: document.getElementById('telefone').value.trim() || null,
    plano_atual: document.getElementById('plano_atual').value.trim(),
    idades: parseIdades(document.getElementById('idades').value.trim()),
    aceitaEmails: document.getElementById('aceitaEmails').checked,
  };

  if (tipoDocumento === 'cpf') {
    data.cpf = document.getElementById('cpf').value.trim();
  } else {
    data.cnpj = document.getElementById('cnpj').value.trim();
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
      mostrarMensagem('Cliente cadastrado com sucesso!', 'success');
      document.getElementById('cadastroForm').reset();
      toggleDocumento();
    } else {
      mostrarMensagem(result.message || 'Erro ao cadastrar cliente', 'error');
    }
  } catch (error) {
    console.error(error);
    mostrarMensagem('Erro de conexão com o servidor', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Cadastrar';
  }
}

document.getElementById('cadastroForm').addEventListener('submit', handleSubmit);
