// it did not work right

document
  .getElementById("dynamically_Change_Shape")
  .addEventListener("mousedown", () => {
    console.log("mousedown");
    let controlMoving = true;
    document
      .getElementById("dynamically_Change_Shape")
      .addEventListener("mousemove", () => {
        document
          .getElementById("dynamically_Change_Shape")
          .addEventListener("mouseup", () => {
            controlMoving = false;
            console.log("mouseup");
          });
        if (controlMoving === true) {
          console.log("mousemove");
        }
      });
  });

function click() {
  console.log("hello");
}

// const move = () => {
//   console.log("hello");
//   document.getElementsByClassName("left_body")[0];
//   document.getElementsByClassName("right_body")[0];
// };
