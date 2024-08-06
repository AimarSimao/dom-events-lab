
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


console.log('sanity check');

/*-------------------------------- Constants --------------------------------*/
const OPERATORS = ['/', '*', '-', '+'];

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let firstOperand = null;

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.button'));

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (button.classList.contains('number')) {
    handleNumber(value);
  } else if (button.classList.contains('operator')) {
    handleOperator(value);
  } else if (button.classList.contains('equals')) {
    handleEquals();
  } else if (button.classList.contains('button') && value === 'C') {
    handleClear();
  }
}

function handleNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function handleOperator(value) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
    operator = value;
    currentInput = '';
  } else {
    handleEquals();
    operator = value;
  }
}

function handleEquals() {
  if (firstOperand === null || currentInput === '') return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '/':
      result = firstOperand / secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '+':
      result = firstOperand + secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  firstOperand = null;
  operator = '';
  updateDisplay(currentInput);
}

function handleClear() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  updateDisplay('0');
}

function updateDisplay(value) {
  display.textContent = value || '0';
}

// Initialize display
updateDisplay('0');



/* Variables */
currentInput = ''; 

/* Cached Element References */
display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.button.number');

/* Event Listeners */
numberButtons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = event.target.textContent;
    currentInput += buttonValue;
    updateDisplay(currentInput);
  });
});

/* Functions */
function updateDisplay(value) {
  display.textContent = value;
}


/* Variables */
currentInput = ''; 

/* Cached Element References */
display = document.querySelector('.display');
const calculator = document.getElementById('calculator');

/* Event Listeners */
calculator.addEventListener('click', event => {
  if (event.target.classList.contains('button') && event.target.classList.contains('number')) {
    const buttonValue = event.target.textContent;
    currentInput += buttonValue;
    updateDisplay(currentInput);
  }
});

/* Functions */
function updateDisplay(value) {
  display.textContent = value;
}

/* Variables */
currentInput = ''; 

/* Cached Element References */
display = document.querySelector('.display');
numberButtons = document.querySelectorAll('.button.number');

/* Event Listeners */
numberButtons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = event.target.dataset.value;
    currentInput += buttonValue;
    updateDisplay(currentInput);
  });
});

/* Functions */
function updateDisplay(value) {
  display.textContent = value;
}


/*-------------------------------- Variables --------------------------------*/
currentInput = ''; // Tracks the current input value
display = document.querySelector('.display'); // Reference to the display element

/*------------------------ Cached Element References ------------------------*/
buttons = document.querySelectorAll('.button'); // All calculator buttons

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (button.classList.contains('number')) {
    handleNumber(value);
  } else if (button.classList.contains('operator')) {
    handleOperator(value);
  } else if (button.classList.contains('equals')) {
    handleEquals();
  } else if (value === 'C') {
    handleClear();
  }
}

function handleNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function handleOperator(value) {
  // Handle operator logic here
}

function handleEquals() {
  // Handle equals logic here
}

function handleClear() {
  currentInput = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  display.textContent = value || '0';
}

// Query all buttons with the class 'button'
buttons = document.querySelectorAll('.button');

// Attach event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Log the inner text of the clicked button
    console.log(event.target.innerText);
    // Future logic to capture and use the button's value will go here
  });
});


// Query the parent calculator element
calculator = document.querySelector('#calculator');

// Attach a single click event listener to the calculator
calculator.addEventListener('click', (event) => {
  // Get the clicked element
  const target = event.target;

  // Check if the clicked element is a button
  if (target.classList.contains('button')) {
    // Log the inner text of the clicked button
    console.log(target.innerText);

    // Future logic to handle different button types
    handleButtonClick(target);
  }
});

// Function to handle button clicks
function handleButtonClick(button) {
  const value = button.innerText;

  if (button.classList.contains('number')) {
    handleNumber(value);
  } else if (button.classList.contains('operator')) {
    handleOperator(value);
  } else if (button.classList.contains('equals')) {
    handleEquals();
  } else if (value === 'C') {
    handleClear();
  }
}

