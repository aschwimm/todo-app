import { createProject } from "./components/project-constructor.js";
import { setPriority } from "./components/set-priority.js";
import { setCompleteStatus } from "./components/set-complete.js";
import { createForm } from "./components/form-creation.js";
import { formToTodo } from "./components/todo-from-form.js";
import { createProjectList } from "./components/project-constructor.js";
import { selectConstructor } from "./components/project-selector.js";

const projects = createProjectList();
const newProject = createProject("default");
projects.addProject(newProject);
const content = document.getElementById("content");
const form = createForm();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = formToTodo(form);
    newProject.addTodo(todo);
    form.reset();
    console.log(projects);
})
content.appendChild(form);
selectConstructor(form, projects.projects);
