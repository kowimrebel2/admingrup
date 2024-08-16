const numParticles = 50;
const particles = [];

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    particles.push(particle);
}

function animateParticles() {
    particles.forEach(particle => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 5 + 3;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDuration = `${duration}s`;
    });
}

animateParticles();
setInterval(animateParticles, 8000);

const fadeInElements = document.querySelectorAll('.fade-in-element');

window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.setProperty('--delay', `${Math.random() * 0.5}s`);
            element.classList.add('fade-in-element');
        }
    });
});
