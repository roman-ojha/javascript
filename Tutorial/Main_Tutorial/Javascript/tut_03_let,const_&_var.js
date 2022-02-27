  console.log("tut3");
// Variables in js
// var, let, const ->these are use to make variable
var name = "harry"; //-> if you will make a variable and assigh a value like ("value") then it will be a string
var channel; //-> in here we just declare the variable but dont assigh the value
var marks = 3454; //-> this is a integer variable because is have a number
marks = 0;
channel = "CodeWithHarry";
console.log(name, channel, marks); // ->this will going to print the value of name,channel & marks in console
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = "Delhi";
console.log(city);

// after using const you cant change the variable value of same variable name
// you cant only be able to initialized constant variable you have to give value when you are making constant variable
const ownersName = "Hari Ram";
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = "Orange";

// let make the variable as a local variable which will apply only inside the block
{
  let city = "Rampur";
  city = "Kolkata";
  console.log(city);
}
console.log(city);

const arr1 = [12, 23, 12, 53, 3];
arr1.push(45); // -> by doing this you can push value 45 in array element
console.log(arr1);

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/
