// console.log("this is practice 16");

// // let array1 = [1, 2, 3, 4, 5];
// // array1.push(2);
// // console.log(array1);

// let obj1 = { data: 1, id: 01, name: "RomanOJha" };

// console.log(obj1);

// let obj2 = new Object();
// console.log(obj2);

// function cons() {
//   this.firstName = "Roman";
//   this.lastName = "Ojha";
//   this.id = 14;
//   this.gender = "Male";
//   this.info = () => {
//     console.log(`
// Info of the programmer:
// ID: ${this.id}
// First Name: ${this.firstName}
// Last Name: ${this.lastName}
// Gender:${this.gender}
//         `);
//   };
// }

// let obj3 = new cons();
// obj3.info();
// console.log(Object.prototype);

// function cons(value) {
//   this.name = value;
// }

// // Object.prototype.getName = function (value) {
// //   return this.name;
// // };
// let obj1 = {
//   name: "roman",
//   id: 12,
// };

// console.log(obj1);

// cons.prototype.getName = function (value) {
//   return `${this.name} and ${value}`;
// };

// let obj2 = new cons("RazzRoman");
// console.log(obj2.getName("Roman"));

// const proto = {
//   slogan: function () {
//     return "This company is the best";
//   },
//   changeName: function (newName) {
//     this.name = newName;
//   },
// };

// let Roman = Object.create(proto);
// Roman.name = "Roman";
// Roman.role = "Programmer";
// Roman.changeName("Ojha");
// // console.log(Roman.name);

// function constructor1(name, id, gender) {
//   this.name = name;
//   this.id = id;
//   this.gender = gender;
// }

// constructor1.prototype.slogan = function () {
//   return `${this.name}, ${this.id}, ${this.gender}`;
// };

// let obj1 = new constructor1("roman", 43, "male");
// console.log(obj1.slogan());
// console.log(obj1);

// function Programmer(name, id, gender, language) {
//   constructor1.call(this, name, id, gender);
//   this.language = language;
// }
// Programmer.prototype = Object.create(constructor1.prototype);
// Programmer.prototype.constructor = Programmer;
// let obj2 = new Programmer("roman", 43, "male", "javascript");
// console.log(obj2);

// function Employee(name, id, gender) {
//   this.name = name;
//   this.id = id;
//   this.gender = gender;
// }

// let obj1 = new Employee("roman", 3, "male");
// Employee.prototype.changeName = function (newname) {
//   this.name = newname;
//   return obj1;
// };
// console.log(obj1);
// console.log(obj1.changeName("Ojha"));

// function Programmer(name, id, gender, language) {
//   Employee.call(this, name, id, gender);
//   this.language = language;
// }

// let obj2 = new Programmer("roman", 43, "male", "javascript");
// console.log(obj2);

// Programmer.prototype = Object.create(Employee.prototype);
// Programmer.prototype.constructor = Programmer;

// let obj1 = new Employee("roman", 43, "male");
// console.log(obj1);
// obj1.changeName("ojha");
// obj1.changeId(765);
// console.log(obj1);

// function constructor1(name, id, gender) {
//   this.name = name;
//   this.id = id;
//   this.gender = gender;
// }

// constructor1.prototype.changeName = function (newName) {
//   this.name = newName;
// };
// let obj1 = new constructor1("Roman", 43, "Male");

// console.log(obj1);
// obj1.changeName("Roman Ojha");
// console.log(obj1);

// function Programmer(name, id, gender, language) {
//   constructor1.call(this, name, id, gender);
//   this.language = language;
// }

// Programmer.prototype = Object.create(constructor1.prototype);
// Programmer.prototype.constructor = Programmer;
// let obj2 = new Programmer("Razz", 12, "male", "Javascript");
// console.log(obj2);
// obj2.changeName("RazzRoman");
// console.log(obj2);

// class Employee {
//   constructor(name, id, gender) {
//     this.name = name;
//     this.id = id;
//     this.gender = gender;
//   }
//   changeName(newname) {
//     this.name = newname;
//   }
//   changeId(newid) {
//     this.id = newid;
//   }
//   slogan() {
//     return `
//     name: ${this.name}
//     id: ${this.id}
//     gender: ${this.gender}
//     `;
//   }
// }

// class Programmer extends Employee {
//   constructor(name, id, gender, language) {
//     super(name, id, gender);
//     this.language = language;
//   }
// }

// let Obj1 = new Programmer("Roman", 65, "male", "Javascript");
// Obj1.changeName("Razz");
// console.log(Obj1);

let second = 0;

function printMsg() {
  document.getElementById("text").innerHTML = second + " second ";
  second++;
}

let ID = 0;
function start() {
  ID = setInterval(printMsg, 1);
}

function stop() {
  clearInterval(ID);
}

function func() {
  console.log("hello world");
}
