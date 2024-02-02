import { logMessage } from "./logger";

export { Project };

function Project(title, description) {
  const project = createProject(title, description);

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

  function removeTask(task) {
    const taskIndex = project.tasks.indexOf(task);
    if (taskIndex === -1) return;
    project.tasks.splice(taskIndex, 1);
  }

  function log() {
    for (const key in project) {
      logMessage(`${key}: ${project[key]}`);
    }
    project.tasks.forEach(task => task.log());
  }

  return {
    addTask,
    update,
    complete,
    removeTask,
    log,
  }
}

function createProject(title, description) {
  const tasks = [];
  const isCompleted = false;

  return {
    title,
    description,
    isCompleted,
    tasks,
  }
}