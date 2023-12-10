console.log("Welcome to tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
// console.log(cont.childNodes);//-> childnodes select all tag as well as text,comments and new line
// console.log(cont.children); // -> but children will only select elements

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector("div.container");

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode); //->this will going to the parent in this case container
console.log(container.firstElementChild.nextSibling); //->this will select the next sibling of firstelementchild
console.log(container.firstElementChild.nextElementSibling); //-> this will select the next element of firstelementchild
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
