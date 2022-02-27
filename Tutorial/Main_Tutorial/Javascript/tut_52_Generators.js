console.log("this is tutorial 53");
// Generators in JavaScript
// if we are creating an array of 1000's of number then all of those index will take an memory which is not good so we need an generators
// 1 - 1B

function* numbersGen() {
  yield 1; // yield is the keyword
  yield 2;
  yield 3;
  yield 4;
}

const gen = numbersGen();
// console.log(gen.next()); // this will return value '1' from 'yield 1' and done:false because yield value is not done yet
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next()); // this will return value 'undefined' from 'yield undefined' and done:true because yield value is  done now
console.log(gen1.next().value); // this will return value '1' from yield 1;
console.log(gen1.next().value); // this will return value '2' from yield 2;
console.log(gen1.next().value); // this will return value '3' from yield 3;
console.log(gen1.next().value); // this will return value '4' from yield 4;
console.log(gen1.next().value); // this will return value 'undefined' from yield undefined;

//--------------------------------------------------------------------------------------------------------------------------------------
function* numbersGen1() {
  let i = 0;
  while (true) {
    yield i++; // now we can generate values unlimeted
    // yield (i++).toString(); // we can return string as well
  }
}
const gen1 = numbersGen();
console.log(gen1.next().value); // this will return value '1' from yield 1;
console.log(gen1.next().value); // this will return value '2' from yield 2;
console.log(gen1.next().value); // this will return value '3' from yield 3;
console.log(gen1.next().value); // this will return value '4' from yield 4;
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

// --------------------------------------------------------------------------------------------------------------------------
// Generators in different kind of data

function* generator() {
  yield (name = "Roman Ojha");
  yield (number = 13);
  yield function fun1(name, number) {
    var print_data = `My name is ${name}
        and i read in class ${number}`;
    console.log(print_data);
  };
  yield (array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  yield (obj1 = {
    name2: "harry",
    number2: 15,
    fun2: function (name2, number2) {
      var print_all_data = `My name is ${name2}
          and i read in class ${number2}`;
      console.log(print_all_data);
    },
  });
  function const1(name3, salary, language) {
    this.name = name3;
    this.salary = salary;
    this.language = language;
  }
  yield (get_const1 = new const1("jack", 100000, [
    "javascript",
    "c++",
    "python",
    "java",
  ]));
}

var gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
