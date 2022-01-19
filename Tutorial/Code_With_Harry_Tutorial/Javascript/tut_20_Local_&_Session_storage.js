console.log("This is tut 20");
let impArray = ["adrak", "pyaz", "bhindi"];

// local storage store the value forever but session storage store value only for session

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry'); // ->to set item in local storage
// localStorage.setItem('Name2', 'Rohan');

// but you can't add array in local storage
// if you want to add array then you have to do this:
// localStorage.setItem('Sabzi', JSON.stringify(impArray));// now it convert into string then you can store it

// localStorage.getItem("Name"); // to get item from local storage
// localStorage.key("Name");  // to get key from local storage
// localStorage.getItem(0); // to get item from local storage in order
// localStorage.key(0);  // to get key from local storage in order

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem("Sabzi")); // to get item of an array
console.log(name);

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
// sessionStorage.clear();
