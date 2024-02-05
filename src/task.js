import { logMessage } from "./logger";
import { render as renderProject } from "./project";

export function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

  // cache DOM
  const dialog = document.querySelector("dialog#edit-task");

  function render() {
    const tasksContainer = document.querySelector("#tasks-container");

    const taskContainer = document.createElement('div');
    const title = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const completeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    taskContainer.dataset.priority = task.priority;
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
    const title = dialog.querySelector("#title");
    const description = dialog.querySelector("#description");
    const dueDate = dialog.querySelector("#due-date");
    const priority = dialog.querySelector("#priority");
    const submitBtn = dialog.querySelector("#submit");

    submitBtn.addEventListener('click', () => {
      update(title.value, description.value, dueDate.value, priority.value);
    });

    title.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDateISOString;
    priority.value = task.priority;

    dialog.showModal();
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