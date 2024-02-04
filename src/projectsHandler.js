import { Project } from "./project";

export function ProjectsHandler() {
  const projects = [];

  // cache DOM
  const projectsContainer = document.querySelector("#projects");
  const dialog = document.querySelector("dialog#add-project");
  const form = dialog.querySelector("form");
  const submitBtn = dialog.querySelector("#submit");
  const cancelBtn = dialog.querySelector("#cancel");

  // bind events
  submitBtn.addEventListener("click", submitProject);
  cancelBtn.addEventListener("click", () => dialog.close());

  function render() {
    projectsContainer.textContent = '';

    const h3 = document.createElement('h3');
    h3.textContent = "Projects";
    projectsContainer.appendChild(h3);

    projects.forEach(project => {
      const btn = document.createElement('button');
      btn.textContent = project.getTitle();
      btn.addEventListener('click', project.render);

      projectsContainer.appendChild(btn);
    })

    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = "Add Project";
    addProjectBtn.addEventListener('click', () => dialog.showModal());

    projectsContainer.appendChild(addProjectBtn);
  }

  function submitProject() {
    const title = dialog.querySelector("input#new-project-title").value;

    if (!title) return;

    const description = dialog.querySelector("input#new-project-description").value;
    const newProject = Project(title, description);
    addProject(newProject);
    render();
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