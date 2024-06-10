function createForm() {
    const form = document.createElement("form");
    
    const createInput = (type, name, id, label) => {
        const input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.id = id;
        const inputLabel = document.createElement("label");
        inputLabel.for = id;
        inputLabel.innerText = label;
        return { input, inputLabel };
    };

    const { input: priority, inputLabel: priorityLabel } = createInput("number", "priority", "priority", "Priority");
    const { input: title, inputLabel: titleLabel } = createInput("text", "title", "title", "Title");
    const { input: description, inputLabel: descriptionLabel } = createInput("text", "description", "description", "Description");

    form.append(
        priorityLabel,
        priority,
        titleLabel,
        title,
        descriptionLabel,
        description
    );

    return form;
}

export { createForm }