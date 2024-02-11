// import { apiKey } from "./util.js";

// // Export using default
// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";

// import * as util from "./util.js";

let userMessage = "Hello world";
console.log("===== app.js ====")
console.log(userMessage);

function createGreeting(userName, message = 'Hello') {
    return `${userName} ${message}`;
}
const res1 = createGreeting('Test');
console.log(res1);

const res2 = createGreeting('Mock', '');
console.log(res2);

// Arrow Functions
// export default (userName, message) => {
//     console.log("Hello");
//     return `Using Arrow functions ===> ${userName} ${message}`
// }

// Objects 
const user = {
    name: 'Test',
    age: 20,
    greet() {
        console.log("Hello!");
        console.log(this.age)
    }
}
console.log("User ====>", user);
user.greet();

// Class 
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi!')
    }
}

const user1 = new User("Mock data", 21);
console.log("Using class ==>", user1);

// Array 
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
const index = hobbies.findIndex((item) => {
    return item === 'Sports'
});

console.log(index);

// Map Method 
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log("editedHobbies=", editedHobbies);

// Destructuring Arrays
const userNameData = ["Test", "Mock"];
const firstName = userNameData[0];
const lastName = userNameData[0];

// Using destructing 

const [firstName1, lastName1] = ["Test", "Mock"];
console.log(firstName1);
console.log(lastName1);

// Destructuring Objects
const { name, age } = {
    name: "mock",
    age: 20
};

const newHobbies = ['cycling'];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log("Merged Array ===>", mergedHobbies);