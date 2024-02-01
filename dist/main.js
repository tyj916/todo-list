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
  console.log(task);
}

function logProject(project) {
  console.log(project.title);
  console.log(project.description);
  project.tasks.forEach(task => {
    logTask(task);
  });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
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





function createProject(title, description, checklist) {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function removeTask(taskIndex) {
    tasks.splice(taskIndex, 1);
  }

  return {
    title,
    description,
    checklist,
    tasks,
    addTask,
    removeTask,
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
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/*
  we'll have a task item which contains
  - title
  - description
  - due date
  - priority
  - notes
  - checklist
*/



function createTask(title, description, dueDate, priority, notes, checklist) {

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
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




function updateTask(task, title, description, priority, dueDate, notes, checklist) {
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
  task.notes = notes;
  task.checklist = checklist;
}

function completeTask(task) {
  task.checklist = true;
}

function updateProject(project, title, description, checklist) {
  project.title = title;
  project.description = description;
  project.checklist = checklist;
}

const tasks = [
  {
    title: "Task 1",
    description: "Task 1 needs to be done today",
    dueDate: new Date().toDateString(),
    priority: 1,
    notes: "no notes",
    checklist: false,
  },
  {
    title: "Task 2",
    description: "What?! There is a task 2?",
    dueDate: new Date().toDateString(),
    priority: 1,
    notes: "shit",
    checklist: false,
  },
  {
    title: "Task 3",
    description: "Workout bro",
    dueDate: new Date().toDateString(),
    priority: 2,
    notes: "back...",
    checklist: false,
  },
  {
    title: "Update Task",
    description: "Updated",
    dueDate: new Date().toDateString(),
    priority: 3,
    notes: "update",
    checklist: false,
  },
];

const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].notes, tasks[0].checklist);
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].notes, tasks[1].checklist);
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].notes, tasks[2].checklist);

const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Default", "Unassigned task will be placed here.");
const project1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project A", "Not by Jackie Chan");
const project2 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project B", "Not by Jackie Chan");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

project1.title = "Change";

updateTask(task2, "woohoo", "Edited!", 2, new Date().toDateString(), "no notes", false);
completeTask(task2);
project1.removeTask(0);
updateProject(project1, "Project Z", "Defined");

