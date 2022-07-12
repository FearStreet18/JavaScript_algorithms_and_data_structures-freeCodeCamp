// One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations
// In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to.
// Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

// If you replace var with let in the code above, it results in an error:

// let camper = "James";
// let camper = "David";

// // The error can be seen in your browser console

// console.log(camper); //SyntaxError: Identifier 'camper' has already been declared

// solution: 

let catName = "Oliver";
let catSound = "Meow!";