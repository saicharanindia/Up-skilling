let events = [
    { name: "Music Festival", category: "Music" },
    { name: "Food Fair", category: "Food" }
];

events.push({
    name: "Rock Concert",
    category: "Music"
});

let musicEvents = events.filter(event => event.category === "Music");

let eventCards = musicEvents.map(event => {
    return `Workshop on ${event.name}`;
});

let output = document.getElementById("output");

eventCards.forEach(card => {
    output.innerHTML += `<p>${card}</p>`;
});