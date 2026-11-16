// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here. I think it is goint to print 3 as the output because the function is going to return the the last digitt of 103 which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//the last digit of 42 is 3
//the last digit of 105 is 3
//the last digit of 806 is 3

// Explain why the output is the way it is
//The output is this way because the function was supposed to have a a parameter(num).

// =============> write your explanation here
//getLastDigit is defined withot a parameter so it ignores the numbers passed to it.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//Add num as a parameter inside function getLastDigit(num) 