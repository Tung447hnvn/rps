console.log("Rock, Paper, Scissors Game");
let rpsComp = Math.floor(Math.random(2) * 3);
let rpsPlayer = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();


function getComputerChoice(rpsComp) {
    if (rpsComp === 0) {
        return "Rock";
    } else if (rpsComp === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("Computer: " + getComputerChoice(rpsComp));


function getPlayerChoice(rpsPlayer) {
    if (rpsPlayer === 'rock') {
        return "Rock";
    } else if (rpsPlayer === 'paper') {
        return "Paper";
    } else if (rpsPlayer === 'scissors') {
        return "Scissors";
    } else {
        return "Invalid choice";
    }
}

console.log("Player: " + getPlayerChoice(rpsPlayer));

function playRound(compChoice, playChoice) {


    if (compChoice === playChoice) {
        return "Draw!";
    } else if ((compChoice === "Rock" && playChoice === "Scissors") ||
        (compChoice === "Scissors" && playChoice === "Paper") ||
        (compChoice === "Paper" && playChoice === "Rock")) {
        return "Lost!;"
    } else if ((compChoice === "Scissors" && playChoice === "Rock") ||
        (compChoice === "Paper" && playChoice === "Scissors") ||
        (compChoice === "Rock" && playChoice === "Paper")) {
        return "Won!";
    } else {
        return "Invalid!";
    }
}

const c = getComputerChoice(rpsComp);
const p = getPlayerChoice(rpsPlayer);
console.log(playRound(c, p));

function playGame(c, p) {
    let result = playRound(c, p);
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + ": " + result);
    }
    if (result === "Won!") { // This is the winning condition; result is still not based on playGame
        console.log("You win the game!");
    } else if (result === "Lost!") { // This is the losing condition
        console.log("You lose the game!");
    } else {   // This is the draw condition
        console.log("It's a draw!");
    }
}