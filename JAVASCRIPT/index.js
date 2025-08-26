// Assignment 1
function sum(a) {
    let number = 0;

    for (let i = 1; i <= a; i++) {
        number += i;
    }
    return number;
}

// Example: using a fixed number instead of prompt
let num = 10; // you can change this value
let result = sum(num);
console.log(result);

console.log(num);
