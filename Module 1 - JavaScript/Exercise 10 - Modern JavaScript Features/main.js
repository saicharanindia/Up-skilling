const output = document.getElementById("output");

const events = [
    {
        name: "Music Festival",
        date: "25 July 2026",
        category: "Music"
    },
    {
        name: "Sports Meet",
        date: "30 July 2026",
        category: "Sports"
    }
];

/* Default Parameter */

function registerUser(userName = "Guest") {
    return `Welcome ${userName}`;
}

/* Destructuring */

const { name, date, category } = events[0];

/* Spread Operator */

const clonedEvents = [...events];

output.innerHTML += `
<p>${registerUser()}</p>
<p>Event Name: ${name}</p>
<p>Date: ${date}</p>
<p>Category: ${category}</p>
<p>Total Events: ${clonedEvents.length}</p>
`;

console.log(clonedEvents);