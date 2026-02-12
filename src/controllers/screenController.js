import Todo from "../models/Todo.js";
import Project from "../models/Project.js";
import todoController from "../controllers/todoController.js";

const addForm = document.querySelector(".addForm");
const addTodo = document.querySelector(".addTodo");
const addProject = document.querySelector(".addProject");

addTodo.addEventListener("click", function () {
  addTodo.remove();

  // create input
  const input = document.createElement("input");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  const div = document.createElement("div");
  div.append(input, confirmBtn, cancelBtn);

  addForm.appendChild(div);
});
addProject.addEventListener("click", function () {});
