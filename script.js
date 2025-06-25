let display = document.getElementById('display');
let currentInput = '';
let hasDecimal = false;

function appendNumber(number) {
  if (currentInput === '0') currentInput = '';
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1); // Replace operator
  }
  currentInput += operator;
  hasDecimal = false;
  updateDisplay();
}

function appendDot() {
  if (hasDecimal) return;
  currentInput += '.';
  hasDecimal = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  hasDecimal = false;
  display.textContent = '0';
}

function backspace() {
  if (currentInput.length > 0) {
    const removed = currentInput.slice(-1);
    currentInput = currentInput.slice(0, -1);
    if (removed === '.') hasDecimal = false;
    updateDisplay();
  }
  if (currentInput === '') display.textContent = '0';
}

function appendPercentage() {
  if (currentInput === '') return;
  try {
    let value = eval(currentInput);
    value = value / 100;
    currentInput = value.toString();
    display.textContent = currentInput;
    hasDecimal = currentInput.includes('.');
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
    hasDecimal = currentInput.includes('.');
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}
