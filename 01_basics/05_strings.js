const name = 'logical' // stored in stack memory
const repoCount = 2 // stored in stack memory

//console.log(name + repoCount + "Value") // logical 2

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // Hello my name is logical and my repo count is 2

const gameName = new String('COD') // stored in heap memory

console.log(gameName[0]) // 'C'
console.log(gameName.__proto__) // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}

console.log(gameName.length) // 3
console.log(gameName.toUpperCase()) // COD
console.log(gameName.charAt(0)) // C
console.log(gameName.indexOf('O')) // 1

const newGameName = gameName.substring(1, 3) // OD
console.log(newGameName);

const anotherString = gameName.slice(-2, 3) // ['O', 'D']
console.log(anotherString);

const newStringOne = "  logical  "
console.log(newStringOne)
console.log(newStringOne.trim()); // "logical"
console.log(newStringOne.trimStart()); // "logical  "
console.log(newStringOne.trimEnd()); // "  logical"

const url = "https://logical.com/logical"

console.log(url.replace("logical", "raj")); // https://raj.com/raj

console.log(url.includes("logical")); // true

console.log(gameName.split("/")); // ['https:', '', 'logical.com', 'logical']
