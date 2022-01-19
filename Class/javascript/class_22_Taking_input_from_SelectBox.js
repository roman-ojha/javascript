function fun1() {
  var select = document.getElementById("selectbox");
  alert("you select number is= " + select.options[select.selectedIndex].value);
  // in '[]' we have to type the index number but we are not selecting only one number so we need to write select.selectedIndex
  //selectedindex is for which index option is selected
}
