export function ProjectsHandler() {
  const projects = [];

  // cache DOM
  const projectsContainer = document.querySelector("#projects");

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
    addProjectBtn.addEventListener('click', ()=>{});

    projectsContainer.appendChild(addProjectBtn);
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