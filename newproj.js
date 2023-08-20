//Container for Div Squares//
const container = document.getElementById("container");
let title = document.getElementById("first");
buttoncontain = document.getElementById("btncontainer");



//Creates 16x16 Div Grid Sqaures//
function addSquares(squareNum) {
    const squareSize = 500/squareNum; //Calculates size of each square
    const totalSquares = squareNum*squareNum;
    for (i = 0; i < totalSquares; i++) {
        Math.floor(squareSize);
        let square = document.createElement("div");
        square.classList.add("grid-item");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
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
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    block.style.backgroundColor = "#" + randomColor;
    });

block.addEventListener("mouseout", () => {
    block.style.backgroundColor = " ";
});

});

//Event Listener for Reset Button//
newbutton.addEventListener("click", () => {
    allSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

}

addSquares(16);
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
    addSquares(enterNumber);
    changeSquareColor();
    
});