const container = document.querySelector('#container');

function createGrid(rows, columns){
    for(let i = 1; i <= rows * columns; i++){
        const square = document.createElement('div');
        square.classList.add('square_div');
        container.appendChild(square);
    }
}

createGrid(16, 16)