console.log("The file is tutorial 51");
// Iterators

function fruitsIterator(values) {
  let nextIndex = 0;
  // we will return an object
  return {
    // this return function named as next of an object
    next: function () {
      // next is a function of object
      if (nextIndex < values.length) {
        // We will return below object
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        // We will return below object with only done
        return {
          done: true,
        };
      }
    },
  };
}

const myArray = ["Apples", "Grapes", "Oranges", "Bhindi"];
console.log("My array is ", myArray);

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next()); // this will print the first index of myArray "Apples"
console.log(fruits.next()); // this will print the second index of myArray "Grapes"
console.log(fruits.next()); // this will print the third index of myArray "Oranges"
console.log(fruits.next()); // this will print the fourth index of myArray "Bhindi"
console.log(fruits.next()); // this will return  or print "done:ture"

// iterators means we iterate or travel on sum thing like in this example we are travelling to an array to get the value of an another array

/* 
Defination : 
In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value:
The next value in the iteration sequence.
done:
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
*/

function fruitsIterator1(values) {
  let nextIndex = 0;
  // we will return an object
  return {
    // this return function named as next of an object
    next: function () {
      // next is a function of object
      if (nextIndex < values.length) {
        // We will return below object
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        // We will return below object with only done
        return {
          done: true,
        };
      }
    },
  };
}

// oteration of an object
const myArray1 = ["Apples", "Grapes", "Oranges", "Bhindi"];
console.log("My array is ", myArray1);
const fruits1 = fruitsIterator(myArray1);
console.log(fruits1.next().value); // this will return value of  first index
console.log(fruits1.next().value);
console.log(fruits1.next().value);
console.log(fruits1.next().value);
console.log(fruits1.next().value);

function random_object(value) {
  count_object = 0;
  return {
    next: function () {
      if (count_object < Object.keys(value).length) {
        // var element = Object.keys(value)[count_object];
        // var element_value = value[Object.keys(value)[count_object++]];
        return {
          element: Object.keys(value)[count_object],
          value: value[Object.keys(value)[count_object++]],
          done: true,
        };
      } else {
        return {
          done: false,
        };
      }
    },
  };
}

let obj = {
  name: "Roman ojha",
  number: 13,
  gender: "male",
  collage: "himalaya collabge of engenerring",
  fun1: function (a, b) {
    return a + b;
  },
};
const display_object = random_object(obj);
console.log(display_object.next());
console.log(display_object.next());
console.log(display_object.next());
console.log(display_object.next());
console.log(display_object.next());
console.log(display_object.next());
