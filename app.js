var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var btnElement = document.querySelector('button');
var numResults = []; // array contains numbers
var textResults = []; // array contains strings
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
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
/* console.log(add(5, 11));       // 16
console.log(add("Hello", "World"));  // "Hello World"
console.log(add("5", 11));     // 16 */ 
