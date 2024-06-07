import { createTodo } from "./components/todo-constructor.js";
import { createProject } from "./components/project-constructor.js";
const newTodo = createTodo("homework", "do it", "now", 0);
const newProject = createProject("default");

console.log(newProject);
newProject.addTodo(newTodo);
console.log(newProject);

