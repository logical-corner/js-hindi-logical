// array

const myArray = [1, 2, 3, 4, 5 ];
const myheroes = ['Superman', 'Batman', 'Flash']
const myNumbers = new Array(1, 2, 3, 4, 5);

//console.log(myArray);  // [1, 2, 3, 4, 5]
//console.log(myheroes[2]); // Flash

// Array Methods

myArray.push(6); // Add 6 at the end of the array
myArray.push(7, 8, 9); // Add 7, 8, 9 at the end of the array
myArray.pop(); // Remove the last element from the array
myArray.unshift(0); // Add 0 at the beginning of the array
myArray.shift(); // Remove the first element from the array
// console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(myArray.length); // 9
// console.log(myArray.includes(4)); // true
// console.log(myArray.indexOf(4)); // 3
// console.log(myArray.reverse()); // [8, 7, 6, 5, 4, 3, 2, 1]
// console.log(myArray.sort()); // [1, 2, 3, 4, 5, 6, 7, 8]

// const newArray = myArray.join()
// console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(newArray); // "1,2,3,4,5,6,7,8"
// console.log(typeof newArray); // "string"

//slice, spice, concat

// console.log("A ",myArray)

// const myArray2 = myArray.slice(2, 5);

// console.log(myArray2); // [3, 4, 5]
// console.log("B ",myArray)

// const myArray3 = myArray.splice(2, 3, 10, 11, 12);
// console.log("C ",myArray)
// console.log(myArray3); // [3, 4, 5]

