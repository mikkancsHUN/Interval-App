const navIcon = document.querySelector('.nav-icon');
const navbar = document.querySelector('.navbar');
const spans = document.querySelectorAll('.nav-icon span');
const navItems = document.querySelectorAll('.navbar li');

// NavIcon kattintás
navIcon.addEventListener('click', () => {

    anime({
        targets: '.navbar__item',
        translateX: -200,
        duration: 0,
        opacity: 0
    });

    anime({
        targets: '.navbar__item',
        translateX: 0,
        delay: anime.stagger(100),
        opacity: 1
    });

    navbar.classList.toggle('open');
    spans.forEach(span => {
        if (navbar.classList.contains('open')) {
            span.style.background = 'white';

        } else {
            span.style.background = 'black';
        }
    });
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove('open');

        spans.forEach(span => {
            span.style.background = 'black';
        });
    });
});

// Nav Li Navigation
document.querySelector('#navSet').addEventListener('click', () => {
    setTimerSec.classList.remove('hide');
    analogSec.classList.add('hide');
    digitalSec.classList.add('hide');
})
document.querySelector('#navAn').addEventListener('click', () => {
    setTimerSec.classList.add('hide');
    analogSec.classList.remove('hide');
    digitalSec.classList.add('hide'); 
})
document.querySelector('#navDig').addEventListener('click', () => {
    setTimerSec.classList.add('hide');
    analogSec.classList.add('hide');
    digitalSec.classList.remove('hide');
})


// Section Animations
const loadingSec = document.querySelector('.loading-section');
const setTimerSec = document.querySelector('.set-timer-section');
const analogSec = document.querySelector('.analog-timer-section');
const digitalSec = document.querySelector('.digital-timer-section');

document.querySelector('#loadingBtn').addEventListener('click', () => {
    setTimerSec.classList.remove('hide');
    loadingSec.classList.add('hide');
})
document.querySelector('#setTimer').addEventListener('click', () => {
    analogSec.classList.remove('hide');
    setTimerSec.classList.add('hide');
})
document.querySelector('#abortBtnAnalog').addEventListener('click', () => {
    analogSec.classList.add('hide');
    setTimerSec.classList.remove('hide');
})
document.querySelector('#abortBtnDigital').addEventListener('click', () => {
    digitalSec.classList.add('hide');
    setTimerSec.classList.remove('hide');
})

// Alarm View
const alarmView = document.querySelector('.alarm-view-section');
const setNewTimerBtn = document.querySelector('.alarm-view__btn');

setNewTimerBtn.addEventListener('click', () => {
    alarmView.classList.add('hide');
    setTimerSec.classList.remove('hide');
})