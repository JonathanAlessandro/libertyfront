async function carregarComponente(containerId, arquivo) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container #${containerId} não encontrado.`);
    return;
  }

  try {
    const response = await fetch(arquivo);

    if (!response.ok) {
      throw new Error(
        `Erro ao carregar ${arquivo}: ${response.status} ${response.statusText}`
      );
    }

    container.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    carregarComponente('navbar-container', '/assets/components/navbar.html'),
    carregarComponente('footer-container', '/assets/components/footer.html'),
  ]);
});
