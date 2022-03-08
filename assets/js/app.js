// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// document,addEventListener("DOMContentLoaded", function(){
//     let buttons = document.getElementsByTagName('button');

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let game = this.getAttribute("data-type");

//             }


//     computerChoice = Math.random();
//     if (computerChoice < 0.2) {
//         computerChoice = "rock";
//     } else if (computerChoice <= 0.4) {
//         computerChoice = "paper";
//     } else if (computerChoice <= 0.6) {
//         computerChoice = "scissors";
//     } else if (computerChoice <= 0.8) {
//         computerChoice = "lizard";
//     } else {
//         computerChoice = "spock";
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

// for (let button of buttons) {
//     button.addEventListener("click", function() {
//         if (this.getAttribute("data-type") === "submit") {
//             checkAnswer();
//         } else {
//             let computerChoice = this.getAttribute("data-type");
//             compareSelect(computerChoice);
//         }
//     });
//     }

// });

//Declare variables for player and computer secltions
// let playerSelection;
// let computerSelection;
// let pScore = 0; 
// let cScore = 0;


// /***
//  * Function to start the game 
//  */
// function startEasyGame(){
//     let easyBtn = document.getElementById('play-easy');

//     easyBtn.addEventListener("click");
// }


/**
 * The main function that will use an if statement to compare each selction 
 * 
 */


function runGame() {

}

function incrementScore() {

}

function easyGame() {

}

function hardGame() {

}

function resetGame() {

}

function compareSelect(computerChoice) {

    if (playerSelection === computerChoice) {
        return "Computer has chosen " + computerSelection + " this round is a tie!";
    } else if (playerSelection === "rock") {
        if (computerChoice === "lizard") {
            return "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === "spock") {
            return "Spock vaporizes Rock!! Computer Wins";
        } else {
            return "Paper covers Rock! Computer Wins";
        }
    } else if (playerSelection == "paper") {
        if (computerChoice === "scissors") {
            return "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === "lizard") {
            return "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === "spock") {
            return "Paper disproves Spock! Player Wins";
        } else {
            return "Paper covers Rock! Player Wins"
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "rock") {
            return "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === "lizard") {
            return "Scissors decapitates Lizard! Player Wins";
        } else {
            return "Spock smashes Scissors";
        }
    } else if (playerSelection === "lizard") {
        if (computerChoice === "rock") {
            return "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Lizard eats Paper! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Scissors decapitates Lizard! Computer Wins";
        } else {
            return "Lizard poisons Spock";
        }
    } else if (playerSelection === "spock") {
        if (computerChoice === "rock") {
            return "Spock vaporizes Rock! Player Wins";
        } else if (computerChoice === "paper") {
            return "Paper disproves Spock! Computer Wins";
        } else if (computerChoice === "scissors") {
            return "Spock smashes Scissors! Player Wins";
        } else {
            return "Lizard poisons Spock! Computer Wins";
        }
    }
};
