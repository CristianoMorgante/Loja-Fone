const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const LastPosition = $stars.length - 1;

$heart.addEventListener('click', handleClick);

$stars.forEach(function($star, key){
    if(key == 0) {
        $star.addEventListener('click', firstStar);
    }    
    if(key > 0 && key < LastPosition){
        $star.addEventListener('click', function() {
            middleStars(key);
        });        
    }
    if(key == LastPosition){
        $star.addEventListener('click', lastStar);
    }
});


//FUNCTIONS

function handleClick(){
    $heart.classList.toggle('-active');
}

function firstStar() {
    $stars.forEach(function($star){
        $star.classList.remove('-active');
    });
    this.classList.add('-active');  
}

function middleStars(index){
    $stars.forEach(function($star, key){
        $star.classList.remove('-active');
        if(key <= index){
            $star.classList.add('-active');
        }
    });
}

function lastStar() {
    $stars.forEach(function ($star){
        $star.classList.add('-active');
    });
}



