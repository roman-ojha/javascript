// Q1) find wher is number id Even or odd?

var a = 8;

if (a % 2 == 0) {
  document.write("<h3>the number is even</h3><br>");
} else {
  document.write("<h3>the number is odd<br>");
}

// Q2) find if a number is positive, negetive or 0

var b = -3;

if (b > 0) {
  document.write("<br><h3>the number is positive</h3><br>");
} else if (b < 0) {
  document.write("<br><h3>the number is negetive</h3><br>");
} else {
  document.write("<br><h3>the number is 0</h3><br>");
}

// Q3) Find if a number is positive and even

var c;
c = 6;

if (c > 0 && c % 2 == 0) {
  document.write("<br><h3>the number is positive and even</h3><br>");
} else {
  document.write("<br><h3>the number is negetive and odd</h3><br>");
}
// OR
var d;
d = 5;

if (d > 0) {
  document.write("<br><h3>the number is positive and<h3>");
  if (d % 2 == 0) {
    document.write("<h3> even</h3><br>");
  } else {
    document.write("<h3>odd</h3><br>");
  }
} else {
  document.write("the number is negetive");
}
