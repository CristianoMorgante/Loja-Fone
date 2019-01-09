let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}

const $menu = document.querySelector(".menu");
$menu.addEventListener("click", () => $menu.classList.toggle("-open"));
