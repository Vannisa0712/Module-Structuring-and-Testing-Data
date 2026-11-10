let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made. There are 5 function callsand they are on line 4,5 and 10 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?The error is coming from line 5. The error is occurring because there is a space between the comma and the closing quotation mark in the replaceAll method. To fix this problem, remove the space so that it reads replaceAll(",", "").

// c) Identify all the lines that are variable reassignment statements. Lines 4 and 5 (carPrice = ... and priceAfterOneYear = ...)

// d) Identify all the lines that are variable declarations. Lines 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression? It takes the string with a comma (e.g., "10,000"), strips out the comma to make it "10000", and then converts it into an actual number type (10000) so you can perform mathematical operations like subtraction and division with it.