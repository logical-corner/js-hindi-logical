// singleton

// objects literals

const mySym = Symbol("key1");  

const JsUser = {
    name: "John",
    [mySym]: "value1", // Using a symbol as a property key
    age: 30,
    location: "New York",
    email: "john@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]   
}

// console.log(JsUser.name); // Output: "John"
// console.log(JsUser["name"]); // Output: "John"
// console.log(JsUser[mySym]); // Output: "value1" (since the symbol is a property of the object)
// console.log(JsUser.mySym); // Output: undefined (since the symbol is not a property of the object)
// console.log(typeof JsUser.mySym); // Output: "undefined"

JsUser.email = "logicalcorner002@gmail.com";
Object.freeze(JsUser); // Freeze the object to prevent further modifications
JsUser.email = "Raj.25SCSE1410054@galgotiasuniversity.ac.in"; // This will not change the email property since the object is frozen
//console.log(JsUser); // Output: "logicalcorner002@gmail.com" (the email property remains unchanged)

JsUser.greeting = function() {
    console.log("Hello, welcome to the JavaScript world!");
}

// console.log(JsUser.greeting()); // Output: "Hello, welcome to the JavaScript world!"

JsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greetingTwo()); // Output: "Hello, John"
