
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

console.log(getComputerChoice());