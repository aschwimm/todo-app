function setPriority(priority, todo) {
    const priorityLevel = ["high", "medium", "low"];
    todo.priority = priorityLevel[priority];
    return todo;
}

export { setPriority }