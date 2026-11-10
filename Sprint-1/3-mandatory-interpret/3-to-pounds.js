const penceString = "399p";
//Sets up the starting string with the price in pence, including the trailing "p".
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//Cuts off the last character ("p") so you're just left with the digits ("399").
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//Grabs everything except the last two digits to get the whole pound amount (for "399", this leaves "3").
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//Grabs just the last two digits for the pence portion (for "399", this is "99"), and makes sure it's padded to two digits.
console.log(`£${pounds}.${pence}`);
//Puts the pounds and pence together into a standard money format (£3.99) and prints it out.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
