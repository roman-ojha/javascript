/*
 here are some spacel charecter :
\d - match any digit(equal to [0-9])
\w - match any word charecter (a-z,A-Z,0-9 & _)
\s - match whitespace charecter (eg- spaces & tabs)
\t - match a tab only

*/
// for mobile number validation :
function validate() {
  var text = document.getElementById("text1").value;
  var regx = /^98[1-9]\d{7}$/;
  // {} is use for multiplication
  // ^ will tell that string need to be start from number
  // $ is denoting end of the string after that string number it will invalid
  if (regx.test(text)) {
    document.getElementById("lbltext").innerHTML = "Valid";
    document.getElementById("lbltext").style.visibility = "visible";
    document.getElementById("lbltext").style.color = "green";
  } else {
    document.getElementById("lbltext").innerHTML = "Invalid";
    document.getElementById("lbltext").style.visibility = "visible";
    document.getElementById("lbltext").style.color = "red";
  }
}
