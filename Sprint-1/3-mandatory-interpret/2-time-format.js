const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6 variable declarations

// b) How many function calls are there? 1 function call 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators. The % is the remainder (modulo) operator. It divides the total seconds by 60 and returns the leftover amount, which represents the remaining seconds that cannot form a full minute.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean? It takes the total seconds, subtracts the leftover seconds, and divides by 60 to figure out the total number of whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?It’s a formatted time string that shows hours, minutes, and seconds (HH:MM:SS). Better names would be formattedTime or movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer. Not completely. If a number is less than 10, it doesn't add a leading zero (so you get 1:5:9 instead of 01:05:09). It also breaks if you put in negative numbers or decimals.
