const score=400
const maxScore=500
const percentage=(score/maxScore)*100
console.log(`Your percentage is ${percentage}%`)

const newNumber = Math.round(percentage);
console.log(`Your rounded percentage is ${newNumber}%`);

const balance = new Number(100)

console.log(balance);
console.log(balance.toFixed(4)); //here 4 define the digit after used decimal
console.log(balance.toString().length);

const otherNumber = 123.456789
console.log(otherNumber);
console.log(otherNumber.toFixed(4));
console.log(otherNumber.toString().length);
console.log(otherNumber.toPrecision(3)); //Precision give round off the value

const hundreds =100000000
console.log(hundreds.toLocaleString("en-IN")); //LocaleString use to convert number into local format

console.log(hundreds.toLocaleString("en-US")); //LocaleString use to convert number into local format
console.log(Math.random()); //Math.random use to generate random number between 0 to 1
console.log((Math.random()*100)+1); //Math.random use to generate random number between 0 to 100

const min=10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



