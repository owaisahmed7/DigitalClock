function updateClock() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.toLocaleString('default', { month: 'long' });
    let day = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Determine AM/PM
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight

    // Add leading zero if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let dateString = day + " " + month + " , " + year;
    let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

    var digitalClockElement = document.getElementById("digital-clock");
    digitalClockElement.innerHTML = "<strong>" + dateString + "</strong><br>" + timeString ;
}

setInterval(updateClock, 1000);

updateClock();