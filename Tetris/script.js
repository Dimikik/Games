'use strict'
let ground = document.getElementById('ground');
for (let y = 1; y <= 20; y++){
    for(let x = 1; x <= 20; x++){
        let cell = document.createElement('div');
        cell.id = String(x) + ' ' + String(y);
        cell.style.height = '30px';
        cell.style.width = '30px';
        cell.style.border = 'solid 2px rgba(217, 255, 0, 0.3)';
        ground.appendChild(cell);
    }
}
let figures = [['1 1', '1 2', '2 1', '2 2'], ['1 1', '1 2', '1 3', '1 4'], ['1 2', '2 2', '2 1', '3 1'], ['1 1', '2 1', '2 2', '3 2'], ['1 1', '2 1', '2 2', '2 3'], ['1 1', '1 2', '1 3', '2 1']];
function render(){
    for (let y = 1; y <= cells; y++){
        for(let x = 1; x <= cells; x++){
            if (filled_cells[0].indexOf(String(x) + ' ' + String(y)) != -1 || filled_cells[1].indexOf(String(x) + ' ' + String(y)) != -1){
                let cell = document.getElementById(String(x) + ' ' + String(y));
                cell.style.backgroundColor = 'yellow';
            }
            else{
                let cell_empty = document.getElementById(String(x) + ' ' + String(y));
                cell_empty.style.backgroundColor = 'black';
            }
        }
    }
}
function Game(){
    if (figure == 0) figure = figures[Math.floor(Math.random()*figures.length)];
    filled_cells[1] = figure;
    for(let i = 0; i < figure.length; i++){
        x2 = Number(figure[i].split(' ')[0]);
        y2 = Number(figure[i].split(' ')[1]) + 1;
        if (y_max < y2) y_max = y2;
        console.log(filled_cells[0].indexOf(x2 + ' ' + (y2 + 1)) != -1)
        if (filled_cells[0].indexOf(x2 + ' ' + (y2 + 1)) != -1) y_max = cells;
        figure[i] = (x2 + ' ' + y2);
    }
    if (y_max == cells){
        filled_cells[0].push(...figure);
        y_max = 0;
        figure = 0;
    }
    render()
}
let filled_cells = [[],[]];
let cells = 20;
let figure = 0;
let x2 = ' ';
let y2 = ' ';
let y_max = 0;
let id = setInterval(()=> {Game()},500);
