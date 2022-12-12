//creating element

console.log("this is tut 16");
let element = document.createElement("li"); // -> it will create li element in document
let text = document.createTextNode("I am a text node"); // ->it will create text node
element.appendChild(text); // here we are assignning text node to the element

// Add a class name to the li element
element.className = "childul"; // -> it will create class for created li element
element.id = "createdLi"; // -> it will create id for created li element
element.setAttribute("title", "mytitle"); // -> this will create attribute for that created element
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

// let ul = document.getElementsByClassName("container"); // error ->this will only select the particular class or id
let ul = document.querySelector("ul.this"); //-> this will select all the child of that particuler element
ul.appendChild(element); // this will going to put created element in targeted element in #document
// console.log(ul)
// console.log(element)

// replacing element

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is a created node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2); //-> replecing element form document
let myul = document.getElementById("myul");
myul.replaceChild(element, document.getElementById("fui")); // ->replacing one child element form another element
// -> when you are replacing element then it need to be a child element
myul.removeChild(document.getElementById("lui"));
// let pr = elem2.getAttribute("href"); //->this will going to get the attribute of elem2
// let pr = elem2.hasAttribute("href"); // -> this will going to check do this element have href attrubite or not if it have than it will put true
elem2.removeAttribute("id"); // -> this will going to remove attribute
elem2.setAttribute("title", "myelem2title");
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"
