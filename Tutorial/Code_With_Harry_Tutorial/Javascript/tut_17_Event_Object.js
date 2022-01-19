console.log("This is tutorial 17 on events");

// here 'click' is the event and after clicking that event function will called and exicute
// there are a lot of event like "click" event , another is 'mouseover'

// document.getElementById("heading").addEventListener("click", function () {
//   console.log("You have clicked the heading");
// });

document.getElementById("heading").addEventListener("click", function (e) {
  // location.href = "//codewithharry.com";
  // here 'e' is the parameterized mouseevent
  let variable;
  console.log("You have clicked the heading");
  variable = e.target; //-> this will give you that in which element did you click
  variable = e.target.className; // this will give you the name of the class
  //   variable = e.target.classlist;
  variable = Array.from(e.target.classList); // -> this will give you the array of targeted element class

  variable = e.target.id; // -> this will give you the id of that clicked element
  variable = e.offsetX; // this will give you where did you click that element in X-axis
  variable = e.offsetY; // this will give you where did you click that element in Y-axis
  variable = e.clientX; // -> this will give you where did you click in whole document according to the event element in X-axis
  variable = e.clientY; // -> this will give you where did you click in whole document according to the event element in Y-axis
  console.log(variable);
  // location.href = '//codewithharry.com'
});
// To remove the given working event you can do this:
function function1(e) {
  document.removeEventListener("click", function1);
}
document.addEventListener("click", function1);
