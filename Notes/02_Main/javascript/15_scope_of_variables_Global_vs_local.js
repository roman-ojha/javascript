/* in js we have 2 type of scops - Global & local 
depending upon where you create your variables*/
var a = 5; // -> Global variable which is useable entire program
// -> you can access global variable inside the function

// but local variables are
function local() {
  var roman = 4; // ->this variable is local variable which is useable only inside this function
}

// to make a variable you can be able to exclude tha var name and make variables like:
Roman = "ojah"; //-> this is also the string variables and this variable us a globle variable outside the function of inside the function like
function global() {
  ojha = "Roman"; // -> this variables is also global variables
  //-> but there is a issue that todays browsers operate under a strict mode in which they ristrict this kind of variables so , they are global variables but can't access outside the function
}
