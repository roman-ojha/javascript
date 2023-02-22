// Creating array using new new keyword
var newArray = new Array();
// Three way to make & adding value to an array
// 1. Conventional array
newArray[0] = "Roman";
newArray[1] = "Jack";
newArray[2] = "Razz";
// we can even preset the length of the array while creating new array
var myCars = new Array(3);
myCars[0] = "Ferrari";
myCars[1] = "BMW";
myCars[2] = "Audi";

// 2. Condensed Array
// It allows we to combine the array and array elements definitions into one step.
var myCars2 = new Array("Audi", "Ferrari", "BMW");

// 3. Literal Array
var myCars3 = ["Audi", "Ferrari", "BMW"];
// Also we can define literal array with undefined values as
var myCars = ["Audi", , , "Ferrari", "BMW"];
// Here array myCars have 5 elements where middle 3 are undefined values
// To create array elements with an initial undefined value just enter a comma (,)

// Multi-dimensional array:
var myCars = [["Audi Q4 e-tron", "Audi Q3", "Audi Q7"], "Ferrari", "BMW"];

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, [3, 5]];

const arr = new Array(23, 123, 21, "Orange");
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = "harry"; // -> you can be able to change the value of array like this
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73); // -> by using this you can find the index of any array
// console.log(value)

// Mutating or Modifying arrays
let arr = ["abc"];
arr.toString(); // convert array into string
marks.push(3564); // -> this will going to add value in last index
// another way to do is :
marks[6] = 56; // or marks[marks.length]= 56// is marks array there is not a 6 no. index so we are putting data to index 6 array
// console.log(marks);
marks.unshift(1009); // ->this will going to put the value in first index
marks.pop(); // -> this will remove the last index value
marks.shift(); // -> this will remove the first index value
marks.unshift(45); //-> this will going to add 45 number in first index of an  array
marks.splice(2, 3); // -> splice(from where to remove,how much element to remove)
marks.join("-"); // -> it will going to join all the array items by -
marks.reverse(); // -> array will be reverse after using this
// this method will going to change the original array
let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2); // -> this will going to add the array of marks2 to the marks
// console.log(marks);

// if you want to add two array:

var string1 = ["hellow", "world"];
var string2 = ["what's", "up"];
var all_string = string1.concat(string2);
console.log(all_string); // add two array
console.log(all_string.sort()); // it will alphabetically sort an array
var slice_array = all_string.slice(1, 3); // make two different arrays
console.log(slice_array);

// sorting a number

var number1 = [1, 3, 5, 87, 9, 6, 8, 34, 3, 8, 9, 565, 8, 7, 7564];
console.log(
  number1.sort(function (a, b) {
    return a - b;
  }) // it will going to sort in an accending order
);

console.log(
  number1.sort(function (a, b) {
    return b - a; // it wil going to sort number array in decending order
  })
);

// to add to an empty array:
var array1 = []; // var array1= new array();
for (let i = 0; i < 10; i++) {
  array1.push(i);
}
console.log(array1);
