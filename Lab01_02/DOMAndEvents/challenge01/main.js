// Select the element with the 'again' class and attach a click event handler
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');

const SCORE = 100,
    PRIMARY_COLOR = '#222',
    CORRECT_COLOR = '#60b347',
    NUMBER_WIDTH = '15rem';
const messages = {
    start: 'Start guessing...',
    empty: 'Please input number',
    correct: 'Correct Number!',
    less: 'Too low',
    higher: 'Too high',
};

let score, secretNumber, message, backgroundColor, numberWidth;

function handler() {
    // restore initial values of the 'score' and 'secretNumber' variables
    score = SCORE;
    secretNumber = Math.round(Math.random() * 100);

    // Restore the initial conditions of the message, number, score and guess input fields
    message = messages.start;
    guessInput.value = '';

    // restore the original background color (#222) and number width (15rem)
    backgroundColor = PRIMARY_COLOR;
    numberWidth = NUMBER_WIDTH;

    updateDOM();
    guessInput.focus();
}

function updateDOM(isWin) {
    if (isWin) {
        scoreElement.innerHTML = score;
        numberElement.innerHTML = secretNumber;
    } else {
        scoreElement.innerHTML = '---';
        numberElement.innerHTML = '?';
    }
    messageElement.innerHTML = message;
    body.style.backgroundColor = backgroundColor;
    guessInput.style.backgroundColor = backgroundColor;
    numberElement.style.width = numberWidth;
}

againBtn.addEventListener('click', handler);

checkBtn.addEventListener('click', () => {
    const value = +guessInput.value;

    if (!value) message = messages.empty;
    else if (value === secretNumber) {
        message = messages.correct;
        backgroundColor = CORRECT_COLOR;
        updateDOM(true);
        return;
    } else {
        score--;
        message = messages[value < secretNumber ? 'less' : 'higher'];
    }
    updateDOM();
});

handler();
