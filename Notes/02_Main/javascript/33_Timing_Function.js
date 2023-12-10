// timing function which are pre define in javascript
/*

1. setTimeout()  allows you to execute statements ONCE after an interval
2. clearTimeout() method clears a timer set with the setTimeout() method.
3. setInterval() allows you to execute statements REPETEDLY after an interval.
4. clearInterval()  method clears a timer set the setInterval() methods.

*/
var ID = 0;
function printMsg() {
  document.getElementById("op").innerHTML = "5 second have passed";
}

function start() {
  ID = window.setTimeout(printMsg, 5000);
  // ID variable will store the unique id of the timer and that id is required when you want to clear the timer or reset that timer
  //   window.setTimeout(reffering Function, time );
  // window is a object which represent entire window inside the html document or any othe document will loaded
}
function stop() {
  window.clearTimeout(ID);
  // here we can reset or stop that setTimeout function to executed under time. in here if we do it before 5sec.
}

var ID2 = 0;

var second = 0;

function printMsg2() {
  document.getElementById("op2").innerHTML = second + "seconds";
  second++;
}

function start2() {
  ID2 = window.setInterval(printMsg2, 1000);
}
function stop2() {
  window.clearInterval(ID2);
}
