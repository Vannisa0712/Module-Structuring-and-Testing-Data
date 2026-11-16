function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//3 times (once each for totalHours, remainingMinutes, and remainingSeconds inside the return template literal).
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0 (the first call is pad(totalHours), and for 61 seconds, totalHours evaluates to 0).

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00" (0 is converted to "0" and padded at the start to a length of 2 with "0").

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//1. The last call in the template literal is pad(remainingSeconds). When seconds is 61, remainingSeconds is calculated as 61 % 60, which equals 1, so 1 is passed into pad as the parameter num.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//"01". When num (1) is passed into pad, num.toString() converts it to the string "1", and .padStart(2, "0") adds a leading "0" so the string reaches a length of 2, returning "01".
