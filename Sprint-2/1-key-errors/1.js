// Predict and explain first...

// Why will an error occur when this program runs?
// =============> It is beacuse 'dceimalNumber' is declared twice.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


//JavaScript throws "SyntaxError: Identifier 'decimalNumber' has already been declared" because function parameters exist in the function's local scope, making 'const decimalNumber' illegal.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));