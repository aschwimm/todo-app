function selectConstructor(element, projects) {
    element.innerHTML = "";
    const projectsArray = projects.projects;
    for(const project in projectsArray) {
        const option = document.createElement("option");
        option.value = project;
        option.innerHTML = projectsArray[project].title;
        element.append(option);
    }
}
export { selectConstructor }