function newGrid(){
    rowsInput = prompt("Enter number of rows : (Max 100)")
    columnsInput = prompt("Enter number of columns : (Max 100)")
    
    if(rowsInput > 100 || columnsInput > 100){
        alert("Number too high :(");
        return
    }
    else{
        clearGrid();
        createGrid(rowsInput, columnsInput);
    }
}

function createGrid(rows, columns){
    const container = document.getElementById('container')

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateRows = ("auto ").repeat(rows);
    container.style.gridTemplateColumns = ("auto ").repeat(columns);

    for(let i = 1; i <= rows * columns; i++){
        const square = document.createElement('div');
        square.classList.add('square_div');
        square.addEventListener("mouseover", () => {square.style.backgroundColor = "gold"})
        container.appendChild(square);
    }
    return
}

function clearGrid(){
    let elements = document.getElementsByClassName('square_div');
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "brown";
    }
    return
}

createGrid(16, 16);