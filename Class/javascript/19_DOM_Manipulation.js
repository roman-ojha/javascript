// we can manupulate html by DOM manupulation
// we have a lot of event happening in html like click event, scrol event ,draging text etc
// and we can target this event to do certain action
// ex. in this html we din't have any action after clicking "click me "  button
// to take that click event into action than we have to map this event
// we have certain event in html tag
// so we have to make a function
function buttonclick() {
  alert("Button click");
}
function buttonclick2() {
  document.getElementById("heading2").innerHTML = "Roman ojha";
  //here by id we are linking h2 tag in js and js sees h2 tag as an object do we know that object have some Methods and property so innerHTMl is the predefined properties of h2 tag and this innerHTMl property is actually the text which the tag holds and so we are changing text of that tag to "Roman Ojha" after click that "click me 2" button
}

function buttonclick3() {
  var str1 = document.getElementById("heading2").innerHTML;
  alert(str1);
}
