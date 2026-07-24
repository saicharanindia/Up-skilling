const events = [
    "Music Festival",
    "Food Fair",
    "Sports Meet"
];

const container =
document.querySelector("#eventContainer");

events.forEach(event => {

    let card = document.createElement("div");

    card.innerHTML = `
        <h3>${event}</h3>
        <button onclick="registerEvent(this)">
            Register
        </button>

        <button onclick="cancelEvent(this)">
            Cancel
        </button>
    `;

    container.appendChild(card);
});

function registerEvent(button) {

    button.parentElement.innerHTML +=
    "<p style='color:green'>Registered Successfully</p>";
}

function cancelEvent(button) {

    button.parentElement.innerHTML +=
    "<p style='color:red'>Registration Cancelled</p>";
}