console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
// we can match or search other string through this regular expression
reg = /harry/g; // g means global flag
// reg = /harry/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source); // this the the sourse of regular expression in this case 'harry'

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// console.log(result); // this will give the first harry in this case
// result = reg.exec(s);
// console.log(result); // this will give the second harry in this case because we use 'g'(global flag) that's 'harry' will going search for whole sentence
// result = reg.exec(s);  // so, this will also give a third harry from sentence if the sentence does not have third harry then it will return null
// console.log(result); ---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// this is the exect reverse of the exec()
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg); // ---> This is right
// this will give all the 'harry' word in the form of arry that will found by the regular expression if we declered harry in a global flag
// console.log(result3);

// 4. search() - Returns index of first match else(or) -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg); // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = s.replace(reg, "SHUBHAM"); // we want to give global flag to replace all the word form the sentence
console.log(result5);
