const $search = document.querySelectorAll(".searchIcons");
const $input = document.querySelector("[type=search]");

$search.forEach(function($search, key){
    if(key == 0){
        $search.addEventListener('click', lupa);
    }

    if(key == 1){
        $search.addEventListener('click', close);
    }
})

function lupa() {
    $search.forEach(function($search){
        $search.classList.add('-active');
    });
   $input.classList.add('-active');
}

function close() {
    $search.forEach(function($search){
        $search.classList.remove('-active');
    });
    $input.classList.remove('-active');
}