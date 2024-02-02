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
import { Project } from "./project";
import { Task } from "./task";

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

const task1 = Task(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].isCompleted);
const task2 = Task(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].isCompleted);
const task3 = Task(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].isCompleted);

const defaultProject = Project("Default", "Unassigned task will be placed here.");
const workout = Project("Workout", "My workout project!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
workout.addTask(task1);
workout.addTask(task2);
workout.addTask(task3);

task2.update("woohoo", "Edited!", 2, new Date().toDateString(), "no notes", false);
task2.complete();
workout.removeTask(0);
workout.update("Project Z", "Defined");
workout.complete();
workout.log();