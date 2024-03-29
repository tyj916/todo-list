import { logMessage } from "./logger";

export function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

  // cache DOM
  const dialog = document.querySelector("dialog#task");

  function render() {
    const tasksContainer = document.querySelector("#tasks-container");

    const taskContainer = document.createElement('div');
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const btnContainer = document.createElement('div');
    const completeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    taskContainer.dataset.priority = task.priority;
    taskContainer.classList.add('task-container');

    title.classList.add("task", "title");
    title.textContent = task.title;
    description.classList.add("task", "description");
    description.textContent = task.description;
    dueDate.classList.add("task", "due-date");
    dueDate.textContent = `Due Date: ${new Date(task.dueDate).toDateString()}`;
    btnContainer.classList.add('btn-container');
    completeBtn.classList.add('task', 'complete');
    completeBtn.textContent = '✓';
    editBtn.classList.add('task', 'edit');
    editBtn.textContent = "Edit";

    completeBtn.addEventListener('click', completeTask);
    editBtn.addEventListener('click', showEditDialog);

    if (task.isCompleted) {
      taskContainer.classList.add('completed');
    }

    taskContainer.appendChild(title);
    taskContainer.appendChild(description);
    taskContainer.appendChild(dueDate);
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(editBtn);
    taskContainer.appendChild(btnContainer);
    tasksContainer.appendChild(taskContainer);
  }

  function showEditDialog(event) {
    const targetTask = event.target.parentNode;

    const dialogTitle = dialog.querySelector("h2");
    const title = dialog.querySelector("#title");
    const description = dialog.querySelector("#description");
    const dueDate = dialog.querySelector("#due-date");
    const priority = dialog.querySelector("#priority");
    const submitBtn = dialog.querySelector("#submit");

    dialogTitle.textContent = "Edit Task";
    title.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;

    submitBtn.addEventListener('click', () => {
      update(title.value, description.value, dueDate.value, priority.value);

      const targetTitle = targetTask.querySelector('.title');
      const targetDescription = targetTask.querySelector('.description');
      const targetDueDate = targetTask.querySelector('.due-date');

      targetTitle.textContent = task.title;
      targetDescription.textContent = task.description;
      targetDueDate.textContent = new Date(task.dueDate).toDateString();
      targetTask.dataset.priority = task.priority;
    });

    dialog.showModal();
  }

  function completeTask(event) {
    const targetTask = event.target.parentNode.parentNode;

    targetTask.classList.toggle("completed");
    
    if (task.isCompleted) {
      task.isCompleted = false;
    } else {
      task.isCompleted = true;
    }
  }

  function update(title, description, dueDate, priority) {
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
    getTitle: () => task.title,
    getDescription: () => task.description,
    getDueDate: () => task.dueDate,
    getPriority: () => task.priority,
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
    dueDate: new Date(dueDate).toISOString().slice(0,16),
    priority: priority.toLowerCase(),
    isCompleted,
  }
}