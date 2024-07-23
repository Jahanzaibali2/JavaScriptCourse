const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //Concatination/Merging of two arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //finish inter array-array
console.log(real_another_array);



console.log(Array.isArray("Jahanzaib")) //searches in array, true/false
console.log(Array.from("Jahanzaib"))    //Converts into array, important for dataScrapping
console.log(Array.from({name: "hitesh"})) // Gives empty []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // merges all given variables into single array 