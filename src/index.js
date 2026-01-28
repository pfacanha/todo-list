import "./styles.css";

const todos = [];
class Todo {
  constructor(title, description, dueDate, priority, checklist) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }
}

function createTodo(title, description, dueDate, priority) {
  return new Todo(title, description, dueDate, priority, false);
}
function addTodo(todo) {
  todos.push(todo);
}
function deleteTodo() {}
function toggleTodo() {}

const newTodo = createTodo("Surfar", "In Sombrio", "Today", "High");
addTodo(newTodo);

console.log(todos);
