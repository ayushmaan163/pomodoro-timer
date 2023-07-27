let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// Display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// Start the timer
function start() {
  // change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // Change the time
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  // Countdown
  let timerFunction = () => {
    // Change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Start
    seconds -= 1;

    if (seconds === 0) {
      workMinutes -= 1;

      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // Start break
          workMinutes = breakMinutes;
          breakCount++;

          // change the panel
          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          // continue work
          workMinutes = workTime;
          breakCount++;

          // change the painel
          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      }

      seconds = 59;
    }
  };

  // Start the countdown
  setInterval(timerFunction, 1000);
}
