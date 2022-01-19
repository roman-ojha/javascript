// Q1) print table of 5 using for loop
var i;
var cal = 0;
document.write("<h2>The table of is:<h2>");
for (i = 1; i <= 10; i++) {
  cal = 5 * i;
  document.write("5*" + i + "=" + cal + "<br>");
}

// Q2) print first 5 even number
document.write("<h2>the first 5 even number is: </h2>");
for (i = 2; i <= 10; i += 2) {
  document.write(i + ",");
}
