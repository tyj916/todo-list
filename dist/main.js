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





function createProject(title, description, isCompleted) {
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
    isCompleted,
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




function updateTask(task, title, description, priority, dueDate) {
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
}

function completeTask(task) {
  task.isCompleted = true;
}

function updateProject(project, title, description) {
  project.title = title;
  project.description = description;
}

function completeProject(project) {
  project.isCompleted = true;
}

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

const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority, tasks[0].isCompleted);
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority, tasks[1].isCompleted);
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority, tasks[2].isCompleted);

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
completeProject(project1);

console.log(project1);
(0,_logger__WEBPACK_IMPORTED_MODULE_0__.logProject)(project1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUUyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0M7O0FBRXRCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ0w7QUFDTjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsY0FBYyxpREFBVTtBQUN4QixjQUFjLGlEQUFVO0FBQ3hCLGNBQWMsaURBQVU7O0FBRXhCLHVCQUF1Qix1REFBYTtBQUNwQyxpQkFBaUIsdURBQWE7QUFDOUIsaUJBQWlCLHVEQUFhOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFVLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9nZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICB0byBsb2cgdGFza3MgYW5kIHByb2plY3RzIGVpdGhlciB0byBicm93c2VyIG9yIHRvIGxvY2FsIHN0b3JhZ2VcbiovXG5cbmV4cG9ydCB7IGxvZ1Rhc2ssIGxvZ01lc3NhZ2UsIGxvZ1Byb2plY3QgfTtcblxuZnVuY3Rpb24gbG9nTWVzc2FnZShtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2dUYXNrKHRhc2spIHtcbiAgY29uc29sZS50YWJsZSh0YXNrKTtcbn1cblxuZnVuY3Rpb24gbG9nUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3QudGl0bGUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LmRlc2NyaXB0aW9uKTtcbiAgY29uc29sZS5sb2cocHJvamVjdC5pc0NvbXBsZXRlZCk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBsb2dUYXNrKHRhc2spO1xuICB9KTtcbn0iLCIvKlxuICBwcm9qZWN0cyBhcmUgZ29pbmcgdG8gb3JnYW5pemUgdGFza3MsIHNvIGl0IGNvbnRhaW5zOlxuICAtIHRpdGxlXG4gIC0gZGVzY3JpcHRpb25cbiAgLSB0YXNrc1xuICBcbiAgZnVuY3Rpb25zOlxuICAtIGFkZCB0YXNrXG4gIC0gcmVtb3ZlIHRhc2tcbiovXG5cbmltcG9ydCB7IGxvZ01lc3NhZ2UsIGxvZ1Rhc2sgfSBmcm9tIFwiLi9sb2dnZXJcIjtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgaXNDb21wbGV0ZWQpIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgdGFza3MsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICB9XG59IiwiLypcbiAgd2UnbGwgaGF2ZSBhIHRhc2sgaXRlbSB3aGljaCBjb250YWluc1xuICAtIHRpdGxlXG4gIC0gZGVzY3JpcHRpb25cbiAgLSBkdWUgZGF0ZVxuICAtIHByaW9yaXR5XG4gIC0gbm90ZXNcbiAgLSBjaGVja2xpc3RcbiovXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCkge1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBpc0NvbXBsZXRlZCxcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAgZm9yIHRoaXMgcHJvZ3JhbSB3ZSdsbCBiZSBhYmxlIHRvXG4gIC0gYWRkIHRhc2sgPVxuICAtIGRpc3BsYXkgdGFzayA9XG4gIC0gZWRpdCB0YXNrID1cbiAgLSBjb21wbGV0ZSB0YXNrID1cbiAgLSByZW1vdmUgdGFzayA9XG4gIC1cbiAgLSBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgPVxuICAtIGNyZWF0ZSBuZXcgcHJvamVjdCA9XG4gIC0gZGlzcGxheSBwcm9qZWN0ID1cbiAgLSBtb3ZlIHRhc2sgdG8gcHJvamVjdCA9XG4gIC0gZWRpdCBwcm9qZWN0XG4gIC0gY29tcGxldGUgcHJvamVjdFxuICAtIHJlbW92ZSBwcm9qZWN0XG4gIC1cbiAgLSBsb2cgYWxsIHRhc2tzIGFuZCBwcm9qZWN0c1xuKi9cbmltcG9ydCB7IGxvZ1Rhc2ssIGxvZ1Byb2plY3QgfSBmcm9tIFwiLi9sb2dnZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2spIHtcbiAgdGFzay5pc0NvbXBsZXRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0LmlzQ29tcGxldGVkID0gdHJ1ZTtcbn1cblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYXNrIDEgbmVlZHMgdG8gYmUgZG9uZSB0b2RheVwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFzayAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hhdD8hIFRoZXJlIGlzIGEgdGFzayAyP1wiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV29ya291dCBicm9cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAyLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlVwZGF0ZSBUYXNrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXBkYXRlZFwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDMsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuXTtcblxuY29uc3QgdGFzazEgPSBjcmVhdGVUYXNrKHRhc2tzWzBdLnRpdGxlLCB0YXNrc1swXS5kZXNjcmlwdGlvbiwgdGFza3NbMF0uZHVlRGF0ZSwgdGFza3NbMF0ucHJpb3JpdHksIHRhc2tzWzBdLmlzQ29tcGxldGVkKTtcbmNvbnN0IHRhc2syID0gY3JlYXRlVGFzayh0YXNrc1sxXS50aXRsZSwgdGFza3NbMV0uZGVzY3JpcHRpb24sIHRhc2tzWzFdLmR1ZURhdGUsIHRhc2tzWzFdLnByaW9yaXR5LCB0YXNrc1sxXS5pc0NvbXBsZXRlZCk7XG5jb25zdCB0YXNrMyA9IGNyZWF0ZVRhc2sodGFza3NbMl0udGl0bGUsIHRhc2tzWzJdLmRlc2NyaXB0aW9uLCB0YXNrc1syXS5kdWVEYXRlLCB0YXNrc1syXS5wcmlvcml0eSwgdGFza3NbMl0uaXNDb21wbGV0ZWQpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIsIFwiVW5hc3NpZ25lZCB0YXNrIHdpbGwgYmUgcGxhY2VkIGhlcmUuXCIpO1xuY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBBXCIsIFwiTm90IGJ5IEphY2tpZSBDaGFuXCIpO1xuY29uc3QgcHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBCXCIsIFwiTm90IGJ5IEphY2tpZSBDaGFuXCIpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMyk7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbnByb2plY3QxLmFkZFRhc2sodGFzazIpO1xucHJvamVjdDIuYWRkVGFzayh0YXNrMyk7XG5cbnByb2plY3QxLnRpdGxlID0gXCJDaGFuZ2VcIjtcblxudXBkYXRlVGFzayh0YXNrMiwgXCJ3b29ob29cIiwgXCJFZGl0ZWQhXCIsIDIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksIFwibm8gbm90ZXNcIiwgZmFsc2UpO1xuY29tcGxldGVUYXNrKHRhc2syKTtcbnByb2plY3QxLnJlbW92ZVRhc2soMCk7XG51cGRhdGVQcm9qZWN0KHByb2plY3QxLCBcIlByb2plY3QgWlwiLCBcIkRlZmluZWRcIik7XG5jb21wbGV0ZVByb2plY3QocHJvamVjdDEpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0MSk7XG5sb2dQcm9qZWN0KHByb2plY3QxKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=