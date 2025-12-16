// event listener for DOM content loaded
// wait for the DOM to finish loading before running the game
// get the buttons and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
if (this.getAttribute("data-type") === "submit") { // this. refers to the button just clicked and if its submit then action alert
    // ceate an alert to say you clicked submit if submit clicked
    checkAnswer(); // call check answer function
 } else { // if button clicked is not submit
    let gameType = this.getAttribute("data-type");
runGame(gameType); // run the game with the game type}
         }
        });
    }

runGame("addition"); // default to addition game on page load

}); // end of DOM content loaded event listener


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) // run game function with game type parameter
{
    // Game logic here

    // Generate two random numbers between 1 and 25 (+1 to include 25 and not 0)
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2); // call display addition
} else if (gameType === "multiply") {
displayMultiplyQuestion(num1, num2); // call display multiplication
} else if (gameType === "subtract") {
displaySubtractQuestion(num1, num2); // call display subtraction
} else if (gameType === "division") {
    displayDivisionQuestion(num1, num2); // call display division
} else {    
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`; // throw error if unknown game type 
}   
}

/**
 * Check the answer against the first element returned
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    // Answer checking logic here
let userAnswer = parseInt(document.getElementById("answer-box").value); // get user answer from answer box and parse to integer
let calculatedAnswer = calculateCorrectAnswer(); // call calculate correct answer function and store result   
let isCorrect = userAnswer === calculatedAnswer[0]; // check if user answer is equal to calculated answer
if (isCorrect) { // if correct
    alert(`Booyah! You got it right you lil genius! 
    Of course the correct answer is ${userAnswer}!`);
        incrementScore() // increment score if correct
} else { // if wrong
    alert(`Noooo you answered ${userAnswer} but correct answer was of course ${calculatedAnswer[0]}! 
    Shake it off and have another go.`);
        incrementWrongAnswer(); // increment wrong answer if wrong
}
runGame(calculatedAnswer[1]); // run game again with the game type from calculated answer
}

/**
 * Get the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and return the correct answer.
 */

function calculateCorrectAnswer() {
    // Getting operands and operator from the DOM.
    // Using parseInt to get integer (whole) values for the operands.
    let operand1 = parseInt(document.getElementById("operand1").innerText);
        let operand2 = parseInt(document.getElementById("operand2").innerText);
        let operator = document.getElementById("operator").innerText;

        if (operator === "+") { // if operator is addition then do addition
            return [operand1 + operand2, "addition"];
        } else if (operator === "x") { // if operator is multiplication then do multiplication
            return [operand1 * operand2, "multiply"];
        } else if (operator === "-") { // if operator is subtraction then do subtraction
            return [operand1 - operand2, "subtract"];
        } else if (operator === "/") { // if operator is division then do division, or throw error
            return [Math.floor(operand1 / operand2), "division"];
        } else {
            alert(`Unimplemented operator ${operator}`); //alert
            throw `Unimplemented operator ${operator}. Aborting!`; // throw to console
        }
}


/**
 * Gets the current score from the DOM and increments it by 1 if right
 */

function incrementScore() {
    // Score increment logic here
    let oldScore = parseInt(document.getElementById("score").innerText); // get old score from DOM and parse to integer
    document.getElementById("score").innerText = ++oldScore; // increment old score and set new score in DOM
}

/**
 * Gets the current incorrect score from the DOM and increments it by 1 if wrong
 */

function incrementWrongAnswer() {
    // Wrong answer increment logic here
    let oldScore = parseInt(document.getElementById("incorrect").innerText); // get old score from DOM and parse to integer
    document.getElementById("incorrect").innerText = ++oldScore; // increment old score and set new score in DOM
}

function displayAdditionQuestion(operand1, operand2) {
    // Display addition question logic here
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    // Display subtraction question logic here
            // ensure operand1 is always larger for subtraction so that we don't get negative results
        document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2; 
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    // Display multiplication question logic here
        document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}   

function displayDivisionQuestion(operand1, operand2) {
    // Display division question logic here
// ensure operand1 is always larger for division so that we don't get fractions
        document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2 * operand1;
    document.getElementById("operand2").textContent = operand2 > operand1 ? operand1 : operand2;
    document.getElementById("operator").textContent = "/";
}
