const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';


function getPlayerChoice() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        //alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        //return DEFAULT_USER_CHOICE;
        return;
    }

    return selection;
}

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue < 1) {
        return ROCK;
    } else if (randomValue < 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function () {
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    let winner;
    let message;

    if (playerSelection) {
        winner = getWinner(computerSelection, playerSelection);
        message = `You chose ${playerSelection || DEFAULT_USER_CHOICE}. Computer chose ${computerSelection}. Winner is ${winner}`;
    } else {
        winner = getWinner(computerSelection); 
        // Js will send if you don't send second parameter. Or if you send undefined.
        // If your default value is first parameter, you can send undefined.
        message = `You chose ${DEFAULT_USER_CHOICE}. Computer chose ${computerSelection}. Winner is ${winner}`;
    }

    alert(message);
});