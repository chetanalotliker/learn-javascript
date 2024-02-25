console.log("== For Each ==");
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

console.log("== Filter ==");
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
    return num > 20;
});

console.log("== Map ==");
[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
});
