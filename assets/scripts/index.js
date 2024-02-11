let firstName = 'Mock First Name';
let lastName = 'Mock Last Name';

let interestRate = 0.3;
interestRate = 1;

// Literals in Javascript
let name = 'Test'; // string literal
let userId = 20; // Number literal
let isApproved = false // Boolean literal
let userName = undefined;
let userEmail = null;

// Object
let person = {
    name: 'Test',
    userId: 20
}

// Dot Notation 
person.name = 'Mock';

// Bracket Notation 
let selection = 'name';
person[selection] = 'Dummy';
console.log(person.name);

// Array 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);


// Functions 
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet(firstName, lastName);

// Calculating a value 
function square(number) {
    return number * number;
}

console.log(square(2));
