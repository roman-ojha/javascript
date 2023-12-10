// DOM=Document Object Model
// form this you can be able to access html and css to jave script
console.log("Welcome to tut 12.js");
let a = document; //-> document is a object
a = document.all; // ->it will going to print all tag that are use in this html project
// a = document.body; //->it will going to print all content from body from this html project
// a = document.forms[0]; //->it will going to print all form tag that are use in this html project and [0] will select first form

//we can't use forEach directly by the document so we have to make it array and afer we can access all document in array form
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a = document.links[0]; //-> you can print link that are use in website and by [0] you can targer first link that are use in html project
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);
