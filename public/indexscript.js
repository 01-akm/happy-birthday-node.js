
        const mainContent = document.getElementById('main-content');
        const effectContainer = document.getElementById('effect-container');
        const nextPageBtn = document.getElementById('next-page-btn');
        const countdownEl = document.getElementById('countdown');
        const startScreen = document.getElementById('start-screen');
        const startBtn = document.getElementById('start-btn');

        function startExperience() {
             // Start the music immediately!
            const audio = document.getElementById('background-music');
            if (audio.paused) {
                audio.play().catch(e => console.error("Audio play failed:", e));
            }
 // Show and start the countdown
            countdownEl.classList.remove('hidden');
            let count = 10;
            countdownEl.textContent = count;
            
            const countdownInterval = setInterval(() => {
                count--;
                if (count > 0) {
                    countdownEl.textContent = count;
                      createSparkles(25); // Mini sparkle burst
                        createRibbons(10);  // Mini ribbon burst