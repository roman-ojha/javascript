/* Q1) Find day of week by accepting its number
eg. 1-> sunday 2-> monday etc */

// javascript switch case can accept numbers,string,booleans
var day = 5;
switch (day) {
  case 1:
    document.write("<br><h3><i>Sunday</i></h3>");
    break;
  case 2:
    document.write("<br><h3><i>Monday</i></h3>");
    break;
  case 3:
    document.write("<br><h3><i>Tuesday</i></h3>");
    break;
  case 4:
    document.write("<br><h3><i>Wednesday</i></h3>");
    break;
  case 5:
    document.write("<br><h3><i>Thursday</i></h3>");
    break;
  case 6:
    document.write("<br><h3><i>Friday</i></h3>");
    break;
  case 7:
    document.write("<br><h3><i>Saturday</i></h3>");
    break;
  default:
    document.write("the number is invalid");
    break;
}

var d = "roman";
switch (d + " ojha") {
  case "roman ojha":
    document.write("<br><h3>Roman ojha</h3>");
}
