// object in js
/*
    -> Booleans can be objects (if defined with the new keyword)
    -> Numbers can be objects (if defined with the new keyword)
    -> Strings can be objects (if defined with the new keyword)
    -> Dates are always objects
    -> Maths are always objects
    -> Regular expressions are always objects
*/

var str1 = new String(); // -> object
// but
var str2 = "roman"; //->string
// now this is a variable which is an objects of string datatype
// now str1 is object so it have methods and properties
// we can find which type of varibles is this by:
document.write("<h2>" + typeof str1 + "</h2>");
document.write("<h2>" + typeof str2 + "</h2>");

var car = {
  car_brand: "tesla",
  car_model: "Model 3",
  price: 35000,
  teslaAutopilot2: function () {
    document.write("<h2>this car has auto pilot</h2>");
  },
};
// if you want to add properties and methods in object then:
car.fueltype = "Electric";
// this will add one more property inside car object
document.write("<h2>" + car.fueltype + "</h2>");
// adding Methods
car.newfn = function () {
  document.write("<h2>Add Function</h2>");
};

car.newfn();

// you can change the datatype of the property as well by:
car.price = "45000";
document.write("<h2>" + car.price + "</h2>");
document.write("<h2>" + typeof car.price + "</h2>");

// if you want to delete any property from object by:
delete car.price;
// now price from car object had deleted
document.write("<h2>" + car.price + "</h2>");
