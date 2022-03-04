const timeLeft = document.getElementById("time-left");

const birthday = new Date("11/27/2022");

// in milliseconds:
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let timerId;

// function to countdown in milliseconds:
function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;

    // if `timeSpan` <= a whole day, it's no longer my birthday:
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a great birthday!";

        clearInterval(timerId);

        return;
    }
    
    // if `timeSpan` <= 0, it's my birthday:
    if (timeSpan <= 0) {
        // show happy birthday:
        timeLeft.innerHTML = "Happy Birthday!!!"
        
        // clear timer:
        clearInterval(timerId);

        // return out of this:
        return;
    }

    // get remaining time in days, hours, mins, secs:
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    timeLeft.innerHTML = days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds"
}

// execute `countDown()` every second:
timerId = setInterval(countDown, second);
