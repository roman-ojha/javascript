console.log("This is tutorial 57");

// Maps in JavaScript: We can use any type of key or value
// this has bee include in ES6
// we can use function(),string and blank object as a key
const myMap = new Map(); // we are crating an empty maps using constructors
// Map is also an object

const key1 = "myStr", // we are giving string as an key
  key2 = {}, // we are giving an object as an key
  key3 = function () {}; // we are giving an function as an key

// Setting map values
myMap.set(key1, "This is a string"); // set() methods takes key and value as and arguments
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function"); // myMap.set(key3, { value:"This is an empty function"});
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
  console.log("key is ", key);
}
// Get only values
for (let value of myMap.values()) {
  console.log("value is ", value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
  console.log("Key is ", key);
  console.log("Value is ", value);
});

// Converting map to an array
let myArray = Array.from(myMap);
console.log("Map to array is ", myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Map to keys array is ", myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log("Map to values array is ", myValuesArray);

// Converting array to the map
let arr = ["Roman", "Ojha", 12, "male", "Programmer"];
// here we are making an array map and we are passing a callback function
// where it take value of the array, index of the array and the whole array
arr.map((value, index, array) => {
  console.log(index, value, array);
});
