export default class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #checklist;

  constructor(title, description, dueDate, priority, checklist) {
    this.id = Math.floor(Math.random() * 1_000_000);
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#checklist = checklist;
  }

  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    return this.#priority;
  }
  getChecklist() {
    return this.#checklist;
  }

  setPriority(newPriority) {
    this.#priority = newPriority;
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  setDueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  setChecklist(newChecklist) {
    this.#checklist = newChecklist;
  }

  toggleChecklist() {
    this.checklist = !this.checklist;
  }
}
