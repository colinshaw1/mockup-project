// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//             }
//         });
//     }

// });

//Declare variables for player and computer secltions
let playerSelection;
let computerSelection;

/**
 * The main function that will use an if statement to compare each selction 
 * 
 */
function compareSelect(computerChoice){
    if(playerSelection === computerChoice){
        return "Computer has chosen " + computerSelection + "this round is a tie!";
    }else if(playerSelection === "rock"){
        if(computerChoice === "lizard"){
            return "Rock crushes Lizard! Player Wins";
        }else if(computerChoice === "scissors"){
            return "Rock crushes Scissors!! Player Wins";
        } else if(computerChoice === "spock"){
            return "Spock vaporizes Rock!! Computer Wins";
        }else{
            return "Paper covers Rock! Computer Wins";
        }
    }
}