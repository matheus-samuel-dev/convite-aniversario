const eventDate = new Date("July 25, 2026 12:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        days.toString().padStart(2, "0");

    document.getElementById("hours").textContent =
        hours.toString().padStart(2, "0");

    document.getElementById("minutes").textContent =
        minutes.toString().padStart(2, "0");

    document.getElementById("seconds").textContent =
        seconds.toString().padStart(2, "0");

    if (distance < 0) {

        clearInterval(interval);

        document.getElementById("countdown").innerHTML =
            "<h2>🎉 O aniversário começou! 🎉</h2>";
    }
}

updateCountdown();

const interval = setInterval(updateCountdown, 1000);