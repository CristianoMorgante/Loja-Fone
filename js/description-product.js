const $heart = window.document.querySelector(".-heart");

$heart.addEventListener('click', handleClick);

function handleClick() {
    // if ($heart.classList.contains('-active')) {
    //     $heart.classList.remove("-active");
    // } else {
    //     $heart.classList.add("-active");
    // }
    $heart.classList.toggle("-active");
};