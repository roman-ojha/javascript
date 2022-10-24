$ = (q) => {
  const els = document.querySelectorAll(q);
  // this will return all the element with the given query
  if (els.length > 1) {
    return els;
  } else if (els.length == 1) {
    return els[0];
  }
};

// now we can access dom element like this
// $("#btn").innerText = "Roman";

// now here we will first create the state
var state = {
  name: "Roman",
};

function renderDOM() {
  // we will render the HTML inside id 'app'
  $("#app").innerHTML = `
    <button class="px-6 py-2 bg-gray-700 text-white m-4 rounded-sm" id="btn">
      ${state.name}
    </button>
  `;
}

function setState(callback) {
  // this function will change the state
  callback();
  // now here we will first call the 'callback' function after that we will again call the render dom function
  renderDOM();
}

// setTimeout(() => {
//   // now here we will try to change the state which will get reflect to DOM
//   setState(() => {
//     state.name = "Ojha";
//   });
// }, 3000);

$("#change-state").onclick = () => {
  setState(() => {
    state.name = "Ojha";
  });
};

renderDOM();
