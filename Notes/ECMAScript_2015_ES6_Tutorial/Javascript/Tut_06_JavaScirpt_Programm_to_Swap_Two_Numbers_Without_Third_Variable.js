// Q) Programm to swap two numbers without third variable.

let a = 4;
let b = 5;
//before swap:
console.log(`A= ${a}
B= ${b}`);

// using es6
[a, b] = [b, a];
// this is using array destructuring

// after swap:
console.log(`A= ${a}
B= ${b}`);
