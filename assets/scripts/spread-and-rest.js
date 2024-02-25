const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { ...flying, ...car }
console.log(flyingCar) // {wings: 2, wheels: 4}

let veggies = ['tomato', 'carrot'];
veggies = [...veggies, 'cabbage'];
console.log("Veggies = ", veggies)

console.log("Convert string to a array using spread operator");
const greeting = 'Hello';
const arrOfChars = [...greeting];
console.log(arrOfChars);

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = { ...car1 }

car1.speed = 201

console.log(car1.speed, car2.speed)