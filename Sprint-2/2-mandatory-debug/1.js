// Predict and explain first...
//  =============> It is going to return undefined because there is no return statement in the function sum.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//A function withot a return statement will return undesfined especially when the function is an operation that is expected to return a value.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b){
  return a + b;
}