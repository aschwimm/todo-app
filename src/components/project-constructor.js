function createProject(title) {
    const todoList = {};
    const addTodo = (todo) => {
        todoList[todo.title] = todo;
    }
    return { title, addTodo , todoList}
}

export { createProject }