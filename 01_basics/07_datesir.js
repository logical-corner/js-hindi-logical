// Dates

let myDate =  new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// let mynCreatedDate = new Date(2023, 0, 23, 5, 4)
// console.log(myCreatedDate.toDateString());   //Mon Jan 23 2023
// console.log(mynCreatedDate.toLocaleString());  //23/1/2023, 12:00:00 am

//let myCreatedDate = new Date("2023-00-14")
let myCreatedDate = new Date("03-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);  // Output: Current date and time
// console.log(newDate.getMonth() + 1); // 0-11
// console.log(newDate.getDate()); // 1-31
// console.log(newDate.getDay()); // 0-6 (0 = Sunday)

//console.log(`${newDate.getDay()} and the time ${newDate.toLocaleTimeString()}`);

newDate.toLocaleDateString('default', {
     weekday: 'long' }) // Output: Day of the week (e.g., "Monday")
myCreatedDate.toLocaleDateString('default', {
     weekday: 'long' 
     , timeZone: 'UTC'
}) // Output: Day of the week (e.g., "Monday")