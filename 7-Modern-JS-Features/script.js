// Arrow function

// function myFunction() {

// }

const greet = () => {
    console.log("Merry Christmas!");
}

greet();

// Enhanced object literals
const person = {
    name: "Tony",
    age: 21,
    greeting() {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();

// Spread operators
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest operators
function myFunction(firstArg, ...restOfArgs) {
    console.log(firstArg);
    console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four');

// Common JS Built-in Methods
// Arrays
// Filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers2.filter((number) => number % 2 == 0)
console.log(even);

//String
const message = "Hello, Universe!";
const words = message.split(", ");
console.log(words);

// Includes
const sentence = "Hello there";
const containsWord = sentence.includes("fox");
console.log(containsWord);

//Length
const sentenceLen = sentence.length;
console.log(sentenceLen);

//Objects
const cat = {
    name: "Dollar",
    age: 2,
    color: ["gold", "black"]
}

//Keys
console.log(Object.keys(cat));

// Values
console.log(Object.values(cat));

// Entries
console.log(Object.entries(cat));

//Math
//max and min
const maxNum = Math.max(10, 5, 40);
console.log(maxNum);

const minNum = Math.min(2, 4, 9);
console.log(minNum);

// Random
const rdmNum = Math.random() * 10; //random number between 0-10
console.log(rdmNum);

//round
console.log(Math.round(rdmNum));

//floor: round down
console.log(Math.floor(rdmNum));

//ceil: round up
console.log(Math.ceil(rdmNum));

//Nested math Methods
const rdmVal = Math.floor(Math.random() * 100);
console.log(rdmVal);

// Other methods
// Date
const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2023, 11, 25);
console.log(christmas);

//toFixed
const price = 100.12545.toFixed(2);
console.log(price);

//toString
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);
