import { logMessage } from "./logger";

export function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

  const dialog = document.querySelector("dialog#edit-task");
  const titleElement = dialog.querySelector("#title");
  const descriptionElement = dialog.querySelector("#description");
  const dueDateElement = dialog.querySelector("#due-date");
  const priorityElement = dialog.querySelector("#priority");
  const submitBtn = dialog.querySelector("#submit");

  // bind events
  submitBtn.addEventListener('click', editTask);

  function render() {
    const tasksContainer = document.querySelector("#tasks-container");

    const taskContainer = document.createElement('div');
    const title = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const completeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    taskContainer.dataset.priority = task.priority.toLowerCase();
    taskContainer.classList.add('task-container');

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    completeBtn.textContent = task.isCompleted ? 'Not complete' : 'Complete';
    editBtn.textContent = "Edit";
    editBtn.addEventListener('click', showDialog);

    taskContainer.appendChild(title);
    taskContainer.appendChild(description);
    taskContainer.appendChild(dueDate);
    taskContainer.appendChild(completeBtn);
    taskContainer.appendChild(editBtn);
    tasksContainer.appendChild(taskContainer);
  }

  function showDialog() {
    titleElement.value = task.title;
    descriptionElement.value = task.description;
    dueDateElement.value = task.dueDateISOString;
    priorityElement.value = task.priority;

    dialog.showModal();
  }

  function editTask() {
    const newTitle = titleElement.value;
    const newDescription = descriptionElement.value;
    const newDueDate = dueDateElement.value;
    const newPriority = priorityElement.value;

    task.update(newTitle, newDescription, newDueDate, newPriority);
  }

  function update(title, description, dueDate, priority) {
    task.title = title;
    task.description = description;
    task.priority = priority;
    task.dueDate = dueDate;
  }
  
  function complete() {
    task.isCompleted = true;
  }

  function log() {
    for (const key in task) {
      logMessage(`${key}: ${task[key]}`);
    }
  }

  return {
    showDialog,
    render,
    update,
    complete,
    log,
  }
}

function createTask(title, description, dueDate, priority) {
  const isCompleted = false;
  const dueDateISOString = new Date(dueDate).toISOString().slice(0,16);

  return {
    title,
    description,
    dueDate: new Date(dueDate).toDateString(),
    dueDateISOString,
    priority: priority.toLowerCase(),
    isCompleted,
  }
}