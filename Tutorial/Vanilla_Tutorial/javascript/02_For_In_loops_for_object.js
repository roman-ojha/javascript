// can make loop for object as well like this:

const obj = {
  name: "Roman ojha",
  age: 20,
  type: "Programmer",
  os: "windows",
};
// to excess all data from object we can do this:

for (let get in obj) {
  console.log(`the ${get} of object is ${obj[get]}`);
}

//  here 'get' is an variable who is carring all the variable of an object
