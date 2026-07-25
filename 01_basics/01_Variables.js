const accountId = 123456789
const accountName = "John Doe"
var accountBalance = 1000.50
accountCity = "New York"

//accontId = 9876 // This will throw an error because accountId is a constant

accountName = "Jane Smith" // This is allowed because accountName is a constant but we can reassign it since it's not declared with const
accountBalance = 2000.75 // This is allowed because accountBalance is declared with var
accountCity = "Los Angeles" // This is allowed because accountCity is declared without var, let, or const

console.log(accountId);

/*
Prefer not to use var, use let and const instead
because var has function scope and can lead to unexpected behavior.
*/

console.table( [accountId, accountName, accountBalance, accountCity ] )  