import { todoForm } from "./components/todo-form";
import { createTodo } from "./components/todo-constructor";
import { createProject } from "./components/project-constructor";
import { createTodoElement } from "./components/DOM-create-todo";

const content = document.getElementById("content");
const formContainer = document.getElementById("form-container");
const form = todoForm();
const projects = createProject("default");
formContainer.append(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = createTodo(form);
    projects.todos.push(todo);
    content.innerHTML = "";
    content.append(createTodoElement(projects));
    console.log(projects);
    form.reset();
})