/*
  for this program we'll be able to
  - add task =
  - display task =
  - edit task =
  - complete task =
  - remove task =
  -
  - create a default project =
  - create new project =
  - display project =
  - move task to project =
  - edit project
  - complete project
  - remove project
  -
  - log all tasks and projects
*/
import { logTask, logProject } from "./logger";
import { createProject } from "./project";
import { createTask } from "./task";

function updateTask(task, title, description, priority, dueDate) {
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
}

function completeTask(task) {
  task.isCompleted = true;
}

function updateProject(project, title, description) {
  project.title = title;
  project.description = description;
}

function completeProject(project) {
  project.isCompleted = true;
}

const tasks = [
  {
    title: "Task 1",
    description: "Task 1 needs to be done today",
    dueDate: new Date().toDateString(),
    priority: 1,
    isCompleted: false,
  },
  {
    title: "Task 2",
    description: "What?! There is a task 2?",
    dueDate: new Date().toDateString(),
    priority: 1,
    isCompleted: false,
  },
  {
    title: "Task 3",
    description: "Workout bro",
    dueDate: new Date().toDateString(),
    priority: 2,
    isCompleted: false,
  },
  {
    title: "Update Task",
    description: "Updated",
    dueDate: new Date().toDateString(),
    priority: 3,
    isCompleted: false,
  },
];

const task1 = createTask(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].isCompleted);
const task2 = createTask(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].isCompleted);
const task3 = createTask(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].isCompleted);

const defaultProject = createProject("Default", "Unassigned task will be placed here.");
const project1 = createProject("Project A", "Not by Jackie Chan");
const project2 = createProject("Project B", "Not by Jackie Chan");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

project1.title = "Change";

updateTask(task2, "woohoo", "Edited!", 2, new Date().toDateString(), "no notes", false);
completeTask(task2);
project1.removeTask(0);
updateProject(project1, "Project Z", "Defined");
completeProject(project1);

console.log(project1);
logProject(project1);