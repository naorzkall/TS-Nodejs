"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2; // add
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2; // concatination
    }
    else {
        return +num1 + +num2; // casting
    }
}
btnElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(num1, num2);
    console.log(result);
});
console.log(add(5, 11)); // 16
console.log(add("Hello", "World")); // "Hello World"
console.log(add("5", 11)); // 16
