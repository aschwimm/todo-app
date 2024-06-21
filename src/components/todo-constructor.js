function createTodo(form) {
    const priority = form.priority.value;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const completion = false;
    const todo = {
        priority,
        title,
        description,
        date,
        completion
    }
    return todo;
}



export { createTodo }