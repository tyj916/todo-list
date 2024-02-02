/*
  we'll have a task item which contains
  - title
  - description
  - due date
  - priority
  - notes
  - checklist
*/

import { logTask } from "./logger";

export { createTask, taskHandler };

function createTask(title, description, dueDate, priority, isCompleted) {

  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  }
}

function taskHandler(task) {
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
    logTask(task);
  }

  return {
    update,
    complete,
    log,
  }
}