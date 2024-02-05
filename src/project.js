import { logMessage } from "./logger";
import { Task } from "./task";
import { logTasks, sortTasks } from "./tasksProcessor";

export function Project(title, description) {
  const project = createProject(title, description);
  
  // cache DOM
  const content = document.querySelector('#content');
  const taskDialog = document.querySelector("dialog#task");

  function render() {
    content.textContent = '';
    
    const projectContainer = document.createElement('div');
    const title = document.createElement("h2");
    const tasksContainer = document.createElement('div');
    const addTaskBtn = document.createElement("button");

    projectContainer.id = 'project-container';
    content.appendChild(projectContainer);
    title.textContent = project.title;
    tasksContainer.id = 'tasks-container';
    addTaskBtn.id = "add-task";
    addTaskBtn.textContent = "+ New Task";

    addTaskBtn.addEventListener('click', () => {
      const dialogTitle = taskDialog.querySelector("h2");
      const title = taskDialog.querySelector("#title");
      const description = taskDialog.querySelector("#description");
      const dueDate = taskDialog.querySelector("#due-date");
      const priority = taskDialog.querySelector("#priority");
      const submitBtn = taskDialog.querySelector("#submit");

      dialogTitle.textContent = "New Task";

      submitBtn.addEventListener('click', () => {
        const newTask = Task(title.value, description.value, dueDate.value, priority.value);
        addTask(newTask);
        render();
      });

      taskDialog.showModal();
    });

    projectContainer.appendChild(title);
    projectContainer.appendChild(tasksContainer);
    projectContainer.appendChild(addTaskBtn);
    
    project.tasks.forEach((task, index) => {
      task.render();

      const currentTaskContainer = tasksContainer.querySelectorAll(".task-container")[index];
      const removeBtn = document.createElement('button');
      
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener('click', () => {
        removeTask(task);
        render();
      });

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