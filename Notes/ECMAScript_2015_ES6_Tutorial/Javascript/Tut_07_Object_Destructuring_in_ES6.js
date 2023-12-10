const bioData = {
  name: "Roman",
  id: 12,
  gender: "male",
  fevlang: {
    first: "javascript",
    second: "Java",
  },
};

// before destructuring
console.log(`My name is ${bioData.name}`);

// ES6
let { name, id, gender } = bioData;
// after desructuring
console.log(`My name is ${name}`);

// another ways
let name1, id1, gender1;
({ name1, id1, gender1 } = bioData);

// second way
//renaming object name
let { name: myname, id: myid, gender: mygender } = bioData;
console.log(`My name is ${myname}`);

// object inside object
let { name: myname1, id: myid1, gender: mygender1, fevlang } = bioData;
console.log(`My name is ${fevlang.first}`);
