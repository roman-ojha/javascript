var width = 150;
var different = 2;
var ID = 0;

function increase() {
  clearInterval(ID);
  ID = setInterval(zoomIn, 20);
}

function zoomIn() {
  if (width < 200) {
    width = width + different;
    document.getElementById("img1").style.width = width;
    console.log(width);
  } else {
    clearInterval(ID);
  }
}

fwwunction decrease() {
  clearInterval(ID);
  ID = setInterval(zoomOut, 20);
}
function zoomOut() {
  if (width > 150) {
    width = width - different;
    document.getElementById("img1").style.width = width;
    console.log(width);
  } else {
    clearInterval(ID);
  }
}
