const events = [
    { name: "Music Festival", category: "Music" },
    { name: "Sports Meet", category: "Sports" },
    { name: "Rock Concert", category: "Music" }
];

const eventDiv = document.getElementById("events");
const searchBox = document.getElementById("searchBox");

function displayEvents(eventList) {
    eventDiv.innerHTML = "";

    eventList.forEach(event => {
        eventDiv.innerHTML += `
            <p>
                ${event.name} - ${event.category}
                <button onclick="register('${event.name}')">Register</button>
            </p>
        `;
    });
}

function register(eventName) {
    alert(eventName + " registered successfully!");
}

function filterEvents() {
    const category = document.getElementById("categoryFilter").value;

    if (category === "All") {
        displayEvents(events);
    } else {
        displayEvents(events.filter(event => event.category === category));
    }
}

searchBox.addEventListener("keydown", function () {
    const searchText = searchBox.value.toLowerCase();

    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(searchText)
    );

    displayEvents(filtered);
});

displayEvents(events);