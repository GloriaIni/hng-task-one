const utcTime = document.getElementById('time');
const utcDay = document.getElementById('day');


function updateUTCTimeAndDay() {
    const now = new Date();

    const utcTimeString = now.toISOString().slice(11, 19);

    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const utcDayString = daysOfTheWeek[now.getUTCDay()];

    
    utcTime.textContent = utcTimeString;
    utcDay.textContent = utcDayString;
}

updateUTCTimeAndDay();

setInterval(updateUTCTimeAndDay, 1000);
