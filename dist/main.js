/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logMessage: () => (/* binding */ logMessage),
/* harmony export */   logProject: () => (/* binding */ logProject),
/* harmony export */   logTask: () => (/* binding */ logTask)
/* harmony export */ });
/*
  to log tasks and projects either to browser or to local storage
*/



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
  project.tasks.forEach(task => task.log());
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/logger.js");
/*
  projects are going to organize tasks, so it contains:
  - title
  - description
  - tasks
  
  functions:
  - add task
  - remove task
*/





function Project(title, description, isCompleted) {
  const project = createProject(title, description, isCompleted);

  function addTask(task) {
    project.tasks.push(task);
  }

  function update(title, description) {
    project.title = title;
    project.description = description;
  }

  function complete() {
    project.isCompleted = true;
  }

  function removeTask(taskIndex) {
    project.tasks.splice(taskIndex, 1);
  }

  function log() {
    (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logProject)(project);
  }

  return {
    addTask,
    update,
    complete,
    removeTask,
    log,
  }
}

function createProject(title, description, isCompleted) {
  const tasks = [];

  return {
    title,
    description,
    isCompleted,
    tasks,
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/logger.js");
/*
  we'll have a task item which contains
  - title
  - description
  - due date
  - priority
  - notes
  - checklist
*/





function Task(title, description, dueDate, priority, isCompleted) {
  const task = createTask(title, description, dueDate, priority, isCompleted);

  function update(title, description, priority, dueDate) {
    task.title = title;
    task.description = description;
    task.priority = priority;
    task.dueDate = dueDate;
  }
  
  function complete() {
    task.isCompleted = true;
  }

  function log() {
    (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logTask)(task);
  }

  return {
    update,
    complete,
    log,
  }
}

function createTask(title, description, dueDate, priority, isCompleted) {

  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/logger.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/*
  for this program we'll be able to
  - add task =
  - display task =
  - edit task =
  - complete task =
  - remove task =
  -
  - create a default project =
  - create new project =
  - display project =
  - move task to project =
  - edit project
  - complete project
  - remove project
  -
  - log all tasks and projects
*/




const tasks = [
  {
    title: "Task 1",
    description: "Task 1 needs to be done today",
    dueDate: new Date().toDateString(),
    priority: 1,
    isCompleted: false,
  },
  {
    title: "Task 2",
    description: "What?! There is a task 2?",
    dueDate: new Date().toDateString(),
    priority: 1,
    isCompleted: false,
  },
  {
    title: "Task 3",
    description: "Workout bro",
    dueDate: new Date().toDateString(),
    priority: 2,
    isCompleted: false,
  },
  {
    title: "Update Task",
    description: "Updated",
    dueDate: new Date().toDateString(),
    priority: 3,
    isCompleted: false,
  },
];

const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].isCompleted);
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].isCompleted);
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].isCompleted);

