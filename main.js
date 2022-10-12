let choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const playerSelection = prompt('rock, paper or scissor?').toLowerCase();
    const computerSelection = getComputerChoice();

    let result; 

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        result = 'You won! Rock beats Scissor';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        result = 'You lost! Paper beats Rock'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        result = 'You won! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        result = 'You lost! Scissor beats Paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        result = 'You lost! Rock beats Scissor';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        result = 'You won! Scissor beats Paper';
    } else {
        result = 'It\'s a draw!';
    }
    return result;
}

//const playerSelection = 'scissor';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

function game() {}

