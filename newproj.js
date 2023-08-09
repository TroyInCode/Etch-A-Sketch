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



//Add Reset Button to Screen//
let newbutton = document.createElement("button");
newbutton.classList.add("resetbtn");
newbutton.textContent = "Reset";
buttoncontain.appendChild(newbutton)

//Event Listeners to Change Colors//
function changeSquareColor () {
const allSquares = document.querySelectorAll(".grid-item");
allSquares.forEach((block) => {
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "blue";
    });

block.addEventListener("mouseout", () => {
    block.style.backgroundColor = " ";
});

});

//Event Listener for Reset Button//
newbutton.addEventListener("click", () => {
    allSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    }
)});

}

addSquares(256);
changeSquareColor();




//Choose Number of Squares//
let numberButton = document.getElementById("sqrnumber");
numberButton.addEventListener("click", () => {
    let enterNumber;
    while (isNaN(enterNumber) || enterNumber > 100 || enterNumber < 0) {
        enterNumber = Number(window.prompt("Choose A Number between 0 -100"));
    }

    //Clear Squares
    container.innerHTML = "";
    addSquares(enterNumber * enterNumber);
    container.style.gridTemplateColumns = `repeat(${enterNumber}, auto);`;
    container.style.gridTemplateRows = `repeat(${enterNumber}, auto);`;
    changeSquareColor();
    
})