// Function stubs for button logic
function handleNumber(value) {
  // Handle number logic here
}

function handleOperator(value) {
  // Handle operator logic here
}

function handleEquals() {
  // Handle equals logic here
}

function handleClear() {
  // Handle clear logic here
}

// Query the parent calculator element
calculator = document.querySelector('#calculator');

// Attach a single click event listener to the calculator
calculator.addEventListener('click', (event) => {
  // Get the clicked element
  const target = event.target;

  // Log the inner text of the clicked button for testing purposes
  console.log(target.innerText);

  // Handle number button clicks
  if (target.classList.contains('number')) {
    // For now, just log the number value
    console.log(`Number button clicked: ${target.innerText}`);
    // Future logic to handle the number value would go here
  }

  // Handle operator button clicks
  if (target.classList.contains('operator')) {
    // For now, just log the operator value
    console.log(`Operator button clicked: ${target.innerText}`);
    // Future logic to handle the operator value would go here
  }

  // Handle equals button click
  if (target.classList.contains('equals')) {
    console.log('Equals button clicked');
    // Future logic to handle the equals button would go here
  }

  // Handle clear button click
  if (target.innerText === 'C') {
    console.log('Clear button clicked');
    // Future logic to handle the clear button would go here
  }
});


// Query the parent calculator element
calculator = document.querySelector('#calculator');

// Attach a single click event listener to the calculator
calculator.addEventListener('click', (event) => {
  // Get the clicked element
  const target = event.target;

  // Check if the clicked element is a button
  if (target.classList.contains('button')) {
    // Log the inner text of the clicked button for testing
    console.log(target.innerText);

    // Handle number button clicks
    if (target.classList.contains('number')) {
      handleNumber(target.innerText);
    }

    // Handle operator button clicks
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
    }

    // Handle equals button click
    if (target.classList.contains('equals')) {
      handleEquals();
    }

    // Handle clear button click
    if (target.innerText === 'C') {
      handleClear();
    }
  }
});

// Function to handle number button clicks
function handleNumber(value) {
  // Add logic to handle number input
  console.log(`Number button clicked: ${value}`);
}

// Function to handle operator button clicks
function handleOperator(value) {
  // Add logic to handle operator input
  console.log(`Operator button clicked: ${value}`);
}

// Function to handle equals button click
function handleEquals() {
  // Add logic to handle equals button
  console.log('Equals button clicked');
}

// Function to handle clear button click
function handleClear() {
  // Add logic to handle clear button
  console.log('Clear button clicked');
}



// Query the parent calculator element
calculator = document.querySelector('#calculator');

// Variables to store the current input, the previous input, and the selected operator
 currentInput = '';
previousInput = '';
 operator = '';

// Attach a single click event listener to the calculator
calculator.addEventListener('click', (event) => {
  const target = event.target;

  // Handle button clicks
  if (target.classList.contains('button')) {
    const value = target.innerText;

    if (target.classList.contains('number')) {
      handleNumber(value);
    } else if (target.classList.contains('operator')) {
      handleOperator(value);
    } else if (target.classList.contains('equals')) {
      handleEquals();
    } else if (value === 'C') {
      handleClear();
    }
  }
});

// Handle number button clicks
function handleNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

// Handle operator button clicks
function handleOperator(value) {
  if (currentInput === '') return; // Prevent setting an operator without a number
  previousInput = currentInput;
  currentInput = '';
  operator = value;
}

// Handle equals button click
function handleEquals() {
  if (currentInput === '' || previousInput === '' || operator === '') return; // Prevent calculation if input is incomplete

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return; // No valid operator
  }

  currentInput = result.toString();
  previousInput = '';
  operator = '';
  updateDisplay(currentInput);
}

// Handle clear button click
function handleClear() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

// Update the display with the current input or result
function updateDisplay(value) {
  const display = document.querySelector('.display');
  display.innerText = value;
}

// Initial display setup
updateDisplay('0');


