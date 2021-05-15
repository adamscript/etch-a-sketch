function newGrid(){
    pixelInput = prompt("Enter pixel density : (Max 100)")
    
    if(pixelInput > 100){
        alert("Size too high :(");
        return
    }
    else{
        clearGrid();
        createGrid(pixelInput);
    }
}

function createGrid(pixels){
    const container = document.getElementById('container')

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateRows = ("1fr ").repeat(pixels);
    container.style.gridTemplateColumns = ("1fr ").repeat(pixels);

    for(let i = 1; i <= pixels * pixels; i++){
        const square = document.createElement('div');
        square.classList.add('square_div');
        square.addEventListener("mouseover", () => {square.style.backgroundColor = "grey"})
        container.appendChild(square);
    }
    return
}

function clearGrid(){
    let elements = document.getElementsByClassName('square_div');
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "white";
    }
    return
}

createGrid(16);