document.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("chatWidget");
    const closeBtn = document.getElementById("chatCloseBtn");
    const ctaBtn = document.getElementById("chatCtaBtn");
    const waFloatBtn = document.getElementById("waFloatBtn");

    if (!widget) return;

    let dismissed = false;

    const openWidget = () => {
        if (!dismissed) {
            widget.classList.add("is-open");
        }
    };

    // Abre automaticamente após 3,5 segundos
    setTimeout(openWidget, 3500);

    // Fecha o widget
    closeBtn?.addEventListener("click", () => {
        widget.classList.remove("is-open");
        dismissed = true;
    });

    // Reabre ao clicar no botão flutuante
    waFloatBtn?.addEventListener("click", (e) => {
        if (!widget.classList.contains("is-open")) {
            e.preventDefault();
            dismissed = false;
            widget.classList.add("is-open");
        }
    });

    // Botão do widget
    ctaBtn?.addEventListener("click", () => {
        const mensagem =
            "Olá! Vim pelo site da Liberty Saúde e gostaria de uma cotação.";

        window.open(
            `https://wa.me/5511989152642?text=${encodeURIComponent(mensagem)}`,
            "_blank"
        );
    });
});