//Name: Leonardo Meneguetti Barbosa

// Codes were searched on the internet

// Get the elements
const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const sessionEl = document.getElementById('session');
const toggleBtn = document.getElementById('toggle-btn');

// Set the date and time format
let twelveHr = false;
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: twelveHr };

// Update the time every second
setInterval(() => {
  const date = new Date();
  dateEl.innerText = date.toLocaleDateString('en-US', options);
  dayEl.innerText = date.toLocaleDateString('en-US', { weekday: 'long' });
  hoursEl.innerText = date.toLocaleTimeString('en-US', timeOptions).split(':')[0];
  minutesEl.innerText = date.toLocaleTimeString('en-US', timeOptions).split(':')[1];
  secondsEl.innerText = date.toLocaleTimeString('en-US', timeOptions).split(':')[2];
}, 1000);

// Toggle between 12-hour and 24-hour format
toggleBtn.addEventListener('click', () => {
  twelveHr = !twelveHr;
  timeOptions.hour12 = twelveHr;
});