console.log(project1);
(0,_logger__WEBPACK_IMPORTED_MODULE_0__.logProject)(project1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUUyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDOztBQUV0Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ0w7QUFDTjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGNBQWMsaURBQVU7QUFDeEIsY0FBYyxpREFBVTtBQUN4QixjQUFjLGlEQUFVOztBQUV4Qix1QkFBdUIsdURBQWE7QUFDcEMsaUJBQWlCLHVEQUFhO0FBQzlCLGlCQUFpQix1REFBYTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQVUsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIHRvIGxvZyB0YXNrcyBhbmQgcHJvamVjdHMgZWl0aGVyIHRvIGJyb3dzZXIgb3IgdG8gbG9jYWwgc3RvcmFnZVxuKi9cblxuZXhwb3J0IHsgbG9nVGFzaywgbG9nTWVzc2FnZSwgbG9nUHJvamVjdCB9O1xuXG5mdW5jdGlvbiBsb2dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ1Rhc2sodGFzaykge1xuICBjb25zb2xlLmxvZyh0YXNrKTtcbn1cblxuZnVuY3Rpb24gbG9nUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3QudGl0bGUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LmRlc2NyaXB0aW9uKTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGxvZ1Rhc2sodGFzayk7XG4gIH0pO1xufSIsIi8qXG4gIHByb2plY3RzIGFyZSBnb2luZyB0byBvcmdhbml6ZSB0YXNrcywgc28gaXQgY29udGFpbnM6XG4gIC0gdGl0bGVcbiAgLSBkZXNjcmlwdGlvblxuICAtIHRhc2tzXG4gIFxuICBmdW5jdGlvbnM6XG4gIC0gYWRkIHRhc2tcbiAgLSByZW1vdmUgdGFza1xuKi9cblxuaW1wb3J0IHsgbG9nTWVzc2FnZSwgbG9nVGFzayB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja2xpc3QpIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY2hlY2tsaXN0LFxuICAgIHRhc2tzLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgfVxufSIsIi8qXG4gIHdlJ2xsIGhhdmUgYSB0YXNrIGl0ZW0gd2hpY2ggY29udGFpbnNcbiAgLSB0aXRsZVxuICAtIGRlc2NyaXB0aW9uXG4gIC0gZHVlIGRhdGVcbiAgLSBwcmlvcml0eVxuICAtIG5vdGVzXG4gIC0gY2hlY2tsaXN0XG4qL1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCkge1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBjaGVja2xpc3QsXG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gIGZvciB0aGlzIHByb2dyYW0gd2UnbGwgYmUgYWJsZSB0b1xuICAtIGFkZCB0YXNrID1cbiAgLSBkaXNwbGF5IHRhc2sgPVxuICAtIGVkaXQgdGFzayA9XG4gIC0gY29tcGxldGUgdGFzayA9XG4gIC0gcmVtb3ZlIHRhc2sgPVxuICAtXG4gIC0gY3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0ID1cbiAgLSBjcmVhdGUgbmV3IHByb2plY3QgPVxuICAtIGRpc3BsYXkgcHJvamVjdCA9XG4gIC0gbW92ZSB0YXNrIHRvIHByb2plY3QgPVxuICAtIGVkaXQgcHJvamVjdFxuICAtIGNvbXBsZXRlIHByb2plY3RcbiAgLSByZW1vdmUgcHJvamVjdFxuICAtXG4gIC0gbG9nIGFsbCB0YXNrcyBhbmQgcHJvamVjdHNcbiovXG5pbXBvcnQgeyBsb2dUYXNrLCBsb2dQcm9qZWN0IH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBub3RlcywgY2hlY2tsaXN0KSB7XG4gIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRhc2subm90ZXMgPSBub3RlcztcbiAgdGFzay5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gIHRhc2suY2hlY2tsaXN0ID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCkge1xuICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcHJvamVjdC5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG59XG5cbmNvbnN0IHRhc2tzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFzayAxIG5lZWRzIHRvIGJlIGRvbmUgdG9kYXlcIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAxLFxuICAgIG5vdGVzOiBcIm5vIG5vdGVzXCIsXG4gICAgY2hlY2tsaXN0OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoYXQ/ISBUaGVyZSBpcyBhIHRhc2sgMj9cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAxLFxuICAgIG5vdGVzOiBcInNoaXRcIixcbiAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV29ya291dCBicm9cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAyLFxuICAgIG5vdGVzOiBcImJhY2suLi5cIixcbiAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVXBkYXRlIFRhc2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGRhdGVkXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMyxcbiAgICBub3RlczogXCJ1cGRhdGVcIixcbiAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICB9LFxuXTtcblxuY29uc3QgdGFzazEgPSBjcmVhdGVUYXNrKHRhc2tzWzBdLnRpdGxlLCB0YXNrc1swXS5kZXNjcmlwdGlvbiwgdGFza3NbMF0uZHVlRGF0ZSwgdGFza3NbMF0ucHJpb3JpdHksIHRhc2tzWzBdLm5vdGVzLCB0YXNrc1swXS5jaGVja2xpc3QpO1xuY29uc3QgdGFzazIgPSBjcmVhdGVUYXNrKHRhc2tzWzFdLnRpdGxlLCB0YXNrc1sxXS5kZXNjcmlwdGlvbiwgdGFza3NbMV0uZHVlRGF0ZSwgdGFza3NbMV0ucHJpb3JpdHksIHRhc2tzWzFdLm5vdGVzLCB0YXNrc1sxXS5jaGVja2xpc3QpO1xuY29uc3QgdGFzazMgPSBjcmVhdGVUYXNrKHRhc2tzWzJdLnRpdGxlLCB0YXNrc1syXS5kZXNjcmlwdGlvbiwgdGFza3NbMl0uZHVlRGF0ZSwgdGFza3NbMl0ucHJpb3JpdHksIHRhc2tzWzJdLm5vdGVzLCB0YXNrc1syXS5jaGVja2xpc3QpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIsIFwiVW5hc3NpZ25lZCB0YXNrIHdpbGwgYmUgcGxhY2VkIGhlcmUuXCIpO1xuY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBBXCIsIFwiTm90IGJ5IEphY2tpZSBDaGFuXCIpO1xuY29uc3QgcHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBCXCIsIFwiTm90IGJ5IEphY2tpZSBDaGFuXCIpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMyk7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbnByb2plY3QxLmFkZFRhc2sodGFzazIpO1xucHJvamVjdDIuYWRkVGFzayh0YXNrMyk7XG5cbnByb2plY3QxLnRpdGxlID0gXCJDaGFuZ2VcIjtcblxudXBkYXRlVGFzayh0YXNrMiwgXCJ3b29ob29cIiwgXCJFZGl0ZWQhXCIsIDIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksIFwibm8gbm90ZXNcIiwgZmFsc2UpO1xuY29tcGxldGVUYXNrKHRhc2syKTtcbnByb2plY3QxLnJlbW92ZVRhc2soMCk7XG51cGRhdGVQcm9qZWN0KHByb2plY3QxLCBcIlByb2plY3QgWlwiLCBcIkRlZmluZWRcIik7XG5cbmNvbnNvbGUubG9nKHByb2plY3QxKTtcbmxvZ1Byb2plY3QocHJvamVjdDEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==