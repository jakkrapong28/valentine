document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const instruction = document.querySelector('.instruction');

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        
        if(envelope.classList.contains('open')) {
            instruction.style.opacity = '0';
            createConfetti();
        } else {
            instruction.style.opacity = '0.8';
        }
    });
});

function createConfetti() {
    const colors = ['#ff4d6d', '#ff8fa3', '#fff0f3', '#ffd700'];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100 + 'vw';
        const animDuration = Math.random() * 3 + 2 + 's';
        const size = Math.random() * 10 + 5 + 'px';
        
        confetti.style.backgroundColor = bg;
        confetti.style.left = left;
        confetti.style.animationDuration = animDuration;
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.top = '-10px';
        
        // Different shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            confetti.style.transform = 'rotate(45deg)';
        }

        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
