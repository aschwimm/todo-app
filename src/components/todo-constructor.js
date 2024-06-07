function createTodo(title, description, date, priorityLevel) {
    let priorityList = ["high", "medium", "low"];
    const dueDate = date;
    const priority = priorityList[priorityLevel];

    return {title, description, priority, dueDate};   
}

export { createTodo };