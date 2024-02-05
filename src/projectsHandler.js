import { Project } from "./project";

export function ProjectsHandler() {
  const projects = [];

  // cache DOM
  const body = document.querySelector("body");
  const projectsContainer = body.querySelector("#projects-container");
  const addProjectBtn = body.querySelector("#add-project");
  const dialog = body.querySelector("dialog#add-project");
  const form = dialog.querySelector("form");
  const submitBtn = dialog.querySelector("#submit");
  const cancelBtn = dialog.querySelector("#cancel");

  // cache DOM
  addProjectBtn.addEventListener('click', () => dialog.showModal());
  submitBtn.addEventListener("click", addNewProject);
  cancelBtn.addEventListener("click", () => dialog.close());

  function render() {
    projectsContainer.textContent = '';

    projects.forEach(project => {
      const projectTitle = document.createElement('button');
      const removeProjectBtn = document.createElement("button");

      projectTitle.textContent = project.getTitle();
      removeProjectBtn.textContent = "Remove";

      projectTitle.addEventListener('click', project.render);
      removeProjectBtn.addEventListener('click', () => {
        removeProject(project);
        render();
      });

      projectsContainer.appendChild(projectTitle);
      projectsContainer.appendChild(removeProjectBtn);
    });
  }

  function addNewProject() {
    const title = dialog.querySelector("input#new-project-title").value;
  
    if (!title) return;
  
    const description = dialog.querySelector("input#new-project-description").value;
    const newProject = Project(title, description);
    addProject(newProject);
    render();
    newProject.render();
    form.reset();
  }

  function getProject(title) {
    for (const project of projects) {
      if (project.getTitle() === title) return project;
    }
  }

  function addProject(project) {
    projects.push(project);
  }

  function removeProject(project) {
    const projectIndex = projects.indexOf(project);
    if (projectIndex === -1) return;
    projects.splice(projectIndex, 1);
  }

  function getAllTasks() {
    const tasks = [];

    projects.forEach(project => {
      project.getTasks().forEach(task => {
        tasks.push(task);
      });
    });

    return tasks;
  }

  function log() {
    projects.forEach(project => project.log());
  }

  return {
    getProjects: () => projects,
    getProject,
    getAllTasks,
    render,
    addProject,
    removeProject,
    log,
  }
}