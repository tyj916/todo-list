/*
  to log tasks and projects either to browser or to local storage
*/

export { logTask, logMessage, logProject };

function logMessage(message) {
  console.log(message);
}

function logTask(task) {
  console.log(task);
}

function logProject(project) {
  console.log(project.title);
  console.log(project.description);
  project.tasks.forEach(task => {
    logTask(task);
  });
}