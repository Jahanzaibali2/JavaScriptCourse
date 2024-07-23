// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

key1 = Symbol("xyz")
console.log(key1)
let JsUser = {
    name: "Jahanzaib",
    "full Name" : "Jahanzaib Ali",
    age : 22,
    email : "jahanzaibali@gmail.com",
    [key1] : "myKey"
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full Name"])
console.log(JsUser[key1])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) //Discards all the change in the object without showing any errors
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

JsUser.greeting = function(){
    console.log(` ${this.email} is trying out this new function in my object`)
}
// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

 console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());