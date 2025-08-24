let score ="45"
console.log(typeof score)
console.log(typeof (score))
/* If something written in double inverted common then it is behave like string 
and if we don't use double inverted common then it is number
*/
let valueInNumber = Number(score)
console.log(typeof valueInNumber)



// console.log(2+2);Plus
// console.log(2-2);Minus
// console.log(2*2);Multiply
// console.log(2**2); this Symbol(**) denoted for power of the Number
// console.log(2/2); devide
// console.log(2%2); Reminder

let str1 ="Hello";
let str2="Vikas";

let str3= str1+str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
/*If double inverted common use in 1st no. then
 all others no. behave like string AND if double inverted common
 use in last no. then before that no., all the operation held in code
*/
console.log((3+4)*5%3);