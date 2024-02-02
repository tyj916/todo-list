export function Todolist(defaultProject) {
  const projects = [defaultProject];

  function addProject(project) {
    projects.push(project);
  }

  function removeProject(project) {
    const projectIndex = projects.indexOf(project);
    if (projectIndex === -1) return;
    projects.splice(projectIndex, 1);
  }

  function log() {
    projects.forEach(project => project.log());
  }

  return {
    addProject,
    removeProject,
    log,
  }
}