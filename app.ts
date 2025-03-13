
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.querySelector('button');

let numResults: number[] = []; // array contains numbers
let textResults: string[] = []; // array contains strings

//degining a new type
type NumOrString = number | string;
type Result =  { val: number; timestamp: Date };

interface ResultOj {
  val: number;
  timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) :NumOrString {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2; // add
    } else if (typeof num1 === "string" && typeof num2 === "string") {
      return num1 + " " + num2; // concatination
    } else {
      return +num1 + +num2; // casting
    }
}

function printResult(resultObj: Result) {
    console.log(resultObj.val);
}

  
btnElement?.addEventListener('click',() => {
    const num1  = num1Element.value;
    const num2  = num2Element.value;

    const result = add(+num1,+num2);
    numResults.push(result as number);

    const stringResult = add(num1,num2);
    textResults.push(stringResult as string);
    
    printResult({ val: result as number, timestamp: new Date() });
    console.log(numResults, textResults);
});

/*
console.log(add(5, 11));       // 16
console.log(add("Hello", "World"));  // "Hello World"
console.log(add("5", 11));     // 16
*/