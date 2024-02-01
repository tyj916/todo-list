/*
  projects are going to organize tasks, so it contains:
  - title
  - description
  - tasks
  
  functions:
  - update project
*/

import { logMessage, logTask } from "./logger";

export { addProject };

function addProject(title, description) {
  const tasks = [];

  return {
    title,
    description,
    tasks,
    addTask,
    log,
  }
}

function addTask(task) {
  this.tasks.push(task);
}

function log() {
  logMessage(this.title);
  logMessage(this.description);
  this.tasks.forEach(task => {
    logTask(task);
  });
}