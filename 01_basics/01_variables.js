const accountId = 12
let accountEmail = "John@gmail.com"
var accountPassword = "HelloJohn"
accountCity = "New York"
let accountState;



// account_Id = 143

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "ana@gmail.com"
accountPassword = "13213"
accountCity = "New Zealand"

console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountId])