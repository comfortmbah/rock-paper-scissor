let choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You won! Rock beats Scissor';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper beats Rock'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lost! Scissor beats Paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lost! Rock beats Scissor';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You won! Scissor beats Paper';
    } else {
        return 'It\'s a draw!';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

