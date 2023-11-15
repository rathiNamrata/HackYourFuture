let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '' && !isOperator(currentInput.charAt(currentInput.length - 1))) {
        currentInput += operator;
        updateDisplay();
    }
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function clearInput() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function isOperator(char) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(char);
}
