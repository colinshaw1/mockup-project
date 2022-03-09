//Declaring variables 
let playerSelection = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let result = document.getElementById("result");
let choice;
let selectionChoice = document.getElementsByClassName("choice-button");

/**
 * takes each button in the choices sections and listens for a click if any button is selected
 * the for each method calls each element in the class choice button
 */
//arrow statment below allows me to creat a function much cleaner. reference W3 schools Arrow function lesson
// selectionChoice.forEach(selectionChoice.addEventListener('click', (e) => {
//     choice = e.target.id; //event lets us target the user choice and save it
//     playerSelection.innerHTML = choice;
// }))

for (let i = 0; i < selectionChoice.length; i++) {
    selectionChoice[i].addEventListener('click', runEasyGame);
}

/***
 * Run easy game function that allows us to play the game when easy game is clicked
 */
function runEasyGame(e) {
    choice = e.target.class;
    playerSelection = e.target.innerHTML = choice;

    computerChoice = Math.random();
    if (computerChoice < .24) {
        computerChoice = 'paper';
    } else if (computerChoice <= .47) {
        computerChoice = 'Paper';
    } else if (computerChoice <= .60) {
        computerChoice = 'Scissors';
    } else if (computerChoice <= .77) {
        computerChoice = 'lizard';
    } else {
        computerChoice = 'spock';
    }
}


function checkWinner(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        return "Computer has chosen " + computerSelection + "this round is a tie!";
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
}