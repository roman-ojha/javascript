// var loop_number = 0;
// setTimeout(() => {
//   for (let index = 0; index < 10000; index++) {
//     loop_number = index;
//     console.log("This is index number" + loop_number);
//   }
// }, 100);

// console.log("test");
// var obj1 = {
//   name: "Roman",
//   number: 13,
//   string: "this is the testing string",
//   fun1: function () {
//     var print = `My name is ${name}
//                     I read in class ${number}
//                     and ${string}`;
//     return print;
//   },
// };
// // Object.prototype.getfunction = function () {
// //   return "this function return nothing";
// // };
// console.log(obj1);

// function const1(name, number, string) {
//   this.name = name;
//   this.number = number;
//   this.string = string;
//   this.fun1 = function () {
//     var print = `My name is ${this.name}
// I read in class ${this.number}
// and ${this.string}`;
//     return print;
//   };
// }
// var obj2 = new const1("Razz", "345", "what the f");
// const1.prototype.printfunction = function () {
//   return obj2.fun1();
// };

// console.log(obj2.printfunction());
// console.log(obj2);

// function Employee(name, ID, ph_no, salary) {
//   this.name = name;
//   this.ID = ID;
//   this.ph_no = ph_no;
//   this.salary = salary;
//   this.printfun1 = function () {
//     return `Name= ${this.name}
//     ID= ${this.ID}
//     Phone number= ${this.ph_no}
//     Salary= ${salary}`;
//   };
// }
// Employee.prototype.Employee_print = function (i) {
//   let temp;
//   this.temp = i;
//   if (this.temp == 0) {
//     return `this is Employee prototype`;
//   } else if (this.temp == 1) {
//     return `this is Programmer prototype`;
//   } else {
//     return `this is not the prototype of any Employee`;
//   }
// };
// var eobj1 = new Employee("Shachin", 100497658, 9816949067, 100000);
// console.log(eobj1);
// console.log(eobj1.Employee_print(0));

// function Programmer(name, ID, ph_no, salary, language) {
//   Employee.call(this, name, ID, ph_no, salary);
//   {
//     this.language = language;
//   }
// }
// Programmer.prototype = Object.create(Employee.prototype);

// var Pobj2 = new Programmer(
//   "Dhoni",
//   1000473892,
//   9863627140,
//   200000,
//   "javascript",
//   "this is the function to inherit"
// );
// console.log(Pobj2);
// console.log(Pobj2.Employee_print(1));
// Programmer.prototype.constructor = Programmer;

// var proto1 = {
//   fun1: function () {
//     return `this is the 'fun1' prototype of an proto1 object`;
//   },
//   fun2: function () {
//     return `this is the 'fun2' prototype of an proto1 object`;
//   },
// };

// var obj3 = Object.create(proto1);
// obj3.name = "virat";
// obj3.Run = 20000;
// obj3.string = "this is the string of virat";
// console.log(obj3);
// console.log(obj3.fun1());

// var proto2 = {
//   fun1: function () {
//     return `this is the 'fun1' prototype of an proto2 object`;
//   },
//   fun2: function () {
//     return `this is the 'fun2' prototype of an proto2 object`;
//   },
// };

// const obj4 = Object.create(proto2, {
//   name: { value: "Roman", writable: true },
//   number: { value: 35 },
//   string: { value: "this is the string of obj4" },
// });

// console.log(obj4);
// console.log(obj4.fun1());

// class Employee1 {
//   constructor(name, ID, ph_no, salary) {
//     this.name = name;
//     this.ID = ID;
//     this.ph_no = ph_no;
//     this.salary = salary;
//     this.printfun1 = function () {
//       return `Name= ${this.name}
//       ID= ${this.ID}
//       Phone number= ${this.ph_no}
//       Salary= ${salary}`;
//     };
//   }
//   return_name() {
//     return this.name;
//   }
//   return_ID() {
//     return this.ID;
//   }
// }

// class Programmer1 extends Employee1 {
//   constructor(name, ID, ph_no, salary, language) {
//     super(name, ID, ph_no, salary);
//     this.language = language;
//   }
// }

// let p5 = new Programmer1("Dhoni", 1000473892, 9863627140, 200000, "javascript");
// console.log(p5);
// console.log(p5.return_name());
