const info = document.getElementById('info');
const projectBtn = document.getElementById('projectBtn');


projectBtn.addEventListener('mouseover', () => {
        info.style.transform = 'translateY(-1800%)';
});

projectBtn.addEventListener('mouseout', () => {
        info.style.transform = 'translateY(-500vh)';
});