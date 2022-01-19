// console.log("hellow world");

// let element = document.getElementsByClassName("list");

// Array.from(element).forEach((element, index) => {
//   element.style.color = "red";
//   console.log(element.className);
//   console.log(index);
// });

// document.getElementsByTagName("h1")[1].style.color = "blue";

let array1 = [
  1,
  2,
  3,
  "roman",
  true,
  null,
  undefined,
  function func1() {
    console.log("This is the function");
  },
];

array1.forEach((element, index) => {
  // console.log(element, index, typeof element);
});

let object1 = {
  number: 1,
  name: "Roman",
  location: "Nepal",
  func1: function (num1, num2) {
    console.log(`The sum of the given number is ${num1 + num2}`);
    return this.number + " " + this.name + " " + this.location;
  },
};
// console.log(object1.func1(1, 6));

// Array(object1).forEach((element) => {
//   if (typeof element == "function") {
//     element(1 + 2);
//   } else {
//     console.log(element);
//   }
// });

for (let key in object1) {
  // console.log(typeof object1[key]);
}

const array = new Array(1, 2, 3, "String");

array.forEach((Element) => {
  // console.log(Element);
});

// console.log(array.length);

let sumFunc1 = function (a, b) {
  return a + b;
};

let returnSum = sumFunc1(54, 45);
// console.log(returnSum);

// let returnAlert = window.alert("don't touch");
// console.log(returnAlert);

// let returnPrompt = prompt("Write username");
// console.log(returnPrompt);

let body = innerHeight;
body = innerWidth;
body = scrollY;
body = location;
// body = location.href = "//notion.com";
// body = window.location.reload();
// body = window.history.go();
console.log(body);
