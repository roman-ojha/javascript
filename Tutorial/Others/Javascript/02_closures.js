// basic example:
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
/*
    # Definition:
        -> A Closures means that a function bind together with it's lexical environment
        -> if we will try to debug 'console.log(a)' we will get:
            -> Closure (x)
                a: 10
            -> here it means that inside y() it form a closure with the variable which were part of x
        *) Documentation:
            -> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

// More Example:
// we know that we can assign function to variable:
// var a = function y(){}
// also we can pass function as argument inside the another function
// x(function y(){})
// also we can return function from the function
/*
    function x(){
        return function y(){

        }
    }
*/
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
// so now 'z' content the 'y' function
// but when we are calling function 'x' and again function 'y' is inside that function 'x' until 'x' return value 'y' will be in the lexical scope of the function 'x'
// but when we return 'y' from 'x' then it no longer reside inside 'x'
// so now 'z' will contain the reference of 'y' function
// now if we will call the function 'z' then in that function we are accessing variable 'a' but we know that 'a' is not in the scope of function 'y' when 'y' is inside the lexical scope of the function 'x' then we are being able to access the variable 'a'
// but also when we will return function 'y' and assign the reference to 'z' the value of 'a' after calling function 'z' will be 10
// this is where closures come into picture so when we are returning function from the another function they still maintains their lexical scope, so they remember where they were actually present
// though 'x' know longer exist after it return but still this 'y' function remembers its lexical scope where it came
// so wherever we will return function not just the code inside the function will get return but the closure get return
// that closure enclosed that return function along with its lexical scope
// NOTE: so we can say that closure is function along with its lexical scope bundle together forms a closure
console.log(z);
z();

// More Example:
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  //   so here changed the value of 'a' before returning 'y', then when we will call the function 'z' which will contain the reference of function 'y' the value of the variable 'a' will be 100
  // because when we will return 'y' it comes along with it lexical scope so 'a' doesn't refer to the value '10' but the reference of that variable value
  // so when we will call the function 'z' it will try to find the reference value of 'a' stored inside the memory and now when we are calling 'z' the reference of 'a' stored the value 100
  // NOTE: so when we will return the function which contain the closures then that closures where all the variable come inside like 'a' wouldn't get garbage collected when are are returning from the function 'x'
  // it means that the reference of the variable 'a' will stay there inside the memory because function 'y' is being return which access the value 'a' which is in the scope of 'x' now which form the closure so we might call the function 'y' after it get returned so it has to store all the required values
  return y;
}
var z = x();

// More Example:
// ===========Closure Scope==================
function z() {
  var b = 30;
  function x() {
    var a = 10;
    function y() {
      console.log(a, b);
      // now here we are trying to access the variable of parent scope and also parent parent scope
      // so now 'y' form the closures with scope of 'x' and 'z'
    }
    y();
  }
  x();
}
// ================================
z();
