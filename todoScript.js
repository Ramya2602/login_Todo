const Input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const List = document.getElementById("list");

window.onload = () => {
  const data = JSON.parse(localStorage.getItem("todoList")) || [];
  data.forEach((itemList) => {
    addList(itemList);
  });
};

const addLocalStorage = () => {
  const lists = [];
  const listElements = document.querySelectorAll(".lists");
  listElements.forEach((element) => {
    lists.push(element.innerText);
  });
  localStorage.setItem("todoList", JSON.stringify(lists));
};

addButton.addEventListener("click", () => {
  const itemList = Input.value.trim();
  if (itemList !== "") {
    addList(itemList);
    Input.value = "";
    addLocalStorage();
  }
});

const addList = (itemList) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="lists">${itemList}</span>
    <div> 
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    </div>
   
  `;
  List.append(listItem);

  const editButton = listItem.querySelector(".edit");
  const deleteButton = listItem.querySelector(".delete");

  editButton.addEventListener("click", () => {
    const span = listItem.querySelector(".lists");
    const editvalue = span.innerText;
    const newValue = prompt("Edit Value:", editvalue);
    if (newValue !== null) {
      span.innerText = newValue;
      addLocalStorage();
    }
  });

  deleteButton.addEventListener("click", () => {
    List.removeChild(listItem);
    addLocalStorage();
  });
};