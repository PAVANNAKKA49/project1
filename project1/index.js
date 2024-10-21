function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the degree of rotation for each hand
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;

    // Rotate the hands to match the time
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;

    // Update the digital clock
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('digitalClock').textContent = formattedTime;
}

// Function to format the time for digital clock display
function formatTime(hours, minutes, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
