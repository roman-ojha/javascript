// console.log("This is practice 17");

// const Ajax = (e) => {
//   e.preventDefault();
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "Data/Practice_17.txt", true);
//   xhr.onprogress = function () {
//     console.log("This is the progress Program");
//   };
//   xhr.onload = function () {
//     if (this.status == 200) {
//       let str = this.responseText;
//       document.querySelector("h1").innerHTML = `${str}`;
//     } else {
//       console.log("Error occure!! try again ..");
//     }
//   };
//   xhr.send();
// };
// document.getElementById("button1").addEventListener("click", Ajax);

const getFile = (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.getResponseHeader("Content-type", "application/json");
  //   xhr.onreadystatechange = function () {
  //     console.log("ready State" + xhr.readyState);
  //   };
  xhr.onprogress = function () {
    console.log("On Progress");
  };
  xhr.onload = function () {
    if (this.status === 200) {
      let getData = JSON.parse(this.responseText);
      let employeeName = "";
      let employeeSalary = "";
      let ID;
      let employeeAge = "";
      getData.data.forEach((element) => {
        ID += `<li> ${element.id} </li>`;
        employeeName += `<li> ${element.employee_name} </li>`;
        employeeSalary += `<li> ${element.employee_salary} </li>`;
        employeeAge += `<li> ${element.employee_age} </li>`;
      });
      document.getElementById("ID").innerHTML = `Id: ${ID}`;
      document.getElementById(
        "Employee_name"
      ).innerHTML = `Employee Name: ${employeeName}`;
      document.getElementById(
        "Employee_salary"
      ).innerHTML = `Employee Salary ${employeeSalary}`;
      document.getElementById(
        "Employee_Age"
      ).innerHTML = `Employee Age ${employeeAge}`;
      console.log(getData);
      //   console.log(str);
    } else {
      console.log("Error Occure!!");
    }
  };
  xhr.send();
};

document.getElementById("button1").addEventListener("click", getFile);
