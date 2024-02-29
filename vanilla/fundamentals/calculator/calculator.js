const display = document.querySelector('.viewPort');

function addNumberToDisplay(number) {
  const newNumber = document.createElement('p');
  newNumber.innerHTML = number;
  return display.appendChild(newNumber);
}

function clearDisplay() {
  display.innerHTML = ''
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

function completeOpertion(firstNum, secondNum, operation) {
  return operation(firstNum, secondNum);
}

console.log(completeOpertion(20, 10, subtract));
