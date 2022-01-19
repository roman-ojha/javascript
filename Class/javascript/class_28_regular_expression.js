// Regular Expressions are used to powerful pattern-matching and search-and-replace functions on text.
// if we have the same pattern to enter where some symbols and some charecter are need to be same when user will input somethings like in email there need to be @email.com here @ and .com is need if user are inputing some email so in this case regular expression is come to a part
// there is the website to check the regular expression https://regex101.com/

function validate() {
  var username = document.getElementById("uname").value;
  // regular expression are treted as an object in js
  var regx = /E00/i; // here 'i' is case insensitive now we can use 'e00'
  //second way
  // regx = new RegExp("E00", "i");
  if (regx.test(username)) {
    //this text method return the boolean value in which it will test username and looks whether the username contain 'E00' or not if it contain then it will return true value and if it don't contain 'E00' then it will return false value
    alert("valid username");
  } else {
    alert("invalid username");
    document.getElementById("lbluname").style.visibility = "visible";
  }
}
