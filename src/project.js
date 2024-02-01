/*
  projects are going to organize tasks, so it contains:
  - title
  - description
  - tasks
  
  functions:
  - update project
*/

import { logTask } from "./logger";

export { addProject };

function addProject(title, description) {
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  }

  const log = () => {
    tasks.forEach(task => {
      logTask(task);
    })
  }

  return {
    addTask,
    log,
  }
}