console.log("Welcome to tutorial 24");

let today = new Date(); // -> it will give you the present days date and time
// console.log(typeof today);
let otherDate = new Date("8-4-2003 04:54:08"); // it will give you the entered date
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay(); // it will give you the day of given date and time in number starting from 0
a = otherDate.getDate(); // it will give you the date of given date and time
a = otherDate.getMinutes(); // it will give you the minute of given date and time
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23); // you can set data in the given date and time
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
