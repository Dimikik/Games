'use strict'
let ground = document.getElementById('ground');
let audio = document.getElementById('audio');
for (let y = 1; y <= 20; y++){
    for(let x = 1; x <= 20; x++){
        let cell = document.createElement('div');
        cell.id = String(x) + ' ' + String(y);
        cell.style.height = '30px';
        cell.style.width = '30px';
        cell.style.border = 'solid 2px rgba(0, 255, 255, 0.15)';
        ground.appendChild(cell);
    }
}

function render(snake, apple){
    for (let y = 1; y <= 20; y++){
        for(let x = 1; x <= 20; x++){
            if (snake.indexOf(String(x) + ' ' + String(y)) != -1){
                let cell_snake = document.getElementById(String(x) + ' ' + String(y));
                cell_snake.style.backgroundColor = 'red';
            }
            else if (apple == (String(x) + ' ' + String(y))){
                let cell_apple = document.getElementById(String(x) + ' ' + String(y));
                cell_apple.style.backgroundColor = 'green';
            }
            else{
                let cell_empty = document.getElementById(String(x) + ' ' + String(y));
                cell_empty.style.backgroundColor = 'black';
            }
        }
    }
}

function Game(snake, status, id){
    let x_first = Number(snake[0].split(' ')[0]);
    let y_first = Number(snake[0].split(' ')[1]);
    if (apple != (x_first + ' ' + y_first))snake.pop();
    else{
        while(snake.indexOf(apple) != -1){
            apple = Math.floor(Math.random() * (20 - 1) + 1) + ' ' + Math.floor(Math.random() * (20 - 1) + 1);
        }
    }
    if (direction == 'down'){
        snake.unshift(x_first + ' ' + (y_first + 1));
        direction_status = 0;
    }
    else if (direction == 'up'){
        snake.unshift(x_first + ' ' + (y_first - 1));
        direction_status = 0;
    }
    else if (direction == 'right'){
        snake.unshift((x_first + 1) + ' ' + y_first);
        direction_status = 1;
    }
    else if (direction == 'left'){
        snake.unshift((x_first - 1) + ' ' + y_first);
        direction_status = 1;
    }
    x_first = Number(snake[0].split(' ')[0]);
    y_first = Number(snake[0].split(' ')[1]);
    if (x_first < 1 || x_first > 20 || y_first < 1 || y_first > 20 ) status = 0;
    if (status == 0) {
        clearInterval(id);
        game_begin_btn.style.display = 'block';
        audio.pause();
        game_begin_btn.onclick = (event) =>{
            snake = ['1 3', '1 2', '1 1'];
            direction = 'down';
            direction_status = 0;
            id = setInterval(()=> {Game(snake, 1, id, apple)},500);
            game_begin_btn.style.display = 'none';
            render(snake, apple);
            audio.play();
        }
    }
    render(snake, apple);
}

let snake = ['1 3', '1 2', '1 1'];
let apple = '1 1';
while(snake.indexOf(apple) != -1){
    apple = Math.floor(Math.random() * (20 - 1) + 1) + ' ' + Math.floor(Math.random() * (20 - 1) + 1);
}
render(snake, apple);

let direction = 'down';
let direction_status = 0;
let game_begin_btn = document.getElementById('open_window');
game_begin_btn.onclick = (event) =>{
    let id = setInterval(()=> {Game(snake, 1, id, apple)},500);
    game_begin_btn.style.display = 'none';
    audio.play();
}
document.addEventListener("keydown", function(event){
    if (event.code == "ArrowRight" && direction_status == 0) {
        direction = 'right';
    }
    else if (event.code == "ArrowLeft" && direction_status == 0) {
        direction = 'left';
    }
    else if (event.code == "ArrowUp" && direction_status == 1) {
        direction = 'up';
    }
    else if (event.code == "ArrowDown" && direction_status == 1) {
        direction = 'down';
    }
})