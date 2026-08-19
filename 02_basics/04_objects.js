// const tinderUser = new object(); // this is the old way of creating an object
const tinderUser = {}; // this is the new way of creating an object

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); // Output: { id: '123abc', name: 'John Doe', isLoggedIn: false }

const regularUser = {
    email: "john.doe@example.com",
    fullname: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30
}

// console.log(regularUser.fullname.firstName); // Output: "John"
// console.log(regularUser.fullname); // Output: "{ firstName: 'John', lastName: 'Doe' }"

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 = { obj1, obj2 }; // Merging obj1 and obj2 into a new object
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object using Object.assign 

const obj4 = { ...obj1, ...obj2 }; // Merging obj1 and obj2 into a new object using spread operator
//console.log(obj3);
//console.log(obj4); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }      

const users = [
    { userId: 1, firstName: "John", gender: "Male" },
    { userId: 2, firstName: "Jane", gender: "Female" }

]

users[2].gender
console.log(users[2].gender); // Output: undefined

console.log(Object.keys(users[0])); // Output: [ 'userId', 'firstName', 'gender' ]
console.log(Object.values(users[0])); // Output: [ 1, 'John', 'Male' ]
console.log(Object.entries(users[0])); // Output: [ [ 'userId', 1 ], [ 'firstName', 'John' ], [ 'gender', 'Male' ] ]
console.log(users[0].hasOwnProperty("firstName")); // Output: true