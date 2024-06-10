import { createTodo } from "./components/todo-constructor.js";
import { createProject } from "./components/project-constructor.js";
import { setPriority } from "./components/set-priority.js";
import { setCompleteStatus } from "./components/set-complete.js";
import { createForm } from "./components/form-creation.js";
const homework = createTodo("homework", "do it", "now", 0);
const walkDog = createTodo("walkies", "walk dog", "evening", 1);
const feedCat = createTodo("feed cat", "noon", 2);

const newProject = createProject("default");
newProject.addTodo(homework);
newProject.addTodo(walkDog);
newProject.addTodo(feedCat);
console.log(newProject);
console.log(newProject);

const content = document.getElementById("content");
const form = createForm();
content.appendChild(form);

