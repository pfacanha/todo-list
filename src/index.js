import "./styles.css";
class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #checklist;

  constructor(title, description, dueDate, priority, checklist) {
    this.id = Math.floor(Math.random() * 1_000_000);
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#checklist = checklist;
  }

  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    return this.#priority;
  }
  getChecklist() {
    return this.#checklist;
  }

  setPriority(newPriority) {
    this.#priority = newPriority;
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  setDueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  setChecklist(newChecklist) {
    this.#checklist = newChecklist;
  }

  toggleChecklist() {
    this.checklist = !this.checklist;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.projectTodos = [];
  }

  getName() {
    return this.name;
  }

  setProjectName(newProjectName) {
    this.name = newProjectName;
  }

  getTodos() {
    return this.todos;
  }

  addNewTodo(todo) {
    this.projectTodos.push(todo);
  }
}

const todoController = (function () {
  const archive = [
    {
      name: "Default",
      todos: [],
    },
  ];

  const defaultFolder = archive[0].todos;

  function createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority, false);
  }

  function createProject(projectName) {
    return new Project(projectName);
  }

  const fetchProject = (projectName) => {
    return archive.find((project) => (project.name = projectName));
  };

  const addProject = (projectName) => {
    const newProject = createProject(projectName);
    archive.push(newProject);
    return newProject;
  };

  const addTodo = (todo, projectName) => {
    const isProjectFound = fetchProject(projectName);
    if (!isProjectFound) {
      defaultFolder.push(todo);
    } else {
      const newProject = addProject(projectName);
      newProject.addNewTodo(todo);
    }
  };

  const deleteTodo = (todo, projectName) => {
    const id = todo.id;
    const project = fetchProject(projectName);
    if (project) {
      const projectFolder = project.getTodos();
      projectFolder.splice(id, 1);
    } else {
      defaultFolder.splice(id, 1);
    }
  };

  const deleteProject = (projectName) => {
    archive = archive.filter((project) => project.name !== projectName);
  };

  const printTodos = () => {
    console.table(archive);
  };

  return {
    addTodo,
    addProject,
    createTodo,
    createProject,
    deleteTodo,
    deleteProject,
    fetchProject,
    printTodos,
  };
})();

const firstTodo = todoController.createTodo(
  "Surfar",
  "In Sombrio",
  "Today",
  "High",
);

const secondTodo = todoController.createTodo(
  "Jogar Futebol",
  "In JR",
  "Tomorrow",
  "Low",
);

const screenController = (function () {})();

debugger;
todoController.addTodo(firstTodo, "BCIT");
todoController.addTodo(secondTodo, "");
todoController.deleteTodo(secondTodo);
todoController.printTodos();
