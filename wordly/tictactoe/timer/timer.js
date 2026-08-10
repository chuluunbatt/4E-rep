const [hoursEl, minutesEl, secondsEl] =
  document.querySelectorAll(".timer > div");

const [startBtn, pauseBtn, resetBtn] =
  document.querySelectorAll(".actions button");

let intervalId = null;
let isPaused = false;
let duration = 0;

const updateTimer = () => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600);

  secondsEl.textContent = String(seconds).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0")
};

startBtn.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    return;
  }

  if (intervalId) return;

  startBtn.disabled = true;

  intervalId = setInterval(() => {
    if (isPaused) return;

    duration++;

    updateTimer();
  }, 10);
});

pauseBtn.addEventListener("click", () => {
  if (intervalId) return;

  isPaused = true;
  pauseBtn.disabled = true;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  isPaused = false;
  duration = 0;
  updateTimer();
  startBtn.disabled = false;
  pauseBtn.disabled = true
});
