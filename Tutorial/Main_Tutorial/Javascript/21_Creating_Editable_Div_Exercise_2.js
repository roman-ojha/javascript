console.log("Tutorial 21 exercise 2 JavaScript");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
// var ID = setTimeout(function () {
//   document
//     .getElementsByClassName("container")[0]
//     .addEventListener("click", (e) => {
//       //   console.log("hellow");
//       var get_ul = document.getElementsByClassName("this");
//       var create_element = document.createElement("input");
//       for (
//         let i = 0;
//         i < document.getElementsByClassName("childul").length;
//         i++
//       ) {
//         document.getElementsByClassName("childul")[
//           i
//         ].innerHTML = `<input type="text" placeholder=></input>`;
//       }
//       clear_timeout();
//       take_input();
//     });
// }, 0);

function clear_timeout() {
  clearTimeout(ID);
}

function take_input() {}

let get_ul = document.querySelector("ul.this");
let create_input = document.createElement("input");
// get_ul.appendChild(create_input);
get_ul.replaceChild(
  create_input,
  document.getElementsByClassName("childul")[4]
);
