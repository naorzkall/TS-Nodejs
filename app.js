"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnElement = document.querySelector('button');
// let numResults: number[] = []; // array contains numbers
let numResults = [];
// let textResults: string[] = []; // array contains strings
let textResults = [];
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
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    // split() don not work here because it does not know the type of result
    console.log(result);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise2.then((result) => {
    // split() don not work here because it does not know the type of result
    console.log(result.split(" "));
});
// creating a function that returns the first of an array, regardless of the type of elements:
function getFirstElement(arr) {
    return arr[0];
}
let numbers = getFirstElement([1, 2, 3]); // number
let strings = getFirstElement(["a", "b", "c"]); // string
// the Box class works with any type (T), whether it is number, string, or any other type.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numberBox = new Box(10);
console.log(numberBox.getValue()); // 10
let stringBox = new Box("Hello");
console.log(stringBox.getValue()); // Hello
