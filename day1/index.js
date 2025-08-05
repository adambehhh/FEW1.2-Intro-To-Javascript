// This is a Hello World console log
console.log("Hello World");

/*
This is a multi-line comment
I can write 
comments
in
multiple lines
*/

var x = 5;
console.log(x);
var x = 20;
console.log(x);

let y = 10;
// let y = 30; // This will cause an error because y has already been declared
y = 30;
console.log(y); // Output: 30

let myname = "Adam";
console.log(myname);

const a = 25;
// a = 30; // This will cause an error because a is a constant variable
console.log(a); // Output: 25

const ICnumber = "012345-07-2345";
console.log(ICnumber);

let someWords = "This is a String";
let stringsOfNumbers = "100";
let actualNumber = 100;
let actualNumber2 = 200;

let combi = stringsOfNumbers + actualNumber + actualNumber;
console.log(combi);
let total = actualNumber + actualNumber2;
console.log(total);

const isAbsent = true;
console.log(isAbsent); // Output: true

let v;
console.log(v); // Output: undefined

const h = null;
console.log(h); // Output: null

const student = {
    name: "John Doe",
    age: 42,
    address: "Penang",
    "0ff-231": "Hello World",
};
console.log(student.name); // Output: John Doe
console.log(student["age"]); // Output: 42

// Create an object with your name, age and address
// add a hobby and console log in your project

const people = {
    name: "Adam Beh",
    age: 20,
    address: "Penang",
    hobby: "Playing computer games"
};
console.log(people.name)
console.log(people["age"])
console.log(people.address)
console.log(people.hobby)

// Now we learn about Arrays
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Mango
console.log(fruits[2]); // Output: Banana

// Two-dimensional Array
const heroes = [
  // 0         1           2
  ["ironman", "spiderman", "hulk"], // 0
  ["cabbage man", "robert cop", "kamen rider"], // 1
  ["thanos", "darkseid", "ultron"], // 2
];

console.log(heroes[0][0]); // Output: ironman
console.log(heroes[1][1]); // Output: robert cop
console.log(heroes[2][2]); // Output: ultron

// Object + Array

const comicCharacters = {
    MCU: {
        heroes: ["Iron Man", "Captain America", "Thor"],
        villians: ["Thanos", "Ultron", "Dr Doom"]
    },
    DC: {
        heroes: ["Superman","Batman","Flash"],
        villians: ["Lex Luthor","Joker","Reverse Flash"]
    }
};

console.log(comicCharacters.MCU.heroes[1])
console.log(comicCharacters.MCU.villians[2])
console.log(comicCharacters.DC.villians[0])
console.log(comicCharacters.DC.heroes[2])

//Console log Captain America, Dr Doom, Lex Luthor and flash