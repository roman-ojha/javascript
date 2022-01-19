console.log("This is tutorial 59");

// Symbols
// it is primitive type
// they are unique
const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier"); // sym1 and aym2 are totely different and if we use if case for sym1==sym2 then that will be false
// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2); // this result will be false as we define because they are different

const a = "this is";
const b = "this is";

console.log(a === b); // this wil be true because they are string
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol("identifier for k1"); // symbol inside () will be an identifier not a value and we can do like this as well const k1= Symbol();
const k2 = Symbol("for k2");

myObj = {};
myObj[k1] = "Harry"; // we can insert symbols value in object
myObj[k2] = "Rohan";
myObj["name"] = "Good boy"; // we are inserting normal key not an symbol
myObj[4] = "Good int";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"] we are not targeting an string

// Symbols are ignored in for in loop
for (key in myObj) {
  console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj)); // here also symbols are ignored
