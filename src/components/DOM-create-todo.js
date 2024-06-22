function createTodoElement(projects) {
    const todoContainer = document.createElement("div");
    projects.todos.forEach((todo, index) => {
        const todoWrapper = document.createElement("div");
        Object.entries(todo).forEach(([key, value]) => {
            const todoItem = document.createElement("ul");
            todoWrapper.id = index;
            todoItem.innerHTML = `${key}: ${value}`;
            todoWrapper.append(todoItem);
            todoContainer.append(todoWrapper);
        });
    });
    return todoContainer;
}


export { createTodoElement }