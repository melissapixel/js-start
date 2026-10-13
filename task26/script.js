const countMax = 6;
let count = countMax;
let timer;
let isRunning = false;
const num = document.querySelector('.num');
const timers = document.querySelector('.buttons');

timers.addEventListener('click', (event) => {
  
  const startTimer = event.target.closest('.button--start');
  if (startTimer && !isRunning) {
    startTimerFunc();
  }

  const pauseTimer = event.target.closest('.button--pause');
  if (pauseTimer && isRunning) {
    pauseTimerFunc();
  }

  const resetTimer = event.target.closest('.button--reset');
  if (resetTimer && isRunning) {
    resetTimerFunc();
  }

});

function startTimerFunc() {
  timer = setInterval(() => {
    num.textContent = count;
    isRunning = true;

    if (count > 0) {
      --count;
    } else {
      clearInterval(timer); 
      isRunning = false;
      num.textContent = 'Time is over';
    }
  }, 1000);
}

function pauseTimerFunc() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimerFunc() {
  clearInterval(timer);
  timer = null;
  count = countMax;
  startTimerFunc();
}