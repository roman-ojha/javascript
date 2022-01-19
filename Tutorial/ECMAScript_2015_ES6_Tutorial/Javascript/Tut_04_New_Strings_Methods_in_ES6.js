// es6 strings.Method
const firstName = "Roman";
const secondName = "Ojha";

console.log(`${firstName}`.startsWith("R"));
// startWith() will return booleans as per given string if it start with the condition then it will return true and vise versa
console.log(`${firstName}`.endsWith("R"));
console.log(`${firstName}`.includes("man"));
// if template literal include the given string then it will return true and vise versa
console.log(
  `${firstName} ${secondName} 
`.repeat(3)
);
// this will repeat the template literal
