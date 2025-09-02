
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
                        } else {
                    clearInterval(countdownInterval);
                    
                    // Fade out countdown
                    countdownEl.style.opacity = '0';
                    
                    setTimeout(() => {
                        countdownEl.classList.add('hidden');
                        // FINAL BURST
                        createSparkles(150); // The big explosion
                        createRibbons(60);   // The big explosion
                         // Show main content after a short delay
                        setTimeout(() => {
                            mainContent.style.pointerEvents = 'auto';
                            mainContent.style.opacity = '1';
                            mainContent.querySelector('h1').style.opacity = '1';
                            mainContent.querySelector('p').style.opacity = '1';
                            mainContent.querySelector('h1').classList.add('animate-drop-in');
                            mainContent.querySelector('p').classList.add('animate-fade-in-up');
                        }, 500);
                         // Show the next page button after another delay
                        setTimeout(() => {
                            nextPageBtn.style.transition = 'opacity 1s ease-out';
                            nextPageBtn.style.opacity = '1';
                        }, 2500);

                    }, 500); // Wait for the fade out to finish
                }
            }, 1000);
        }