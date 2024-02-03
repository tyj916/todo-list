import { Project } from "./project";
import { Task } from "./task";
import { Todolist } from "./todolist";

const tasks = [
  {
    title: "Learn coding",
    description: "Coding is important!",
    dueDate: new Date(2023, 11, 22).toDateString(),
    priority: "High",
  },
  {
    title: "Do housework",
    description: "What?! There's dust on the floor again?!",
    dueDate: (new Date(2022, 0, 12)).toDateString(),
    priority: "Low",
  },
  {
    title: "Workout",
    description: "Gym bro",
    dueDate: new Date().toDateString(),
    priority: "Medium",
  },
];

const task1 = Task(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority);
const task2 = Task(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority);
const task3 = Task(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);

const defaultProject = Project("Default", "");
const workoutProject = Project("Workout", "Gotta be strong!");
const studyProject = Project("Study", "Gotta be smart!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);

const todolist = Todolist();
todolist.addProject(defaultProject);
todolist.addProject(workoutProject);
todolist.addProject(studyProject);

// cache DOM
const sidebar = document.querySelector("#sidebar");
const content = document.querySelector("#content");
const allTasks = sidebar.querySelector("#all-tasks");
const projectsElement = sidebar.querySelector("#projects"); 

// bind events
// allTasks.addEventListener('click', render);
projectsElement.addEventListener('click', render);

function render(event) {
  content.textContent = '';

  const projects = todolist.getProjects();
  projects.forEach(project => {
    if (!(project.getTitle() === event.target.textContent)) return;
    project.render();
  });
}

function renderSidebar() {
  const projects = todolist.getProjects();
  console.log(projects);

  const test = document.createElement('p');
  projectsElement.appendChild(test);
  projects.forEach(project => {
    const btn = document.createElement('button');
    btn.textContent = project.getTitle();
    projectsElement.appendChild(btn);
  })
}

renderSidebar();