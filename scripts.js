let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumberArr = []

let display = document.getElementById('display')

function getNumber(num) {
	if (step === 0 || step === 1) {
        if (num === '.' && numArray.includes('.')) return; 
    numArray.push(num);
    firstNumber = numArray.join('');
    display.value = firstNumber;
    step = 1; 
	} else if (step === 2) {
        if (num === '.' && secondNumberArr.includes('.')) return;  // Prevent multiple decimals
        secondNumberArr.push(num);
        secondNumber = secondNumberArr.join('');
        display.value = firstNumber + ' ' + operation + ' ' + secondNumber; 
	}
}

function getOperator(operator) {
    if (step === 1) {
        operation = operator;
        display.value = firstNumber + ' ' + operation;  // Display the operator on screen
        step = 2;
      }
}

function calculateEquals() {
    if (firstNumber && secondNumber) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
    
        if (operation === '+') {
          result = firstNumber + secondNumber;
        } else if (operation === '-') {
          result = firstNumber - secondNumber;
        } else if (operation === '*') {
          result = firstNumber * secondNumber;
        } else if (operation === '/') {
          result = secondNumber === 0 ? 'Error' : firstNumber / secondNumber;  // Handle division by 0
        }
    
        display.value = result;
        firstNumber = result.toString();
        secondNumber = '';
        secondNumberArr = [];
        operation = '';
        step = 1;  
      }
}

function clearDisplay() {
    display.value = 0;
    firstNumber = '';
    secondNumber = '';
    step = 0;
    operation = '';
    result = 0;
    numArray = [];
    secondNumberArr = [];
}

function deleteLast() {
    if (step === 1) {
      numArray.pop();
      firstNumber = numArray.join('');
      display.value = firstNumber || 0;
    } else if (step === 2 && secondNumberArr.length > 0) {
      secondNumberArr.pop();
      secondNumber = secondNumberArr.join('');
      display.value = firstNumber + ' ' + operation + ' ' + (secondNumber || '');
    }
  }