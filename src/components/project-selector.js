function selectConstructor(form, projects) {
    const label = document.createElement("label");
    label.for = "projects";
    label.innerHTML = "Projects";
    const select = document.createElement("select");
    select.name = "projects";
    for(const project of projects) {
        const option = document.createElement("option");
        option.value = project;
        option.innerHTML = project["title"]
        select.append(option);
    }

    form.append(
        label,
        select
    )
}
export { selectConstructor }