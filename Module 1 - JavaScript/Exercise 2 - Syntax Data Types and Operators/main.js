const eventName = "Music Festival";
const eventDate = "25 July 2026";

let seats = 50;

let eventInfo =
`Event: ${eventName}
Date: ${eventDate}
Available Seats: ${seats}`;

document.getElementById("eventInfo").innerHTML =
eventInfo.replace(/\n/g, "<br>");

seats++;

console.log("Seats after update:", seats);