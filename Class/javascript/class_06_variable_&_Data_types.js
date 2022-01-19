/*
Defination;
-> A variable provide us with a named storage that our programs can manipulate.
-> Variables ate used to store infomation to be referenced & manipulated in a computer program.
-> In programming, a variable is a value that can change, depending on conditions or on information passed to the program. 

*/

// Why do we need variables?
// -> to store date in memory we need variables

/*
Data types in js
1) Primitive type 
    a) Number
    b) String
    c) Boolean
2) trivial/other types (just another name of primitive type)
    a) null
    b) undefined
3) composite types
    a) Object
    b) Array

*/

// need to remember
// 1) javascript is loosely type programming language.
// 2) javascript id Dynamically type scripting language.

// loosely type because we dont declaration any datatype like c++,java
// Javascript is known as dynamically typed language. This means, that once a variable is created in javascript using the keyword var, we can store any type of value in this variable supported by javascript
var num = 16; //number
var Name = "Roman ojha"; // string
var flag = true; // boolean

alert(num);
document.write(num); //printing on the browser
num = "Roman ojha";
document.write(num); //printing on the browser
