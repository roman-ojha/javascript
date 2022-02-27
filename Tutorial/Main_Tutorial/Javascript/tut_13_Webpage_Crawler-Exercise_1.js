// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given page which contains this text

// codewithharry.com
// javascript

// solution

var data_contain = "javascript";
var get_links = document.links;
for (let i = 0; i < document.links.length; i++) {
  if (get_links[i].href.includes(data_contain) == true) {
    console.log(String(get_links[i].href));
  }
}
