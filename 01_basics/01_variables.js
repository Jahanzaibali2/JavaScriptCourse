const accountId = 144553        // Cant change constants ofc
let accountEmail = "hitesh@google.com" //Prefered, Scope fully defined. 
var accountPassword = "12345"       // Scope aint defined, whats scope? { --Scope-- }
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "jahanzaib@hc.com"
accountPassword = "21212121"
accountCity = "Karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//hi