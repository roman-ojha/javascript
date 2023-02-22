/*
    -> JavaScript is an object-based language. Everything is an object in JavaScript.
    -> A JavaScript object is an entity having state and behavior (properties 
    and method).
    -> JavaScript is template based not class based. 
    -> Here, we don't create class to get the object. But, we direct create 
    objects
*/

// making object
let myobj = {
  "first name": "harry",
  channel: "CodeWithHarry",
  isActive: true,
  marks: [1, 5, 3, 6],
};
// myobj.channel = "roman"; // you can change object value
console.log(myobj);
console.log(myobj["channel"]); // ->this is also the way to access
console.log(myobj.channel);

// for loop for an object
let obj1 = {
  name: "Roman",
  number: 13,
  laguage: "javescript",
  string: "This is the string",
};
for (let i = 0; i < Object.keys(obj1).length; i++) {
  const element = Object.keys(obj1)[i];
  console.log(element);
  const values = obj1[Object.keys(obj1)[i]];
  console.log(values);
}

// creatin an object in different method

let obj2 = {};
obj2["name"] = "Roman ojha";
obj2["Number"] = 12;
obj2["fun1"] = function () {
  return 1;
};
console.log(obj2);

// Three way to create object:
//  1. By object literal
//  2. By creating instance of object directly (using new keyword)
//  3. By using an object constructor (using new keyword)

// 1. By object Literal
const obj = {
  name: "roman",
  id: 10,
  gender: "male",
};

//  2. By creating instance of object directly (using new keyword)
var obj2 = new Object();

//  3. By using an object constructor (using new keyword)
// Here need to create function with arguments.
function user(name, id, gender) {
  // Each argument value can be assigned in the current object by
  // The this keyword refers to the current object
  this.name = name;
  this.id = id;
  this.gender = gender;
}

const userObj = new user("roman", 1, "male");
console.log(userObj);
