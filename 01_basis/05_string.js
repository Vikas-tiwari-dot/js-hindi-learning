const name = "John";
const replace = 50;

console.log(`My name is ${name} and I am ${replace} years old.`);

const gameName = new String("Cricket"); 
console.log(`My favorite game is ${gameName}.`);

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));


const anotherGame = new String("Football");
console.log(`My another favorite game is ${anotherGame}.`);

console.log(anotherGame.charAt(2));
console.log(anotherGame.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(`New string is: ${newString}`);

const url = "https://www.example.com/path/to/page?name=John&age=30";

console.log(url.replace(`John`, `Doe`)); // jo replace karna ho o phale likho aur jisse karna ho o baad me 

console.log(url.includes(`vikas`));
console.log(url.includes(`page`));
console.log(url.includes(`John`));
console.log(url.includes(`example`));
