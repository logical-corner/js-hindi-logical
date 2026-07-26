// primitive 

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

const score = 100 // Number
const scoreValue = 100.5 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail // Undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

console.log(id === anotherId) // false

const bigNumber = 3456789012345678909n // BigInt

// Non-primitive (Reference) data types in JavaScript
// 1. Object
// 2. Array
// 3. Function

const heros = ['shaktiman', 'naagraj', 'doga'] // Array
let myObj = {
    name: "Rohit",
    age: 22,
} // Object

const myFunction = function() {
    console.log('Hello World')
} // Function

console.log(typeof scoreValue) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof anotherId) // symbol
console.log(typeof userEmail) // undefined
console.log(typeof id) // symbol
console.log(typeof bigNumber) // bigint
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function