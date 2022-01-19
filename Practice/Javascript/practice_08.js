function add() {
  let a = 5;
  let b = 6;
  return a + b;
}
console.log(add());

function calculation() {
  let a = 5;
  let b = 6;
  let c = a + b;
  return c;
}

var sum = calculation();
console.log(sum);

var addition = function () {
  let a = 5;
  let b = 6;
  let c = a + b;
  return c;
};

var added = addition();
console.log(added);

var obj = {
  name: "roman",
  class: 13,
  func: function () {
    let print = `
      My name is ${obj.name}
      i read in class ${obj.class}
      `;
    return print;
  },
  printdata: function (name1, class1, string1 = "this is default string") {
    document.write(
      "My name is " + name1 + " and i read in class " + class1 + " " + string1
    );
  },
};

var take = obj.func();
console.log(take);

obj.printdata("roman ojha", 13);

var arry = ["Roman", 13, "This is the paragraph"];

arry.forEach(function (element) {
  console.log(element);
});

arry.push("This is an push array");

for (let i = 0; i < arry.length; i++) {
  document.write("<br>" + arry[i] + "<br>");
}

function constrt(name2, number, string2) {
  this.name2 = name2;
  this.number = number;
  this.string2 = string2;
  this.fun1 = function () {
    let print = `
    My name is ${name2}
    i read in class ${number}
    ${string2}
    `;
    return print;
  };
}

var send = new constrt("Roman ojah", 13, "this is just a paragraph for test");
// console.log(send.fun1());

var obj2 = {
  name: "Roman Ojha",
  number2: 13,
  string3: "This is an string which says that hellow world",
};

for (let key in obj2) {
  console.log(`the object ${key} says that= ${obj2[key]}`);
}

var test1 = new String("Roman ojah")
  .fontcolor("red")
  .fontsize("100ppx")
  .italics()
  .toUpperCase();

var test2 = "Roman";
var test3 = new String(1);
console.log(typeof test1 + " " + typeof test2);
document.write(test1);
console.log(test3);
console.log(test2);

var objects = new String(true);
console.log(typeof objects + " " + objects);

var obj3 = {
  name: "Roman Ojha",
  number2: 13,
  string3: "This is an string which says that hellow world",
};

obj3.fun2 = function () {
  console.log("This is added object method");
  console.log(obj3.name);
};

obj3.name = true;
obj3.fun2();

var heading = document.getElementById("heading");
console.log(heading);

var i = 0;
function color() {
  if (i == 0) {
    document.getElementById("heading").style.color = "darkred";
    document.getElementById("heading").innerText = "button is clicked";
    i = 1;
  } else if (i == 1) {
    document.getElementById("heading").style.color = "black";
    document.getElementById("heading").innerText = "Heading";
    i = 0;
  }
}

function login() {
  var username = window.prompt("Enter Your Username");
  var password = window.prompt("Enter Your Password");
  if (username == " " || password == " ") {
    alert("please enter Username and password");
    login();
  } else if (username == "Roman" || password == "Ojha") {
    document.getElementById("heading").innerText = "Your Are Login";
  } else if (username == null || password == null) {
    alert("please enter Username and password");
    login();
  } else {
    alert("Incorect Username & Password");
  }
  //   console.log(typeof username + " " + typeof password);
}

function enter() {
  var getdata = document.getElementById("name").value;
  document.getElementById("display").style.visibility = "visible";
  document.getElementById("display").innerText = `Your Name is= ${getdata}`;
}

function gender() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  if (male.checked == 1) {
    console.log("you are male");
  } else if (female.checked == 1) {
    console.log("You are female");
  } else {
    console.log("please checked one option");
  }
  //   console.log(male);
}

function option() {
  //   var select = document.getElementById("select").value;
  var select = document.getElementById("select");
  //   console.log(select);
  //   alert("You select= " + select);
  alert("You select= " + select.options[select.selectedIndex].value);
}
