function createTodoElement(projects) {
    const todoContainer = document.createElement("div");
    projects.todos.forEach((todo, index) => {
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.id = index;
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "Complete";
        completeButton.id = index;
        Object.entries(todo).forEach(([key, value]) => {
            const todoItem = document.createElement("ul");
            
            todoItem.innerHTML = `${key}: ${value}`;
            
            todoContainer.append(
                todoItem, 
                completeButton, 
                editButton
            );
        });
    });
    return todoContainer;
}


export { createTodoElement }