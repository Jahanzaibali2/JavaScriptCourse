const score = 400
// console.log(score);

const balance = new Number(100) //Object creation is always prefered
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));     //gives decimal value till tens(2 - xx)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));    // used for rounding of

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 
//en-INrepresents display Standards, it separates the digit with "," eg 100,000,000 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   //ABSOLUTE VALUE - ko b + krdega
// console.log(Math.round(4.6));    // rounds off
// console.log(Math.ceil(4.2)); //top value 5
// console.log(Math.floor(4.9)); // low value 4
// console.log(Math.min(4, 3, 6, 8));   //gives minimum value
// console.log(Math.max(4, 3, 6, 8));      // gives maximm value

console.log(Math.random()); // generates a random integer
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)