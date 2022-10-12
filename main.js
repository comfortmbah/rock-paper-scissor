
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

console.log(getComputerChoice());