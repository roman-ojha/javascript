// arrays in js

var car1 = "Audi";
var car2 = "Volvo";
var car3 = "BMW"; // -> this is the way you can make a variables of car but if you need 100 car variables then the code will long so,
//you can store it in array

var cars = ["Audi", "Volvo", "BMW"];
// to access array value ;

document.write("<h2>" + cars[0] + "</h2>");
// if you want to print all cars then :
for (var i = 0; i < 3; i++) {
  document.write("<h2>" + cars[i] + "</h2>");
}
//we can add another array value after like:
// arrays are different type of objects in js and when we talk about object then objecy have certain properties and methods that come along with them so, array are also come along will some methods and properties here is an example:
cars.push("Mercedes"); //->push is methods
for (var i = 0; i < 4; i++) {
  document.write("<h2>" + cars[i] + "</h2>");
}

// properties of array :
for (var i = 0; i < cars.length; i++) {
  //-> here length is the properties which come along with arrays
  document.write("<h2>" + cars[i] + "</h2>");
}

// another ways to creats arrays
// var arr1 = new array("Roman", "ojha", "razz");
// OR
var arr1;
arr1 = new array("Roman", "ojha", "razz");

// arrays are little different then c++,java because array in js are dynamic in nature means that you can add on extra value in array in run time

// and in js array you can add different data type in same arrays like:
var different = ["roman", 4, true];
