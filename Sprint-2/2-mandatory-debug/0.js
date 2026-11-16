// Predict and explain first...

// =============> write your prediction here
//This code is going to multiply the two numbers and return the result but it will be undefined tho
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The code will return undefined because thre function multiply does not have a return statement.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

