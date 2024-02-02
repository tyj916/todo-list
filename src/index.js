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

import { Project } from "./project";
import { Task } from "./task";
import { Todolist } from "./todolist";

const tasks = [
  {
    title: "Learn coding",
    description: "Coding is important!",
    dueDate: new Date().toDateString(),
    priority: 1,
  },
  {
    title: "Do housework",
    description: "What?! There's dust on the floor again?!",
    dueDate: new Date().toDateString(),
    priority: 1,
  },
  {
    title: "Workout",
    description: "Gym bro",
    dueDate: new Date().toDateString(),
    priority: 2,
  },
];

const task1 = Task(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority);
const task2 = Task(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority);
const task3 = Task(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);

const defaultProject = Project("Default", "Unassigned task will be placed here.");
const workoutProject = Project("Workout", "Gotta be strong!");
const studyProject = Project("Study", "Gotta be smart!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);

const todolist = Todolist(defaultProject);

todolist.addProject(workoutProject);
todolist.addProject(studyProject);

todolist.removeProject(studyProject);

todolist.log();