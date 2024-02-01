/*
  we'll have a task item which contains
  - title
  - description
  - due date
  - priority
  - notes
  - checklist

  functions:
  - update task
*/

export function addTask(title, description, dueDate, priority, notes, checklist) {
  
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  }
}