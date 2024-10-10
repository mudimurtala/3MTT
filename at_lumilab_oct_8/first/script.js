document.getElementById('my_form').addEventListener('submit', function(event) {
    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Clear any previous error messages
    clearErrors();
    
    let isValid = true; // To track the validation status

    // Email validation (simple check for @ and .)
    if (!email.includes('@') || !email.includes('.')) {
        showError('Please enter a valid email address that contains "@" and "."', 'email');
        isValid = false; // Set the form as invalid
    }
    
    // Password validation (check if it's empty or less than 6 characters)
    if (password.length < 6) {
        showError('Password must be at least 6 characters long.', 'password');
        isValid = false; // Set the form as invalid
    }

    if (!isValid) {
        event.preventDefault(); // Prevent the form from submitting if there are errors
    }
});

function showError(message, inputId) {
    // Create a new error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.innerText = message;
    
    // Find the input element and insert the error message above it
    const inputField = document.getElementById(inputId);
    const parent = inputField.parentNode; // Get the parent element of the input field
    parent.insertBefore(errorElement, inputField); // Insert the error message before the input field
}

function clearErrors() {
    // Remove any existing error messages
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(function(error) {
        error.remove();
    });
}
