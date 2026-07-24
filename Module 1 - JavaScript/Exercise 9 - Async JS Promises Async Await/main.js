const output = document.getElementById("output");
const loading = document.getElementById("loading");

function fetchEvents() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve([
                "Music Festival",
                "Food Fair",
                "Sports Meet"
            ]);

        }, 2000);

    });
}

/* Using then() and catch() */

fetchEvents()
.then(events => {
    console.log("Events Loaded:", events);
})
.catch(error => {
    console.error(error);
});

/* Using async/await */

async function loadEvents() {

    try {

        const events = await fetchEvents();

        loading.style.display = "none";

        events.forEach(event => {
            output.innerHTML += `<p>${event}</p>`;
        });

    }
    catch(error) {

        loading.innerHTML = "Failed to load events";
    }
}

loadEvents();