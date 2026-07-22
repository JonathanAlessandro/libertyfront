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

    function showErrorMessage() {
        message.className = "form-message is-visible is-error";

        message.innerHTML = `
            <div class="form-message-icon" aria-hidden="true">
                <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </div>

            <div class="form-message-text">
                <strong>Não foi possível enviar.</strong>
                <span>Verifique os dados e tente novamente.</span>
            </div>
        `;
    }

    form.addEventListener("submit", async event => {
        event.preventDefault();

        message.className = "form-message";
        message.innerHTML = "";

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const originalButtonText = submitBtn.textContent;

        submitBtn.classList.add("is-loading");
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";

        try {
            /*
            const response = await fetch("/seu-endpoint", {
                method: "POST",
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error("Falha no envio");
            }
            */

            // Simulação temporária de envio
            await new Promise(resolve => setTimeout(resolve, 1400));

            showSuccessMessage();
            form.reset();

            const aceitaEmails = document.getElementById("aceitaEmails");

            if (aceitaEmails) {
                aceitaEmails.checked = true;
            }

            message.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } catch (error) {
            console.error("Erro no envio:", error);
            showErrorMessage();
        } finally {
            submitBtn.classList.remove("is-loading");
            submitBtn.disabled = false;
            submitBtn.textContent = originalButtonText;
        }
    });
});