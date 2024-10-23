// NavIcon
const navIcon = document.querySelector('.nav-icon');
        const navbar = document.querySelector('.navbar');
        const spans = document.querySelectorAll('.nav-icon span');

        navIcon.addEventListener('click', () => {
            navbar.classList.toggle('open');

            spans.forEach(span => {
                if (navbar.classList.contains('open')) {
                    span.style.background = 'white';
                } else {
                    span.style.background = 'black';
                }
            });
        });

//Set Timer
const decreaseButton = document.querySelector('.decrease');
        const increaseButton = document.querySelector('.increase');
        const span = document.getElementById('counter'); // ID alapján szelektáljuk

        // Kezdőérték
        let timerValue = parseInt(span.textContent, 10);

        // Csökkentés
        decreaseButton.addEventListener('click', () => {
            if (timerValue > 0) { // Ellenőrizzük, hogy 0-nál kisebb legyen-e
                timerValue--;
                span.textContent = timerValue; // Frissítjük a span tartalmát
            }
        });

        // Növelés
        increaseButton.addEventListener('click', () => {
            timerValue++;
            span.textContent = timerValue; // Frissítjük a span tartalmát
        });

