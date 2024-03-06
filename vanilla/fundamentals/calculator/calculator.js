const display = document.querySelector('.displayNumber');
const numberButtons = document.querySelectorAll('.valueBtn');
const operatorButtons = document.querySelectorAll('.operatorBtn');

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectOperator(button.innerHTML);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectNumber(button.innerHTML);
  });
});

let currentValue = '';
let secondValue = '';
let currentOperation = '';

function selectOperator(operation) {
  if (currentOperation !== '') {
    equals()
  }

  currentOperation = operation;
}

function selectNumber(number) {
  if (currentOperation !== '') {
    secondValue += number
    changeDisplay(secondValue);
  } else {
    currentValue += number;
    changeDisplay(currentValue);
  }
}

function equals() {
  if (currentValue === '' || secondValue === '') {
    // Can add better handling here if needed
    return;
  }

  let sumValue = completeOperation(parseInt(currentValue), parseInt(secondValue), operatorChoser());
  changeDisplay(sumValue);
  currentValue = sumValue;
  currentOperation = '';
  secondValue = '';
  return;
}

function clearNumbers() {
  display.innerHTML = '';
  currentValue = '';
  secondValue = '';
  currentOperation = '';
}

function deleteLastNumber() {
  display.innerHTML = display.innerHTML.slice(0, -1);
  currentValue = display.innerHTML;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function completeOperation(firstNum, secondNum, operation) {
  return operation(firstNum, secondNum);
}

function operatorChoser() {
  let chosenOperation = null;

  if (currentOperation === '+') {
    chosenOperation = add
  } else if (currentOperation === '-') {
    chosenOperation = subtract
  } else if (currentOperation === '*') {
    chosenOperation = multiply
  } else if (currentOperation === '/') {
    chosenOperation = divide
  }

  return chosenOperation;
}

function changeDisplay(value) {
  return display.innerHTML = value;
}
