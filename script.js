// Show the counter section
const showCounter = () => {
    document.querySelector('.counter').style.display = 'flex';
};

// Hide the counter section
const cancelCounter = () => {
    document.querySelector('.counter').style.display = 'none';
};

// Countdown logic
const countDown = () => {
    let countDownDate = new Date('2025-02-08').getTime(); // Target date
    let now = new Date().getTime(); // Current date
    let difference = countDownDate - now; // Time difference in milliseconds

    if (difference <= 0) {
        // If the countdown is over
        document.getElementById('theDay').style.display = 'block';
        document.getElementById('theDay').innerHTML = "It's your day, HML R&N!!!";
        document.querySelector('.showCounter').style.display = 'none'; // Hide counter
        return; // Stop the function
    }

    // Calculate time units
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
};

// Call the countdown every second
setInterval(countDown, 1000);

// WhatsApp button functionality
document.getElementById('whatsappButton').addEventListener('click', function () {
    const phoneNumber = '+2349029789731'
    
    const message = encodeURIComponent("Congratulations on your wedding! May your journey together be filled with endless love, laughter, and happiness. Wishing you both a lifetime of beautiful moments, shared dreams, and unwavering support for each other. Cheers to your forever!");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});
