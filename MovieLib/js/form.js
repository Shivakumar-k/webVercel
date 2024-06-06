// Form loading animation
const formItems = [...document.querySelector('.form').children];

formItems.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

// Redirect to home page if session exists
window.onload = () => {
    if (sessionStorage.name) {
        location.href = '/';
    }
};

// Form validation and submission
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if (nameInput) {
    submitBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        })
            .then(res => res.json())
            .then(data => {
                handleResponse(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
} else {
    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        })
            .then(res => res.json())
            .then(data => {
                handleResponse(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}

// Handle server response
const handleResponse = (data) => {
    if (!data.name) {
        showAlert(data);
    } else {
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';
    }
};

// Display alert message
const showAlert = (message) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = message;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
};
