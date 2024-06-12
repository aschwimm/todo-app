function createProject(title) {
    const todoList = {};
    const addTodo = (todo) => {
        todoList[todo.title] = todo;
    }
    return { title, addTodo , todoList}
}
function createProjectList() {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    }
    return { projects, addProject };
}
export { createProject, createProjectList }