const $second = window.document.querySelector(".-second");

$second.addEventListener('click', handleclick);

function handleclick() {
    const $carrinho = document.querySelector('.-last');
    
    $carrinho.textContent = "Novo valor";
};