import "./styles.css";
import controller from "./controllers/todoController.js";
import screenController from "./controllers/screenController.js";

const firstTodo = controller.createTodo(
  "Surfar",
  "In Sombrio",
  "Today",
  "High",
);

const secondTodo = controller.createTodo(
  "Jogar Futebol",
  "In JR",
  "Tomorrow",
  "Low",
);

const thirdTodo = controller.createTodo(
  "Estudar Coding",
  "In Renfrew",
  "Right Now!",
  "Extremely High",
);

// debugger;
controller.addTodo(firstTodo, "BCIT");
controller.addTodo(secondTodo, "");
controller.addTodo(thirdTodo);
controller.deleteTodo(secondTodo);
controller.deleteTodo(firstTodo, "BCIT");
controller.printTodos();
