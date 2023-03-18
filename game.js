
let options = ["rock", "paper", "scissors"];
let completed_rounds = 0;
let PlayerPoints = 0;
let ComputerPoints = 0;


//function to generate random option between Rock, Paper and Scissors
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

//function to reset the game 
function resetGame() {
    completed_rounds = 0;
    PlayerPoints = 0;
    ComputerPoints = 0;
    let P_points = document.getElementById('PlayerPoints');
    let C_points = document.getElementById('ComputerPoints');
    let R_number = document.getElementById('RoundNumber');
    let result_Element = document.getElementById('RoundResult');
    P_points.textContent = "0";
    C_points.textContent = "0";
    R_number.textContent = "1";
    result_Element.textContent = "";
}

function playRound(ComputerSelection, PlayerSelection) {
    if (completed_rounds === 5) {
        if (PlayerPoints > ComputerPoints) {
            let result = "Congratulations! You have won the game!";
            let GameOver = document.getElementById('game_over');
            let game_over_result_elem = document.getElementById('game_over_result');
            GameOver.style.display = 'block';
            game_over_result_elem.textContent = result;
            let try_again_button = document.getElementById('try_again_button');
            try_again_button.style.display = 'block';
        } else if (ComputerPoints > PlayerPoints) {
            let result = "Sorry! The computer has won the game";
            let GameOver = document.getElementById('game_over');
            let game_over_result_elem = document.getElementById('game_over_result');
            GameOver.style.display = 'block';
            game_over_result_elem.textContent = result;
            let try_again_button = document.getElementById('try_again_button');
            try_again_button.style.display = 'block';
        } else {
            let result = "It's a draw! Good Game!";
            let GameOver = document.getElementById('game_over');
            let game_over_result_elem = document.getElementById('game_over_result');
            GameOver.style.display = 'block';
            game_over_result_elem.textContent = result;
            let try_again_button = document.getElementById('try_again_button');
            try_again_button.style.display = 'block';
        }
        return;
    }
    if (ComputerSelection === PlayerSelection) {
        return "It's a draw";
    }


    if (ComputerSelection == "rock") {
        if (PlayerSelection == "paper")
            return "You won! Paper beats Rock!";
        else if (PlayerSelection == "scissors")
            return "You lost! Rock beats Scissors!";

    }
    if (ComputerSelection == "paper") {
        if (PlayerSelection == "rock")
            return "You lost! Paper beats Rock!";
        if (PlayerSelection == "scissors")
            return "You won! Scissors beats Paper!";
    }

    if (ComputerSelection == "scissors") {
        if (PlayerSelection == "rock")
            return "You won! Rock beats Scissors!";
        else if (PlayerSelection == "paper")
            return "You lost! Scissors beats Paper!";
    }

    if (completed_rounds == 5) {
        if (PlayerPoints > ComputerPoints) {
            return "Congratulations! You have won the game!";
        } else if (ComputerPoints > PlayerPoints) {
            return "Sorry! The computer has won the game";
        } else {
            return "It's a draw! Good Game!";
        }
    }

}

//adding an event listener to handle players choice 
document.querySelectorAll('.choice_img').forEach(button => {
    button.addEventListener('click', () => {
        //read player choice
        let PlayerSelection = button.querySelector('img').alt.toLowerCase();

        //generate computer choice
        let ComputerSelection = getComputerChoice();

        //check if round is less thank 5
        if (completed_rounds < 5) {
            //play round for the current player selection
            let result = playRound(ComputerSelection, PlayerSelection);
            //update points
            let P_points = document.getElementById('PlayerPoints');
            let C_points = document.getElementById('ComputerPoints');

            //convert the text to int to use for mathematical operations
            let PlayerPoints = parseInt(P_points.textContent);
            let ComputerPoints = parseInt(C_points.textContent);


            //check the result to update points
            if (result && result.includes("You won!")) {
                PlayerPoints++;
                console.log(PlayerPoints);
                //go back to string format
                P_points.textContent = PlayerPoints.toString();
            }
            if (result && result.includes("You lost!")) {
                ComputerPoints++;
                //go back to string format
                C_points.textContent = ComputerPoints.toString();
            }
            //update round
            let R_number = document.getElementById('RoundNumber');
            let round_number = parseInt(R_number.textContent);
            if (round_number == 5) {
                round_number = 0; // reset round number to 0
                P_points.textContent = "0";
                C_points.textContent = "0";
            }

            //increment round and convert back to string
            R_number.textContent = (round_number + 1).toString();
            //display result
            let result_Element = document.getElementById('RoundResult');
            result_Element.textContent = result; //the result is generated after the playRound function

            completed_rounds++;
            //check if game is over
            if (round_number == 5) {
                let GameOver = document.getElementById('game_over');
                let game_over_result_elem = document.getElementById('game_over_result');
                GameOver.style.display = 'block';
                displayGameResult(PlayerPoints, ComputerPoints);
            }
        }
        else completed_rounds = 0;
    })
});



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







