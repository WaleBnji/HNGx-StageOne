const dayEL = document.querySelector('.day');
const timeEL = document.querySelector('.time');
const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondsEL = document.querySelector('.seconds');
const milliSecondsEL = document.querySelector('.milliseconds');
const daysOfTheWeek = [
  ' Sunday',
  ' Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  ' Saturday',
];

const d = new Date();
let day = daysOfTheWeek[d.getDay()];
let hour = d.getUTCHours();
let minutes = d.getUTCMinutes();
let seconds = d.getUTCSeconds();
let ms = d.getUTCMilliseconds();
dayEL.textContent = `${day}`;
hourEL.textContent = `${hour}:`;
minuteEL.textContent = `${minutes}:`;
secondsEL.textContent = `${seconds}:`;
milliSecondsEL.textContent = `${ms}`;
