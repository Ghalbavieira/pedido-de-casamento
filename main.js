
        // Criar corações flutuantes de fundo
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 6)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.getElementById('floatingHearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 20000);
        }

        for(let i = 0; i < 25; i++) {
            setTimeout(() => createFloatingHeart(), i * 400);
        }
        
        setInterval(() => createFloatingHeart(), 2000);

        // Funções interativas
        function createBurst() {
            for(let i = 0; i < 10; i++) {
                setTimeout(() => createHeart(), i * 50);
            }
        }

        function createHeartBurst() {
            for(let i = 0; i < 15; i++) {
                setTimeout(() => createHeart(), i * 30);
            }
        }

        function createStarBurst() {
            for(let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const star = document.createElement('div');
                    star.className = 'heart';
                    star.innerHTML = '⭐';
                    star.style.left = Math.random() * 100 + '%';
                    document.getElementById('hearts').appendChild(star);
                    setTimeout(() => star.remove(), 4000);
                }, i * 40);
            }
        }

        function createPhotoBurst() {
            const emojis = ['📷', '💑', '🌅', '❤️', '🌹', '🎭'];
            for(let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const photo = document.createElement('div');
                    photo.className = 'heart';
                    photo.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                    photo.style.left = Math.random() * 100 + '%';
                    document.getElementById('hearts').appendChild(photo);
                    setTimeout(() => photo.remove(), 4000);
                }, i * 40);
            }
        }

        function createLoveBurst() {
            const loveEmojis = ['💕', '💖', '💗', '💝', '💘'];
            for(let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const love = document.createElement('div');
                    love.className = 'heart';
                    love.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                    love.style.left = Math.random() * 100 + '%';
                    document.getElementById('hearts').appendChild(love);
                    setTimeout(() => love.remove(), 4000);
                }, i * 30);
            }
        }

        function createMiniCelebration(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            for(let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    const colors = ['#ff6b9d', '#c06c84', '#f8b195', '#ffd93d', '#6bcf7f'];
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = (rect.left + rect.width / 2) + 'px';
                    confetti.style.top = rect.top + 'px';
                    confetti.style.position = 'fixed';
                    document.body.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 4000);
                }, i * 50);
            }
        }

        function photoClick(element) {
            element.style.transform = 'scale(1.3) rotate(720deg)';
            setTimeout(() => {
                element.style.transform = '';
            }, 600);
            
            for(let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    heart.innerHTML = '💕';
                    heart.style.left = Math.random() * 100 + '%';
                    document.getElementById('hearts').appendChild(heart);
                    setTimeout(() => heart.remove(), 4000);
                }, i * 30);
            }
        }

        function cardClick(element) {
            element.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                element.style.transform = '';
            }, 500);
            
            for(let i = 0; i < 8; i++) {
                setTimeout(() => createHeart(), i * 40);
            }
        }

        function sparkleClick() {
            for(let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'heart';
                    sparkle.innerHTML = '✨';
                    sparkle.style.left = Math.random() * 100 + '%';
                    document.getElementById('hearts').appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 3000);
                }, i * 50);
            }
        }

        function ringClick() {
            for(let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    const colors = ['#ff6b9d', '#c06c84', '#ffd93d', '#6bcf7f', '#fff'];
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = '50%';
                    confetti.style.top = '30%';
                    confetti.style.position = 'fixed';
                    document.body.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 4000);
                }, i * 30);
            }
        }

        function celebrate() {
            const btn = document.querySelector('.btn-yes');
            btn.style.display = 'none';
            
            // Explosão ÉPICA de corações
            for(let i = 0; i < 150; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 30);
            }
            
            // Chuva de confetes coloridos
            for(let i = 0; i < 300; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 15);
            }
            
            // Adicionar emojis extras
            const celebrationEmojis = ['🎉', '🎊', '✨', '💫', '⭐', '🌟'];
            for(let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const emoji = document.createElement('div');
                    emoji.className = 'heart';
                    emoji.innerHTML = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                    emoji.style.left = Math.random() * 100 + '%';
                    emoji.style.fontSize = (Math.random() * 2 + 2) + 'em';
                    document.getElementById('hearts').appendChild(emoji);
                    setTimeout(() => emoji.remove(), 5000);
                }, i * 50);
            }
            
            // Mostrar mensagem final
            setTimeout(() => {
                document.getElementById('finalMessage').style.display = 'block';
            }, 2500);
            
            // Scroll suave
            setTimeout(() => {
                document.getElementById('finalMessage').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 3000);
        }
        
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘', '💞'];
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heart.style.fontSize = (Math.random() * 2 + 2) + 'em';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }
        
        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            const colors = ['#ff6b9d', '#c06c84', '#f8b195', '#355c7d', '#ffd93d', '#6bcf7f', '#fff', '#ff85a2'];
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.position = 'fixed';
            confetti.style.boxShadow = '0 0 15px ' + confetti.style.background;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }

        // Easter egg: Apertar teclas especiais
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            if(konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if(JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                superCelebration();
                konamiCode = [];
            }
        });

        function superCelebration() {
            for(let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createHeart();
                    createConfetti();
                    createConfetti();
                }, i * 20);
            }
        }

        let lastParticleTime = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if(now - lastParticleTime > 200) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = e.clientX + 'px';
                particle.style.top = e.clientY + 'px';
                particle.style.fontSize = '1.5em';
                particle.innerHTML = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
                particle.style.pointerEvents = 'none';
                particle.style.animation = 'sparkle 1s ease-out forwards';
                particle.style.zIndex = '9999';
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1000);
                lastParticleTime = now;
            }
        });