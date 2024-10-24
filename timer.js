// Set Timer
let countdown;
let time = 600;
let totalSeconds = time;

const counterElement = document.getElementById('counter');
const timerElement = document.querySelector('.digital-timer-section .timer');
const alarmViewSection = document.querySelector('.alarm-view-section');
const minElement = document.querySelector('.min');
const secElement = document.querySelector('.sec');

const updateDisplay = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    counterElement.textContent = minutes;
};

// Csökkentés gomb
document.querySelector('.decrease').addEventListener('click', () => {
    if (time > 60) {
        time -= 60;
        updateDisplay();
    }
});

// Növelés gomb
document.querySelector('.increase').addEventListener('click', () => {
    time += 60;
    updateDisplay();
});

// Indítás gomb
document.getElementById('setTimer').addEventListener('click', () => {
    clearInterval(countdown);

    // Anime.js animációk a mutatóknak
    const secRotation = 360 * (time / 60);
    const minRotation = 360;

    anime({
        targets: secElement,
        rotate: {
            value: secRotation,
            duration: time * 1000,
            easing: 'linear'
        },
        loop: false
    });

    anime({
        targets: minElement,
        rotate: {
            value: minRotation,
            duration: time * 1000,
            easing: 'linear'
        },
        loop: false
    });

    countdown = setInterval(() => {
        if (time <= 0) {
            clearInterval(countdown);
            alarmViewSection.classList.remove('hide');
            document.querySelector('.set-timer-section').classList.add('hide');
            document.querySelector('.analog-timer-section').classList.add('hide');
            document.querySelector('.digital-timer-section').classList.add('hide');
        } else {
            time--;
            updateDisplay();
        }
    }, 1000);
});

// Abort gomb funkciók
const abortButtons = document.querySelectorAll('.abort-btn');
abortButtons.forEach(button => {
    button.addEventListener('click', () => {
        resetTimer();

        anime.remove(secElement);
        anime.remove(minElement);

        secElement.style.transform = "rotate(0deg)";
        minElement.style.transform = "rotate(0deg)";
    });
});

document.querySelector('.alarm-view__btn').addEventListener('click', () => {
    resetTimer();
});

// Reset Timer funkció
const resetTimer = () => {
    clearInterval(countdown);
    time = 600;
    updateDisplay();
    alarmViewSection.classList.add('hide');
};

updateDisplay();
