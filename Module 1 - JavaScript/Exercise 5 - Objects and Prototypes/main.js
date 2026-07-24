function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0 ? "Seats Available" : "No Seats Available";
};

const event1 = new Event("Music Festival", "25 July 2026", 20);

const output = document.getElementById("output");

output.innerHTML += `<p>Event Name: ${event1.name}</p>`;
output.innerHTML += `<p>Date: ${event1.date}</p>`;
output.innerHTML += `<p>Status: ${event1.checkAvailability()}</p>`;

Object.entries(event1).forEach(([key, value]) => {
    output.innerHTML += `<p>${key}: ${value}</p>`;
});