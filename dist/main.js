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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
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

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);

const todolist = (function(defaultProject) {
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
})(defaultProject);

const workoutProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Workout", "Gotta be strong!");
const studyProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Study", "Gotta be smart!");

todolist.addProject(workoutProject);
todolist.addProject(studyProject);

todolist.removeProject(studyProject);

todolist.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDOztBQUVuQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUM7O0FBRW5COztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0M7QUFDTjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxjQUFjLDJDQUFJO0FBQ2xCLGNBQWMsMkNBQUk7QUFDbEIsY0FBYywyQ0FBSTs7QUFFbEIsdUJBQXVCLGlEQUFPOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdUJBQXVCLGlEQUFPO0FBQzlCLHFCQUFxQixpREFBTzs7QUFFNUI7QUFDQTs7QUFFQTs7QUFFQSxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgbG9nVGFzaywgbG9nTWVzc2FnZSwgbG9nUHJvamVjdCB9O1xuXG5mdW5jdGlvbiBsb2dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ1Rhc2sodGFzaykge1xuICBjb25zb2xlLnRhYmxlKHRhc2spO1xufVxuXG5mdW5jdGlvbiBsb2dQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdC50aXRsZSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QuZGVzY3JpcHRpb24pO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LmlzQ29tcGxldGVkKTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5sb2coKSk7XG59IiwiaW1wb3J0IHsgbG9nUHJvamVjdCB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICBwcm9qZWN0LmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICBpZiAodGFza0luZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2coKSB7XG4gICAgbG9nUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGUsXG4gICAgY29tcGxldGUsXG4gICAgcmVtb3ZlVGFzayxcbiAgICBsb2csXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGlzQ29tcGxldGVkLFxuICAgIHRhc2tzLFxuICB9XG59IiwiaW1wb3J0IHsgbG9nVGFzayB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgeyBUYXNrIH07XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuICBmdW5jdGlvbiB1cGRhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHRhc2suaXNDb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nKCkge1xuICAgIGxvZ1Rhc2sodGFzayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBjb21wbGV0ZSxcbiAgICBsb2csXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGlzQ29tcGxldGVkLFxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICBmb3IgdGhpcyBwcm9ncmFtIHdlJ2xsIGJlIGFibGUgdG9cbiAgLSBhZGQgdGFzayA9XG4gIC0gZGlzcGxheSB0YXNrID1cbiAgLSBlZGl0IHRhc2sgPVxuICAtIGNvbXBsZXRlIHRhc2sgPVxuICAtIHJlbW92ZSB0YXNrID1cbiAgLVxuICAtIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCA9XG4gIC0gY3JlYXRlIG5ldyBwcm9qZWN0ID1cbiAgLSBkaXNwbGF5IHByb2plY3QgPVxuICAtIG1vdmUgdGFzayB0byBwcm9qZWN0ID1cbiAgLSBlZGl0IHByb2plY3RcbiAgLSBjb21wbGV0ZSBwcm9qZWN0XG4gIC0gcmVtb3ZlIHByb2plY3RcbiAgLVxuICAtIGxvZyBhbGwgdGFza3MgYW5kIHByb2plY3RzXG4qL1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJMZWFybiBjb2RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2RpbmcgaXMgaW1wb3J0YW50IVwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEbyBob3VzZXdvcmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0PyEgVGhlcmUncyBkdXN0IG9uIHRoZSBmbG9vciBhZ2Fpbj8hXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldvcmtvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHeW0gYnJvXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMixcbiAgfSxcbl07XG5cbmNvbnN0IHRhc2sxID0gVGFzayh0YXNrc1swXS50aXRsZSwgdGFza3NbMF0uZGVzY3JpcHRpb24sIHRhc2tzWzBdLmR1ZURhdGUsIHRhc2tzWzBdLnByaW9yaXR5KTtcbmNvbnN0IHRhc2syID0gVGFzayh0YXNrc1sxXS50aXRsZSwgdGFza3NbMV0uZGVzY3JpcHRpb24sIHRhc2tzWzFdLmR1ZURhdGUsIHRhc2tzWzFdLnByaW9yaXR5KTtcbmNvbnN0IHRhc2szID0gVGFzayh0YXNrc1syXS50aXRsZSwgdGFza3NbMl0uZGVzY3JpcHRpb24sIHRhc2tzWzJdLmR1ZURhdGUsIHRhc2tzWzJdLnByaW9yaXR5KTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KFwiRGVmYXVsdFwiLCBcIlVuYXNzaWduZWQgdGFzayB3aWxsIGJlIHBsYWNlZCBoZXJlLlwiKTtcblxuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMSk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2syKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazMpO1xuXG5jb25zdCB0b2RvbGlzdCA9IChmdW5jdGlvbihkZWZhdWx0UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgaWYgKHByb2plY3RJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5sb2coKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBsb2csXG4gIH1cbn0pKGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc3Qgd29ya291dFByb2plY3QgPSBQcm9qZWN0KFwiV29ya291dFwiLCBcIkdvdHRhIGJlIHN0cm9uZyFcIik7XG5jb25zdCBzdHVkeVByb2plY3QgPSBQcm9qZWN0KFwiU3R1ZHlcIiwgXCJHb3R0YSBiZSBzbWFydCFcIik7XG5cbnRvZG9saXN0LmFkZFByb2plY3Qod29ya291dFByb2plY3QpO1xudG9kb2xpc3QuYWRkUHJvamVjdChzdHVkeVByb2plY3QpO1xuXG50b2RvbGlzdC5yZW1vdmVQcm9qZWN0KHN0dWR5UHJvamVjdCk7XG5cbnRvZG9saXN0LmxvZygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==