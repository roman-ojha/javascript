var element = document.createElement("a");
// var text = document.createTextNode("Go to codewithharry");
// element.appendChild(text);
element.innerText = "Go to codewithharry";
element.setAttribute("href", "https://www.codewithharry.com");
element.setAttribute(
  "style",
  "text-decoration:none; font-size:20px; color:darkblue;"
);
element.setAttribute("target", "_blank");
console.log(element);
var select = document.querySelector("body");
// console.log(select);
select.appendChild(element);
