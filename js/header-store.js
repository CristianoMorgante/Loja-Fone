let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}

const $headerStore = document.querySelector(".header-store");
const $list = document.querySelector(".list");
const $menu = $headerStore.querySelector(".-menu");

$menu.addEventListener("click", () => $list.classList.toggle("-active"));