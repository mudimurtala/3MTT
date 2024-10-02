var form = document.getElementById('my_form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    if (email == '') {
        emailInput.style.border = '3px solid red';
    } else {
        emailInput.style.border = '3px solid green';
    }

    if (password == '') {
        passwordInput.style.border = '3px solid red';
    } else {
        passwordInput.style.border = '3px solid green';
    }
})