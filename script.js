const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timesElements = document.querySelectorAll("span");

let countDownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance: ", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    //   Populate Countdown
    countDownTitle.textContent = `${countDownTitle}`;
    timesElements[0].textContent = `${days}`;
    timesElements[1].textContent = `${hours}`;
    timesElements[2].textContent = `${minutes}`;
    timesElements[3].textContent = `${seconds}`;

    //   Hide Input
    inputContainer.hidden = true;
    //   Show Cpuntdown
    countdownEl.hidden = false;
  }, second);
}

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countDownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countDownTitle, countdownDate);
  //   Check for valid date
  if (countdownDate === "") {
    alert("Please select a date fot the countdown.");
  } else {
    //   Get number version of current Date, updateDom
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value: ", countdownValue);
    updateDOM();
  }
}

// Reser All Values
function reset() {
  // Hide Countdowns, show Input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  // Reset Values
  countDownTitle = "";
  countdownDate = "";
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
