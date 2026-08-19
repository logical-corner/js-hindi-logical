const marvel = ["Iron Man", "Thor", "Hulk", "Captain America"]
const dc = ["Batman", "Superman", "Flash"]

marvel.push("Black Panther") // Add "Black Panther" at the end of the array
marvel.unshift("Spider-Man") // Add "Spider-Man" at the beginning of the array

// console.log(marvel); // ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Panther"]
// console.log(marvel[3][1]); // Output: "u" (the second character of "Hulk")

const allHeroes = marvel.concat(dc) // Combine the two arrays into a new array
// console.log(allHeroes); // ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Panther", "Batman", "Superman", "Flash"]

const all_new_heroes = [...marvel, ...dc] // Combine the two arrays into a new array using the spread operator
// console.log(all_new_heroes); // ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Panther", "Batman", "Superman", "Flash"]    

const another_array = [1, 2, 3, [4, 5, 6], 5, [ 7, [8, 9]]]
// console.log(another_array); // [1, 2, 3, [4, 5, 6], 5, [7, [8, 9]]]

const real_array = another_array.flat(2) // Flatten the array to a depth of 2
// console.log(real_array); // [1, 2, 3, 4, 5, 6, 5, 7, 8, 9]   

console.log(Array.isArray("Hitesh")); // Output: false
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]
console.log(Array.from({name: "Hitesh"})); // Output: [] (empty array, as the object is not iterable)

let score1 = [10, 20, 30, 40, 50]
let score2 = [60, 70, 80, 90, 100]
let score3 = [110, 120, 130, 140, 150]

console.log(Array.of(score1, score2, score3)); // Output: [[10, 20, 30, 40, 50], [60, 70, 80, 90, 100], [110, 120, 130, 140, 150]]