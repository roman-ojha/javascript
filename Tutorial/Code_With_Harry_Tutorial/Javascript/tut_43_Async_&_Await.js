console.log("This is tutorial 43");

async function harry() {
  // by using async in function this function will return promise value
  console.log("Inside harry function");
  const response = await fetch("https://api.github.com/users"); // when compiler see await then it check that does data came if not then it will go to do another task outside a async function and after finish  another task it will comeback and check again if task is funish then only after that it will move to the another line

  console.log("before response");
  const users = await response.json(); // response.json() also return promise , .jason means data will convert into jason()
  console.log("users resolved");
  return users;

  // return "harry";
}

console.log("Before calling harry");
let a = harry();
console.log("After calling harry");
console.log(a);
a.then((data) => console.log(data)); // this will exicute when promise will return value
console.log("Last line of this js file");
