let countdown;
let timeLeft = 0; 
let isRunning = false;

const timerElement = document.getElementById('timer');
const inputTime = document.getElementById('input-time');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const restartButton = document.getElementById('restart-button');

startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);
restartButton.addEventListener('click', restartCountdown);

function startCountdown() {
    if (isRunning) return; 
    timeLeft = parseInt(inputTime.value);
    if (isNaN(timeLeft) || timeLeft <= 0) return; 
    timerElement.textContent = formatTime(timeLeft);
    isRunning = true;

    countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's Up!";
            isRunning = false;
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdown);
    isRunning = false;
}

function resetCountdown() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = 0;
    timerElement.textContent = "00:00";
    inputTime.value = ''; 
}

function restartCountdown() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = parseInt(inputTime.value);
    if (isNaN(timeLeft) || timeLeft <= 0) return; 
    timerElement.textContent = formatTime(timeLeft);
    startCountdown();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
