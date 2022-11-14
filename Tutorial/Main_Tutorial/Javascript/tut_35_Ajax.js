/*
 *) AJAX stands for asynchronous javaScript and XML.
 *) AJAX is not a programming language.Rather,it's a set of existing technologies.
 *) AJAX helps in fetching data asynchronously without interfering with the existing page.
 *) NO page reload/refresh.
 *) Modern websites use JSON instead or XML for data transfer.
 */
/* 
` Why To Use AJAX?
    *) NO page reload/refresh
    *) Better user Experience
    *) saves network bandwidth
    *) very interactive
*/
/* 
` How It Works?
    *) AJAX uses XMLHttpRequest (also called Xhr object) to achieve this
    *) Modern websites use JSON instead or XML for data transfer.
    *) Data can be transferred in any format and protocol (Not always https necessarily) 
*/
// -> Note: pure java script is also called as vanilla javascript

console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //   xhr.open("GET", "Roman.text", true); //* we can use text file and put content in there and request that content will also going to work

  // Open the object
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  // USE THIS FOR POST REQUEST
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true); //-> xhr.open("GET->This will be the request or Post->This will be the request and we send the data along with the request", "this is  from where the data will going to come", true->Asynchronous or false->synchronous )
  xhr.getResponseHeader("Content-type", "application/json"); //! this is use for a POST request
  //   xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded"); //-> for url

  // What to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // this is the old way to do :
  // xhr.onreadystatechange = function () { //* when your website state will changed then this function will occur
  //     console.log('ready state is ', xhr.readyState);  //-> xhr.readyState have 5 value from 0 to 4 which show when state will changed

  // }

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      // to check whether there the data available or not
      // status will check the status of that data and 200 is the respond code of http , these means response ok
      // we can search 'http status code' in internet to find the respond code , that what is the meeaning of some respond code like 200
      console.log(this.responseText); // -> this property will show the requested file or text
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  params = `{"name":"test34sad545","salary":"123","age":"23"}`; //! This post request value can only be able to use for one time because we had alrady put this data in data base
  //   params = "name=test34sad545&salary=123&age=23"; //-> for url
  //   xhr.send(); // -> all above function will only run after sending this function which will send all the request
  xhr.send(params); // -> we are post request by sending data to that target

  console.log("We are done!");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked the pop handler");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true); //-> this is the dummy data from the link

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  xhr.send();
  console.log("We are done fetching employees!");
}
