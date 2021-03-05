module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/films/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/backend-utils.js":
/*!**********************************!*\
  !*** ./src/lib/backend-utils.js ***!
  \**********************************/
/*! exports provided: films */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"films\", function() { return films; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst films = new Map();\n\nfunction initialize() {\n  const dataDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data');\n  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(dataDirectory, 'films.json');\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8');\n  const data = JSON.parse(fileContents);\n  data.forEach(film => {\n    films.set(film.id, film);\n  });\n}\n\ninitialize();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JhY2tlbmQtdXRpbHMuanM/YjA0MiJdLCJuYW1lcyI6WyJmaWxtcyIsIk1hcCIsImluaXRpYWxpemUiLCJkYXRhRGlyZWN0b3J5IiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZnVsbFBhdGgiLCJmaWxlQ29udGVudHMiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJmb3JFYWNoIiwiZmlsbSIsInNldCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFBZDs7QUFFUCxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQU1DLGFBQWEsR0FBR0MsMkNBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixDQUF0QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osMkNBQUksQ0FBQ0MsSUFBTCxDQUFVRixhQUFWLEVBQXlCLFlBQXpCLENBQWpCO0FBQ0EsUUFBTU0sWUFBWSxHQUFHQyx5Q0FBRSxDQUFDQyxZQUFILENBQWdCSCxRQUFoQixFQUEwQixNQUExQixDQUFyQjtBQUNBLFFBQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFlBQVgsQ0FBYjtBQUNBRyxNQUFJLENBQUNHLE9BQUwsQ0FBY0MsSUFBRCxJQUFVO0FBQ3JCaEIsU0FBSyxDQUFDaUIsR0FBTixDQUFVRCxJQUFJLENBQUNFLEVBQWYsRUFBbUJGLElBQW5CO0FBQ0QsR0FGRDtBQUdEOztBQUVEZCxVQUFVIiwiZmlsZSI6Ii4vc3JjL2xpYi9iYWNrZW5kLXV0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgZmlsbXMgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIGNvbnN0IGRhdGFEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnKTtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oZGF0YURpcmVjdG9yeSwgJ2ZpbG1zLmpzb24nKVxuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4Jyk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVDb250ZW50cyk7XG4gIGRhdGEuZm9yRWFjaCgoZmlsbSkgPT4ge1xuICAgIGZpbG1zLnNldChmaWxtLmlkLCBmaWxtKTtcbiAgfSk7XG59XG5cbmluaXRpYWxpemUoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/backend-utils.js\n");

/***/ }),

/***/ "./src/pages/api/films/index.js":
/*!**************************************!*\
  !*** ./src/pages/api/films/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_backend_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/backend-utils */ \"./src/lib/backend-utils.js\");\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  res.status(200).json(Array.from(_lib_backend_utils__WEBPACK_IMPORTED_MODULE_1__[\"films\"].values()));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2ZpbG1zL2luZGV4LmpzPzRjZjMiXSwibmFtZXMiOlsiaGFuZGxlciIsIm5jIiwiZ2V0IiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIkFycmF5IiwiZnJvbSIsImZpbG1zIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFFLEdBQUdDLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNyQ0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyx3REFBSyxDQUFDQyxNQUFOLEVBQVgsQ0FBckI7QUFDRCxDQUZlLENBQWhCO0FBSWVWLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9maWxtcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IHsgZmlsbXMgfSBmcm9tICcuLi8uLi8uLi9saWIvYmFja2VuZC11dGlscyc7XG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpLmdldCgocmVxLCByZXMpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oQXJyYXkuZnJvbShmaWxtcy52YWx1ZXMoKSkpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/films/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });