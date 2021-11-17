container = document.querySelector(".container");

function createGrid(dimension) {
    containerWidth = 450;
    gridBoxWidth = Math.floor(containerWidth/dimension*100)/100;

    for (i = 0; i < dimension**2; i++) {
        gridBox = document.createElement("div");
        gridBox.className = "box"
        gridBox.style.width = `${gridBoxWidth}px`
        gridBox.style.height = `${gridBoxWidth}px`
        container.appendChild(gridBox);
    }
}

function addListeners() {
    //add event listeners
    boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', e => {
            box.className = "box coloured";
        })
    })
}

function reset() {
    boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.parentNode.removeChild(box);
    })
    while (true) {
        dimension = prompt("Enter dimensions of new grid.");
        if (dimension < 51) {
            break;
        }
        alert("Too large")
    }
    
    createGrid(dimension);
    addListeners();
}

//initial 16x16 grid
createGrid(16);
addListeners();
