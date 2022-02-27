// console.log("This is tut 42");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//          // response.text(); when the data is in the form of text
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

function getData() {
  console.log("Started getData");
  url = "https://api.github.com/users";
  // so now instade of using AJAX we can be able to use fatch api because it is easy to use
  // here 'fetch()' function will take the url from where the data will come
  // and then 'fetch()' function will return a promise
  // fetch is in asynchronous all the process which have to fatch will run in background
  fetch(url)
    // fetch is automatically in asyncronus
    .then((response) => {
      // and '.then()' will take the response or data
      console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("Inside second then");
      console.log(data);
    });
}

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"harglry3fds47485945","salary":"123","age":"23"}';
  params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
    // body:JSON.stringify(data)
    // if data is Object that we have to convert it into stirng
  };
  fetch(url, params)
    .then((response) => response.json())

    .then((data) => console.log(data));
}

// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData();
