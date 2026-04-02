let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw, Play Again";
    msg.style.backgroundColor = "black";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = `User Win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        console.log("you lose");
        msg.innerText = `User lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log ("user choice is ", userChoice);
    //computer generated choice
    const compChoice = genComputerChoice();
    console.log("comp choice is ", compChoice)
 
    let userWin = true;
    if(userChoice === compChoice){
        //draw condition
        drawGame();
        return;
    }else{
            
        if(
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ){
            userWin = true;
            userScore++;
            userScorePara.innerText = userScore;
        } else{userWin = false;
            compScore++;
            compScorePara.innerText = compScore;

        }
    }
        showWinner(userWin, userChoice, compChoice);
    }

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});