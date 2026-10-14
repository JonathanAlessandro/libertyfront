document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const submitBtn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    if (!form || !submitBtn || !message) {
        return;
    }

    function showSuccessMessage() {
        message.className = "form-message is-visible";

        message.innerHTML = `
            <div class="form-message-icon" aria-hidden="true">
                <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </div>

            <div class="form-message-text">
                <strong>Cadastro enviado com sucesso!</strong>
                <span>Recebemos seus dados. Um especialista entrará em contato em breve.</span>
            </div>
        `;
    }

    form.addEventListener("lead:submission-success", () => {
        showSuccessMessage();
        message.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
});
