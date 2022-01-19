/*
for email validation we have:
    1          2         3           4         
(yourname)@(domain).(extension)(.extention)<- optional

Example-
Roman11@email.co.in
Roman11@razz-ojha.com

1. Any letters,numbers,dot and/or hyphens
2. Any letter,number and/or hyphen(-)
3. Any letter(a-z)
4. a dot(.) then any letter

*/

function validate() {
  var text = document.getElementById("text1").value;
  var regx = /^([a-z A-Z 0-9 \. - ]+)@([a-z A-Z 0-9 - ]+).([a-z]{2,10})(.[a-z]{2,10})?$/;
  // we can't use dot(.) simply because that means you can write any thingh in that dot(.) so not to treated as a spical charecter we have to use (\.)
  // + means that these cherecter should apply atleast one or more then one because name can be different and have large so we can't give hardcore value like {2,20} here name must have 2 upto 20 charecter
  // ? it make the charecter can be optional

  if (regx.test(text)) {
    document.getElementById("lbltext").innerHTML = "Valid";
    document.getElementById("lbltext").style.visibility = "visible";
    document.getElementById("lbltext").style.color = "green";
  } else {
    document.getElementById("lbltext").innerHTML = "Invalid";
    document.getElementById("lbltext").style.visibility = "visible";
    document.getElementById("lbltext").style.color = "red";
  }
}
