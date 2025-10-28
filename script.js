
// Animate all progress bars independently
document.querySelectorAll('.progress-bar').forEach((bar, idx) => {
    const text = bar.parentElement.querySelector('.progress-text');
    let currentCharge = 0;
    const target = parseInt(bar.getAttribute('data-target')) || 100;
    bar.style.width = '0%';
    if (text) text.textContent = '0%';
    const interval = setInterval(() => {
        currentCharge += 5;
        const clamped = Math.min(100, Math.max(0, currentCharge));
        bar.style.width = `${clamped}%`;
        if (text) text.textContent = `${clamped}%`;
        if (clamped >= target) {
            clearInterval(interval);
            bar.style.backgroundColor = '#2196F3';
        }
    }, 500);
});