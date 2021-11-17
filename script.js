container = document.querySelector(".container");

function createGrid(dimension) {
    containerWidth = 450;
    gridBoxWidth = Math.floor(containerWidth/dimension);

    for (i = 0; i < dimension**2; i++) {
        gridBox = document.createElement("div");
        gridBox.style.width = `${gridBoxWidth}px`
        gridBox.style.height = `${gridBoxWidth}px`
        container.appendChild(gridBox);
    }
}

//initial 16x16 grid
createGrid(16);