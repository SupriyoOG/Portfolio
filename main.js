const info = document.getElementById('info');
const projectBtn = document.getElementById('projectBtn');


projectBtn.addEventListener('mouseover', () => {
        info.style.transform = 'translate(0)';
});

projectBtn.addEventListener('mouseout', () => {
        info.style.transform = 'translate(-100vh) rotate(60deg) skew(50deg)';
});



document.querySelector('.thoughts-page').addEventListener('click', function() {
        window.location.href = 'form/form.html';
});

function checkInternet() {
        const divInternet = document.getElementById('internet');

        if (!navigator.onLine) {
                divInternet.style.transform = 'translate(-50%, 0)';
                if (alert('No internet? Click to retry:'))
                {
                        window.reload();
                }

        } else {
                divInternet.style.transform = 'translate(-50%, -100vh)';
        }
}

window.addEventListener('online', checkInternet);
window.addEventListener('offline', checkInternet);

checkInternet();