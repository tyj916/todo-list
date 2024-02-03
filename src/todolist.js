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

  function getTasks() {
    const tasks = [];

    projects.forEach(project => {
      project.getTasks().forEach(task => {
        tasks.push(task);
      });
    });

    return tasks;
  }

  function getSortedTasks() {
    const tasks = getTasks();
    return sortTasks(tasks);
  }

  function log() {
    projects.forEach(project => project.log());
  }

  return {
    getProjects: () => projects,
    addProject,
    removeProject,
    getSortedTasks,
    log,
  }
}