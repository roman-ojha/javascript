function addValues() {
  var a = document.getElementById("t1").value;
  var b = document.getElementById("t2").value;
  document.getElementById("op").innerHTML = "Result = " + (a + b);
  console.log(a + b);
}
