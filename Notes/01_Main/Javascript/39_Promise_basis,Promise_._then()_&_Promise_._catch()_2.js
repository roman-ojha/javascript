console.log("This is tutorial 37");

/*
there will going to be the three situation when you want the data 
  1) promise - resolve
  2) promise - reject
  3) promise - pending
*/

// Pretend that this response is coming from the server
const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student) {
  // here we are returning promise object which will say that if the data will fatch then promise is resolved but if the data will not fatch then promise is reject
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        // but when we are getting the data from the server then we will use 'this.statue==200' condition to check wheter the promise data is resolve or reject
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" };

// so now if the data will fatch then we have to use 'then' and 'catch'
// if the promise will complete then one this will exicute from 'then' or 'catch'
// then is for if promise has resolve
// catch for if promise has reject
// in here 'resolve()' function will go to 'then()' and 'reject()' will go to 'catch()'
enrollStudent(newStudent)
  .then(getStudents) // getstudents is alrady a function so we can do this
  .catch(function () {
    console.log("Some error occured");
  });
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
