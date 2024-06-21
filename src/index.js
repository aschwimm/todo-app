import { todoForm } from "./components/todo-form";
import { createTodo } from "./components/todo-constructor";

const content = document.getElementById("content");
const form = todoForm();
content.append(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = createTodo(form);
    console.log(todo);
    form.reset();
})