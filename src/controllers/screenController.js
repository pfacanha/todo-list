import Todo from "../models/Todo.js";
import Project from "../models/Project.js";
import todoController from "../controllers/todoController.js";

const inbox = document.querySelector(".inbox");
const projects = document.querySelector(".projects");

const div = document.querySelector(".addForm");
const addTodo = document.querySelector(".addTodo");
const addProject = document.querySelector(".addProject");

const displayTodos = (project) => {
  const todos = todoController.fetchTodos(project);
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;

    inbox.appendChild(li);
  });
};

displayTodos("Inbox");

addTodo.addEventListener("click", function (e) {
  e.preventDefault();
  addTodo.style.display = "none";

  // create input
  const label = document.createElement("label");
  const input = document.createElement("input");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  label.textContent = "Name: ";
  confirmBtn.textContent = "Confirm";
  confirmBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.type = "button";

  const newForm = document.createElement("form");
  newForm.append(label, input, confirmBtn, cancelBtn);

  div.appendChild(newForm);

  confirmBtn.addEventListener("click", function (e) {
    e.preventDefault();
    inbox.textContent = "";

    const task = input.value;
    input.value = "";

    todoController.addTodo(task);
    displayTodos("Inbox");
    addTodo.style.display = "";
    newForm.remove();
  });

  cancelBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newForm.remove();
  });
});

export default {
  displayTodos,
};
