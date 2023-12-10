/*
    *) Immediately Invoked function expression(IIFE):
        -> is js function that runs as soon as it defined.
*/

// Example 01:
(function () {
  // so here we can see that this is an anonymous function where we just want it to execute as soon as it defined
  // so for that we will just going to add () at the back of the function which will help us to achieve that
  const name = "roman";
  // here we can see that we had defined the variable
  // but this variable is not a global variable and when ever this function will return then all the variable inside this function will get released from the memory
  // but in case of global variable that variable will get stored inside the memory until we are running the program
  console.log(name);
})();
// now this is called as Immediately invoked function expression
// where first we will wrap the anonymous function into '(<anonymous_function>)()'

// let's say that we had added some script here
// and that we also added 'thirdParty.js' library from other thirdParty
// where we don't know how that had create their script

// Example 02:
// we can even pass argument into immediately invoked function and that argument will take by the anonymous function parameter
(function (a, b) {
  console.log(a + b);
})(5, 6);

// Example 03:
(function () {
  const msg = "this is my script";
  function printMsg() {
    console.log(msg);
  }
  printMsg();
  // here we had create 'msg' variable in global state and 'printMsg' function and call that function
  // but also on 'thirdParty.js' file the same 'msg' variable had been created because of that it will throw and error
  // so rather then just putting this script as global state we will use immediately invoked function expression and anonymous function
  // which will solve that error
})();

// Example 04:
const abc = (() => {
  // this console will get run when it is being declared
  // because this block of code is inside the immediately invoked function expression
  console.log("from ktm");

  // but we are also returning the value
  // to assign that return value we will use 'abc'
  // and also we are return the function, it means that 'abc' is the function which take 'a', and 'b'
  return function xyz(a, b) {
    return a + b;
  };
})();
console.log(abc(1, 5));
