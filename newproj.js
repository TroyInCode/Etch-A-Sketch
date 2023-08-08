//Container for Div Squares//
const container = document.getElementById("container");
let title = document.getElementById("first");
buttoncontain = document.getElementById("btncontainer");

//Creates 16x16 Div Grid Sqaures//
function addSquares(squareNum) {
    for (i = 0; i < squareNum; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-item");
        container.appendChild(square);

    }
}

addSquares(256);

//Find All Elements With grid-item Class//
const allSquares = document.querySelectorAll(".grid-item");

//Event Listeners to Change Colors//
allSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    });

square.addEventListener("mouseout", () => {
    square.style.backgroundColor = " ";
});

});

//Add Reset Button to Screen//
let newbutton = document.createElement("button");
newbutton.classList.add("resetbtn");
newbutton.textContent = "Reset";
buttoncontain.appendChild(newbutton)

//Event Listener for Reset Button//
newbutton.addEventListener("click", () => {
    allSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    }
)});



