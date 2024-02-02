import { logMessage } from "./logger";

export { Task };

function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

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