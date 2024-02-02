export { sortTasks, logTasks }

function sortTasks(tasks) {
  const copy = tasks.slice(); // to prevent mutation
  const sortedTasks = copy.sort((taskA, taskB) => {
    return new Date(taskA.getDate()) - new Date(taskB.getDate());
  });
  return sortedTasks;
}

function logTasks(tasks) {
  tasks.forEach(task => {
    task.log();
  });
}