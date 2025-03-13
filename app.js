"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnElement = document.querySelector('button');
let numResults = []; // array contains numbers
let textResults = []; // array contains strings
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
function printResult(resultObj) {
    console.log(resultObj.val);
}
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
/*
console.log(add(5, 11));       // 16
console.log(add("Hello", "World"));  // "Hello World"
console.log(add("5", 11));     // 16
*/ 
