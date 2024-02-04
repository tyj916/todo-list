import { logMessage } from "./logger";
import { logTasks, sortTasks } from "./tasksProcessor";

export function Project(title, description) {
  const project = createProject(title, description);
  
  // cache DOM
  const content = document.querySelector('#content');

  function render() {
    content.textContent = '';
    
    const projectContainer = document.createElement('div');
    const title = document.createElement("h2");
    const tasksContainer = document.createElement('div');

    projectContainer.id = 'project-container';
    content.appendChild(projectContainer);
    title.textContent = project.title;
    tasksContainer.id = 'tasks-container';

    projectContainer.appendChild(title);
    projectContainer.appendChild(tasksContainer);
    
    project.tasks.forEach((task, index) => {
      task.render();

      const currentTaskContainer = tasksContainer.querySelectorAll(".task-container")[index];
      const removeBtn = document.createElement('button');

      removeBtn.textContent = "Remove";

      currentTaskContainer.appendChild(removeBtn);
    });
  }

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
    logTasks(project.tasks);
  }

  return {
    getTitle: () => project.title,
    getTasks: () => project.tasks,
    getSortedTasks: () => sortTasks(project.tasks),
    render,
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