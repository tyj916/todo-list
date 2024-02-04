import { logMessage } from "./logger";

export function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

  function render() {
    const tasksContainer = document.querySelector("#tasks-container");

    const taskContainer = document.createElement('div');
    const title = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const editBtn = document.createElement("button");
    const completeBtn = document.createElement("button");

    taskContainer.dataset.priority = task.priority.toLowerCase();
    taskContainer.classList.add('task-container');

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    editBtn.textContent = "Edit";
    completeBtn.textContent = task.isCompleted ? 'Not complete' : 'Complete';

    taskContainer.appendChild(title);
    taskContainer.appendChild(description);
    taskContainer.appendChild(dueDate);
    taskContainer.appendChild(editBtn);
    taskContainer.appendChild(completeBtn);

    tasksContainer.appendChild(taskContainer);
  }

  function update(title, description, priority, dueDate) {
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
    getDate: () => task.dueDate,
    render,
    update,
    complete,
    log,
  }
}

function createTask(title, description, dueDate, priority) {
  const isCompleted = false;

  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  }
}