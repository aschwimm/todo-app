import { createProject } from "./components/project-constructor.js";
import { setPriority } from "./components/set-priority.js";
import { setCompleteStatus } from "./components/set-complete.js";
import { createForm } from "./components/form-creation.js";
import { formToTodo } from "./components/todo-from-form.js";
import { createProjectList } from "./components/project-constructor.js";
import { selectConstructor } from "./components/project-selector.js";
import { newProjectForm } from "./components/create-project-form.js";

const projects = createProjectList();
const newProject = createProject("default");
projects.addProject(newProject);
const content = document.getElementById("content");
const todoForm = createForm();
const projectForm = newProjectForm();
selectConstructor(todoForm.projects, projects);
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectIndex = todoForm.projects.value;
    const todo = formToTodo(todoForm);
    projects.projects[projectIndex].addTodo(todo);
    todoForm.reset();
})
projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = projectForm.newProject.value;
    const newProject = createProject(name);
    projects.addProject(newProject);
    selectConstructor(todoForm.projects, projects);
    projectForm.reset();
})
content.append(todoForm);
content.append(projectForm);
