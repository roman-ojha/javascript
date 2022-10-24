// here in html in 'p' tag we have 'impotrant' in strong tag and 'information'  in 'p' so when we grave from "p" tag in js so, we have element node and text node , "important" is in element node and "information" is in text node
{
  let paragraph = document.getElementsByTagName("p");
  //   console.log((paragraph[0].childNodes[0].nodeValue = "3")); //->here we are trying to set element node value
  console.log((paragraph[0].childNodes[0].childNodes[0].nodeValue = "Roman")); //->but here we go inside hte 'storng' tag where we find text node so now we can change the text nodevalue
  console.log(paragraph);
  console.log((paragraph[0].childNodes[1].nodeValue = "1")); // -> here we are trying to set text node value
  console.log(paragraph);
}
// here we can't change the node value of element but we can be able to change the nodevalue of text
/* here is some property to change the value in the html:

1) innerHTML
2) nodeValue
3) textContent
4) innerText

*/
