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





function Project(title, description) {
  const project = createProject(title, description);

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

function createProject(title, description) {
  const tasks = [];
  const isCompleted = false;

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





function Task(title, description, dueDate, priority) {
  const task = createTask(title, description, dueDate, priority);

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

function createTask(title, description, dueDate, priority) {
  const isCompleted = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUUyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7O0FBRW5COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtQzs7QUFFbkI7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQztBQUNYO0FBQ047O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGNBQWMsMkNBQUk7QUFDbEIsY0FBYywyQ0FBSTtBQUNsQixjQUFjLDJDQUFJOztBQUVsQix1QkFBdUIsaURBQU87QUFDOUIsZ0JBQWdCLGlEQUFPOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9nZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICB0byBsb2cgdGFza3MgYW5kIHByb2plY3RzIGVpdGhlciB0byBicm93c2VyIG9yIHRvIGxvY2FsIHN0b3JhZ2VcbiovXG5cbmV4cG9ydCB7IGxvZ1Rhc2ssIGxvZ01lc3NhZ2UsIGxvZ1Byb2plY3QgfTtcblxuZnVuY3Rpb24gbG9nTWVzc2FnZShtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2dUYXNrKHRhc2spIHtcbiAgY29uc29sZS50YWJsZSh0YXNrKTtcbn1cblxuZnVuY3Rpb24gbG9nUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3QudGl0bGUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LmRlc2NyaXB0aW9uKTtcbiAgY29uc29sZS5sb2cocHJvamVjdC5pc0NvbXBsZXRlZCk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2subG9nKCkpO1xufSIsIi8qXG4gIHByb2plY3RzIGFyZSBnb2luZyB0byBvcmdhbml6ZSB0YXNrcywgc28gaXQgY29udGFpbnM6XG4gIC0gdGl0bGVcbiAgLSBkZXNjcmlwdGlvblxuICAtIHRhc2tzXG4gIFxuICBmdW5jdGlvbnM6XG4gIC0gYWRkIHRhc2tcbiAgLSByZW1vdmUgdGFza1xuKi9cblxuaW1wb3J0IHsgbG9nUHJvamVjdCB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICBwcm9qZWN0LmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0luZGV4KSB7XG4gICAgcHJvamVjdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICBsb2dQcm9qZWN0KHByb2plY3QpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIHVwZGF0ZSxcbiAgICBjb21wbGV0ZSxcbiAgICByZW1vdmVUYXNrLFxuICAgIGxvZyxcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBjb25zdCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgdGFza3MsXG4gIH1cbn0iLCIvKlxuICB3ZSdsbCBoYXZlIGEgdGFzayBpdGVtIHdoaWNoIGNvbnRhaW5zXG4gIC0gdGl0bGVcbiAgLSBkZXNjcmlwdGlvblxuICAtIGR1ZSBkYXRlXG4gIC0gcHJpb3JpdHlcbiAgLSBub3Rlc1xuICAtIGNoZWNrbGlzdFxuKi9cblxuaW1wb3J0IHsgbG9nVGFzayB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgeyBUYXNrIH07XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuICBmdW5jdGlvbiB1cGRhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHRhc2suaXNDb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nKCkge1xuICAgIGxvZ1Rhc2sodGFzayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBjb21wbGV0ZSxcbiAgICBsb2csXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGlzQ29tcGxldGVkLFxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICBmb3IgdGhpcyBwcm9ncmFtIHdlJ2xsIGJlIGFibGUgdG9cbiAgLSBhZGQgdGFzayA9XG4gIC0gZGlzcGxheSB0YXNrID1cbiAgLSBlZGl0IHRhc2sgPVxuICAtIGNvbXBsZXRlIHRhc2sgPVxuICAtIHJlbW92ZSB0YXNrID1cbiAgLVxuICAtIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCA9XG4gIC0gY3JlYXRlIG5ldyBwcm9qZWN0ID1cbiAgLSBkaXNwbGF5IHByb2plY3QgPVxuICAtIG1vdmUgdGFzayB0byBwcm9qZWN0ID1cbiAgLSBlZGl0IHByb2plY3RcbiAgLSBjb21wbGV0ZSBwcm9qZWN0XG4gIC0gcmVtb3ZlIHByb2plY3RcbiAgLVxuICAtIGxvZyBhbGwgdGFza3MgYW5kIHByb2plY3RzXG4qL1xuaW1wb3J0IHsgbG9nVGFzaywgbG9nUHJvamVjdCB9IGZyb20gXCIuL2xvZ2dlclwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IHRhc2tzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFzayAxIG5lZWRzIHRvIGJlIGRvbmUgdG9kYXlcIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAxLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoYXQ/ISBUaGVyZSBpcyBhIHRhc2sgMj9cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAxLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldvcmtvdXQgYnJvXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMixcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVcGRhdGUgVGFza1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwZGF0ZWRcIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIHByaW9yaXR5OiAzLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IHRhc2sxID0gVGFzayh0YXNrc1swXS50aXRsZSwgdGFza3NbMF0uZGVzY3JpcHRpb24sIHRhc2tzWzBdLmR1ZURhdGUsIHRhc2tzWzBdLnByaW9yaXR5LCB0YXNrc1swXS5pc0NvbXBsZXRlZCk7XG5jb25zdCB0YXNrMiA9IFRhc2sodGFza3NbMV0udGl0bGUsIHRhc2tzWzFdLmRlc2NyaXB0aW9uLCB0YXNrc1sxXS5kdWVEYXRlLCB0YXNrc1sxXS5wcmlvcml0eSwgdGFza3NbMV0uaXNDb21wbGV0ZWQpO1xuY29uc3QgdGFzazMgPSBUYXNrKHRhc2tzWzJdLnRpdGxlLCB0YXNrc1syXS5kZXNjcmlwdGlvbiwgdGFza3NbMl0uZHVlRGF0ZSwgdGFza3NbMl0ucHJpb3JpdHksIHRhc2tzWzJdLmlzQ29tcGxldGVkKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KFwiRGVmYXVsdFwiLCBcIlVuYXNzaWduZWQgdGFzayB3aWxsIGJlIHBsYWNlZCBoZXJlLlwiKTtcbmNvbnN0IHdvcmtvdXQgPSBQcm9qZWN0KFwiV29ya291dFwiLCBcIk15IHdvcmtvdXQgcHJvamVjdCFcIik7XG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazEpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMik7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2szKTtcbndvcmtvdXQuYWRkVGFzayh0YXNrMSk7XG53b3Jrb3V0LmFkZFRhc2sodGFzazIpO1xud29ya291dC5hZGRUYXNrKHRhc2szKTtcblxudGFzazIudXBkYXRlKFwid29vaG9vXCIsIFwiRWRpdGVkIVwiLCAyLCBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLCBcIm5vIG5vdGVzXCIsIGZhbHNlKTtcbnRhc2syLmNvbXBsZXRlKCk7XG53b3Jrb3V0LnJlbW92ZVRhc2soMCk7XG53b3Jrb3V0LnVwZGF0ZShcIlByb2plY3QgWlwiLCBcIkRlZmluZWRcIik7XG53b3Jrb3V0LmNvbXBsZXRlKCk7XG53b3Jrb3V0LmxvZygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==