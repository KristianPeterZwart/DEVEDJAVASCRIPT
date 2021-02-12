const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;

// CLICK, SCROLL. RESIZING THE BROWSER

// ATTACH A EVENT LISTENER

button.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = "Item 3";
    todoList.appendChild(newItem);
    console.log(newItem.classList);
});