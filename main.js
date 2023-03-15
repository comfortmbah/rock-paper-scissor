const btnOption = document.querySelectorAll('div.btnOptions button');
const playerPoint = document.querySelector('#playerScore');
const computerPoint = document.querySelector("#computerScore");
const roundResult = document.querySelector("#roundResults");
const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener('click', () => location.reload());

btnOption.forEach(button => {
    button.addEventListener('click', getPlayerChoice)
})

let choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice(e) {
    let playerSelection = e.target.id;
    playRound(playerSelection, getComputerChoice());
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerPoint.textContent = ++playerScore;
        roundResult.textContent = 'You won! Rock beats Scissor';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoint.textContent = ++computerScore;
        roundResult.textContent = 'You lost! Paper beats Rock'; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerPoint.textContent = ++playerScore;
        roundResult.textContent = 'You won! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerPoint.textContent = ++computerScore;
        roundResult.textContent = 'You lost! Scissor beats Paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerPoint.textContent = ++computerScore;
        roundResult.textContent = 'You lost! Rock beats Scissor';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerPoint.textContent = ++playerScore;
        roundResult.textContent = 'You won! Scissor beats Paper';
    } else {
        playerPoint.textContent = ++playerScore;
        computerPoint.textContent = ++computerScore;
        roundResult.textContent = 'It\'s a draw!';
    }
    checkWinner();
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === computerScore) {
            roundResult.textContent = "The game is a tie!";
        } else if (playerScore > computerScore) {
            roundResult.textContent = "You win the game! Bravo";
            roundResult.style.color = 'green';
        } else {
            roundResult.textContent = "You Lost the game. Try harder";
            roundResult.style.color = 'red';
        }

        btnOption.forEach(button => {
            button.removeEventListener('click', getPlayerChoice)
        })
    }
}

