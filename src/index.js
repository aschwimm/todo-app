import { createProject } from "./components/project-constructor.js";
import { setPriority } from "./components/set-priority.js";
import { setCompleteStatus } from "./components/set-complete.js";
import { createForm } from "./components/form-creation.js";
import { formToTodo } from "./components/todo-from-form.js";

const newProject = createProject("default");
const content = document.getElementById("content");
const form = createForm();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = formToTodo(form);
    newProject.addTodo(todo);
    console.log(newProject);
})
content.appendChild(form);

