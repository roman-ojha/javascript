/*
Functions are one of the fundamental building blocks in JavaScript.

-> A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.
-> A JavaScript function is a block of code designed to perform a particular task.
-> A JavaScript function is executed when “something” invokes it (calls it).

*/

// Q1) write a function to add 2 numbers and print the result
var a, b, add;
a = 5;
b = 6;

// function declaration and defination
function sumNumber() {
  add = a + b;
  document.write("the sum of the number is=" + add);
}

// function call
sumNumber();

// by passing parameters

function sum2Number(a, b) {
  add = a + b;
  document.write("<br>the sum of the number is=" + add);
}

sum2Number(4, 3);

// for string

function sum2Number(a, b) {
  add = a + b;
  document.write("<br>the sum of the string is=" + add);
}

sum2Number(" Roman", " Ojha");

// return type in function

function sum2Numbers(a, b) {
  add = a + b;
  return add;
}

var output = sum2Numbers(1, 3);
document.write("<br>the sum of the number is=" + output);
