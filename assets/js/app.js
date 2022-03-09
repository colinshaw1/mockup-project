
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

  for ( let i = 0 ; i < selectionChoice.length ; i++){
    selectionChoice[i].addEventListener('click', runEasyGame);
}

/***
 * Run easy game function that allows us to play the game when easy game is clicked
 */
function runEasyGame(e) {
    choice = e.target.class;
    playerSelection = e.target.innerHTML = choice;
}