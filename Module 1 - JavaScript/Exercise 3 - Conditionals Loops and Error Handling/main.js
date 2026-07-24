const events = [
    { name: "Music Festival", seats: 20 },
    { name: "Food Fair", seats: 0 },
    { name: "Sports Meet", seats: 15 }
];

const eventContainer =
document.getElementById("events");

events.forEach(event => {

    if (event.seats > 0) {

        eventContainer.innerHTML +=
        `<p>${event.name} - Seats Available: ${event.seats}</p>`;
    }
    else {

        eventContainer.innerHTML +=
        `<p>${event.name} - Registration Closed</p>`;
    }
});

function registerEvent(eventName) {

    try {

        if (!eventName) {
            throw new Error(
                "Invalid Event Name"
            );
        }

        console.log(
            `${eventName} registration successful`
        );
    }

    catch(error) {

        console.error(
            "Registration Error:",
            error.message
        );
    }
}

registerEvent("Music Festival");
registerEvent("");
