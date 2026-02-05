import Todo from "../models/Todo.js";
import Project from "../models/Project.js";
import todoController from "../controllers/todoController.js";

const addForm = document.querySelector(".addForm");
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  const dialog = document.createElement("dialog");

  addForm.setAttribute("method", "dialog");
});
