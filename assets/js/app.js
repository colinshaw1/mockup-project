
//Declaring variables 
const playerSelection = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
let choice;
const selectionChoice = document.getElementsByClassName("choice-button");

/**
 * takes each button in the choices sections and listens for a click if any button is selected
 * the for each method calls each element in the class choice button
 */
//arrow statment below allows me to creat a function much cleaner. reference W3 schools Arrow function lesson
selectionChoice.forEach(selection => selection.addEventListener('click', (e) => {
    choice = e.target.class; //event lets us target the user choice and save it
    playerSelection.innerHTML = choice;
}))