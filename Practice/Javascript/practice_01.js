function submit() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pass").value;
  if (username == "" || password == "") {
    alert("Plese type username and password");
  } else if (username !== "Roman ojha" || password !== "ojha") {
    alert("Username and Password is Incorect");
  } else {
    document.getElementById("showuname").style.visibility = "visible";
    document.getElementById("showpass").style.visibility = "visible";
    document.getElementById("showuname").innerHTML = "Username= " + username;
    document.getElementById("showpass").innerHTML = "Password= " + password;
    document.getElementById("form").style.visibility = "visible";
  }
}
function login() {
  var code = document.getElementById("enter").value;
  if (code.trim() == "") {
    alert("Please enter your code");
    return false;
  } else if (code !== "12345") {
    alert("your code is incorrect");
    return false;
  } else {
    return true;
  }
}

var ID = 0;
var initial = 30;
function increasetext() {
  if (initial < 40) {
    document.getElementById("text1").style.fontSize = initial + "px";
    initial++;
  } else {
    window.clearInterval(ID);
  }
}

function decreasetext() {
  if (initial > 30) {
    document.getElementById("text1").style.fontSize = initial + "px";
    initial--;
  } else {
    window.clearInterval(ID);
  }
}

function increase() {
  window.clearInterval(ID);
  ID = window.setInterval(increasetext, 20);
}

function decrease() {
  window.clearInterval(ID);
  ID = window.setInterval(decreasetext, 20);
}
