let events = [];

function addEvent(name, category) {
    events.push({ name, category });
}

function registerUser(eventName) {
    return `${eventName} registration successful`;
}

function filterEventsByCategory(category, callback) {
    let filteredEvents = events.filter(event => event.category === category);
    callback(filteredEvents);
}

function registrationTracker() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let trackMusicRegistrations = registrationTracker();

addEvent("Music Festival", "Music");
addEvent("Food Fair", "Food");
addEvent("Rock Concert", "Music");

filterEventsByCategory("Music", function (filteredEvents) {
    let output = document.getElementById("output");

    filteredEvents.forEach(event => {
        output.innerHTML += `<p>${event.name}</p>`;
    });
});

console.log(registerUser("Music Festival"));
console.log("Music registrations:", trackMusicRegistrations());
console.log("Music registrations:", trackMusicRegistrations());