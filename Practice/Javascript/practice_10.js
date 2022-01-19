/* 
! fjdkls;ajsldfjdl
-> jfdklsaslkdjflfjdksl
// fdklsjfhfdksads;
* jfdklsa;;sldkfjjklf
to-do: fkdls;a;laskf fdjfkdlsa jfdklsjfdklsa
` fjkfjdlsajkfla;j;alsdffjdksa;alsdjfjfkdls;jfdklsaa;sldffjdksl;
`jfdlsjfkdlsa;aslkdjffjdksla;
*/
// var obj = {
//   name: "Roman Ojha",
//   number: 10,
//   fun1: function () {
//     return 1;
//   },
// };
// Object.prototype.Romanname = function () {
//   alert("hellow");
//   //   console.log("This prototype is made by a user");
//   return obj.name;
// };
// // console.log(obj.Romanname);

// function obj2(yourname) {
//   this.name = yourname;
// }

// obj2.prototype.number = function () {
//   alert("hellow");
//   //   return null;
//   return this.name;
// };
// var storeobject = new obj2("Roman");

// // console.log(obj2.number());
// // var nul = storeobject.number();
// // console.log(storeobject.Romanname());
// console.log(storeobject);
// // console.log(nul);

// var proto = {
//   change_name: function (name) {
//     return "this is the changed name";
//   },
//   add: function (number1, number2) {
//     return number1 + number2;
//   },
//   return_name: function (newname) {
//     this.name = newname;
//   },
// };

// var obj = Object.create(proto);
// obj.name = "Roman";
// obj.number = 4;
// obj.return_name("this is the changed name");
// console.log(obj.name);
// console.log(obj.change_name("Roman"));

// var proto1 = {
//   change_name: function (name) {
//     return "this is the changed name";
//   },
//   add: function (number1, number2) {
//     return number1 + number2;
//   },
//   return_name: function (newname) {
//     this.name = newname;
//   },
// };
// var obj1 = Object.create(proto1, {
//   name: { value: "Ojha", writable: true },
//   number: { value: 14 },
// });
// obj1.return_name("this is a name");
// console.log(obj1);
// // console.log(obj1.name);

// function const1(name, number) {
//   this.name = name;
//   this.number = number;
// }
// const1.prototype.change_name = function (newname) {
//   this.name = newname;
// };
// var obj1 = new const1("Roman", 13);

// obj1.change_name("This is the changed name");
// console.log(obj1);

// function const2(name, number, string) {
//   const1.call(this, name, number);
//   this.string = string;
// }
// const2.prototype = Object.create(const1.prototype);
// const2.prototype.constructor = const2;
// var obj2 = new const2("Ojha", 14, "This is the string");
// obj2.change_name("inherit prototype");
// console.log(obj2);

// class number {
//   constructor(name, number, string) {
//     this.name = name;
//     this.number = number;
//     this.string = string;
//   }
//   fun1() {
//     return "this is the function";
//   }
//   static fun2() {
//     return "static";
//   }
// }

// var obj1 = new number("Roman", 13, "this is the string");
// console.log(obj1);
// console.log(obj1.fun1());

class number1 {
  setdata1(num1) {
    this.num1 = num1;
  }
}
class number2 extends number1 {
  setdata2(num2) {
    this.num2 = num2;
  }
  calculation() {
    var sum;
    sum = this.num1 + this.num2;
    return sum;
  }
}

n1 = new number2();
n1.setdata1(1);
n1.setdata2(2);
var sum = n1.calculation();
console.log(sum);
console.log("Roman ojha");
