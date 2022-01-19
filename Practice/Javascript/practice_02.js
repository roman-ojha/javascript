function add() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var sum;
  sum = Number(number1) + Number(number2);
  document.getElementById("printsum").style.visibility = "visible";
  document.getElementById("printsum").innerHTML = "Sum= " + sum;
}
