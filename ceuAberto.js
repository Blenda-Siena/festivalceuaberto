// Navigation using url fragments

// Countdown -> use 10/07 as ref date
var countDownTimestamp = new Date('2021-07-10T16:00:00-03:00').getTime();
var msInAMinute = 1000 * 60;
var msInAnHour = msInAMinute * 60;
var msInADay = msInAnHour * 24;

function zeroFill(input) {
    if (input < 10) {
        return '0' + String(input)
    }
    return input;
}

var countDown = setInterval(function () {
    var currentTimestamp = new Date().getTime();
    var distance = countDownTimestamp - currentTimestamp;

    var days = Math.floor(distance / msInADay);
    var hours = Math.floor(distance % msInADay / msInAnHour);
    var minutes = Math.floor(distance % msInAnHour / msInAMinute);
    var seconds = Math.floor(distance % msInAMinute / 1000);

    if (distance < 0) {
        // Já está rolando o festival
        document.getElementsByClassName('countdown').css({ display: none });
        clearInterval(countDown);
        return;
    }
    document.getElementById('countdown-days').innerText = zeroFill(days);
    document.getElementById('countdown-hours').innerText = zeroFill(hours);
    document.getElementById('countdown-minutes').innerText = zeroFill(minutes);
    document.getElementById('countdown-seconds').innerText = zeroFill(seconds);

}, 1000);

// Save data to lambda