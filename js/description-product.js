const $heart = window.document.querySelector(".-heart");

$heart.addEventListener('click', handleClick);

function handleClick() {
    console.log('Coração');
};