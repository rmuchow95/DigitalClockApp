let currentDate = new Date();
let dayOfWeek = currentDate.getDay();

  const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

let currentMonth = currentDate.getMonth();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dayOfMonth = currentDate.getDate() + "th";

let currentYear = currentDate.getFullYear();

let text = currentDate.toString();

const headerElement = document.getElementById("current-date");

const headerText = headerElement.textContent;

let element = document.getElementById("current-date");

let fullDate = days[dayOfWeek] + "," + " " + months[currentMonth] + " " + dayOfMonth + " " + currentYear;

let node = document.createTextNode(fullDate);
element.appendChild(node);

console.log("header-Text: ", headerText);
console.log("Date Objects: ", );
console.log("Day of The Week: ", days);

console.log(fullDate);