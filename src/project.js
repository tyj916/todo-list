/*
  projects are going to organize tasks, so it contains:
  - title
  - description
  - tasks
  
  functions:
  - add task
  - remove task
*/

import { logMessage, logTask } from "./logger";

export { createProject };

function createProject(title, description, checklist) {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function removeTask(taskIndex) {
    tasks.splice(taskIndex, 1);
  }

  return {
    title,
    description,
    checklist,
    tasks,
    addTask,
    removeTask,
  }
}