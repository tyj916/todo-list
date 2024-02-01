/*
  we'll have a task item which contains
  - title
  - description
  - due date
  - priority
  - notes
  - checklist
*/

export { createTask };

function createTask(title, description, dueDate, priority, isCompleted) {

  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  }
}