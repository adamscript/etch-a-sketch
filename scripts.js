rowsInput = prompt("Enter number of rows : (Max 100)")
columnsInput = prompt("Enter number of columns : (Max 100)")

function createGrid(rows, columns){
    if(rows > 100 || columns > 100)
    {
        alert("Number too high :(")
        return
    }

    container.style.gridTemplateColumns = ("auto ").repeat(columns)
    container.style.gridTemplateRows = ("auto ").repeat(rows)

    for(let i = 1; i <= rows * columns; i++){
        const square = document.createElement('div');
        square.classList.add('square_div');
        square.addEventListener("mouseover", () => {square.style.backgroundColor = "gold"})
        container.appendChild(square);
    }
}

createGrid(rowsInput, columnsInput)

function clearGrid(){
    let elements = document.getElementsByClassName('square_div');
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "brown";
    }
    return
}