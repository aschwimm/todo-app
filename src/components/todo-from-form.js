import { createTodo } from "./todo-constructor";

function formToTodo(form) {
    const todo = createTodo(
        form.title.value,
        form.description.value,
        new Date(),
        parseInt(form.priority.value)
    )
    return todo;
}

export { formToTodo }