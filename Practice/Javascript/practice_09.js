// var container = document.getElementsByClassName("container");
// var container = (document.querySelector(
//   ".container"
// ).children[1].children[0].children[0].textContent = "Roman");
// var container = (document.querySelector(
//   ".container"
// ).childNodes[3].childNodes[0].nodeValue = "Roman");
// var container = (document.querySelector(
//   ".container"
// ).firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.textContent =
//   "ojha");
// console.log(container);

var create = document.querySelector("body");
var create = document.createElement("div");
var text = document.createTextNode("this is a text node ");
create.appendChild(text);
create.className = "container";
create.id = "containerID";
create.setAttribute("style", "color:red;");
create.innerHTML = `<div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> `;
for (let i = 0; i < 5; i++) {
  var class1 = create.children[i];
  class1.className = "class1";
}

// console.log(class1);

var body = document.body;
body.appendChild(create);
for (let i = 0; i < 5; i++) {
  var selectclass1 = (document.querySelector(".container").children[
    i
  ].innerHTML = "<h3><center></center></h3>");
}

// console.log(selectclass1);

var insert_text_in_p_tag = (document.getElementsByClassName(
  "class1"
)[0].children[0].children[0].textContent = "This ");
var insert_text_in_p_tag = (document.getElementsByClassName(
  "class1"
)[1].children[0].children[0].textContent = " is ");
var insert_text_in_p_tag = (document.getElementsByClassName(
  "class1"
)[2].children[0].children[0].textContent = " The ");
var insert_text_in_p_tag = (document.getElementsByClassName(
  "class1"
)[3].children[0].children[0].textContent = " new ");
var insert_text_in_p_tag = (document.getElementsByClassName(
  "class1"
)[4].children[0].children[0].textContent = "paragraph");
console.log(insert_text_in_p_tag);

console.log(create);

var all = document.all;
// console.log(all);

var obj = {
  name: "roman",
  number1: 13,
  number2: 14,
  fun1: function () {
    console.log("function is called");
  },
};

Array.from(obj).forEach(function (element) {
  console.log(element);
});
// console.log("this is tut 16");
// let element = document.createElement("li");
// let text = document.createTextNode("I am a text node");
// element.appendChild(text);
