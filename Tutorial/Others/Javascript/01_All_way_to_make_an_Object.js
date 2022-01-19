console.log("All Way to make an Object");

// Way 01
//-------------------------------------------------
let Object1 = {
  id: 01,
  name: "Roman",
  gender: "male",
  function1: function (a, b) {
    console.log(`
        ${this.id}, ${this.name}, ${this.gender}
        The sum of the given number is: ${a + b}
        `);
  },
};

Object1.function1(1, 2);
//------------------------------------------------

// Way 02
//-------------------------------------------------------
let Object2 = {};
Object2["id"] = 61;
Object2["name"] = "Roman";
Object2["gender"] = "male";
Object2["function"] = function (a, b) {
  console.log(`
        ${this.id}, ${this.name}, ${this.gender}
        The sum of the given number is: ${a + b}
        `);
};
Object2.function(1, 2);

//--------------------------------------------------------

// Way 03
//---------------------------------------------------------
function constructor1(id, name, gender) {
  this.id = id;
  this.name = name;
  this.gender = gender;
  this.function1 = function (a, b) {
    console.log(`
    ${this.id}, ${this.name}, ${this.gender}
    The sum of the given number is: ${a + b}
    `);
    return 0;
  };
}

let Object3 = new constructor1(12, "RomanOjha", "male");
console.log(Object3.function1(1, 2));
//------------------------------------------------------------

// Way 04
//-----------------------------------------------------------
let Object4 = new Object();
Object4.id = 31;
Object4.name = "Razzroman";
Object4.gender = "male";
Object4.function1 = function (a, b) {
  console.log(`
    ${this.id}, ${this.name}, ${this.gender}
    The sum of the given number is: ${a + b}
    `);
  return 0;
};

Object4.function1(1, 2);
// console.log(Object4);
//---------------------------------------------------------

// Way 05
//-----------------------------------------------------------
const proto1 = {
  changeName: function (newName) {
    this.name = newName;
  },
};
let Object5 = Object.create(proto1);
Object5.id = 341;
Object5.name = "RazzromanOjha";
Object5.gender = "male";
Object5.function1 = function (a, b) {
  console.log(`
    ${this.id}, ${this.name}, ${this.gender}
    The sum of the given number is: ${a + b}
    `);
  return 0;
};

Object5.changeName("Ojha");
Object5.function1(1, 2);
// console.log(Object5);
//---------------------------------------------------------

// Way 06
//---------------------------------------------------------
const proto2 = {
  changeName: function (newName) {
    this.name = newName;
  },
};
const Object6 = Object.create(proto2, {
  id: { value: 65, writable: true },
  name: { value: "Roman", writable: true },
  gender: { value: "male" },
  function1: {
    value: function (a, b) {
      console.log(`
    ${this.id}, ${this.name}, ${this.gender}
    The sum of the given number is: ${a + b}
    `);
    },
  },
});
Object6.function1(1, 5);
//-----------------------------------------------------------
