const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countDownTitle = "";
let countdownDate = "";

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countDownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countDownTitle, countdownDate);
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
