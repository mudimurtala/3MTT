document.getElementById('my_form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    clearErrors();
    
    let isValid = true;

    if (!email.includes('@') || !email.includes('.')) {
        showError('Please enter a valid email address that contains "@" and "."', 'email');
        isValid = false;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters long.', 'password');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(message, inputId) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.innerText = message;
    
    const inputField = document.getElementById(inputId);
    const parent = inputField.parentNode;
    parent.insertBefore(errorElement, inputField);
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(function(error) {
        error.remove();
    });
}
