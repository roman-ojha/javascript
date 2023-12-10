console.log("This is tutorial 60");
// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564]; // we can do this to assign the value
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // we can do this by using a (...)  and the value will assign like : a will assing to 1 and b will assign to 2 and c will assign to 3 and d will make and array  and assign like : d =[4,5,6,7,8,9,10,11,12,13]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Array Destructuring
({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 }); // it is same like the previous one but the last value of d will become as an object an assing d: and e: to the do and make an object
// console.log(a, b, c, d)

const fruits = ["Apple", "Bananas", "Mangoes"];
[a, b, c] = fruits; // Apple, bananas and mangoes will assign to the a,b,c this will same for the function , class and ohers
// console.log(a, b, c)

// Object Destructuring
const laptop = {
  model: "HP Pavilion",
  age: "23 days",
  gender: "Male",
  net: 1233,
  start: function () {
    console.log("started");
  },
};

const { model, age, gender, net, start } = laptop; // we are assigning an object like this by using destructuring
console.log(model, age, gender, net, start);
start(); // now we can call function like this
