import { Project } from "./project";
import { Task } from "./task";
import { ProjectsHandler } from "./projectsHandler";
import 'normalize.css'

const tasks = [
  {
    title: "Learn coding",
    description: "Coding is important!",
    dueDate: new Date(2023, 11, 22),
    priority: "High",
  },
  {
    title: "Do housework",
    description: "What?! There's dust on the floor again?!",
    dueDate: (new Date(2022, 0, 12)),
    priority: "Low",
  },
  {
    title: "Workout",
    description: "Gym bro",
    dueDate: new Date(),
    priority: "Medium",
  },
];

const studyTask = Task(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority);
const defaultTask = Task(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority);
const workoutTask = Task(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);

const defaultProject = Project("Default", "Unassigned tasks will be assigned here.");
const workoutProject = Project("Workout", "Gotta be strong!");
const studyProject = Project("Study", "Gotta be smart!");

defaultProject.addTask(defaultTask);
workoutProject.addTask(workoutTask);
studyProject.addTask(studyTask);
studyProject.addTask(studyTask);
studyProject.addTask(studyTask);
studyProject.addTask(studyTask);
studyProject.addTask(studyTask);

const projectsHandler = ProjectsHandler();
projectsHandler.addProject(defaultProject);
projectsHandler.addProject(workoutProject);
projectsHandler.addProject(studyProject);

studyTask.update("a", "b", new Date(), 'low');
// studyTask.editTask();

// cache DOM
const body = document.querySelector("body");
const logo = body.querySelector("#logo");
const sidebar = body.querySelector("#sidebar");
const allTasksBtn = sidebar.querySelector("#all-tasks");

// bind events
[logo, allTasksBtn].forEach(btn => btn.addEventListener('click', render));

export function render() {
  projectsHandler.render();

  const allTasksProject = Project("All Tasks", "All of your tasks will be shown here.");
  const allTasks = projectsHandler.getAllTasks();

  allTasks.forEach(task => {
    allTasksProject.addTask(task);
  });

  allTasksProject.render();
}

render();