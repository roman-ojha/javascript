console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj = {
  name: "harry",
  channel: "Code With Harry",
  address: "Mars",
};
//  we don't have to prototype of an object literal but if we made a constructor then we can change the prototype using constructor

function Obj(givenName) {
  this.name = givenName;
}

// Object.prototype.getName = function () {
//   return this.name;                      //-> this will change the overall prototype of an object so,it is not recomended
// };

// editing prototype
Obj.prototype.getName = function () {
  return this.name;
};

Obj.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new Obj("Rohan Das");
console.log(obj2);
