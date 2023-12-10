/*
    -> The Destructuring assignment syntax is a Javascript Expression That makes it possible to unpack values from arrays, or properties from objecs,into distinct variables
*/

// making an array
const myproglang = ["js", "php", "c", "python", "java"];
// in es5:
var top1 = myproglang[0];
var top2 = myproglang[1];
var top3 = myproglang[2];
var top4 = myproglang[3];
var top5 = myproglang[4];
// in es5 if we wan to assign the we have to do it differently

console.log(top1 + " " + top2 + " " + top3 + " " + top4 + " " + top5);

// in es6
const programmingLanguage = ["js", "php", "c", "python", "java"];
//                            |      |     |      |         |
//                      let [arr1, arr2, arr3,  arr4,     arr5] = myproglang;
let [arr1, arr2, arr3, arr4, arr5] = programmingLanguage;
// now here we can store or assign all the array index using array destructuring
console.log(arr1 + " " + arr2 + " " + arr3 + " " + arr4 + " " + arr5);

let [array1, , , , arrayLast] = programmingLanguage;
// here we are scaping all the index of array in which we don't want to assign the variable
console.log(`My fav programming language is ${array1} 
My least fav language is ${arrayLast}`);

//
let arra1, arrlst;
[arra1, , , , arrlst] = programmingLanguage;
console.log(`My fav programming language is ${arra1} 
My least fav language is ${arrlst}`);
