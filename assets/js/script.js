// event listener for DOM content loaded
// wait for the DOM to finish loading before running the game
// get the buttons and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
if (this.getAttribute("data-type") === "submit") { // this. refers to the button just clicked and if its submit then action alert
    // ceate an alert to say you clicked submit if submit clicked
    alert("You clicked Submit!");
 } else { // if button clicked is not submit
    let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
 }
        });
    }
});


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // Game logic here

    // Generate two random numbers between 1 and 25 (+1 to include 25 and not 0)
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {
    // Answer checking logic here
}

function calculateCorrectAnswer() {
    // Calculation logic here
}

function incrementScore() {
    // Score increment logic here
}

function incrementWrongAnswer() {
    // Wrong answer increment logic here
}

function displayAdditionQuestion() {
    // Display addition question logic here
}

function displaySubtractQuestion() {
    // Display subtraction question logic here
}

function displayMultiplyQuestion() {
    // Display multiplication question logic here
}   

function displayDivisionQuestion() {
    // Display division question logic here
}
