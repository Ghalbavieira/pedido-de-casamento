 // Carrossel de fotos
        const carouselStates = {};

        function changeSlide(carouselId, direction) {
            const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
            const images = carousel.querySelectorAll('.carousel-image');
            const dots = carousel.querySelectorAll('.carousel-dot');
            
            if (!carouselStates[carouselId]) {
                carouselStates[carouselId] = 0;
            }
            
            images[carouselStates[carouselId]].classList.remove('active');
            dots[carouselStates[carouselId]].classList.remove('active');
            
            carouselStates[carouselId] = (carouselStates[carouselId] + direction + images.length) % images.length;
            
            images[carouselStates[carouselId]].classList.add('active');
            dots[carouselStates[carouselId]].classList.add('active');
        }

        function goToSlide(carouselId, index) {
            const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
            const images = carousel.querySelectorAll('.carousel-image');
            const dots = carousel.querySelectorAll('.carousel-dot');
            
            if (carouselStates[carouselId] !== undefined) {
                images[carouselStates[carouselId]].classList.remove('active');
                dots[carouselStates[carouselId]].classList.remove('active');
            }
            
            carouselStates[carouselId] = index;
            images[index].classList.add('active');
            dots[index].classList.add('active');
        }

        // Abrir caixa de presente
        function openGift() {
            const giftBox = document.getElementById('giftBox');
            const proposalContent = document.getElementById('proposalContent');
            
            giftBox.classList.add('opening');
            
            setTimeout(() => {
                giftBox.style.display = 'none';
                proposalContent.classList.add('show');
            }, 1000);
        }

        // Criar partículas de fundo
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            document.getElementById('particles').appendChild(particle);
            
            setTimeout(() => particle.remove(), 25000);
        }

        for(let i = 0; i < 50; i++) {
            setTimeout(() => createParticle(), i * 200);
        }

        setInterval(() => createParticle(), 3000);

        // Celebração sofisticada com festa romântica
        function celebrate() {
            const btn = document.querySelector('.btn-answer');
            btn.style.display = 'none';
            
            // Chuva de rosas elegantes
            const roses = ['🌹', '🥀', '💐'];
            for(let i = 0; i < 40; i++) {
                setTimeout(() => {
                    const rose = document.createElement('div');
                    rose.className = 'celebration-particle';
                    rose.innerHTML = roses[Math.floor(Math.random() * roses.length)];
                    rose.style.left = (Math.random() * 100) + '%';
                    rose.style.top = '-10%';
                    rose.style.fontSize = (Math.random() * 2 + 1.5) + 'em';
                    rose.style.position = 'fixed';
                    rose.style.zIndex = '9999';
                    rose.style.pointerEvents = 'none';
                    rose.style.animation = 'rosefall ' + (Math.random() * 2 + 3) + 's ease-out forwards';
                    document.body.appendChild(rose);
                    
                    setTimeout(() => rose.remove(), 5000);
                }, i * 80);
            }
            
            // Explosão de corações elegantes
            const hearts = ['❤️', '💕', '💖', '💗', '💝'];
            for(let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'celebration-particle';
                    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = (Math.random() * 100) + '%';
                    heart.style.top = '-10%';
                    heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
                    heart.style.position = 'fixed';
                    heart.style.zIndex = '9999';
                    heart.style.pointerEvents = 'none';
                    heart.style.animation = 'heartBurst ' + (Math.random() * 2 + 2) + 's ease-out forwards';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 4000);
                }, i * 50);
            }
            
            // Confetes dourados
            for(let i = 0; i < 60; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.left = (Math.random() * 100) + '%';
                    confetti.style.top = '-10px';
                    confetti.style.width = '10px';
                    confetti.style.height = '10px';
                    confetti.style.background = ['#d4af37', '#ffd700', '#fff', '#ff6b9d'][Math.floor(Math.random() * 4)];
                    confetti.style.borderRadius = '50%';
                    confetti.style.pointerEvents = 'none';
                    confetti.style.zIndex = '9999';
                    confetti.style.animation = 'confettiFall ' + (Math.random() * 2 + 3) + 's ease-out forwards';
                    confetti.style.boxShadow = '0 0 10px ' + confetti.style.background;
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 40);
            }
            
            // Sparkles dourados
            for(let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'celebration-particle';
                    sparkle.innerHTML = '✨';
                    sparkle.style.left = (Math.random() * 100) + '%';
                    sparkle.style.top = '-10%';
                    sparkle.style.fontSize = (Math.random() * 1.5 + 1) + 'em';
                    sparkle.style.position = 'fixed';
                    sparkle.style.zIndex = '9999';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.animation = 'sparklePop ' + (Math.random() * 1 + 2) + 's ease-out forwards';
                    document.body.appendChild(sparkle);
                    
                    setTimeout(() => sparkle.remove(), 3000);
                }, i * 70);
            }
            
            // Mostrar mensagem final
            setTimeout(() => {
                const finalMsg = document.getElementById('finalMessage');
                finalMsg.style.display = 'block';
                
                setTimeout(() => {
                    finalMsg.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
            }, 2500);
        }

        // Efeito parallax suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const particles = document.getElementById('particles');
            particles.style.transform = `translateY(${scrolled * 0.3}px)`;
        });