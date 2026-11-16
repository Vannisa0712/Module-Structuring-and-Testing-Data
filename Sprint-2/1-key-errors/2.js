
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> This is because the function should be a variable 'name' but rather it is a number.


function square(num) {
    return num * num;
}

// =============> write the error message here
//Uncaught SyntaxError: Illegal return statement

// =============> explain this error message here
//The error message means number was is not allowed to be used as a function name.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

