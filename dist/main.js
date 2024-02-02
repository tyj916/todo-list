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

const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[0].title, tasks[0].description, tasks[0].dueDate, tasks[0].priority);
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[1].title, tasks[1].description, tasks[1].dueDate, tasks[1].priority);
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);

const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)("Default", "Unassigned task will be placed here.");
const workout = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)("Workout", "My workout project!");

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
workout.addTask(task1);
workout.addTask(task2);
workout.addTask(task3);

task2.update(tasks[2].title, tasks[2].description, tasks[2].dueDate, tasks[2].priority);
task2.complete();
workout.removeTask(0);
workout.update("Project Z", "Defined");
workout.complete();
workout.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDOztBQUVuQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NtQzs7QUFFbkI7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDdkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQztBQUNYO0FBQ047O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGNBQWMsMkNBQUk7QUFDbEIsY0FBYywyQ0FBSTtBQUNsQixjQUFjLDJDQUFJOztBQUVsQix1QkFBdUIsaURBQU87QUFDOUIsZ0JBQWdCLGlEQUFPOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9nZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBsb2dUYXNrLCBsb2dNZXNzYWdlLCBsb2dQcm9qZWN0IH07XG5cbmZ1bmN0aW9uIGxvZ01lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbG9nVGFzayh0YXNrKSB7XG4gIGNvbnNvbGUudGFibGUodGFzayk7XG59XG5cbmZ1bmN0aW9uIGxvZ1Byb2plY3QocHJvamVjdCkge1xuICBjb25zb2xlLmxvZyhwcm9qZWN0LnRpdGxlKTtcbiAgY29uc29sZS5sb2cocHJvamVjdC5kZXNjcmlwdGlvbik7XG4gIGNvbnNvbGUubG9nKHByb2plY3QuaXNDb21wbGV0ZWQpO1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrLmxvZygpKTtcbn0iLCJpbXBvcnQgeyBsb2dQcm9qZWN0IH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHByb2plY3QuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nKCkge1xuICAgIGxvZ1Byb2plY3QocHJvamVjdCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2ssXG4gICAgdXBkYXRlLFxuICAgIGNvbXBsZXRlLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgbG9nLFxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpc0NvbXBsZXRlZCxcbiAgICB0YXNrcyxcbiAgfVxufSIsImltcG9ydCB7IGxvZ1Rhc2sgfSBmcm9tIFwiLi9sb2dnZXJcIjtcblxuZXhwb3J0IHsgVGFzayB9O1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB0YXNrLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICBsb2dUYXNrKHRhc2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgY29tcGxldGUsXG4gICAgbG9nLFxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBpc0NvbXBsZXRlZCxcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAgZm9yIHRoaXMgcHJvZ3JhbSB3ZSdsbCBiZSBhYmxlIHRvXG4gIC0gYWRkIHRhc2sgPVxuICAtIGRpc3BsYXkgdGFzayA9XG4gIC0gZWRpdCB0YXNrID1cbiAgLSBjb21wbGV0ZSB0YXNrID1cbiAgLSByZW1vdmUgdGFzayA9XG4gIC1cbiAgLSBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgPVxuICAtIGNyZWF0ZSBuZXcgcHJvamVjdCA9XG4gIC0gZGlzcGxheSBwcm9qZWN0ID1cbiAgLSBtb3ZlIHRhc2sgdG8gcHJvamVjdCA9XG4gIC0gZWRpdCBwcm9qZWN0XG4gIC0gY29tcGxldGUgcHJvamVjdFxuICAtIHJlbW92ZSBwcm9qZWN0XG4gIC1cbiAgLSBsb2cgYWxsIHRhc2tzIGFuZCBwcm9qZWN0c1xuKi9cbmltcG9ydCB7IGxvZ1Rhc2ssIGxvZ1Byb2plY3QgfSBmcm9tIFwiLi9sb2dnZXJcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCB0YXNrcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlRhc2sgMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhc2sgMSBuZWVkcyB0byBiZSBkb25lIHRvZGF5XCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMSxcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0PyEgVGhlcmUgaXMgYSB0YXNrIDI/XCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMSxcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXb3Jrb3V0IGJyb1wiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG4gICAgcHJpb3JpdHk6IDIsXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVXBkYXRlIFRhc2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGRhdGVkXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcbiAgICBwcmlvcml0eTogMyxcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG5dO1xuXG5jb25zdCB0YXNrMSA9IFRhc2sodGFza3NbMF0udGl0bGUsIHRhc2tzWzBdLmRlc2NyaXB0aW9uLCB0YXNrc1swXS5kdWVEYXRlLCB0YXNrc1swXS5wcmlvcml0eSk7XG5jb25zdCB0YXNrMiA9IFRhc2sodGFza3NbMV0udGl0bGUsIHRhc2tzWzFdLmRlc2NyaXB0aW9uLCB0YXNrc1sxXS5kdWVEYXRlLCB0YXNrc1sxXS5wcmlvcml0eSk7XG5jb25zdCB0YXNrMyA9IFRhc2sodGFza3NbMl0udGl0bGUsIHRhc2tzWzJdLmRlc2NyaXB0aW9uLCB0YXNrc1syXS5kdWVEYXRlLCB0YXNrc1syXS5wcmlvcml0eSk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdChcIkRlZmF1bHRcIiwgXCJVbmFzc2lnbmVkIHRhc2sgd2lsbCBiZSBwbGFjZWQgaGVyZS5cIik7XG5jb25zdCB3b3Jrb3V0ID0gUHJvamVjdChcIldvcmtvdXRcIiwgXCJNeSB3b3Jrb3V0IHByb2plY3QhXCIpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrMyk7XG53b3Jrb3V0LmFkZFRhc2sodGFzazEpO1xud29ya291dC5hZGRUYXNrKHRhc2syKTtcbndvcmtvdXQuYWRkVGFzayh0YXNrMyk7XG5cbnRhc2syLnVwZGF0ZSh0YXNrc1syXS50aXRsZSwgdGFza3NbMl0uZGVzY3JpcHRpb24sIHRhc2tzWzJdLmR1ZURhdGUsIHRhc2tzWzJdLnByaW9yaXR5KTtcbnRhc2syLmNvbXBsZXRlKCk7XG53b3Jrb3V0LnJlbW92ZVRhc2soMCk7XG53b3Jrb3V0LnVwZGF0ZShcIlByb2plY3QgWlwiLCBcIkRlZmluZWRcIik7XG53b3Jrb3V0LmNvbXBsZXRlKCk7XG53b3Jrb3V0LmxvZygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==