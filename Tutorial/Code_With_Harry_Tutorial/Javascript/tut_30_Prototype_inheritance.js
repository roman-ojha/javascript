console.log("This is tutorial 30");

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates harry object
let harry = Object.create(proto); // -> we made a prototype of "proto"
harry.name = "harry"; // -> we are creating a object of harray;
harry.role = "Programmer";
// harry.changeName("Harry2") // -> because we made a changeName prototype which take newname and assigh newname to name so 'harry' will replace with "Harry2"
console.log(harry);

// This also creates harry1 object
const harry1 = Object.create(proto, {
  name: { value: "harry", writable: true }, // -> by using 'writable:true' we are saying that you can write(change) the value of name by giving true(yes);
  role: { value: "Programmer" }, // -> but in here we can't be able to change the value of role because we did not say "writable:true"
});
harry1.changeName("Harry2");
// console.log(harry1)

// ------------------------------------------------------------------------------------------------------------------------------------------

// Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan());

// Programmer constructor
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience); // call is a function which is inheriting Employee constructor and assignning all parameter of Employee to the parameter of programmer by using "this"
  this.language = language; // so now we are only assignning argument "language" to a programmer constructor
  // by inheriting Employee we can't use the prototype to Employee so, we also have to inherit prototype of Employee
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype); // we are creating a prototype of an oject of  Programmer by using create function
// but when we go in see the prototype of programmer in developer tools  firstily we see '_proto__:Employee' which says that we are using prototype of Employee but when we open that '_proto__:Employee' We can't see the prototype of constructor

// so, we have to insert constructor prototype in Programmer by doing this
// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript"); // creating an object of programmer
console.log(rohan);

// this is the method to inherit but this is the complex method so in ES6 these will be the easy way to inherit
