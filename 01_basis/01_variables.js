const accountId=73075
let accountEmail="vikas@google.com"
var accountPassword="12345"
accountCity="Delhi"
// javascript me variable declear karne ke 2 method hai , 1. let and 2.var
//but constant declear karne only one method hai const

// accountId=2 // not allowed

/*In javascript pls don't use var for variable only use let 
it is not wrong(var) but it is the issue of block scope 
and functional scope
so use only let
*/
accountEmail="vikas@gmail.com"
accountCity="Noida"
accountPassword="vikas123"

console.log(accountId);

console.table([accountEmail,accountId, accountPassword,accountCity])