const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/%.';
  if (allowedKeys.includes(e.key)) {
    currentInput += e.key;
  } else if (e.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === 'Escape') {
    currentInput = '';
  }
  display.value = currentInput;
});
