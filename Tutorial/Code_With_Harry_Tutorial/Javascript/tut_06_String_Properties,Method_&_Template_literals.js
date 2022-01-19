console.log("We are at tut 6");
const name = "Harry";
const greeting = "Good Morning";
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>" + "<p> this is My para</p>";

html = html.concat("this", " str2");
// this will add string in the end
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[1]); -> this will going to print the second Charecter
// console.log(html.indexOf('<')); ->this will going to print the position number of that charecter or word
// console.log(html.lastIndexOf('<')); ->this will going to print the position number of that charecter  which is at the last occurence

// console.log(html.lastIndexOf('fhdjskahfdes'));
// if typed string is not in the string value then it will print -1
// console.log(html.charAt(3)); // or console.log(html[3])
// console.log(html.endsWith('str2')); ->this mean that does last string is end with string str2 if yes then it will print true
// console.log(html.endsWith('dsfsdfd')); ->this will print false
// console.log(html.includes(' fg')); -> it means that does this string is inclide in the string if not than it will going to print false
// console.log(html.substring(1,6)); ->this will going to print string from 1-6
// console.log(html.slice(0, 4));
// console.log(html.slice(-4)) -> this will print from last upto 4
// console.log(html.split('>')); -> this will going to split string whenever it see '>' steing and make every splited string into array
// console.log(html.split(' '));
// console.log(html.replace('this', 'it')); -> it will going to replace 'this' with 'it' but only first occurance string

// Template literals
// by using this you can be able to use html in java script
let fruit1 = "Orange'";
let fruit2 = "Apple";
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
// this is template literals

document.body.innerHTML = myHtml;

let string = "Roman\nOjha"; // -> \n for the new line
console.log(string);
