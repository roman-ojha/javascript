/*
    *) Anonymous function:
        -> is the function that does not have any name associated with it.
*/

function ex() {
  // here we can see that this is the function that have a name called 'ex'
}

let z = function () {};

setTimeout(function () {
  // here now we can see that this function doesn't have any name
  // so when we create a function with name it will store that function into memory
  // but let's say that we don't want to call that function repeatedly, we just want to call that function one
  // then why do we even have to store that function into memory because that will just consume more memory
  // in that case we will use anonymous function
  console.log("Hello world");
}, 3000);
