const MyComponents = () => {
    return <div></div>
}

<button onClick={() => {
    console.log('hello world')
}}
></button>

// Ternary Operators 

let age = 10;
let name = age > 10 ? 'Test' : 'Mock';

const Component = () => {
    return userAge > 10 ? <div>Test</div> : <div>Mock</div>
}

// Object
const person = {
    name,
    age,
    isDeleted: false
};

console.log("Person = ", person)

// spread operator
const person2 = { ...person, name: "Sample" };

let names = ["test", "mock", "dummy"];
const names2 = [...names, "sample"];

console.log("names=", names2);

// destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
console.log("car=", car);
console.log("truck=", truck)
console.log("suv=", suv)

// Map
let planets = ['earth', 'venus', 'mars', 'mercury'];

planets.map((planet) => {
    return <h1>{planet}</h1>
})

// Filter 
let stars = ['Alpha Centauri', 'Sirius', 'Vega', 'Achernar', 'Vega', 'Vega'];

stars.map((star) => {
    return star !== "Vega";
});
