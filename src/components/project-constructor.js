function createProject(title, todo) {
    const project = {
        title,
        todos: []
    }
    return project;
}

export { createProject }