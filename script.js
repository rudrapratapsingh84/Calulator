const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
  if (currentOperator === null) {
    firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
    display.value = firstOperand;
  } else {
    secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
    display.value = secondOperand;
  }
}

function setOperator(operator) {
  if (firstOperand !== null && secondOperand !== null) {
    calculate();
  }
  currentOperator = operator;
}

function calculate() {
  if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
    let result = 0;
    switch (currentOperator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        result = 0;
    }
    display.value = result;
    firstOperand = result;
    secondOperand = null;
    currentOperator = null;
  }
}

function clearDisplay() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  display.value = '';
}

function clearAll() {
  firstOperand = 0;
  secondOperand = null;
  currentOperator = null;
  display.value = '0';
}
