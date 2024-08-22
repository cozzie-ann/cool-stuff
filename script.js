let confettiInterval;

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function response(answer) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    if (answer === 'no') {
        popupMessage.textContent = "Wrong!! Try again love";
    } else if (answer === 'yes') {
        popupMessage.textContent = "YAAAYY";
        startConfetti();
        // Hide the popup after displaying the success message
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000); // Delay to allow time for the message to be visible before hiding

        // Remove event listeners to prevent the popup from appearing again
        document.getElementById('envelope').removeEventListener('click', showPopup);
        // Clear the popup content
        document.getElementById('popup').innerHTML = '';
    }
}

function startConfetti() {
    // Start a continuous stream of confetti
    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['circle', 'square', 'heart'], // Adding hearts to the confetti shapes
            colors: ['#ff0000', '#ff9999', '#ffccff']
        });
    }, 1000); // Adjust the interval as needed
}

// Optionally, you can include a function to stop the confetti if desired
function stopConfetti() {
    clearInterval(confettiInterval);
}
 