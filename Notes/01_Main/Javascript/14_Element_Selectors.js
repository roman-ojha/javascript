console.log("Welcome to tutorial 14");
/*
element selectors:
1. Single element selector
2. Multi element selector

*/
// Here, getElementsByClassName("container"); // error ->this will only select the particular class or id
// 1. Single element selector
let element = document.getElementById("myfirst"); //-> by doing this you can select ID
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red"; //->you can change the color of element
element.innerText = "Harry is a good boy"; //->you can change the content of element
element.innerHTML = "<b>Harry is a good boy</b>"; // -> if you want to use html or html tag then you can do this
// console.log(element.innerText);

// Here,  querySelector("ul.this"); //-> this will select all the child of that particuler element
let sel = document.querySelector("#myfirst"); //-> you can also use quaryselector to select
sel = document.querySelector(".child"); //-> this will select the first child class element
sel = document.querySelector("div"); //-> this will going to select the  first div tag
sel.style.color = "green";
console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");
// console.log(elems[0]); //-> first element will select
// console.log(elems[0].getElementsByClassName("child")); //-> to select child class
console.log(elems);

// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'))

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  console.log(element);
  element.style.color = "blue";
}
