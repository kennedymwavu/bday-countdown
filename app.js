const timeLeft = document.getElementById("time-left");

const birthday = new Date("11/27/2022");

// friends bds:
const birthdays = {
    "mwavu_bd": "11/27/2022", "ayoo_bd": "01/22/2022", "lazarus_bd": "10/05/2022", 
    "joy_bd": "08/24/2022", "evans_bd": "05/10/2022", "rachael_bd": "08/24/2022", 
    "collins_bd": "10/20/2022", "nelvine_bd": "07/30/2022", "brenda_bd": "02/27/2022"
};

// convert from strings to dates:
for (let name in birthdays) {
    birthdays[name] = new Date(birthdays[name]);
}

// in milliseconds:
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let timerId;
let friendIds;

// function to countdown in milliseconds:
function countDown() {
    const today = new Date();
    
    for (let friendId in birthdays) {
        const timeSpan = birthdays[friendId] - today;
        

    // if `timeSpan` <= a whole day, it's no longer my birthday:
    if (timeSpan <= -day) {
        document.getElementById(friendId).innerHTML = "Hope you had a great birthday!";

        // clearInterval(timerId);

        // return;
        continue;
    }
    
    // if `timeSpan` <= 0, it's my birthday:
    if (timeSpan <= 0) {
        // show happy birthday:
        document.getElementById(friendId).innerHTML = "Happy Birthday!!!"
        
        // clear timer:
        // clearInterval(timerId);

        // return out of this:
        // return;
    }

    // get remaining time in days, hours, mins, secs:
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    document.getElementById(friendId).innerHTML = days + " days <br/>" + hours + " hours <br/>" + minutes + " minutes <br/>" + seconds + " seconds"
    }
}

// execute `countDown()` every second:
timerId = setInterval(countDown, second);


// ----style grid elements----
friendIds = {
    "mwavu_bd": "blue", "ayoo_bd": "rgb(7 135 123)", "lazarus_bd": "green", 
    "joy_bd": "#ff5722", "evans_bd": "#607d8b", "rachael_bd": "orange", 
    "collins_bd": "violet", "nelvine_bd": "indigo", "brenda_bd": "#181616"
};
    
// function to change background-color of a given html class:
function changeBg(friendIds) {
    for (friend in friendIds) {
        // remove underscore from name to get the real id:
        let realId = friend.split("_")[0];
        // change backgroundColor:
        document.getElementById(realId).style.backgroundColor = friendIds[friend];
    }
}

changeBg(friendIds);
