import { sortTasks } from "./tasksProcessor";

export function Todolist() {
  const projects = [];

  function addProject(project) {
    projects.push(project);
  }

  function removeProject(project) {
    const projectIndex = projects.indexOf(project);
    if (projectIndex === -1) return;
    projects.splice(projectIndex, 1);
  }

  function getAllTasks() {
    const allTasks = [];

    projects.forEach(project => {
      project.getTasks().forEach(task => {
        allTasks.push(task);
      });
    });

    return allTasks;
  }

  function getSortedTasks() {
    const allTasks = getAllTasks();
    return sortTasks(allTasks);
  }

  function log() {
    projects.forEach(project => project.log());
  }

  return {
    addProject,
    removeProject,
    getSortedTasks,
    log,
  }
}