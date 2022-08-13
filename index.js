const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//setInterval(currentTime, 1000);
function convertHours(hours) {
  switch(hours) {
    case 00:
      return "00";
    case 01:
      return "01";
    case 02:
      return "02";
    case 03:
      return "03";
    case 04:
      return "04";
    case 05:
      return "05";
    case 06:
      return "06";
    case 07:
      return "07";
    case 08:
      return "08";
    case 09:
      return "09";
    case 10:
      return "10";
    case 11:
      return "11";
    case 12:
      return "12";
    case 13:
      return "01";
    case 14:
      return "02";
    case 15:
      return "03";
    case 16:
      return "04";
    case 17:
      return "05";
    case 18:
      return "06";
    case 19:
      return "07";
    case 20:
      return "08";
    case 21:
      return "09";
    case 22:
      return "10";
    case 23:
      return "11";
    case 24:
      return "12";
  }
}

function getCurrentTime() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let standardHours = convertHours(currentHour);
  printCurrentTime(standardHours, currentMinutes, currentSeconds);
}

function printCurrentTime(currentHour, currentMinutes, currentSeconds) {
  let timeString = currentHour + ":" + currentMinutes + ":" + currentSeconds;
  let node = document.createTextNode(timeString);
  let element = document.getElementById("current-time");
  element.appendChild(node);
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

console.log("header-Text: ", headerText);
console.log("Date Objects: ", );
console.log("Day of The Week: ", days);

getCurrentDate();