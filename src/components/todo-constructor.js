function createTodo(title, description, date, priorityLevel) {
    let priorityList = ["high", "medium", "low"];
    const dueDate = date;
    const completeStatus = false;
    const priority = priorityList[priorityLevel];

    return {title, description, priority, dueDate, completeStatus};   
}

export { createTodo };