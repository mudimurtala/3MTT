// Variables to store values and operator
let currentInput = '';
let previousInput = '';
let operation = null;

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Function to set the chosen operation (+, -, *, /)
function setOperation(op) {
    if (currentInput === '') return;
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display (C button)
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    document.getElementById('display').value = '';
}

// Function to calculate the result (= button)
function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    document.getElementById('display').value = currentInput;
}
