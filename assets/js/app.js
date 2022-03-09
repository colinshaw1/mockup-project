// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function () {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//             }
//         })
//     }
    
// })





//Declare variables for player and computer secltions
// let playerSelection;
// let computerSelection;
// let pScore = 0; 
// let cScore = 0;

/***
 * Function to start the game
 */
// function runGame(gameType) {

//     if (gameType == "easy") {
//         easyGame()
//     } else {
//         alert(`Unkown game type: ${gameType}`);
//         throw (`Unkown game type: ${gameType}.Aborting!`)

//     }
// }
let playerSelection = document.getElementById("payler-choice");
let computerChoice = document.getElementById("computer-choice");
let result = document.getElementById("result");

const selectionChoice = document.getElementsByClassName("choice-button")

/**
 * The main function that will use an if statement to compare each selction 
 * 
 */
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

// function checkAnswer() {

// }

// function incrementScore() {

// }

// function easyGame(rock, paper, scissors, lizard, spock) {

//     document.getElementById('rock') = rock;
//     document.getElementById('paper') = paper;
//     document.getElementById('scissors') = scissors;
//     document.getElementById('lizard') = lizard;
//     document.getElementById('spock') = spock;
// }

// function hardGame() {

//     document.getElementById('rock') = rock;
//     document.getElementById('paper') = paper;
//     document.getElementById('scissors') = scissors;
//     document.getElementById('lizard') = lizard;
//     document.getElementById('spock') = spock;
// }

// function resetGame() {

// }