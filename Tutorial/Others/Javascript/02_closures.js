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
const z = x();
// so now 'z' content the 'y' function
// but when we are calling function 'x' and again function 'y' is inside that function 'x' until 'x' return value 'y' will be in the lexical scope of the function 'x'
// but when we return 'y' from 'x' then it no longer reside inside 'x'
console.log(z);
