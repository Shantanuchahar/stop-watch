let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  pauseStopwatch();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (hours === 0 && minutes === 0 && seconds === 0) return;

  const lap = document.createElement("li");
  lap.textContent = display.textContent;
  document.getElementById("laps").appendChild(lap);
}

// Button bindings
document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("pause").addEventListener("click", pauseStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
document.getElementById("lap").addEventListener("click", lapTime);

// Initial display
updateDisplay();
