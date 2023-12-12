const person = {
    firstName: "Kim",
    lastName: "Doe",
    nickName: "KD",
    age: 28,
    height: "5'9",
    hobbies: ["swimming", "skiing", "cooking"],

    //method
    greet: function() {
        console.log(`Hello, my name is ${person.firstName} and I 
        am ${person.age}.`);
    }
}

// Dot Notation
console.log(person.firstName);
console.log(person.hobbies);
person.greet();

//Adding new properties
person.nationality = "American";
console.log(person.nationality);

// Adding new methods
person.talkHobbies = function() {
    console.log(`I like ${person.hobbies[1]}!`);
}

person.talkHobbies();

//Nested Objects
const movie = {
    title: "Pulp Fiction",
    genre: "Action",
    cast: ""
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

// Destructuring objects
// const lastName = person.lastName;
// const height = person.height;
const {
    lastName,
    nickName,
    age
} = person;
console.log(lastName, nickName, age);