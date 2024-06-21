import { todoForm } from "./components/todo-form";
import { createTodo } from "./components/todo-constructor";
import { createProject } from "./components/project-constructor";

const content = document.getElementById("content");
const form = todoForm();
const projects = createProject("default");
content.append(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = createTodo(form);
    projects.todos.push(todo);
    console.log(projects);
    form.reset();
})