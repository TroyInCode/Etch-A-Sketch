//Create 16x16 Div Grid Square//
const container = document.getElementById("container");

function addSquares(squareNum) {
    for (i = 0; i < squareNum; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-item");
        container.appendChild(square);

    }
}

addSquares(256);
