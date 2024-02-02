/*
  projects are going to organize tasks, so it contains:
  - title
  - description
  - tasks
  
  functions:
  - add task
  - remove task
*/

import { logProject } from "./logger";

export { Project };

function Project(title, description, isCompleted) {
  const project = createProject(title, description, isCompleted);

  function addTask(task) {
    project.tasks.push(task);
  }

  function update(title, description) {
    project.title = title;
    project.description = description;
  }

  function complete() {
    project.isCompleted = true;
  }

  function removeTask(taskIndex) {
    project.tasks.splice(taskIndex, 1);
  }

  function log() {
    logProject(project);
  }

  return {
    addTask,
    update,
    complete,
    removeTask,
    log,
  }
}

function createProject(title, description, isCompleted) {
  const tasks = [];

  return {
    title,
    description,
    isCompleted,
    tasks,
  }
}