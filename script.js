console.log("---------------------Hello Let's play rock paper scissors!--------------------------")

let humanScore = 0
let computerScore = 0

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.createElement("div");
resultDiv.textContent="Begin"
resultDiv.style.padding="20px"
document.body.appendChild(resultDiv);


function getComputerChoice() {
    let comp_choice = Math.floor(Math.random()*3)+1
    if (comp_choice===1) {
        // console.log("rock") // for testing early wins 
        return "rock"
    } else if (comp_choice===2) {
        // console.log("paper")// for testing early wins 
        return "paper"
    } else {
        // console.log("scissors")// for testing early wins 
        return "scissors"
    }
}

function playRound(a,b) {
    // a will be computer choice
    a = a.toLowerCase()
    // b will be human choice
    b = b.toLowerCase()
    

    // if a and b are same, match draw
    // match draw
    if (a===b) {
        // alert("Match draw!")
        resultDiv.textContent =  "Match draw!";

    }
    
    // if a is rock, b is paper
    // a loses, b wins, you win
    else if (a==="rock"&&b==="paper"){
        humanScore++;
        resultDiv.textContent =  "You win! Paper beats rock!";
    }    
    // if a is rock, b is scissors
    // a wins, you lose
    else if (a==="rock"&&b=="scissors") {
        computerScore++;
        resultDiv.textContent =  "You lose! Rock beats scissors!";

    }
    // if a is paper, b is rock
    // a wins, you lose
    else if (a==="paper"&&b=="rock") {
        computerScore++;
        resultDiv.textContent =  "You lose! Paper beats rock!";
    }
    // if a is paper, b is scissors
    // b wins, you win
    else if (a==="paper"&&b=="scissors") {
        humanScore++;
        resultDiv.textContent =  "You win! Scissors beats paper!";
    }
    // if a is scissors, b is rock
    // b wins, you win
    else if (a==="scissors"&&b=="rock") {
        humanScore++;
        resultDiv.textContent =  "You win! Rock beats scissors!";
    }
    // if a is scissors, b is paper
    // a wins, you lose
    else if (a==="scissors"&&b=="paper") {
        computerScore++;
        resultDiv.textContent =  "You lose! Scissors beats paper";
    }
}


rockBtn.addEventListener('click', selectRock );
paperBtn.addEventListener('click', selectPaper);
scissorsBtn.addEventListener('click',selectScissors);

function selectRock() {
    playRound("rock", getComputerChoice());
}
    
function selectPaper() {
    playRound("paper", getComputerChoice());
}
function selectScissors() {
    playRound("scissors", getComputerChoice());
}


