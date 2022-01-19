// javascript is the object orriented programming language
// Object in js
var car_brand = "tesla";
var car_model = "Model 3";
var price = 35000;

function teslaAutopilot() {
  document.write("<h2>this car has auto pilot</h2>");
}

teslaAutopilot();
// but if we want to have more then one car then by this way we have to make variables for all car
// but in obeject you can do this:

var car = {
  car_brand: "tesla",
  car_model: "Model 3",
  price: 35000,
  //these three things are properties of car object
  //we can also have the function inside the object
  // when we create an object inside an object or class then it will called as Methods
  teslaAutopilot: function () {
    return "this car has auto pilot";
    // you have to return it but anothe way is:
  },
  // this is Methods
  teslaAutopilot2: function () {
    document.write("<h2>this car has auto pilot</h2>");
    // here you dont have to return because use are calling this function
  },
};

// now to print we can do this:
document.write("<h2>" + car.car_model + "</h2>");
document.write("<h2>" + car.teslaAutopilot() + "</h2>");
car.teslaAutopilot2();

// another way to create an object which is called as constructor function
function cars(car_brand, car_model, price) {
  //->these are argumments
  this.car_brand = car_brand; // property of object = arguments
  this.car_model = car_model;
  this.price = price;
  this.teslaAutopilot3 = function () {
    document.write("<h2>this car has auto pilot</h2>");
  };
}

var c1 = new cars("tesla", "Model 3", 35000);
var c2 = new cars("tesla", "Model P", 45000);
c1.teslaAutopilot3();
document.write("<h2>" + c2.car_model + "</h2>");
