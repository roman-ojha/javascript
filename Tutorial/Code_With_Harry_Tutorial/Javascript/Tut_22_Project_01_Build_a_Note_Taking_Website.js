/*---------------------------- This code is written by me --------------------------------*/

// let noteArray = [];

// // Showing note
// const showNote = () => {
//   let updateNote = "";
//   for (let i = 0; i < noteArray.length; i++) {
//     updateNote += `<div class="added_note_container">
//           <p class="note_count">Note ${i + 1}</p>
//           <p class="note">
//           ${noteArray[i]}
//           </p>
//           <div class="delete_note_button" id="${i}"
//           onclick="deleteNote(event)">Delete Note </div>
//           </div>`;
//   }
//   return updateNote;
// };
// // Adding note
// const addNote = () => {
//   let getNote = document.getElementById("add_note_inside").value;
//   document.getElementById("add_note_inside").value = "";
//   noteArray.push(getNote);
//   let addvalue = showNote();
//   document.getElementById("your_notes_container").innerHTML = addvalue;
// };
// document.getElementById("add_note_button").addEventListener("click", addNote);

// // Deleting note
// function deleteNote(e) {
//   let getDeleteNoteIndex = e.target.id;
//   noteArray.splice(getDeleteNoteIndex, 1);
//   let removeNote = showNote();
//   document.getElementById("your_notes_container").innerHTML = removeNote;
//   console.log(noteArray);
// }

/*---------------------------- This code is written by code with harry --------------------------------*/

console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
