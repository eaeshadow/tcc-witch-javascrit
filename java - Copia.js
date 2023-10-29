// Obtenha todas as abas e categorias
const tabs = document.querySelectorAll('.menu-tab');
const categories = document.querySelectorAll('.menu-category');

// Adicione um ouvinte de eventos de clique a cada aba
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Remova a classe 'active' de todas as abas e categorias
        tabs.forEach((t) => t.classList.remove('active'));
        categories.forEach((c) => c.classList.remove('active'));

        // Adicione a classe 'active' à aba e à categoria correspondente
        tab.classList.add('active');
        const categoryId = tab.id.replace('tab-', '');
        document.getElementById(`category-${categoryId}`).classList.add('active');
    });
});
