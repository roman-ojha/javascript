function validate() {
  var username = document.getElementById("uname").value;
  //   var regx = /[sdp]imple/;
  // by doing '[]' those cherecter inside it where you can type 's','d','p' but 'imple' needs to be same
  // [] is the range of option which we can enter
  // ranges
  var regx = /[a-x]imple/;
  //   var regx = /[a-x A-X]imple/;
  //   var regx = /[0-9]abc/;
  //   var regx = /[0-5]a[6-9]c/;
  // if you want to exclude something then:
  //   var regx = /[^1abc]abc/;
  // in here 1,a,b,c we don't want in the first location
  //   var regx = /[^a-z]abc/;
  if (regx.test(username)) {
    alert("valid username");
  } else {
    alert("invalid username");
  }
}
