console.log("Hello World!");  //This is a single line comment
/* This is 
a multiple line comment.
*/
// Statements: JavaScript code is composed of statements that perform specific actions. Each statement typically ends with a semicolon (;), although it is not always required.
// Comments: You can add comments in JavaScript to provide explanations or make notes within the code. There are two types of comments: single-line comments, starting with //, and multi-line comments, enclosed between /* and */.
// Case sensitivity: JavaScript is case-sensitive, meaning that uppercase and lowercase letters are treated differently. For example, "variable" and "Variable" would be considered as two separate variables.
// Whitespace: JavaScript ignores spaces, tabs, and line breaks (collectively called whitespace) that are not necessary for code execution. However, whitespace can enhance code readability.
// Blocks: Code blocks in JavaScript are enclosed in curly braces ({}) and are used to group statements together. Blocks are often used in control structures like loops and conditional statements.

//Variables
let name = "John";
console.log("This is the name of the user: ", name);

var myFavoriteGame = "Animal Crossing";
console.log("This is my favorite game: ", myFavoriteGame);

if (true) {
    let myFavoriteDrink = "Cafe latte"; //let variable is only accessible inside the block, use let in the most of time
    var mySecondFavDrink = "Tea";
    console.log(myFavoriteDrink)
};

//console.log(myFavoriteDrink)
console.log(mySecondFavDrink)

const gravity = "9.8";   //constant variable
const pi = "3.14";    