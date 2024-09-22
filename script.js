let confettiInterval; // Variable to hold the interval for the confetti effect

function showPopup() {
    const popup = document.getElementById('popup'); // Get the popup element by ID
    popup.style.display = 'block'; // Show the popup by setting its display property to 'block'
}

function response(answer) {
    const popupMessage = document.getElementById('popup-message'); // Get the popup message element by ID

    // Check the user's response
    if (answer === 'no') {
        popupMessage.textContent = "Wrong!! Try again love"; // Update message for 'No' response
    } else if (answer === 'yes') {
        popupMessage.textContent = "YAAAYY"; // Update message for 'Yes' response
        
        // Hide Yes/No buttons
        const buttons = document.querySelectorAll('#popup button'); // Get all buttons in the popup
        buttons.forEach(button => button.style.display = 'none'); // Set each button's display to 'none'

        // Start constant red confetti
        startConfetti(); // Call the function to start confetti effect
    }
}

function startConfetti() {
    // Clear any previous intervals if already running
    if (confettiInterval) clearInterval(confettiInterval); // Stop any existing confetti intervals

    // Start a continuous stream of red confetti
    confettiInterval = setInterval(function () {
        confetti({ // Call the confetti function to generate confetti
            particleCount: 100, // Number of confetti particles
            spread: 70, // Spread angle of the confetti
            origin: { y: 0.6 }, // Starting position of the confetti on the Y-axis
            colors: ['#ff0000']  // Set confetti color to red
        });
    }, 500); // Adjust the interval time to control the frequency of confetti
}
