const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.calculator-screen');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') { // Botão de limpar
      console.log('Clear button clicked'); // Debugging line
      currentInput = '';
      previousInput = '';
      operator = '';
      screen.value = ''; // Limpa a tela
      return; // Finaliza o processamento do evento
    }

    if (value === '=') { // Botão de resultado
      if (currentInput && operator && previousInput) {
        try {
          screen.value = eval(`${previousInput} ${operator} ${currentInput}`);
          currentInput = screen.value;
          operator = '';
          previousInput = '';
        } catch (error) {
          screen.value = 'Erro';
          currentInput = '';
          operator = '';
          previousInput = '';
        }
      }
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) { // Operadores
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
      return;
    }

    // Entrada de números e ponto
    currentInput += value;
    screen.value = currentInput;
  });
});