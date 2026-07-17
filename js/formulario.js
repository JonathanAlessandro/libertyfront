// Gera formulário de cotação dinamicamente
const API_URL = 'https://api.libertysaude.com.br/api/clientes';

function createQuotationForm(containerId, produtoNome = '') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} não encontrado`);
    return;
  }

  const formHTML = `
    <div style="background: white; border: 1px solid #e5edf2; border-radius: 24px; padding: 30px; box-shadow: 0 8px 28px rgba(20,53,88,.06);">
      <form class="quotation-form">
        <input type="hidden" name="produto" value="${produtoNome}">
        
        <div class="form-group">
          <label for="quota-nome">Nome:</label>
          <input type="text" id="quota-nome" name="nome" required>
        </div>

        <div class="form-group">
          <label for="quota-email">Email:</label>
          <input type="email" id="quota-email" name="email" required>
        </div>

        <div class="form-group">
          <label for="quota-telefone">Telefone:</label>
          <input type="tel" id="quota-telefone" name="telefone" required>
        </div>

        <div class="form-group">
          <label for="quota-cnpj">CNPJ:</label>
          <input type="text" id="quota-cnpj" name="cnpj" placeholder="00.000.000/0000-00" required>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" name="noCnpj" class="toggle-cnpj">
            Não possuo CNPJ
          </label>
        </div>

        <div class="form-group">
          <label for="quota-hospital">Hospital de preferência:</label>
          <input type="text" id="quota-hospital" name="hospital" required>
        </div>

        <div class="form-group">
          <label for="quota-plano">Plano Atual:</label>
          <input type="text" id="quota-plano" name="plano_atual" required>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" name="semPlano" class="toggle-plano">
            Não possuo plano
          </label>
        </div>

        <div class="form-group">
          <label for="quota-idades">Idades dos Participantes (separadas por vírgula):</label>
          <input type="text" id="quota-idades" name="idades" placeholder="10, 20, 30" required>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" name="aceitaEmails" checked>
            Aceita receber e-mails
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
        <p class="form-message" style="display: none;"></p>
      </form>
    </div>
  `;

  container.innerHTML = formHTML;
  const form = container.querySelector('.quotation-form');
  setupFormHandlers(form);
}

function setupFormHandlers(form) {
  const toggleCnpjCheckbox = form.querySelector('.toggle-cnpj');
  const togglePlanoCheckbox = form.querySelector('.toggle-plano');
  const cnpjInput = form.querySelector('input[name="cnpj"]');
  const planoInput = form.querySelector('input[name="plano_atual"]');

  function toggleCnpj() {
    const checked = toggleCnpjCheckbox.checked;
    cnpjInput.disabled = checked;
    cnpjInput.required = !checked;
    if (checked) cnpjInput.value = '';
  }

  function togglePlano() {
    const checked = togglePlanoCheckbox.checked;
    planoInput.disabled = checked;
    if (checked) planoInput.value = '';
  }

  toggleCnpjCheckbox.addEventListener('change', toggleCnpj);
  togglePlanoCheckbox.addEventListener('change', togglePlano);

  // Formatar CNPJ
  cnpjInput.addEventListener('input', function () {
    formatarDocumento(this, 'cnpj');
  });

  // Submissão do formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleFormSubmit(form);
  });
}

function formatarDocumento(input, tipo = 'cnpj') {
  let value = input.value.replace(/\D/g, '');

  if (tipo === 'cnpj') {
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
}

function getDocumentoSemMascara(input) {
  return input.value.replace(/\D/g, '');
}

async function handleFormSubmit(form) {
  const noCnpj = form.querySelector('input[name="noCnpj"]').checked;
  const semPlano = form.querySelector('input[name="semPlano"]').checked;
  const cnpjInput = form.querySelector('input[name="cnpj"]');
  const idadesInput = form.querySelector('input[name="idades"]');
  const messageEl = form.querySelector('.form-message');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Validação básica
  if (!form.checkValidity()) {
    showMessage(messageEl, 'Preencha todos os campos obrigatórios', 'error');
    return;
  }

  const cnpj = getDocumentoSemMascara(cnpjInput);
  if (!noCnpj && !cnpj) {
    showMessage(messageEl, 'CNPJ inválido', 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  try {
    const idades = idadesInput.value
      .split(',')
      .map(i => parseInt(i.trim()))
      .filter(i => !isNaN(i));

    const data = {
      nome: form.querySelector('input[name="nome"]').value.trim(),
      email: form.querySelector('input[name="email"]').value.trim(),
      telefone: form.querySelector('input[name="telefone"]').value.trim(),
      cnpj: noCnpj ? null : cnpj,
      noCnpj: noCnpj,
      hospital: form.querySelector('input[name="hospital"]').value.trim(),
      plano_atual: semPlano ? 'não possuo plano' : form.querySelector('input[name="plano_atual"]').value.trim(),
      idades: idades,
      aceitaEmails: form.querySelector('input[name="aceitaEmails"]').checked,
      produto: form.querySelector('input[name="produto"]').value,
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      showMessage(messageEl, 'Solicitação enviada com sucesso!', 'success');
      form.reset();
    } else {
      showMessage(messageEl, result.message || 'Erro ao enviar solicitação', 'error');
    }
  } catch (error) {
    console.error(error);
    showMessage(messageEl, 'Erro de conexão com o servidor', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  }
}

function showMessage(messageEl, text, type) {
  messageEl.textContent = text;
  messageEl.className = `form-message ${type}`;
  messageEl.style.display = 'block';
}
