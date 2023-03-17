
let options = ["rock", "paper", "scissors"];
//let PlayerSelection = prompt("Please enter rock/paper/scissors:");

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(ComputerSelection, PlayerSelection) {
    if (ComputerSelection == PlayerSelection)
        return ("It's a draw");

    if(ComputerSelection == "rock")
    {
        if(PlayerSelection == "paper")
           return ("You won! Paper beats Rock!"); 
        else if(PlayerSelection == "scissors")
           return ("You lose! Rock beats Scissors!");
        
    }
    if(ComputerSelection == "paper")
    {
        if(PlayerSelection == "rock")
            return ("You lose! Paper beats Rock!");
        if(PlayerSelection == "scissors")
            return ("You won! Scissors beats Paper!");
    }

    if(ComputerSelection == "scissors")
    {
        if(PlayerSelection == "rock")
            return ("You won! Rock beats Scissors!");
        else if(PlayerSelection == "paper") 
             return ("You lose! Scissors beats Paper!");
    }
    
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log("The computer chose: "+ computerSelection);
console.log(playRound(computerSelection, playerSelection));