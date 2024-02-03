export function ProjectsHandler() {
  const projects = [];

  // cache DOM
  const content = document.querySelector("#content");

  function render(event) {
    content.textContent = '';

    const target = event.target.textContent;

    for (const project of projects) {
      if (!(project.getTitle() === target)) continue;
      project.render();
      break;
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
    getAllTasks,
    render,
    addProject,
    removeProject,
    log,
  }
}