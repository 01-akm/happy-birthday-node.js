
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

        function createSparkles(count = 150) {
            const sparkleCount = count;
            const colors = ['#ffeb3b', '#ffd700', '#fff59d', '#ffffff'];

            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');

                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * (Math.max(window.innerWidth, window.innerHeight) * 0.6);
                const translateX = Math.cos(angle) * distance;
                const translateY = Math.sin(angle) * distance;

                sparkle.style.setProperty('--sparkle-transform', `translate(${translateX}px, ${translateY}px) scale(0)`);
                sparkle.style.animationDuration = `${1 + Math.random()}s`;
                sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                effectContainer.appendChild(sparkle);
            }
        }

        function createRibbons(count = 60) {
            const ribbonCount = count;
            const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#ff4081', '#448aff'];

            for (let i = 0; i < ribbonCount; i++) {
                const ribbon = document.createElement('div');
                ribbon.classList.add('ribbon-particle');

                const angle = (Math.random() * 360);
                const distance = Math.random() * (Math.min(window.innerWidth, window.innerHeight) * 0.7);
                const translateX = Math.cos(angle * Math.PI / 180) * distance;
                const translateY = Math.sin(angle * Math.PI / 180) * distance;
                const finalRotate = (Math.random() - 0.5) * 1080;

                ribbon.style.setProperty('--initial-rotate', `${(Math.random() - 0.5) * 90}deg`);
                ribbon.style.setProperty('--ribbon-transform', `translate(${translateX}px, ${translateY}px) rotate(${finalRotate}deg) scale(0)`);
                ribbon.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
                ribbon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                effectContainer.appendChild(ribbon);
            }
        }

        // --- CONTINUOUS MUSIC SCRIPT ---
        const audio = document.getElementById('background-music');
        const muteBtn = document.getElementById('mute-btn');
        const speakerIcon = document.getElementById('speaker-icon');
        const muteIcon = document.getElementById('mute-icon');

        function saveMusicState() {
            localStorage.setItem('musicTime', audio.currentTime);
            localStorage.setItem('musicPaused', audio.muted);
        }

        function loadMusicState() {
            const time = localStorage.getItem('musicTime');
            const paused = localStorage.getItem('musicPaused') === 'true';
            
            if (time) {
                audio.currentTime = parseFloat(time);
            }
            
            audio.muted = paused;
            updateMuteButton(paused);

            if (localStorage.getItem('musicPlaying') === 'true' && !paused) {
                 audio.play().catch(e => console.log("Audio needs user interaction to play."));
            }
        }
        
        function updateMuteButton(isMuted) {
             if(isMuted) {
                speakerIcon.classList.add('hidden');
                muteIcon.classList.remove('hidden');
             } else {
                speakerIcon.classList.remove('hidden');
                muteIcon.classList.add('hidden');
             }
        }
        
        muteBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            localStorage.setItem('musicPaused', audio.muted);
            updateMuteButton(audio.muted);
        });

        audio.onplay = () => localStorage.setItem('musicPlaying', 'true');
        audio.onpause = () => {
            if(!audio.muted) localStorage.setItem('musicPlaying', 'false');
        };

        // --- NEW START LOGIC ---
        startBtn.addEventListener('click', () => {
            // Fade out the start screen
            startScreen.style.opacity = '0';
            setTimeout(() => {
                startScreen.classList.add('hidden');
            }, 500); // Match this with the CSS transition duration

            // Start the main experience
            startExperience();
        });

        window.addEventListener('DOMContentLoaded', () => {
            loadMusicState();
            // We no longer start the experience automatically
        });
        window.addEventListener('beforeunload', saveMusicState);
    