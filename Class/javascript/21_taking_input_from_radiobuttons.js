function fun1() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  if (male.checked == true) {
    alert("You are " + male.value); //-> value are the value attributes of html
  } else if (female.checked == true) {
    alert("you are " + female.value);
  } else {
    alert("Plese click one option");
  }
}
