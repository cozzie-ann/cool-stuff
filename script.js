let confettiInterval;

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function response(answer) {
    const popupMessage = document.getElementById('popup-message');

    if (answer === 'no') {
        popupMessage.textContent = "Wrong!! Try again love";
    } else if (answer === 'yes') {
        popupMessage.textContent = "YAAAYY";
        // Hide Yes/No buttons
        const buttons = document.querySelectorAll('#popup button');
        buttons.forEach(button => button.style.display = 'none');

        // Start constant red confetti
        startConfetti();
    }
}

function startConfetti() {
    // Clear any previous intervals if already running
    if (confettiInterval) clearInterval(confettiInterval);

    // Start a continuous stream of red confetti
    confettiInterval = setInterval(function () {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000']  // Set confetti color to red
        });
    }, 500); // Adjust the interval time to control the frequency of confetti
}
