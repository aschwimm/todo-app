function todoForm() {
    const form = document.createElement("form");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerHTML = "+ Add";
    const capitalizeLabel = label => label.charAt(0).toUpperCase() + label.slice(1);
    const formConstructor = (name, type) => {
        const input = document.createElement("input");
        const label = document.createElement("label");
        input.name = name;
        input.type = type;
        label.for = name;
        label.innerHTML = capitalizeLabel(name);
        return {input, label};
    }
    const {input: priority, label: priorityLabel } = formConstructor("priority", "number");
    const {input: title, label: titleLabel } = formConstructor("title", "text");
    const {input: description, label: descriptionLabel} = formConstructor("description", "text");
    const {input: date, label: dateLabel} = formConstructor("date", "datetime-local");
    form.append(
        priorityLabel,
        priority,
        titleLabel,
        title,
        descriptionLabel,
        description,
        dateLabel,
        date,
        submit
    )
    return form;
}

export { todoForm }
