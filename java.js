// Obtenha todas as abas e categorias
const tabs = document.querySelectorAll('.menu-tab');
const categories = document.querySelectorAll('.menu-category');
const itens = document.querySelectorAll('.add-to-card');
const itensCarrinho = document.querySelector('.item-carrinho');
const totalSpan = document.getElementById('total');
let total = 0;

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

itens.forEach(item => {
    const botaoAdicionar = item.querySelector('.adicionar');
    const nomeItem = item.querySelector('h3').textContent;
    const precoItem = parseFloat(item.querySelector('p').textContent.replace('R$', ''));

    botaoAdicionar.addEventListener('click', () => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nomeItem} - R$ ${precoItem.toFixed(2)}`;
        itensCarrinho.appendChild(novoItem);

        total += precoItem;
        totalSpan.textContent = total.toFixed(2);
    });
});