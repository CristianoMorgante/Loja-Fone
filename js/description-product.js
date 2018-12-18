const $heart = window.document.querySelector(".-heart");
const $addcar = window.document.querySelector(".-second");


$heart.addEventListener('click', handleClick);
$addcar.addEventListener('click', addCar);


function handleClick(){
    console.log('Coração');    
}

function addCar(){    
    alert("Produto adicionado ao carrinho com sucesso");
}