const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)("Default", "Unassigned task will be placed here.");
const workout = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)("Workout", "My workout project!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
workout.addTask(task1);
workout.addTask(task2);
workout.addTask(task3);

task2.update("woohoo", "Edited!", 2, new Date().toDateString(), "no notes", false);
task2.complete();
workout.removeTask(0);
workout.update("Project Z", "Defined");
workout.complete();
workout.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUUyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7O0FBRW5COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUM7O0FBRW5COztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ1g7QUFDTjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsY0FBYywyQ0FBSTtBQUNsQixjQUFjLDJDQUFJO0FBQ2xCLGNBQWMsMkNBQUk7O0FBRWxCLHVCQUF1QixpREFBTztBQUM5QixnQkFBZ0IsaURBQU87O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIHRvIGxvZyB0YXNrcyBhbmQgcHJvamVjdHMgZWl0aGVyIHRvIGJyb3dzZXIgb3IgdG8gbG9jYWwgc3RvcmFnZVxuKi9cblxuZXhwb3J0IHsgbG9nVGFzaywgbG9nTWVzc2FnZSwgbG9nUHJvamVjdCB9O1xuXG5mdW5jdGlvbiBsb2dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ1Rhc2sodGFzaykge1xuICBjb25zb2xlLnRhYmxlKHRhc2spO1xufVxuXG5mdW5jdGlvbiBsb2dQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdC50aXRsZSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QuZGVzY3JpcHRpb24pO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LmlzQ29tcGxldGVkKTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5sb2coKSk7XG59IiwiLypcbiAgcHJvamVjdHMgYXJlIGdvaW5nIHRvIG9yZ2FuaXplIHRhc2tzLCBzbyBpdCBjb250YWluczpcbiAgLSB0aXRsZVxuICAtIGRlc2NyaXB0aW9uXG4gIC0gdGFza3NcbiAgXG4gIGZ1bmN0aW9uczpcbiAgLSBhZGQgdGFza1xuICAtIHJlbW92ZSB0YXNrXG4qL1xuXG5pbXBvcnQgeyBsb2dQcm9qZWN0IH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgaXNDb21wbGV0ZWQpO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgcHJvamVjdC5pc0NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJbmRleCkge1xuICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2coKSB7XG4gICAgbG9nUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGUsXG4gICAgY29tcGxldGUsXG4gICAgcmVtb3ZlVGFzayxcbiAgICBsb2csXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpc0NvbXBsZXRlZCxcbiAgICB0YXNrcyxcbiAgfVxufSIsIi8qXG4gIHdlJ2xsIGhhdmUgYSB0YXNrIGl0ZW0gd2hpY2ggY29udGFpbnNcbiAgLSB0aXRsZVxuICAtIGRlc2NyaXB0aW9uXG4gIC0gZHVlIGRhdGVcbiAgLSBwcmlvcml0eVxuICAtIG5vdGVzXG4gIC0gY2hlY2tsaXN0XG4qL1xuXG5pbXBvcnQgeyBsb2dUYXNrIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCB7IFRhc2sgfTtcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCkge1xuICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB0YXNrLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICBsb2dUYXNrKHRhc2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgY29tcGxldGUsXG4gICAgbG9nLFxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQpIHtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgaXNDb21wbGV0ZWQsXG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gIGZvciB0aGlzIHByb2dyYW0gd2UnbGwgYmUgYWJsZSB0b1xuICAtIGFkZCB0YXNrID1cbiAgLSBkaXNwbGF5IHRhc2sgPVxuICAtIGVkaXQgdGFzayA9XG4gIC0gY29tcGxldGUgdGFzayA9XG4gIC0gcmVtb3ZlIHRhc2sgPVxuICAtXG4gIC0gY3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0ID1cbiAgLSBjcmVhdGUgbmV3IHByb2plY3QgPVxuICAtIGRpc3BsYXkgcHJvamVjdCA9XG4gIC0gbW92ZSB0YXNrIHRvIHByb2plY3QgPVxuICAtIGVkaXQgcHJvamVjdFxuICAtIGNvbXBsZXRlIHByb2plY3RcbiAgLSByZW1vdmUgcHJvamVjdFxuICAtXG4gIC0gbG9nIGFsbCB0YXNrcyBhbmQgcHJvamVjdHNcbiovXG5pbXBvcnQgeyBsb2dUYXNrLCBsb2dQcm9qZWN0IH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYXNrIDEgbmVlZHMgdG8gYmUgZG9uZSB0b2RheVwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFzayAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hhdD8hIFRoZXJlIGlzIGEgdGFzayAyP1wiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV29ya291dCBicm9cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAyLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlVwZGF0ZSBUYXNrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXBkYXRlZFwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDMsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuXTtcblxuY29uc3QgdGFzazEgPSBUYXNrKHRhc2tzWzBdLnRpdGxlLCB0YXNrc1swXS5kZXNjcmlwdGlvbiwgdGFza3NbMF0uZHVlRGF0ZSwgdGFza3NbMF0ucHJpb3JpdHksIHRhc2tzWzBdLmlzQ29tcGxldGVkKTtcbmNvbnN0IHRhc2syID0gVGFzayh0YXNrc1sxXS50aXRsZSwgdGFza3NbMV0uZGVzY3JpcHRpb24sIHRhc2tzWzFdLmR1ZURhdGUsIHRhc2tzWzFdLnByaW9yaXR5LCB0YXNrc1sxXS5pc0NvbXBsZXRlZCk7XG5jb25zdCB0YXNrMyA9IFRhc2sodGFza3NbMl0udGl0bGUsIHRhc2tzWzJdLmRlc2NyaXB0aW9uLCB0YXNrc1syXS5kdWVEYXRlLCB0YXNrc1syXS5wcmlvcml0eSwgdGFza3NbMl0uaXNDb21wbGV0ZWQpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoXCJEZWZhdWx0XCIsIFwiVW5hc3NpZ25lZCB0YXNrIHdpbGwgYmUgcGxhY2VkIGhlcmUuXCIpO1xuY29uc3Qgd29ya291dCA9IFByb2plY3QoXCJXb3Jrb3V0XCIsIFwiTXkgd29ya291dCBwcm9qZWN0IVwiKTtcblxuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMSk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2syKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazMpO1xud29ya291dC5hZGRUYXNrKHRhc2sxKTtcbndvcmtvdXQuYWRkVGFzayh0YXNrMik7XG53b3Jrb3V0LmFkZFRhc2sodGFzazMpO1xuXG50YXNrMi51cGRhdGUoXCJ3b29ob29cIiwgXCJFZGl0ZWQhXCIsIDIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksIFwibm8gbm90ZXNcIiwgZmFsc2UpO1xudGFzazIuY29tcGxldGUoKTtcbndvcmtvdXQucmVtb3ZlVGFzaygwKTtcbndvcmtvdXQudXBkYXRlKFwiUHJvamVjdCBaXCIsIFwiRGVmaW5lZFwiKTtcbndvcmtvdXQuY29tcGxldGUoKTtcbndvcmtvdXQubG9nKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9