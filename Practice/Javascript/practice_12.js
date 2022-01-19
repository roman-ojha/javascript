// console.log("this is tut 12");
// let a=document.scripts;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })

// console.log("This is tut 14");

// let element=document.getElementById("class1");
// element.style.color='red';
// element=element.innerText="Hellow world";
// console.log(element);

// let sel=document.querySelector('div');
// console.log(sel);

// console.log("this is tut 15");
// let element=document.createElement('li');
// element.className='classli';
// element.id='li1';
// element.setAttribute('title','mytitle');
// element.innerText='This is append child'
// let ul=document.querySelector('ul');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);

// let element2=document.createElement('h2');
// let text1=document.createTextNode("this is the text node");
// element2.appendChild(text1);
// let cont=document.querySelector('.container');
// cont=cont.children[1].children[0].lastElementChild;
// cont.replaceWith(element2);
// console.log(cont);

// console.log("this is tut 17");
// document.getElementById("heading1").addEventListener("click", function (e) {
//   console.log("you click the heading");
//   let variable;
//   variable = e.target;
//   variable = e.target.id;
//   console.log(variable);
// });

// console.log("this is tut 18");

// document.getElementById("submit1").addEventListener("click", func1);

// function func1(e) {
//   console.log("helow world", e);
//   e.preventDefault();
// }

// console.log("this is tut 20");
// localStorage.setItem("name", "roman");
// localStorage.clear();

// console.log("this is tut 23");

// console.log("this is tut 27");
// let obj = {
//   name: "roman",
//   roll_no: 25,
//   func1: function (number) {
//     console.log(`${this.name}, ${this.roll_no}, ${number}`);
//   },
// };
// let numb = 1;
// obj.func1(numb);

// function conster(name, speed) {
//   this.name = name;
//   this.speed = speed;
// }

// car1 = new conster("roman", 12);
// console.log(car1.speed);

// console.log("this is tut 28");
// let obj = {
//   name: "roman",
// };
// // console.log(obj);

// let cons = function (givenName) {
//   this.name = givenName;
//   this.fun1 = function (number) {
//     console.log(number);
//     return 0;
//   };
// };
// let obj1 = new cons("roman");
// cons.prototype.newfunction = function (anotherName) {
//   this.name = anotherName;
//   console.log(this.name);
//   return 0;
// };
// console.log(obj1.newfunction("roman"));

// console.log("this is tut 30");

// class Employee {
//   constructor(givenName, givenExperience, givenDivision) {
//     this.name = givenName;
//     this.experience = givenExperience;
//     this.division = givenDivision;
//   }

//   slogan() {
//     return `I am ${this.name} and this company is the best`;
//   }
//   joiningYear() {
//     return 2020 - this.experience;
//   }
// }

// let harry = new Employee("roman", 45, 34);
// console.log(harry);

// console.log("this is tut 41");

// function func1() {
//   console.log("this is the function");
// }

// const func1 = function () {
//   console.log("this is the function");
// };

// const func1 = () => {
//   return 0;
// };

// const c = func1();
// console.log(c);
