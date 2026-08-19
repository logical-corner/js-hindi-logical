const score = 100;
//console.log(score);

const balance = new Number(1000);
// console.log(balance); // Output: [Number: 1000]

// console.log(balance.toString()); // Output: "1000"
// console.log(balance.valueOf()); // Output: 1000

// console.log(balance.toFixed(2)); // Output: "1000.00"

const otherNumber = 1000.12345;
// console.log(otherNumber.toPrecision(4)); // Output: "1000.000"

const hundreds = 100;
// console.log(hundreds.toLocaleString()); // Output: "100"
// console.log(hundreds.toLocaleString('en-IN')); // Output: "100"
// console.log(hundreds.toExponential(2)); // Output: "1.00e+2"


//*********************  Maths     ***********************

console.log(Math);
console.log(Math.abs(-10)); // Output: 10
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.round(4.8)); // Output: 5
console.log(Math.max(10, 20, 30)); // Output: 30
console.log(Math.min(10, 20, 30)); // Output: 10
console.log(Math.PI); // Output: 3.141592653589793

console.log(Math.random()); // Output: A random number between 0 and 1
console.log(Math.random() * 10) + 1; // Output: A random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Output: A random integer between 1 and 10

const min = 1;
const max = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(randomNum); // Output: A random integer between 1 and 10

