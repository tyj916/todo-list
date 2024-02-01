/*
  to log tasks and projects either to browser or to local storage
*/

export { logTask, logMessage, logProject };

function logMessage(message) {
  console.log(message);
}

function logTask(task) {
  console.table(task);
}

function logProject(project) {
  console.log(project.title);
  console.log(project.description);
  console.log(project.isCompleted);
  project.tasks.forEach(task => {
    logTask(task);
  });
}