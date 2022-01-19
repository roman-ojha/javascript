function changestyle() {
  var para = document.getElementsByClassName("mypara"); //we can manupilate the different tag of html by using class name
  for (var i = 0; i < para.length; i++) {
    para[i].style.color = "red";
  }
}
