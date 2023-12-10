// if you want to perform manupulation upon a lot of html elements at the same time then getelementbyname is comes in front

function changestyle() {
  var para = document.getElementsByTagName("p"); //we are accessing all the p tag that are use in html in an array form because there might be a collection of p tage that are use in html so to store a collection of data we need array so it will automatically make 'para' variable in array datatype
  para[0].style.color = "red";
  para[1].style.fontWeight = "bold";
  para[2].style.fontStyle = "italic";
  para[3].style.fontSize = 25; // this is not working i dont know what happen
  para[4].style.fontSize = "25px";
  for (var i = 5; i < para.length; i++) {
    para[i].style.fontSize = i * 5 + "px";
  }
  // para[0] is an object in js because every element in html are supposed to be an object in js so they have propoty and methods
  // in here we are using the style property so we are going to change the css stylying
}
