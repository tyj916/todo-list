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
/* harmony export */   logMessage: () => (/* binding */ logMessage)
/* harmony export */ });


function logMessage(message) {
  console.log(message);
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

  function removeTask(task) {
    const taskIndex = project.tasks.indexOf(task);
    if (taskIndex === -1) return;
    project.tasks.splice(taskIndex, 1);
  }

  function log() {
    for (const key in project) {
      (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logMessage)(`${key}: ${project[key]}`);
    }
    project.tasks.forEach(task => task.log());
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
    for (const key in task) {
      (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logMessage)(`${key}: ${task[key]}`);
    }
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

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todolist: () => (/* binding */ Todolist)
/* harmony export */ });
function Todolist(defaultProject) {
  const projects = [defaultProject];

  function addProject(project) {
    projects.push(project);
  }

  function removeProject(project) {
    const projectIndex = projects.indexOf(project);
    if (projectIndex === -1) return;
    projects.splice(projectIndex, 1);
  }

  function log() {
    projects.forEach(project => project.log());
  }

  return {
    addProject,
    removeProject,
    log,
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
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
    title: "Learn coding",
    description: "Coding is important!",
    dueDate: new Date().toDateString(),
    priority: 1,
  },
  {
    title: "Do housework",
    description: "What?! There's dust on the floor again?!",
    dueDate: new Date().toDateString(),
    priority: 1,
  },
  {
    title: "Workout",
    description: "Gym bro",
    dueDate: new Date().toDateString(),
    priority: 2,
  },
];

const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority);
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority);
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);

const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Default", "Unassigned task will be placed here.");
const workoutProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Workout", "Gotta be strong!");
const studyProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Study", "Gotta be smart!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);

const todolist = (0,_todolist__WEBPACK_IMPORTED_MODULE_2__.Todolist)(defaultProject);

todolist.addProject(workoutProject);
todolist.addProject(studyProject);

todolist.removeProject(studyProject);

todolist.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQjs7QUFFdEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKc0M7O0FBRS9CO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVLElBQUksSUFBSSxJQUFJLGFBQWE7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRHNDOztBQUUvQjtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVLElBQUksSUFBSSxJQUFJLFVBQVU7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DO0FBQ047QUFDUTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxjQUFjLDJDQUFJO0FBQ2xCLGNBQWMsMkNBQUk7QUFDbEIsY0FBYywyQ0FBSTs7QUFFbEIsdUJBQXVCLGlEQUFPO0FBQzlCLHVCQUF1QixpREFBTztBQUM5QixxQkFBcUIsaURBQU87O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbURBQVE7O0FBRXpCO0FBQ0E7O0FBRUE7O0FBRUEsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBsb2dNZXNzYWdlIH07XG5cbmZ1bmN0aW9uIGxvZ01lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn0iLCJpbXBvcnQgeyBsb2dNZXNzYWdlIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgcHJvamVjdC5pc0NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgaWYgKHRhc2tJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nKCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHByb2plY3QpIHtcbiAgICAgIGxvZ01lc3NhZ2UoYCR7a2V5fTogJHtwcm9qZWN0W2tleV19YCk7XG4gICAgfVxuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2subG9nKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIHVwZGF0ZSxcbiAgICBjb21wbGV0ZSxcbiAgICByZW1vdmVUYXNrLFxuICAgIGxvZyxcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBjb25zdCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgdGFza3MsXG4gIH1cbn0iLCJpbXBvcnQgeyBsb2dNZXNzYWdlIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB0YXNrLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXNrKSB7XG4gICAgICBsb2dNZXNzYWdlKGAke2tleX06ICR7dGFza1trZXldfWApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGNvbXBsZXRlLFxuICAgIGxvZyxcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgaXNDb21wbGV0ZWQsXG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gVG9kb2xpc3QoZGVmYXVsdFByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdO1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2coKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QubG9nKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgbG9nLFxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICBmb3IgdGhpcyBwcm9ncmFtIHdlJ2xsIGJlIGFibGUgdG9cbiAgLSBhZGQgdGFzayA9XG4gIC0gZGlzcGxheSB0YXNrID1cbiAgLSBlZGl0IHRhc2sgPVxuICAtIGNvbXBsZXRlIHRhc2sgPVxuICAtIHJlbW92ZSB0YXNrID1cbiAgLVxuICAtIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCA9XG4gIC0gY3JlYXRlIG5ldyBwcm9qZWN0ID1cbiAgLSBkaXNwbGF5IHByb2plY3QgPVxuICAtIG1vdmUgdGFzayB0byBwcm9qZWN0ID1cbiAgLSBlZGl0IHByb2plY3RcbiAgLSBjb21wbGV0ZSBwcm9qZWN0XG4gIC0gcmVtb3ZlIHByb2plY3RcbiAgLVxuICAtIGxvZyBhbGwgdGFza3MgYW5kIHByb2plY3RzXG4qL1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFRvZG9saXN0IH0gZnJvbSBcIi4vdG9kb2xpc3RcIjtcblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJMZWFybiBjb2RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2RpbmcgaXMgaW1wb3J0YW50IVwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEbyBob3VzZXdvcmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0PyEgVGhlcmUncyBkdXN0IG9uIHRoZSBmbG9vciBhZ2Fpbj8hXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldvcmtvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHeW0gYnJvXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMixcbiAgfSxcbl07XG5cbmNvbnN0IHRhc2sxID0gVGFzayh0YXNrc1swXS50aXRsZSwgdGFza3NbMF0uZGVzY3JpcHRpb24sIHRhc2tzWzBdLmR1ZURhdGUsIHRhc2tzWzBdLnByaW9yaXR5KTtcbmNvbnN0IHRhc2syID0gVGFzayh0YXNrc1sxXS50aXRsZSwgdGFza3NbMV0uZGVzY3JpcHRpb24sIHRhc2tzWzFdLmR1ZURhdGUsIHRhc2tzWzFdLnByaW9yaXR5KTtcbmNvbnN0IHRhc2szID0gVGFzayh0YXNrc1syXS50aXRsZSwgdGFza3NbMl0uZGVzY3JpcHRpb24sIHRhc2tzWzJdLmR1ZURhdGUsIHRhc2tzWzJdLnByaW9yaXR5KTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KFwiRGVmYXVsdFwiLCBcIlVuYXNzaWduZWQgdGFzayB3aWxsIGJlIHBsYWNlZCBoZXJlLlwiKTtcbmNvbnN0IHdvcmtvdXRQcm9qZWN0ID0gUHJvamVjdChcIldvcmtvdXRcIiwgXCJHb3R0YSBiZSBzdHJvbmchXCIpO1xuY29uc3Qgc3R1ZHlQcm9qZWN0ID0gUHJvamVjdChcIlN0dWR5XCIsIFwiR290dGEgYmUgc21hcnQhXCIpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMyk7XG5cbmNvbnN0IHRvZG9saXN0ID0gVG9kb2xpc3QoZGVmYXVsdFByb2plY3QpO1xuXG50b2RvbGlzdC5hZGRQcm9qZWN0KHdvcmtvdXRQcm9qZWN0KTtcbnRvZG9saXN0LmFkZFByb2plY3Qoc3R1ZHlQcm9qZWN0KTtcblxudG9kb2xpc3QucmVtb3ZlUHJvamVjdChzdHVkeVByb2plY3QpO1xuXG50b2RvbGlzdC5sb2coKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=