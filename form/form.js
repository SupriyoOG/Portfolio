function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-theme');
        updateThemeIcons();
        updateBodyBackground();
}

function updateThemeIcons() {
        const themeIcons = document.querySelectorAll('.theme i');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        themeIcons.forEach(icon => {
                icon.classList.toggle('fa-moon', !isDarkTheme);
                icon.classList.toggle('fa-sun', isDarkTheme);
        });
}

function updateBodyBackground() {
        const body = document.body;
        const form = document.querySelector('.form');
        const inputs = document.querySelectorAll('.form input');
        const textarea = document.querySelector('.form textarea');
        const submitButton = document.querySelector('.form input[type="submit"]');
        const isDarkTheme = body.classList.contains('dark-theme');
        const backgroundColor = isDarkTheme ? 'black' : '#f8f9fa';
        const textColor = isDarkTheme ? '#fff' : 'black';
        body.style.backgroundColor = backgroundColor;
        body.style.color = textColor;
        form.style.backgroundColor = backgroundColor;
        textarea.style.backgroundColor = backgroundColor;
        textarea.style.color = textColor;
        inputs.forEach(input => {
                input.style.backgroundColor = backgroundColor;
                input.style.color = textColor;
        });
        submitButton.style.backgroundColor = '#007bff';
        submitButton.style.color = '#fff';
}

const themeIcons = document.querySelectorAll('.theme i');
themeIcons.forEach(icon => {
        icon.addEventListener('click', toggleTheme);
});

document.getElementById('thoughtsForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const inputs = document.querySelectorAll('.form input');
        const textarea = document.querySelector('.form textarea');
        const infoText = document.getElementById('info');

        let isValid = true;

        inputs.forEach(input => {
                if (input.hasAttribute('required') && input.value.trim() === '') {
                        input.style.borderColor = 'red';
                        isValid = false;
                } else {
                        input.style.borderColor = '';
                }
        });

        if (textarea.hasAttribute('required') && textarea.value.trim() === '') {
                textarea.style.borderColor = 'red';
                isValid = false;
        } else {
                textarea.style.borderColor = '';
        }

        if (isValid) {
                infoText.innerHTML = 'Form Submitted Successfully!';
        }
});

updateThemeIcons();
updateBodyBackground();