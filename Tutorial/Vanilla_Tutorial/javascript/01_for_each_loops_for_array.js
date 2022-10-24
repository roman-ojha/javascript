// you can make a loop to get all value of array in simple way by
var arry1 = [1, 2, 3, 4, 5, 6, 7];

arry1.forEach(
  function (element, index, array) {
    console.log(element, index, array);
  }
  // element will take a value from array
  // index will take a value of index where that element is
  // array will take all the value from array
);

// to use document object in a for each we cant do this with out doing this:

var doct = document.getElementsByTagName("div");

Array.from(doct).forEach(function (element, index) {
  // console.log(element, index);
  element.innerHTML = "Roman Ojha";
  element.style.color = "blue";
});
