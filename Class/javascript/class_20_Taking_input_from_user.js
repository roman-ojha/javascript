function fn1() {
  var str = document.getElementById("text1").value;
  alert("value inside the text box is=" + str);
  // value is the property which will take a value what user will enter
}

function login() {
  var username = document.getElementById("text2").value;
  var password = document.getElementById("password").value;
  if (password == "Roman ojha") {
    alert("your username is= " + username + "You are loged in");
  } else {
    alert("Your password is incorrect");
  }
}
