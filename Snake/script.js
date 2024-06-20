'use strict'
let ground = document.getElementById('ground');
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
function render(snake){
    for (let y = 1; y <= 20; y++){
        for(let x = 1; x <= 20; x++){
            if (snake.indexOf(String(x) + ' ' + String(y)) != -1){
                let cell_snake = document.getElementById(String(x) + ' ' + String(y));
                cell_snake.style.backgroundColor = 'red';
            }
            else{
                let cell_empty = document.getElementById(String(x) + ' ' + String(y));
                cell_empty.style.backgroundColor = 'black';
            }
        }
    }
}
function Game(snake, status){
    while (status){
        if (status == 0) return 0;
        snake.pop[-1];
        if (snake.length == 0) status = 0;
    }
}
let snake = ['1 3', '1 2', '1 1'];
render(snake);
let status = 1;
Game(snake, status);