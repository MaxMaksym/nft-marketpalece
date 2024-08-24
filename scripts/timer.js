function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.querySelector('#hours').textContent = hours;
        display.querySelector('#minutes').textContent = minutes;
        display.querySelector('#seconds').textContent = seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    let duration = 60 * 60 * 60; // Таймер на 60 годин (в секундах)
    let display = document.querySelector('.timer');
    startTimer(duration, display);
};
