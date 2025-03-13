
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.querySelector('button');

// let numResults: number[] = []; // array contains numbers
let numResults:  Array<number> = [];
// let textResults: string[] = []; // array contains strings
let textResults:  Array<string> = [];

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


const myPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('It worked!');
  }, 1000)
})

myPromise.then( (result)=>{
  // split() don not work here because it does not know the type of result
  console.log(result);
} )

const myPromise2: Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('It worked!');
  }, 1000)
})

myPromise2.then( (result)=>{
  // split() don not work here because it does not know the type of result
  console.log(result.split(" "));
} )



// creating a function that returns the first of an array, regardless of the type of elements:
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
let numbers = getFirstElement<number>([1, 2, 3]); // number
let strings = getFirstElement<string>(["a", "b", "c"]); // string


// the Box class works with any type (T), whether it is number, string, or any other type.
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // 10

let stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello