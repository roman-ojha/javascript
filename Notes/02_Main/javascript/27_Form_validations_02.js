//in this we are chicking the length of the input form
function validate() {
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");
  if (username.value.trim() == "") {
    alert("Blank username");
    username.style.border = "solid 3px red";
    document.getElementById("lbluname").style.visibility = "visible";
    return false;
  } else if (password.value.trim() == "") {
    alert("Blank password");
    return false;
  } else if (password.value.trim().length < 5) {
    alert("Password is Too short");
    return false;
  } else {
    return true;
  }
}
