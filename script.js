const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const nextRamadan = '13 Apr 2021';

function countdown() {
    const nextRamadanDate = new Date(nextRamadan);
    const currentDate = new Date();
    const diff = nextRamadanDate - currentDate;
    const diffPlussOne = addDays(diff, 1);

    const seconds = Math.floor(diffPlussOne / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor(seconds / 3600 % 24);
    const minutes = Math.floor(seconds / 60) % 60;
    const secondsLeft = seconds % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(secondsLeft);
    console.log(days, hours, minutes, secondsLeft);
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);