/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{const { app, BrowserWindow } = __webpack_require__(/*! electron */ \"electron\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\n\r\nconst isDev = \"development\" === \"development\";\r\n\r\nfunction createWindow() {\r\n  const mainWindow = new BrowserWindow({\r\n    width: 1200,\r\n    height: 800,\r\n    webPreferences: {\r\n      nodeIntegration: true,\r\n      contextIsolation: false,\r\n      enableRemoteModule: true,\r\n    },\r\n  });\r\n\r\n  if (isDev) {\r\n    // Development: загружаем из webpack dev server\r\n    mainWindow.loadURL(\"http://localhost:3000\");\r\n    mainWindow.webContents.openDevTools();\r\n  } else {\r\n    // Production: загружаем собранные файлы\r\n    mainWindow.loadFile(path.join(__dirname, \"index.html\"));\r\n  }\r\n}\r\n\r\napp.whenReady().then(createWindow);\r\n\r\napp.on(\"window-all-closed\", () => {\r\n  if (process.platform !== \"darwin\") {\r\n    app.quit();\r\n  }\r\n});\r\n\r\napp.on(\"activate\", () => {\r\n  if (BrowserWindow.getAllWindows().length === 0) {\r\n    createWindow();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://react-vtb/./src/main/main.js?\n}");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/main.js");
/******/ 	
/******/ })()
;