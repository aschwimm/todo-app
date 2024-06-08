function setCompleteStatus(todo) {
    if(!todo.completeStatus) {
        todo.completeStatus = true;
    }
    else {
        todo.completeStatus = false;
    }
    return todo;
}

export { setCompleteStatus }