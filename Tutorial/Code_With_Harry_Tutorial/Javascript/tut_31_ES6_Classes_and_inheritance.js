console.log("this is Tutorial31.js");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan() {
    // -> this is the way to make function in class Employee
    // -> we can say that this is also way to make prototype an now for Employee class slogan prototype is added
    return `I am ${this.name} and this company is the best`;
  }

  joiningYear() {
    return 2020 - this.experience;
  }

  static add(a, b) {
    // by using static you can use this function with out creating an object
    // when you are making static metond then you can't use "this." in here
    return a + b;
  }
}
// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5)) // we are calling add function without creating an object

// inheritance
class Programmer extends Employee {
  // here we are inheriting form Employee class
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision); // super function is saying that this given argumment need to be inheriting form Employee class.
    // super.function() -> if you want to inherit function
    this.language = language;
    this.github = github;
  }

  favoriteLanguage() {
    if (this.language == "python") {
      return "Python";
    } else {
      return "JavaScript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420");
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(5, 7));
