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

// console.log(typeof scoreValue) // number
// console.log(typeof isLoggedIn) // boolean
// console.log(typeof outsideTemp) // object
// console.log(typeof anotherId) // symbol
// console.log(typeof userEmail) // undefined
// console.log(typeof id) // symbol
// console.log(typeof bigNumber) // bigint
// console.log(typeof heros) // object
// console.log(typeof myObj) // object
// console.log(typeof myFunction) // function

// https://262.ecma-international.org/5.1/#sec-11.9.3

// ++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitives) and Heap (non-primitives) memory allocation in JavaScript  

let myName = 'logical' // stored in stack memory

let anotherName = myName // stored in stack memory
anotherName = 'Raj' // stored in stack memory

console.log(myName) // logical
console.log(anotherName) // Raj

let user = {
    email: "user@example.com",
    upid: "user@upi"
} // stored in heap memory

let admin = user // stored in stack memory
admin.email = "admin@example.com" // modifies the object in heap memory

console.log(user.email) // admin@example.com
console.log(admin.email) // admin@example.com   