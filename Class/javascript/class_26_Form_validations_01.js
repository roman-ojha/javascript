function validate() {
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");
  if (username.value.trim() == "" || password.value.trim() == "") {
    // trim() will remove blank space if we write black space and make it blank again it also make value string data type
    alert("No blank values allowed");
    return false;
  } else {
    true;
  }
}
