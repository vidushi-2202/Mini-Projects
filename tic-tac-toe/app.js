let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () =>{ 
        if(turnO){ //PlayerO
            box.innerText = "O";
            turnO = false;
        }else{ //PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //to lock the button when it get clicked
        checkWinner();
    });
});

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes(); 
};
const checkWinner = () => {
    for(let pattern of winPatterns){
    //storing each position value in a variable; for value at index we do, boxes[patterns[position]].innerText
    let pos1Val = boxes[pattern[0]].innerText; 
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
      }
    }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);