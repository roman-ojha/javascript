// Q1) print table of 5 using for loop
var i = 1;
var cal = 0;
document.write("<h2>The table of is:<h2>");
while (i <= 10) {
  cal = 5 * i;
  document.write("5*" + i + "=" + cal + "<br>");
  i++;
}

// Q2) print first 5 even number
i = 2;
document.write("<h2>the first 5 even number is: </h2>");
while (i <= 10) {
  document.write(i + ",");
  i += 2;
}
