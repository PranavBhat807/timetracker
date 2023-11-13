var Starter = document.getElementById('Starter');
var Stopper = document.getElementById('Stopper');
var WaitStart = document.getElementById('WaitStart');
var WaitStop = document.getElementById('WaitStop');
var Reset = document.getElementById('Reset');

var startTime;
var endTime;
var waitelapsedFormattedTime = 0; // Initialize wait time to zero
var stored = 0;
var waitStartTime;
var waitStopTime;

// Add an event listener to the button
Starter.addEventListener('click', function () {
    WaitStart.style.display = 'inline-block';
    Stopper.style.display = 'inline-block';
    // Record the start time
    startTime = new Date();
    // You can use the startTime variable for further processing or storage
    var hours = startTime.getHours();
    var minutes = startTime.getMinutes();
    var seconds = startTime.getSeconds();

    // Display or use the extracted time as needed
    var startFormattedTime = hours + ':' + minutes + ':' + seconds;

    window.alert("Recording started");
});

Stopper.addEventListener('click', function () {
    endTime = new Date();

    var endHours = endTime.getHours();
    var endMinutes = endTime.getMinutes();
    var endSeconds = endTime.getSeconds();

    // Display or use the extracted time as needed
    var endFormattedTime = endHours + ':' + endMinutes + ':' + endSeconds;

    // Calculate the time difference in milliseconds
    var timeDifference = endTime.getTime() - startTime.getTime();

    // Convert the time difference to a formatted time (hours:minutes:seconds)
    var elapsedTime = new Date(timeDifference);
    var elapsedHours = elapsedTime.getUTCHours();
    var elapsedMinutes = elapsedTime.getUTCMinutes();
    var elapsedSeconds = elapsedTime.getUTCSeconds();

    var elapsedFormattedTime = elapsedHours + ':' + elapsedMinutes + ':' + elapsedSeconds;

    Stopper.innerHTML = `Total working hours ${elapsedFormattedTime} and waiting time ${stored}`;
    console.log('Elapsed Time:', elapsedFormattedTime);
});

WaitStart.addEventListener('click', function () {
    WaitStop.style.display = 'inline-block';

    if (waitStartTime) {
        // If waitStartTime exists, calculate the time elapsed and add it to waitelapsedFormattedTime
        var waittimeDifference = new Date().getTime() - waitStartTime.getTime();
        var waitelapsedTime = new Date(waittimeDifference);
        var waitelapsedHours = waitelapsedTime.getUTCHours();
        var waitelapsedMinutes = waitelapsedTime.getUTCMinutes();
        var waitelapsedSeconds = waitelapsedTime.getUTCSeconds();

        waitelapsedFormattedTime += waitelapsedHours * 3600 + waitelapsedMinutes * 60 + waitelapsedSeconds;
    }

    // Record the start time
    waitStartTime = new Date();
    // You can use the startTime variable for further processing or storage
    var hours = waitStartTime.getHours();
    var minutes = waitStartTime.getMinutes();
    var seconds = waitStartTime.getSeconds();

    // Display or use the extracted time as needed
    var waitstartFormattedTime = hours + ':' + minutes + ':' + seconds;
    window.alert("Waiting time started");
});

function formatTime(hours, minutes, seconds) {
    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );
}

WaitStop.addEventListener('click', function () {
    // Record the start time
    waitStopTime = new Date();
    // You can use the startTime variable for further processing or storage
    var hours = waitStopTime.getHours();
    var minutes = waitStopTime.getMinutes();
    var seconds = waitStopTime.getSeconds();

    // Display or use the extracted time as needed
    var waitstopFormattedTime = hours + ':' + minutes + ':' + seconds;

    var waittimeDifference = waitStopTime.getTime() - waitStartTime.getTime();

    // Convert the time difference to a formatted time (hours:minutes:seconds)
    var waitelapsedTime = new Date(waittimeDifference);
    var waitelapsedHours = waitelapsedTime.getUTCHours();
    var waitelapsedMinutes = waitelapsedTime.getUTCMinutes();
    var waitelapsedSeconds = waitelapsedTime.getUTCSeconds();

    waitelapsedFormattedTime += waitelapsedHours * 3600 + waitelapsedMinutes * 60 + waitelapsedSeconds;

    stored = ('WaitElapsed Time:', formatTime(waitelapsedHours, waitelapsedMinutes, waitelapsedSeconds));
});
