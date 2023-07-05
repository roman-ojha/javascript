console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. ITERATING AN OBJECT
let obj = {
  name: "Harry",
  language: "JavaScript",
  hobbies: "Android app development",
};
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj) {
  console.log(obj[key]); // key is the string so we have to do obj[key] of key will be an obect then we can do this obj.name,obj.language
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString) {
  console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string

// **********For of loop***********
console.log("*****************For of loop starts here**************");
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for (let name of people) {
  // if we use for in loops like this then we will get index of an array
  // but if we use for of loops then we will get the value of array
  // in for in loops we have to use keys to use value but in for of loops we dont have to use it
  console.log(name);
}

for (let name of myString) {
  console.log(name);
}

// for of loop in object

var obj1 = {
  name2: "harry",
  number2: 15,
  fun2: function (name2, number2) {
    var print_all_data = `My name is ${name2}
          and i read in class ${number2}`;
    console.log(print_all_data);
  },
};

// for (let key of Object.keys(obj1)) {
//   console.log(obj1[key]); // but in object there is little bit different then other that we have to access through the same as for in loops
// }
