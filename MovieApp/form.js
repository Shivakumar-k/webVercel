document.addEventListener('DOMContentLoaded', () => {
    const alertBox = document.querySelector('.alert-box');
    const alertMessage = document.querySelector('.alert');

    function showAlert(message) {
        alertMessage.textContent = message;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    const loginForm = document.querySelector('.heading').textContent === 'Login';
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;

        if (loginForm) {
            // Login logic
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                localStorage.setItem('loggedInUser', email);
                window.location.href = 'home.html'; 
            } else {
                showAlert('Invalid email or password');
            }
        } else {
            // Registration logic
            const name = document.querySelector('.name').value;
            if (localStorage.getItem(email)) {
                showAlert('Email already exists');
            } else {
                const user = { name, email, password };
                localStorage.setItem(email, JSON.stringify(user));
                localStorage.setItem('loggedInUser', email);
                window.location.href = 'index.html'; 
            }
        }
    });
});



