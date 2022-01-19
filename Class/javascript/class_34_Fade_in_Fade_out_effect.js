var opacity = 0;
var intervalID = 0;

function fadeimg() {
  var img = document.getElementById("img1");
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
  // this function return the opacity but in the string formate so we have to change it into number
  if (opacity > 0) {
    opacity = opacity - 0.1;
    img.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function Showimg() {
  var img = document.getElementById("img1");
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
  // this function return the opacity but in the string formate so we have to change it into number
  if (opacity < 1) {
    opacity = opacity + 0.1;
    img.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function fadeOut() {
  intervalID = window.setInterval(fadeimg, 200);
}

function fadeIn() {
  intervalID = window.setInterval(Showimg, 200);
}
