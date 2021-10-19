let form = document.querySelector("#addForm");
let list = document.querySelector("#list");

// adding new items to form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.querySelector("#toDo").value;
  let li = document.createElement("li");
  li.className =
    "listItem list-group-item list-group-item-dark1 list-group-item-action";
  li.appendChild(document.createTextNode(input));
  list.appendChild(li);
// adding delete button to new item
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
// adding li to the list
  list.appendChild(li);
  form.reset();
});

// delete button by turning red and times deletion
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.className =
      "listItem list-group-item list-group-item-danger strikethrough";
    setTimeout(() => {
      list.removeChild(e.target.parentElement);
    }, 500);
  } else {
    //   mark as complete by turning green and strikethrough
  e.target.className =
    "listItem list-group-item list-group-item-success strikethrough2";
  }
});






