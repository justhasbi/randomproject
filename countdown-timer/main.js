import "./component/clock.js";
import "./component/title.js";

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");

const newYears = "1 Jan 2021";

const countdown = () => {
    const presentDate = new Date();
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - presentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minuteElement.innerHTML = mins;
    secondElement.innerHTML = seconds;
}
countdown()

setInterval(countdown, 1000);

