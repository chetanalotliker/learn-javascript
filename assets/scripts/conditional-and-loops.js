
console.log("== If Else Loop ==")
var result = 30;

if (result > 40) {
    console.log("You passed the test");
} else {
    console.log("You did not pass the test");
}

console.log("== If ElseIf and Else Loop ==");
var place = 'first';

if (place == 'first') {
    console.log('Gold');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third') {
    console.log('Bronze');
} else {
    console.log('No Medal');
}

console.log("== switch statement ==");
var place = 'first';
switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No Medal');
        break;
}

console.log("== For Loop ==");
const array1 = ['html', 'css', 'js'];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i], 'is at the location', i)
}

console.log("== While Loop ==");
var counter = 3;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}

