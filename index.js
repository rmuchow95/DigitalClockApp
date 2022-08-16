const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function convertHours(hours) {
 // hours = Number(time[0]);

if (hours > 0 && hours <= 12) {
  return "" + hours;
} else if (hours > 12) {
  return "0" + (hours - 12);
} else if (hours == 0) {
  return "12";
} else if (hours < 22) {
  return "" + (hours - 12);
}
}

function getCurrentTime() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
    if (currentHour < 10) {
      currentHour = "0" + currentHour;
    }
  let currentMinutes = currentTime.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
  let currentSeconds = currentTime.getSeconds();
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }

  currentHour = convertHours(23);
  console.log(currentHour)

  printCurrentTime(currentHour, currentMinutes, currentSeconds);
}

function printCurrentTime(currentHour, currentMinutes, currentSeconds) {
  let timeString = currentHour + ":" + currentMinutes + ":" + currentSeconds;
  let node = document.createTextNode(timeString);
  let element = document.getElementById("current-time");
  element.textContent = timeString;
}

function getCurrentDate() {
  let currentDate = new Date();
  let dayOfWeek = currentDate.getDay();
  let currentMonth = currentDate.getMonth();
  let dayOfMonth = currentDate.getDate() + "th";
  let currentYear = currentDate.getFullYear();
  printCurrentDate(dayOfWeek, currentMonth, dayOfMonth, currentYear);
}

function printCurrentDate(dayOfWeek, currentMonth, dayOfMonth, currentYear) {
  let dateString = days[dayOfWeek] + "," + " " + months[currentMonth] + " " + dayOfMonth + " " + currentYear;
  let node = document.createTextNode(dateString);
  let element = document.getElementById("current-date");
  element.appendChild(node);
}

const headerElement = document.getElementById("current-date");
const headerText = headerElement.textContent;

setInterval(getCurrentTime, 1000);

var time = new Date(); 
let timeValue;

getCurrentDate();
getCurrentTime();