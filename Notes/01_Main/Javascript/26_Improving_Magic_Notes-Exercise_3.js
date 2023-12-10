document.getElementById("Add_notes_submit").addEventListener("click", () => {
  let get_title = document.getElementById("textarea1").value;
  // console.log(get_title);
  let get_Note = document.getElementById("textarea2").value;
  // console.log(get_Note);
  localStorage.setItem(get_title, get_Note);
  let Print_title = document.getElementsByClassName("data_title_name")[0];
  Print_title.innerHTML = `${get_title}`;
  let print_note = document.getElementsByClassName("data_contect")[0];
  print_note.innerHTML = `${get_Note}`;
});

let create_element = document.getElementsByClassName("create_data")[0];

for (let i = 0; i < localStorage.length; i++) {
  let get_title_data = localStorage.key(i);
  let get_note_data = localStorage.getItem(get_title_data);
  // console.log(get_title_data);
  // console.log(get_note_data);

  let create_div = document.createElement("div");
  create_div.className = "creating_div";
  create_element.appendChild(create_div);
  create_div.innerHTML = `<div class="Show_data">
  <p class="data_title">Title:</p>
  <div class="div_data_title_name">
    <p class="data_title_name">${get_title_data}</p>
  </div>
  <p class="data_note">Note:</p>
  <div class="note_content">
    <p class="data_contect">
      ${get_note_data}
    </p>
  </div>
  <input class="delete_notes_submit" type="button" value="delete" /> 
</div>`;
  let change_title_name = document.getElementsByClassName("data_title_name")[i];

  if (i > 2) {
    change_title_name.setAttribute("style", "visibility: hidden;");
  }
}

document.getElementById("nav_submit").addEventListener("click", () => {
  let search_value = document.getElementById("nav_search").value;
  // console.log(search_value);
  let value_of_search = localStorage.getItem(search_value);
  let key_of_search = localStorage.key(search_value);
  if (localStorage.getItem(search_value) == null) {
    alert("Invalid Title Name");
  } else {
    console.log(search_value);
    let Print_title = document.getElementsByClassName("data_title_name")[0];
    Print_title.innerHTML = search_value;
    let print_note = document.getElementsByClassName("data_contect")[0];
    print_note.innerHTML = value_of_search;
  }
});
