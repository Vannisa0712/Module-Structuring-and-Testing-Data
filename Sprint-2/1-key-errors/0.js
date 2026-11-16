// Predict and explain first...
//  =============>I think the code will show SyntaxError.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// It shows an error because 'str' is already declared as a parameter and cannot be redeclared as a variable with 'let'.
function capitalise(str) {
let result = `${str[0].toUpperCase()}${str.slice(1)}`;
return result;
}
capitalise("javascript");
