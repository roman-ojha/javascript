const divElement = document.createElement("div");
divElement.className = "editable_div";
document.body.firstElementChild.nextElementSibling.appendChild(divElement);

const getDiv = document.getElementsByClassName("editable_div")[0];
getDiv.style =
  "width:50%; height:200px; background-color:#444f89;display:flex;justify-content:center;align-items:center;border-radius:10px;cursor:pointer;transition-duration:100ms;";
getDiv.innerHTML = `<h1 id="click_div">Click</h1>`;
getDiv.firstElementChild.style = "font-size:70px;color:white";

getDiv.addEventListener("mouseenter", (e) => {
  divElement.style.setProperty("background-color", "rgb(45 56 115)");
  console.log("hello");
});

getDiv.addEventListener("mouseleave", (e) => {
  divElement.style.setProperty("background-color", "#444f89");
});

// replacing the h1 which text area
const textAreaElement = document.createElement("textarea");
textAreaElement.setAttribute("class", "textarea");

textAreaElement.style = `width:100%;height:100%;resize:none`;

const submitElement = document.createElement("button");
submitElement.textContent = "Click";
submitElement.className = "submit";
submitElement.style = `width:100px; height:50px; margin-top:30px; background-color:#8e438b;; color:white; font-size:20px; border-width:0px; border-radius:5px; cursor:pointer`;
let i = 0;
getDiv.addEventListener("click", () => {
  if (i == 0) {
    divElement.replaceChild(
      textAreaElement,
      document.querySelector("#click_div")
    );
    //creating submit element

    document.body.appendChild(submitElement);
    i++;
  }
});

let incKey = 0;
submitElement.addEventListener("click", () => {
  localStorage.setItem(`key${incKey}`, textAreaElement.value);
  incKey++;
});

// localStorage.clear();
