import Todo from "../models/Todo.js";
import Project from "../models/Project.js";
import todoController from "../controllers/todoController.js";

const inbox = document.querySelector(".inbox");
const projects = document.querySelector(".projects");

const addForm = document.querySelector(".addForm");
const addTodo = document.querySelector(".addTodo");
const addProject = document.querySelector(".addProject");

addTodo.addEventListener("click", function (e) {
  e.preventDefault();

  addTodo.remove();

  // create input
  const label = document.createElement("label");
  const input = document.createElement("input");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  label.textContent = "Name: ";
  confirmBtn.textContent = "Confirm";
  confirmBtn.type = "submit";
  cancelBtn.textContent = "Cancel";

  const newForm = document.createElement("div");
  newForm.append(label, input, confirmBtn, cancelBtn);

  addForm.appendChild(newForm);

  confirmBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const task = input.value;
    input.value = "";

    todoController.addTodo(task);
  });
});

const displayTodos = (project) => {
  const todos = todoController.fetchTodos(project);
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;

    inbox.appendChild(li);
  });
};

export default {
  displayTodos,
};
