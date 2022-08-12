const container = document.getElementById('container');
const gridSize = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16, 16);

const gridItem = document.getElementsByClassName('grid-item');
gridSize.addEventListener('click', () => {
    let x = prompt('Enter grid size: ');
    for (i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = 'white';
    }
    if (x > 100) {
        alert("Grid Size Cannot Be Greater Than 100x100!")
    }
    else {
        makeRows(x, x);
    }
})

let penColor = 'black';

colorPicker.addEventListener('change', () => {
    penColor = colorPicker.value;
})

let mouseIsDown = false;

const changeCellColor = (e) => {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = penColor;
    }
}

container.onclick = (e) => changeCellColor(e);

document.onmousedown = (e) => {
    mouseIsDown = true;
    changeCellColor(e);
}

document.onmouseup = () => (mouseIsDown = false);
container.onmouseover = (e) => mouseIsDown && changeCellColor(e);

container.addEventListener('mousedown', changeCellColor, false);


eraser.addEventListener('click', () => {
    penColor = 'white';
}, false);

const clearCanvas = (e) => {
    for (z = 0; z < gridItem.length; z++) {
        gridItem[z].style.backgroundColor = 'white';
    }
}
clear.addEventListener('click', clearCanvas, false);

const randomColor = Math.floor(Math.random()*16777215).toString(16);

