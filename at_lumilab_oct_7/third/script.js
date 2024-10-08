function showPopup() {
    // Step 1: Prompt the user for the first number
    let firstNumber = prompt("Please enter your first number:");
    firstNumber = parseFloat(firstNumber); // Convert the input to a number

    // Step 2: Prompt the user for the operator
    let operator = prompt("Please enter the operator (+, -, *, /):");

    // Step 3: Prompt the user for the second number
    let secondNumber = prompt("Please enter your second number:");
    secondNumber = parseFloat(secondNumber); // Convert the input to a number

    // Step 4: Perform the calculation based on the operator
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
        return; // Exit the function if the operator is invalid
    }

    // Step 5: Display the result
    alert("The result of " + firstNumber + " " + operator + " " + secondNumber + " is equal to: " + result);
}
