console.log("This is tutorial 44");

// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This is undefined");
}

try {
  // this will check(try) whether in try block content throw error or not if it doesnot thorow then inside try block will exicute but if it throw an error the it will not execute insite that block and go to catch block
  null.console;
  console.log("We are inside try block");

  functionHarry();
} catch (error) {
  // this will only execute if try will throw an error
  // here error is the error from try block
  console.log(error); // we are printing an error throw by try block in text form
  console.log("Are you okay?");
  console.log(error.name); // this will only print error name
  console.log(error.message); // this will only print error message
} finally {
  // this will execute whether try will throw error or not
  console.log("Finally we will run this");
}
