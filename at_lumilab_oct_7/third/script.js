function showPopup() {
    let firstNumber = prompt("Please enter your first number:");
    firstNumber = parseFloat(firstNumber);

    let operator = prompt("Please enter the operator (+, -, *, /):");

    let secondNumber = prompt("Please enter your second number:");
    secondNumber = parseFloat(secondNumber);

    let result;
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    } else {
        alert("Invalid operator! Please refresh and try again.");
        return;
    }

    alert("The result of " + firstNumber + " " + operator + " " + secondNumber + " is equal to: " + result);
}
