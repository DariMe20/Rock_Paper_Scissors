
let options = ["rock", "paper", "scissors"];

//function to generate random option between Rock, Paper and Scissors
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


function playRound(ComputerSelection, PlayerSelection) {
    if (ComputerSelection == PlayerSelection)
        return ("It's a draw");

    if (ComputerSelection == "rock") {
        if (PlayerSelection == "paper")
            return ("You won! Paper beats Rock!");
        else if (PlayerSelection == "scissors")
            return ("You lose! Rock beats Scissors!");

    }
    if (ComputerSelection == "paper") {
        if (PlayerSelection == "rock")
            return ("You lose! Paper beats Rock!");
        if (PlayerSelection == "scissors")
            return ("You won! Scissors beats Paper!");
    }

    if (ComputerSelection == "scissors") {
        if (PlayerSelection == "rock")
            return ("You won! Rock beats Scissors!");
        else if (PlayerSelection == "paper")
            return ("You lose! Scissors beats Paper!");
    }

}

function game(computerSelection) {
    let PlayerPoints = 0;
    let ComputerPoints = 0;

    for (let i = 0; i < 5; i++) {
        //Read player option
        let player = prompt("Please enter rock/paper/scissors:"); //This entering will be case sensitive
        let playerSelection = player.toLowerCase(); //this makes the entering case insensitive by lowecasing the input 

        //Generate computer option
        const computerSelection = getComputerChoice();

        //play round
        console.log(playRound(computerSelection, playerSelection));

        //calculate points
        let text = playRound(computerSelection, playerSelection);
        let result = text.slice(0, 9);
        if (result == "You won! ")
            PlayerPoints++;
        else if(result == "You lose!")
            ComputerPoints++;

        //print current result
        console.log("Round: " + (i+1) + " Now the score is: Player - " + PlayerPoints + " Computer - " + ComputerPoints);
    }
    //print final result
    if (PlayerPoints > ComputerPoints)
        return "Player wins";
    else if (PlayerPoints < ComputerPoints)
        return "Computer wins"
    else if (PlayerPoints == ComputerPoints)
        return "Its a draw";

}

console.log(game());
