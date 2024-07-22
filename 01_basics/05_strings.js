let name = "Jahanzaib"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Testing back ticks ${name}`)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

    const gameName = new String('Jahanzaib-ali-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //-1 in output as theres no T in our given string

const newString = gameName.substring(0, 4)          //As the name suggests
console.log(newString);

const anotherString = gameName.slice(-8, 4)     //As the name suggests
console.log(anotherString);

const newStringOne = "   jahanzaib    "
console.log(newStringOne);
console.log(newStringOne.trim());   //Removes excessive spaces, Used in logon forms and shit

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))        //As the name suggests
console.log(url.replace('hitesh', 'Jahanzaib').replace('hitesh', 'Jahanzaib'))       
console.log(url.includes('sundar'))     //Is Sundar included in our string?

console.log(gameName.split('-'));       //Splits the string the moment it sees "-"