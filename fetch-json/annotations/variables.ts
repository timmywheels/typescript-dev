let apples = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true, true];

// classes
class Car {}

let carz: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) a function that returns that 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// vs.

const json2 = '{"x": 10, "y": 20}';
const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2);

// 2) when we declare a variable on one line
// and intitialize it later on
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
