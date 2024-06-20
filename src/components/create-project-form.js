

function newProjectForm() {
    const form = document.createElement("form");
    const projectLabel = document.createElement("label");
    projectLabel.for = "new-project";
    projectLabel.innerHTML = "Project name";
    const projectName = document.createElement("input");
    projectName.type = "text";
    projectName.name = "newProject";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerHTML = "Create project";
    form.append(
        projectLabel,
        projectName,
        submitButton
    )
    return form;
}

export { newProjectForm }