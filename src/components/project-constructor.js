function createProject(title) {
    const todoList = [];
    const addTodo = (todo) => {
        todoList.push(todo);
    }
    return { title, addTodo , todoList}
}

export { createProject }