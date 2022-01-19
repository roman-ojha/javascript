// {
//   let name = ["Roman", "ojha"];
//   let paragraph = "This is the paragraph";
//   let age = 20;
//   let print = `<h1>My name is ${name[0]} ${name[1]}</h1>
//                 <h2>My age is ${age}</h2>
//                 <p>${paragraph}</p>
//   `;
//   console.log(print);
//   //   document.getElementById("h1").innerHTML = print;
//   document.body.innerHTML = print;
// }

// function data1(name1, class1, number1) {
//   this.name1 = name1;
//   this.class1 = class1;
//   this.number1 = number1;
//   this.printdata = function () {
//     console.log(name1, class1, number1);
//   };
// }
// var obj1;
// obj1 = new data1("Roman", 13, 15);
// obj1.printdata();

// let obj = {
//   name: "roman",
//   class: 13,
//   number: 15,
//   calculation: function () {
//     let x = "test";
//     return x;
//   },
// };

// console.log(obj.name);
// console.log(obj.calculation());
// console.log(obj["name"]);
// document.write(obj.calculation());

// function print(name, read, string = "I read in class ") {
//   console.log(`
//   My name is ${name}
//   ${string}${read}
//   `);
//   return name;
// }
// var name = "Roman";
// var read = 13;
// var ret = print(name, read);
// console.log(ret);

// var print1 = function (name1, read1, string1 = "I read in class ") {
//   var letter = `
//   My name is ${name1}
//   ${string1} ${read1}
//   `;
//   return letter;
// };

// var name1 = "Roman";
// var read1 = 13;
// var ret1 = print1(name1, read1);
// // document.write(ret1);
// console.log(ret1);

// const ary1 = [1, 2, 3, 4, 5, 6];

// ary1.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });

// let c = window;
// let a = prompt("Plese enter your Username=");
// let b = prompt("Plese enter your Password=");
// console.log(a + " " + b);
// c = window.innerHeight;
// c = window.scrollX;
// console.log(c);

// let d = document;
// console.log(d);

// var a = document.all;
// a = document.body;
// a = document.forms;
// console.log(a);

var store1 = document.getElementsByClassName("class1");
console.log(store1);

Array.from(store1).forEach((element) => {
  console.log(element);
  // element.innerHTML = "Roman";
});
console.log("----");
let store2 = document.getElementsByClassName("class2");
console.log(store1[0].getElementsByClassName("class2"));
// console.log(store2);

Array.from(store2).forEach(function (element, index) {
  console.log(element, index);
  element.innerHTML = "Roman";
});
