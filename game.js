
let options = ["rock", "paper", "scissors"];
let completed_rounds = 0;
let PlayerPoints = 0;
let ComputerPoints = 0;


//function to generate random option between Rock, Paper and Scissors
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


//function to return the result of the round 
function playRound(ComputerSelection, PlayerSelection) {
    if (completed_rounds === 5) {
        let tryAgainButton = document.getElementById("try_again_button");
        tryAgainButton.style.display = "block";
        displayGameResult(PlayerPoints, ComputerPoints);
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
}

//function to update the scores
function updateScore(result) {
    const P_points = document.getElementById("PlayerPoints");
    const C_points = document.getElementById("ComputerPoints");

    if (result.includes("You won!")) {
        PlayerPoints++;
        P_points.textContent = PlayerPoints.toString();
    } else if (result.includes("You lost!")) {
        ComputerPoints++;
        C_points.textContent = ComputerPoints.toString();
    }
}


//function to display the result of the game
function displayGameResult(PlayerPoints, ComputerPoints) {
    let result = "";
    if (PlayerPoints > ComputerPoints) {
        result = "Congratulations! You have won the game!";
    } else if (ComputerPoints > PlayerPoints) {
        result = "Sorry! The computer has won the game";
    } else {
        result = "It's a draw! Good Game!";
    }
    document.getElementById("game_over_result").textContent = result;
    document.getElementById("game_over").style.display = "block";
    document.getElementById("try_again_button").style.display = "block";

      // Disable all choice buttons when game is over
      document.querySelectorAll('.choice_img').forEach(button => {
        button.disabled = true;
    });
}

//function to reset the game
function resetGame() {
    if(completed_rounds == 5)
        document.getElementById("try_again_button").style.display = "none";
    completed_rounds = 0;
    PlayerPoints = 0;
    ComputerPoints = 0;
    document.getElementById("PlayerPoints").textContent = "0";
    document.getElementById("ComputerPoints").textContent = "0";
    document.getElementById("RoundNumber").textContent = "1";
    document.getElementById("RoundResult").textContent = "";
    document.getElementById("game_over_result").textContent = "";
    document.getElementById("game_over").style.display = "none";
    
    }

//adding an event listener to handle players choice
document.querySelectorAll('.choice_img').forEach(button => {
    button.addEventListener('click', () => {

        //read player choice
        let PlayerSelection = button.querySelector('img').alt.toLowerCase();

        //generate computer choice
        let ComputerSelection = getComputerChoice();
        let Computer_element = document.getElementById('Computer_option');
        Computer_element.textContent = "The computer chose:" + ComputerSelection.toString();

        //check if round is less thank 5
        if (completed_rounds < 5) {
            //play round for the current player selection
            let result = playRound(ComputerSelection, PlayerSelection);
            //update result
            updateScore(result);

            //update round
            let R_number = document.getElementById('RoundNumber');
            let round_number = parseInt(R_number.textContent);

            //increment round and convert back to string
            R_number.textContent = (round_number+1).toString();
            //display result
            let result_Element = document.getElementById('RoundResult');
            result_Element.textContent = result; //the result is generated after the playRound function

            completed_rounds++;
            //check if game is over
            if (completed_rounds == 5) {
                let GameOver = document.getElementById("game_over");
                let game_over_result_elem = document.getElementById('game_over_result');
                GameOver.style.display = "block";
                displayGameResult(PlayerPoints, ComputerPoints);
                round_number = 0;
                R_number.textContent = (round_number).toString();
            }
            if (completed_rounds == 6) {
              resetGame();
            } 
        }
    })
});

//Add event listener to reset the game when try again button is pressed
document.getElementById('try_again_button').addEventListener('click', () => {
    resetGame();
    let tryAgainButton = document.getElementById("try_again_button");
    tryAgainButton.style.display = "none";
    // Disable all choice buttons when game is over
    document.querySelectorAll('.choice_img').forEach(button => {
        button.disabled = false;})
});