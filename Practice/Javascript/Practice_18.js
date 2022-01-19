// console.log("This is callback function");

// const new_data = [
//   { name: "Roman", id: 34 },
//   { name: "Ojha", id: 87 },
// ];

// function enrolldata(data, callback) {
//   setTimeout(() => {
//     new_data.push(data);
//     callback();
//   }, 1000);
// }

// function printdata() {
//   new_data.forEach((element) => {
//     console.log(element.id);
//     console.log(element.name);
//   });
// }

// const old_data = { name: "Razz", id: 76 };
// enrolldata(old_data, printdata);

const new_data = [
  { name: "Roman", id: 34 },
  { name: "Ojha", id: 87 },
];

function enrolldata(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (true) {
        resolve();
        new_data.push(data);
      } else {
        reject();
      }
    }, 1000);
  });
}

function displaydata() {
  new_data.forEach((element) => {
    console.log(element.id);
    console.log(element.name);
  });
}
const old_data = { name: "Razz", id: 76 };
enrolldata(old_data)
  .then(displaydata)
  .catch(function () {
    console.log("Sorry, Error occure");
  });
