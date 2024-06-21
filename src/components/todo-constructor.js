function createTodo(form) {
    const priority = form.priority;
    const title = form.title;
    const description = form.description;
    const date = form.date;
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