function createGrid(rows, columns){
    container.style.gridTemplateColumns = ("auto ").repeat(columns)
    container.style.gridTemplateRows = ("auto ").repeat(rows)

    for(let i = 1; i <= rows * columns; i++){
        const square = document.createElement('div');
        square.classList.add('square_div');
        container.appendChild(square);
    }
}

createGrid(16, 16)