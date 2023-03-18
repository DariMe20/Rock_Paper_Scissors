
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
            return ("You lost! Rock beats Scissors!");

    }
    if (ComputerSelection == "paper") {
        if (PlayerSelection == "rock")
            return ("You lost! Paper beats Rock!");
        if (PlayerSelection == "scissors")
            return ("You won! Scissors beats Paper!");
    }

    if (ComputerSelection == "scissors") {
        if (PlayerSelection == "rock")
            return ("You won! Rock beats Scissors!");
        else if (PlayerSelection == "paper")
            return ("You lost! Scissors beats Paper!");
    }

}

//adding an event listener to handle players choice 
document.querySelectorAll('.choice_container button').forEach(button => {
    button.addEventListener('click', () => {
        //read player choice
        let PlayerSelection = button.querySelector('img').alt.toLowerCase();

        //generate computer choice
        let ComputerSelection = getComputerChoice();

        //play round for the current player selection
        let result = playRound(ComputerSelection, PlayerSelection);

        //update points
        let P_points = document.getElementById('PlayerPoits');
        let C_points = document.getElementById('ComputerPoints');
        //convert the text to int to use for mathematical operations
        let PlayerPoints = parseInt(P_points.textContent);
        let ComputerPoints = parseInt(C_points.textContent);
        //check the result to update points
        if(result.includes("You won!")){
            PlayerPoints++;
            //go back to string format
            P_points.textcontent = PlayerPoints.toString();
        }
        if(result.includes("You lsot!")){
            ComputerPoints++;
            //go back to string format
            C_points.textcontent = ComputerPoints.toString();
        }

        //update round
        let R_number = document.getElementById('RoundNumber');
        let round_number = parseInt(R_number.textContent);
        //increment round and convert back to string
        R_number.textContent = (round_number + 1).toString();

        //display result
        let result_Element = document.getElementById('RoundResult');
        result_Element.textContent = result; //the result is generated after the playRound function

        //check if game is over
        
    }) 
})
   

// function game(computerSelection) {
//     let PlayerPoints = 0;
//     let ComputerPoints = 0;

//     for (let i = 0; i < 5; i++) {
//         //Read player option
//         let player = prompt("Please enter rock/paper/scissors:"); //This entering will be case sensitive
//         let playerSelection = player.toLowerCase(); //this makes the entering case insensitive by lowecasing the input 

//         //Generate computer option
//         const computerSelection = getComputerChoice();

//         //play round
//         console.log(playRound(computerSelection, playerSelection));

//         //calculate points
//         let text = playRound(computerSelection, playerSelection);
//         let result = text.slice(0, 9);
//         if (result == "You won! ")
//             PlayerPoints++;
//         else if(result == "You lose!")
//             ComputerPoints++;

//         //print current result
//         console.log("Round: " + (i+1) + " Now the score is: Player - " + 
//         PlayerPoints + " Computer - " + ComputerPoints);
//     }
//     //print final result
//     if (PlayerPoints > ComputerPoints)
//         return "Player wins";
//     else if (PlayerPoints < ComputerPoints)
//         return "Computer wins"
//     else if (PlayerPoints == ComputerPoints)
//         return "Its a draw";

// }

//console.log(game());







