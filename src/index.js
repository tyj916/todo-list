/*
  for this program we'll be able to
  - add task =
  - display task =
  - edit task 
  - complete task
  - remove task
  -
  - create a default project
  - create new project
  - display project
  - move task to project
  - edit project
  - complete project
  - remove project
  -
  - log all tasks and projects
*/
import { logTask } from "./logger";
import { createProject } from "./project";
import { createTask } from "./task";

function updateTask(task, title, description, priority, dueDate, notes, checklist) {
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
  task.notes = notes;
  task.checklist = checklist;
}

function completeTask(task) {
  task.checklist = true;
}

const tasks = [
  {
    title: "Task 1",
    description: "Task 1 needs to be done today",
    dueDate: new Date().toDateString(),
    priority: 1,
    notes: "no notes",
    checklist: false,
  },
  {
    title: "Task 2",
    description: "What?! There is a task 2?",
    dueDate: new Date().toDateString(),
    priority: 1,
    notes: "shit",
    checklist: false,
  },
  {
    title: "Task 3",
    description: "Workout bro",
    dueDate: new Date().toDateString(),
    priority: 2,
    notes: "back...",
    checklist: false,
  },
  {
    title: "Update Task",
    description: "Updated",
    dueDate: new Date().toDateString(),
    priority: 3,
    notes: "update",
    checklist: false,
  },
];

const task1 = createTask(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].notes, tasks[0].checklist);
const task2 = createTask(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].notes, tasks[1].checklist);
const task3 = createTask(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].notes, tasks[2].checklist);

const defaultProject = createProject("Default", "Unassigned task will be placed here.");
const project1 = createProject("Project A", "Not by Jackie Chan");
const project2 = createProject("Project B", "Not by Jackie Chan");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

updateTask(task2, "woohoo", "Edited!", 2, new Date().toDateString(), "no notes", false);
completeTask(task2);
project1.removeTask(0);

// display project task
project1.log();
project2.log();