"use strict";


// ---------------------------------------------------------------- variable ----------------------------------------------------------------
const togle_menu = $('#togle_menu');
const menu_btn = $('#menu_btn');
const close_btn = $('#close_btn');
const swiper = $('#swiper');
const turn_left = $('#left-turn');
const turn_right = $('#right-turn');
let sum = 0;
let son = 0;




// ---------------------------------------------------------------- events ----------------------------------------------------------------


menu_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

close_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

turn_right.addEventListener('click', () => {
   turn_rightt();
});

turn_left.addEventListener('click', () => {
    if(sum == 0) {
        sum = 5;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }else if(sum != 0){
        sum -= 1;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }
});

// ---------------------------------------------------------------- functions ----------------------------------------------------------------

function turn_rightt(){
    if(son != 5) {
        son +=1;
        swiper.style.cssText = `transform: translateX(-${son * 377}px);`
    }else if(son == 5){
        son = 0;
        swiper.style.cssText = `transform: translateX(0px);`
    }
}

setInterval(() => {
    turn_rightt();
}, 3000)