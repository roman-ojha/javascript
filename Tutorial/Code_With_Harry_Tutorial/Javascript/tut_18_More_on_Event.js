console.log("This is tut 18");
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// -> The onmousedown event occurs when a user presses any mouse button over an element.
// btn.addEventListener('dblclick', func2);//dblclick is also the another event which is running when we doubleclick
/* other event :
1) mouseenter
2) mouseleave
3) mousemove
4) mousedown
*/

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault(); //-> if you want to bypass a default behaviour then you can use this like in this the default behaviour of submite is bypassed
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){

//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log("You triggered mouse move event");
  });
