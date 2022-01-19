/*
JavaScript operators are symbols which are used to assign values, compare values, perform arithmetic operations, and more. 

The variables (operations) are called operands.
The operation (to be performed between the two operands) is defined by an operator.
JavaScript supports the following types of operators.

Arithmetic Operators
Comparison Operators
Logical (or Relational) Operators
Assignment Operators
Conditional (or ternary) Operators
String Operators
Type Operators
Bitwise Operators

*/

/*
Operator	Description

+	        Addition
–	        Subtraction
*	        Multiplication
/	        Division
%	        Modulus (Remainder)
++	        Increment
—	        Decrement

*/

// Addition
var a = 3; // this is right to left accociativity
var b = 4;
var c = 4;
var d = a + b + c; // this is left to right where first a+b will add and after that the result will add with c
document.write("the sum is= " + d + ""); //-> here + operator concatinate with string
var d = "Roman" + b + c; // this will make all result string because first 'a' will add to b where a is string and after seeing first calcilation as string it will assumed that sum will also string
document.write("<h1>the sum is= " + d + "</h1>");

var d = a + b + "Roman" + b + c; // a+b will be number after that will be string

document.write("<h1>the sum is= " + d + "</h1>");
