console.log("Hello Let's play rock paper scissors!")

let humanScore = 0
let computerScore = 0



function getComputerChoice() {
    let comp_choice = Math.floor(Math.random()*3)+1
    if (comp_choice===1) {
        return "rock"
    } else if (comp_choice===2) {
        return "paper"
    } else {
        return "scissors"
    }
}



function getHumanChoice() {
    let human_choice = prompt("Rock, paper, or scissors?: ")
    return(human_choice)
}

function playRound(a,b) {
    // a will be computer choice
    a = a.toLowerCase()
    console.log(a)
    // b will be human choice
    b = b.toLowerCase()
    console.log(b)
    

    // if a is rock, b is rock
    // match draw
    if (a===b) {
        console.log("Match draw!")
    }
    
    // if a is rock, b is paper
    // a loses, b wins, you win
    else if (a==="rock"&&b==="paper"){
        humanScore++;
        console.log("You win! Paper beats rock!")
    }    
    // if a is rock, b is scissors
    // a wins, you lose
    else if (a==="rock"&&b=="scissors") {
        computerScore++;
        console.log("You lose! Rock beats scissors!")

    }
    // if a is paper, b is rock
    // a wins, you lose
    else if (a==="paper"&&b=="rock") {
        computerScore++;
        console.log("You lose! Paper beats rock!")
    }
    // if a is paper, b is scissors
    // b wins, you win
    else if (a==="paper"&&b=="scissors") {
        humanScore++;
        console.log("You win! Scissors beats paper!")
    }
    // if a is scissors, b is rock
    // b wins, you win
    else if (a==="scissors"&&b=="rock") {
        humanScore++;
        console.log("You win! Rock beats scissors!")
    }
    // if a is scissors, b is paper
    // a wins, you lose
    else if (a==="scissors"&&b=="paper") {
        computerScore++;
        console.log("You lose! Scissors beats paper")
    }
}

playRound(getComputerChoice(),getHumanChoice())