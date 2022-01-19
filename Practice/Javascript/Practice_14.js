console.log("this is practice 14");

// setTimeout(() => {
//   for (let x = 0; x < 50; x++) {
//     console.log(x);
//   }
// }, 200);

// console.log("this is data after settimeout");

// let fetchBtn = document.getElementById("Fatch1");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
//   console.log("FetchBtn");
//   const xhr = new XMLHttpRequest();

//   // Open the object
//   xhr.open("GET", "Data/Practice_14.txt", true);

//   xhr.onprogress = function () {
//     console.log("on progress");
//   };

//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("some error occure");
//     }
//   };

//   xhr.send();
// }

// let Button = document.getElementById("Fatch1");
// Button.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhr.onprogress = function () {
//     console.log("on progress");
//   };
//   xhr.onreadystatechange = function () {
//     console.log("ready state is", xhr.readyState);
//   };
//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("error occure Try again");
//     }
//   };
//   xhr.send();
//   console.log("we are done");
// }

const data = [{ name: "Roman", number: 12 }];

function enrollData(newData, callback) {
  setTimeout(() => {
    data.push(newData);
    callback();
  }, 4000);
}

function getData() {
  setTimeout(() => {
    console.log(data);
  }, 1000);
}

const newData = { name: "Ojha", number: 43 };
enrollData(newData, getData);
