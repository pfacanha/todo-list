import Todo from "../models/Todo.js";
import Project from "../models/Project.js";

let archive = [
  {
    name: "Default",
    todos: [],
  },
];

function createTodo(title, description, dueDate, priority) {
  return new Todo(title, description, dueDate, priority, false);
}

function createProject(projectName) {
  return new Project(projectName);
}

const fetchProject = (projectName) => {
  return archive.find((project) => project.name === projectName);
};

const addProject = (projectName) => {
  const newProject = createProject(projectName);
  archive.push(newProject);
  return newProject;
};

const addTodo = (todo, projectName) => {
  if (!projectName) {
    archive[0].todos.push(todo);
    return;
  }

  const project = fetchProject(projectName);
  if (!project) {
    const newProject = addProject(projectName);
    newProject.addNewTodo(todo);
  } else {
    project.addNewTodo(todo);
  }
};

const deleteTodo = (todo, projectName) => {
  if (!projectName) {
    archive[0].todos = archive[0].todos.filter((t) => t.id !== todo.id);
    return;
  }

  const project = fetchProject(projectName);
  if (project.todos.length === 1) {
    project.todos = [];
  } else {
    project.todos = project.todos.filter((t) => t.id !== todo.id);
  }
};

const deleteProject = (projectName) => {
  archive = archive.filter((project) => project.name !== projectName);
};

const printTodos = () => {
  console.table(archive);
};

export default {
  addTodo,
  addProject,
  createTodo,
  createProject,
  deleteTodo,
  deleteProject,
  fetchProject,
  printTodos,
};
