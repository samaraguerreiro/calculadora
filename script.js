const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.calculator-screen');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      screen.value = '';
    } else if (value === '=') {
      if (currentInput && operator && previousInput) {
        screen.value = eval(`${previousInput} ${operator} ${currentInput}`);
        currentInput = screen.value;
        operator = '';
        previousInput = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});
