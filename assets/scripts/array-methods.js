const array = ['HTML', 'CSS', 'Javascript', 'Angular', 'React.js'];
console.log("== INITIAL ARRAY ==", array);

console.log("Access array using map");
array.map((val) => {
    console.log("Val=", val);
})

console.log("array.length = ", array.length);

console.log("array.toString() = ", array.toString());

console.log("array.at(2) = ", array.at(2));

console.log("array.join('*') = ", array.join(" * "));

console.log("array after pop = ", array.pop());

array.push('Nest.js');
console.log("pushing into the array = ", array);

console.log("array.shift() = ", array.shift());

console.log("array.unshift() = ", array.unshift());

console.log("delete array[0] = ", delete array[0]);

const frontendTech = ["Angular", "React"];
const backendTech = ["Node.js", "Nest.js", "PHP"];

const fullStackTech = backendTech.concat(frontendTech);

console.log("After merging frontendTech and backendTech result = ", fullStackTech)