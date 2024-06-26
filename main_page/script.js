'use strict'
let btn = document.getElementById('music');
let img = document.getElementById('image');
let OnOff = 0;
let audio = document.getElementById('audio');
btn.onclick = (event) =>{
    if (OnOff){
        OnOff = 0;
        btn.style.borderColor = "#ff0089"
        img.src = "../images/Volx.png";
        audio.pause();
    }
    else{
        OnOff = 1;
        btn.style.borderColor = "rgb(0, 255, 255)";
        img.src = "../images/Vol.png";
        audio.play();
    }
}
let game_snake = document.getElementById("the_snake");
game_snake.onclick = (event) => {
    window.location.href = '../Snake/index.html';
}
let game_tetris = document.getElementById("the_tetris");
game_tetris.onclick = (event) => {
    window.location.href = '../Tetris/index.html';
}