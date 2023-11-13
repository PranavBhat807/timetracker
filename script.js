var Starter = document.getElementById('Starter');
var Stopper = document.getElementById('Stopper'); 
var WaitStart = document.getElementById('WaitStart');
var WaitStop = document.getElementById('WaitStop');

var startTime;
var endTime;
var waitelapsedFormattedTime

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

    Stopper.innerHTML = `Total working hours ${elapsedFormattedTime} and waiting time ${waitelapsedFormattedTime}`;
    console.log('Elapsed Time:', elapsedFormattedTime);
});

WaitStart.addEventListener('click', function () {
    WaitStop.style.display = 'inline-block';
    // Record the start time
    waitStartTime = new Date();
    // You can use the startTime variable for further processing or storage
    var hours = waitStartTime.getHours();
    var minutes = waitStartTime.getMinutes();
    var seconds = waitStartTime.getSeconds();

    // Display or use the extracted time as needed
    var waitstartFormattedTime = hours + ':' + minutes + ':' + seconds;
    window.alert("Waiting time started")
    
});

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

    waitelapsedFormattedTime = waitelapsedHours + ':' + waitelapsedMinutes + ':' + waitelapsedSeconds;

    console.log('WaitElapsed Time:', waitelapsedFormattedTime);
});