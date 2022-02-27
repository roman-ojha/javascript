console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    // this function will execute ater 6000ms that's why we assumed that this time taken by the server
    students.push(student);
    console.log("Student has been enrolled");
    callback();
    // now this function is not going to call until data will not come from the server
    // when the data will come from the sever then 'callback()' function will going to call and then all the data will going to appear for the use
  }, 5000);
}

let obj = {
  name: "Roman",
  fun1: () => {
    console.log("Hellow world");
  },
};

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 1000);
}

// this is the 'student' object that we have and other data is comming from the server
// so, to emplement all the data from the server and the 'newStudent' object
// we have to hold the data that we have for the data that is comming from the server
// so, we use callback function in this kind of situation
// but callback function can be able to execute in any situation where you want to hold the function which have to exicute after the another function.
let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent, getStudents);
// getStudents();
