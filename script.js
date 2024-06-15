console.log("Hello Let's play rock paper scissors!")

let humanScore = 0
let computerScore = 0



function getComputerChoice() {
    let comp_choice = Math.floor(Math.random()*3)+1
    if (comp_choice===1) {
        console.log("rock")
        return "rock"
    } else if (comp_choice===2) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
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

function earlyWinCheck () {
    if (computerScore===3){
        console.log("You lost the game")
    } else if (humanScore===3){
        console.log("You won the game")
    }
}
function playGame() {
    console.log("Round-1: Fight!")
    playRound(getComputerChoice(),getHumanChoice())
    console.log("Score so far: Computer: " + computerScore+ " You: " + humanScore)

    console.log("Round-2: Fight!")
    playRound(getComputerChoice(),getHumanChoice())
    console.log("Score so far: Computer: " + computerScore+ " You: " + humanScore)

    console.log("Round-3: Fight!")
    playRound(getComputerChoice(),getHumanChoice())
    console.log("Score so far: Computer: " + computerScore+ " You: " + humanScore)
    earlyWinCheck() // a chance that game might be finished by round - 3

    console.log("Round-4: Fight!")
    playRound(getComputerChoice(),getHumanChoice())
    console.log("Score so far: Computer: " + computerScore+ " You: " + humanScore)
    earlyWinCheck() // a chance that game might be finished by round - 4
    
    console.log("Round-5: Fight!")
    playRound(getComputerChoice(),getHumanChoice())
    console.log("Score so far: Computer: " + computerScore+ " You: " + humanScore)

    if(humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("You lost the game")
    } else {
        console.log("Game draw!")
    }
}

playGame()