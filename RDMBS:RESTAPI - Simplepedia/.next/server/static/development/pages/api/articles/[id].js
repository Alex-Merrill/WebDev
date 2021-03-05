module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  development: {\n    client: 'sqlite3',\n    connection: {\n      filename: './simplepedia.sqlite3'\n    },\n    useNullAsDefault: true\n  },\n  test: {\n    client: 'sqlite3',\n    connection: {\n      filename: './simplepedia-test.sqlite3'\n    },\n    useNullAsDefault: true,\n    seeds: {\n      directory: './seeds/test'\n    }\n  },\n  production: {\n    client: 'pg',\n    connection: process.env.DATABASE_URL,\n    ssl: true\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9rbmV4ZmlsZS5qcz9iMGUxIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsImNsaWVudCIsImNvbm5lY3Rpb24iLCJmaWxlbmFtZSIsInVzZU51bGxBc0RlZmF1bHQiLCJ0ZXN0Iiwic2VlZHMiLCJkaXJlY3RvcnkiLCJwcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsInNzbCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFLFNBREc7QUFFWEMsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRTtBQURBLEtBRkQ7QUFLWEMsb0JBQWdCLEVBQUU7QUFMUCxHQURFO0FBU2ZDLE1BQUksRUFBRTtBQUNKSixVQUFNLEVBQUUsU0FESjtBQUVKQyxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFO0FBREEsS0FGUjtBQUtKQyxvQkFBZ0IsRUFBRSxJQUxkO0FBTUpFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETjtBQU5ILEdBVFM7QUFvQmZDLFlBQVUsRUFBRTtBQUNWUCxVQUFNLEVBQUUsSUFERTtBQUVWQyxjQUFVLEVBQUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUZkO0FBR1ZDLE9BQUcsRUFBRTtBQUhLO0FBcEJHLENBQWpCIiwiZmlsZSI6Ii4va25leGZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGV2ZWxvcG1lbnQ6IHtcbiAgICBjbGllbnQ6ICdzcWxpdGUzJyxcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBmaWxlbmFtZTogJy4vc2ltcGxlcGVkaWEuc3FsaXRlMycsXG4gICAgfSxcbiAgICB1c2VOdWxsQXNEZWZhdWx0OiB0cnVlLFxuICB9LFxuXG4gIHRlc3Q6IHtcbiAgICBjbGllbnQ6ICdzcWxpdGUzJyxcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBmaWxlbmFtZTogJy4vc2ltcGxlcGVkaWEtdGVzdC5zcWxpdGUzJyxcbiAgICB9LFxuICAgIHVzZU51bGxBc0RlZmF1bHQ6IHRydWUsXG4gICAgc2VlZHM6IHtcbiAgICAgIGRpcmVjdG9yeTogJy4vc2VlZHMvdGVzdCcsXG4gICAgfSxcbiAgfSxcblxuICBwcm9kdWN0aW9uOiB7XG4gICAgY2xpZW50OiAncGcnLFxuICAgIGNvbm5lY3Rpb246IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICBzc2w6IHRydWUsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./knexfile.js\n");

/***/ }),

/***/ "./models/Article.js":
/*!***************************!*\
  !*** ./models/Article.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  Model\n} = __webpack_require__(/*! objection */ \"objection\");\n\nclass Article extends Model {\n  // Table name is the only required property.\n  static get tableName() {\n    return 'Article';\n  } // Objection.js assumes primary key is `id` by default\n\n\n  static get jsonSchema() {\n    return {\n      type: 'object',\n      required: ['title'],\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        title: {\n          type: 'string'\n        },\n        extract: {\n          type: 'text',\n          default: ''\n        },\n        edited: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    };\n  }\n\n}\n\nmodule.exports = Article;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvQXJ0aWNsZS5qcz8yYjAxIl0sIm5hbWVzIjpbIk1vZGVsIiwicmVxdWlyZSIsIkFydGljbGUiLCJ0YWJsZU5hbWUiLCJqc29uU2NoZW1hIiwidHlwZSIsInJlcXVpcmVkIiwicHJvcGVydGllcyIsImlkIiwidGl0bGUiLCJleHRyYWN0IiwiZGVmYXVsdCIsImVkaXRlZCIsImZvcm1hdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFZQyxtQkFBTyxDQUFDLDRCQUFELENBQXpCOztBQUVBLE1BQU1DLE9BQU4sU0FBc0JGLEtBQXRCLENBQTRCO0FBQzFCO0FBQ0EsYUFBV0csU0FBWCxHQUF1QjtBQUNyQixXQUFPLFNBQVA7QUFDRCxHQUp5QixDQU0xQjs7O0FBRUEsYUFBV0MsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0xDLFVBQUksRUFBRSxRQUREO0FBRUxDLGNBQVEsRUFBRSxDQUFDLE9BQUQsQ0FGTDtBQUlMQyxnQkFBVSxFQUFFO0FBQ1ZDLFVBQUUsRUFBRTtBQUFFSCxjQUFJLEVBQUU7QUFBUixTQURNO0FBRVZJLGFBQUssRUFBRTtBQUFFSixjQUFJLEVBQUU7QUFBUixTQUZHO0FBR1ZLLGVBQU8sRUFBRTtBQUFFTCxjQUFJLEVBQUUsTUFBUjtBQUFnQk0saUJBQU8sRUFBRTtBQUF6QixTQUhDO0FBSVZDLGNBQU0sRUFBRTtBQUFFUCxjQUFJLEVBQUUsUUFBUjtBQUFrQlEsZ0JBQU0sRUFBRTtBQUExQjtBQUpFO0FBSlAsS0FBUDtBQVdEOztBQXBCeUI7O0FBdUI1QkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiIuL21vZGVscy9BcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb2RlbCB9ID0gcmVxdWlyZSgnb2JqZWN0aW9uJyk7XG5cbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBNb2RlbCB7XG4gIC8vIFRhYmxlIG5hbWUgaXMgdGhlIG9ubHkgcmVxdWlyZWQgcHJvcGVydHkuXG4gIHN0YXRpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiAnQXJ0aWNsZSc7XG4gIH1cblxuICAvLyBPYmplY3Rpb24uanMgYXNzdW1lcyBwcmltYXJ5IGtleSBpcyBgaWRgIGJ5IGRlZmF1bHRcblxuICBzdGF0aWMgZ2V0IGpzb25TY2hlbWEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcmVxdWlyZWQ6IFsndGl0bGUnXSxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgdGl0bGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgZXh0cmFjdDogeyB0eXBlOiAndGV4dCcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICAgIGVkaXRlZDogeyB0eXBlOiAnc3RyaW5nJywgZm9ybWF0OiAnZGF0ZS10aW1lJ30sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/Article.js\n");

/***/ }),

/***/ "./src/lib/backend-utils.js":
/*!**********************************!*\
  !*** ./src/lib/backend-utils.js ***!
  \**********************************/
/*! exports provided: knex, getArticles, deleteArticle, updateArticle, addArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knex\", function() { return knex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getArticles\", function() { return getArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteArticle\", function() { return deleteArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateArticle\", function() { return updateArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addArticle\", function() { return addArticle; });\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../knexfile */ \"./knexfile.js\");\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(objection__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Article */ \"./models/Article.js\");\n/* harmony import */ var _models_Article__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Article__WEBPACK_IMPORTED_MODULE_3__);\n/*\n\n  backend-utils.js\n\n  This is a collection of utility functions to be called on the server backend. These functions\n  interact directly with the database.\n\n  available functions:\n\n  getArticles - reads all of the articles out of the DB and returns them sorted by title\n  deleteArticle(id) - delete the article associated with the given id\n  updateArticle(article) - update the data store with changes in `article`\n  addArticle(article) - add the new `article` to the data store \n*/\n\n\nconst knex = knex__WEBPACK_IMPORTED_MODULE_1___default()(_knexfile__WEBPACK_IMPORTED_MODULE_0___default.a[process.env.TESTING || \"development\" || 'development']);\n\n\nobjection__WEBPACK_IMPORTED_MODULE_2__[\"Model\"].knex(knex);\n/**\n * Find all articles and sort them by title\n *\n * returns list of articles sorted by title\n */\n\nasync function getArticles() {\n  const articles = await _models_Article__WEBPACK_IMPORTED_MODULE_3___default.a.query();\n  return articles;\n}\n/**\n * Remove the article associated with the provided id from the data storage\n *\n * @param {number} id\n * returns the number of articles deleted\n */\n\nasync function deleteArticle(id) {\n  const numDeleted = await _models_Article__WEBPACK_IMPORTED_MODULE_3___default.a.query().deleteById(id);\n  return numDeleted;\n}\n/**\n * Update the data store with the provided article object\n *\n * @param {object} article\n * returns the number of articles updated\n */\n\nasync function updateArticle(article) {\n  const numUpdated = await _models_Article__WEBPACK_IMPORTED_MODULE_3___default.a.query().patch(article).where('id', article.id);\n  return numUpdated;\n}\n/**\n * Add a new article to the data store\n *\n * @param {number} article\n * returns the article with a new id attached\n */\n\nasync function addArticle(article) {\n  const newArticle = await _models_Article__WEBPACK_IMPORTED_MODULE_3___default.a.query().insertAndFetch(article);\n  return newArticle;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2JhY2tlbmQtdXRpbHMuanM/YjA0MiJdLCJuYW1lcyI6WyJrbmV4Iiwia25leEluaXRpYWxpemVyIiwia25leENvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJURVNUSU5HIiwiTW9kZWwiLCJnZXRBcnRpY2xlcyIsImFydGljbGVzIiwiQXJ0aWNsZSIsInF1ZXJ5IiwiZGVsZXRlQXJ0aWNsZSIsImlkIiwibnVtRGVsZXRlZCIsImRlbGV0ZUJ5SWQiLCJ1cGRhdGVBcnRpY2xlIiwiYXJ0aWNsZSIsIm51bVVwZGF0ZWQiLCJwYXRjaCIsIndoZXJlIiwiYWRkQXJ0aWNsZSIsIm5ld0FydGljbGUiLCJpbnNlcnRBbmRGZXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ08sTUFBTUEsSUFBSSxHQUFHQywyQ0FBZSxDQUNqQ0MsZ0RBQVUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVoscUJBQStDLGFBQWhELENBRHVCLENBQTVCO0FBSVA7QUFDQTtBQUNBQywrQ0FBSyxDQUFDTixJQUFOLENBQVdBLElBQVg7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLGVBQWVPLFdBQWYsR0FBNkI7QUFDbEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLHNEQUFPLENBQUNDLEtBQVIsRUFBdkI7QUFDQSxTQUFPRixRQUFQO0FBQ0Q7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sZUFBZUcsYUFBZixDQUE2QkMsRUFBN0IsRUFBaUM7QUFDdEMsUUFBTUMsVUFBVSxHQUFHLE1BQU1KLHNEQUFPLENBQUNDLEtBQVIsR0FDdEJJLFVBRHNCLENBQ1hGLEVBRFcsQ0FBekI7QUFFQSxTQUFPQyxVQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sZUFBZUUsYUFBZixDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsUUFBTUMsVUFBVSxHQUFHLE1BQU1SLHNEQUFPLENBQUNDLEtBQVIsR0FDdEJRLEtBRHNCLENBQ2hCRixPQURnQixFQUV0QkcsS0FGc0IsQ0FFaEIsSUFGZ0IsRUFFVkgsT0FBTyxDQUFDSixFQUZFLENBQXpCO0FBR0UsU0FBT0ssVUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLGVBQWVHLFVBQWYsQ0FBMEJKLE9BQTFCLEVBQW1DO0FBQ3hDLFFBQU1LLFVBQVUsR0FBRyxNQUFNWixzREFBTyxDQUFDQyxLQUFSLEdBQ3RCWSxjQURzQixDQUNQTixPQURPLENBQXpCO0FBRUEsU0FBT0ssVUFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2xpYi9iYWNrZW5kLXV0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuICBiYWNrZW5kLXV0aWxzLmpzXG5cbiAgVGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdXRpbGl0eSBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIgYmFja2VuZC4gVGhlc2UgZnVuY3Rpb25zXG4gIGludGVyYWN0IGRpcmVjdGx5IHdpdGggdGhlIGRhdGFiYXNlLlxuXG4gIGF2YWlsYWJsZSBmdW5jdGlvbnM6XG5cbiAgZ2V0QXJ0aWNsZXMgLSByZWFkcyBhbGwgb2YgdGhlIGFydGljbGVzIG91dCBvZiB0aGUgREIgYW5kIHJldHVybnMgdGhlbSBzb3J0ZWQgYnkgdGl0bGVcbiAgZGVsZXRlQXJ0aWNsZShpZCkgLSBkZWxldGUgdGhlIGFydGljbGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBpZFxuICB1cGRhdGVBcnRpY2xlKGFydGljbGUpIC0gdXBkYXRlIHRoZSBkYXRhIHN0b3JlIHdpdGggY2hhbmdlcyBpbiBgYXJ0aWNsZWBcbiAgYWRkQXJ0aWNsZShhcnRpY2xlKSAtIGFkZCB0aGUgbmV3IGBhcnRpY2xlYCB0byB0aGUgZGF0YSBzdG9yZSBcbiovXG5cbmltcG9ydCBrbmV4Q29uZmlnIGZyb20gJy4uLy4uL2tuZXhmaWxlJztcbmltcG9ydCBrbmV4SW5pdGlhbGl6ZXIgZnJvbSAna25leCc7XG5leHBvcnQgY29uc3Qga25leCA9IGtuZXhJbml0aWFsaXplcihcbiAga25leENvbmZpZ1twcm9jZXNzLmVudi5URVNUSU5HIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCddXG4pO1xuXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJ29iamVjdGlvbic7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9tb2RlbHMvQXJ0aWNsZSc7XG5Nb2RlbC5rbmV4KGtuZXgpO1xuXG5cbi8qKlxuICogRmluZCBhbGwgYXJ0aWNsZXMgYW5kIHNvcnQgdGhlbSBieSB0aXRsZVxuICpcbiAqIHJldHVybnMgbGlzdCBvZiBhcnRpY2xlcyBzb3J0ZWQgYnkgdGl0bGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVzKCkge1xuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IEFydGljbGUucXVlcnkoKTtcbiAgcmV0dXJuIGFydGljbGVzO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBhcnRpY2xlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgaWQgZnJvbSB0aGUgZGF0YSBzdG9yYWdlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gKiByZXR1cm5zIHRoZSBudW1iZXIgb2YgYXJ0aWNsZXMgZGVsZXRlZFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShpZCkge1xuICBjb25zdCBudW1EZWxldGVkID0gYXdhaXQgQXJ0aWNsZS5xdWVyeSgpXG4gICAgLmRlbGV0ZUJ5SWQoaWQpO1xuICByZXR1cm4gbnVtRGVsZXRlZDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGRhdGEgc3RvcmUgd2l0aCB0aGUgcHJvdmlkZWQgYXJ0aWNsZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYXJ0aWNsZVxuICogcmV0dXJucyB0aGUgbnVtYmVyIG9mIGFydGljbGVzIHVwZGF0ZWRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFydGljbGUoYXJ0aWNsZSkge1xuICBjb25zdCBudW1VcGRhdGVkID0gYXdhaXQgQXJ0aWNsZS5xdWVyeSgpXG4gICAgLnBhdGNoKGFydGljbGUpXG4gICAgLndoZXJlKCdpZCcsIGFydGljbGUuaWQpO1xuICAgIHJldHVybiBudW1VcGRhdGVkO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBhcnRpY2xlIHRvIHRoZSBkYXRhIHN0b3JlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFydGljbGVcbiAqIHJldHVybnMgdGhlIGFydGljbGUgd2l0aCBhIG5ldyBpZCBhdHRhY2hlZFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQXJ0aWNsZShhcnRpY2xlKSB7XG4gIGNvbnN0IG5ld0FydGljbGUgPSBhd2FpdCBBcnRpY2xlLnF1ZXJ5KClcbiAgICAuaW5zZXJ0QW5kRmV0Y2goYXJ0aWNsZSk7XG4gIHJldHVybiBuZXdBcnRpY2xlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/backend-utils.js\n");

/***/ }),

/***/ "./src/lib/middleware.js":
/*!*******************************!*\
  !*** ./src/lib/middleware.js ***!
  \*******************************/
/*! exports provided: onError, cors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onError\", function() { return onError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cors\", function() { return cors; });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/*\n  middleware.js\n\n  This file contains middleware functions for the API routes.\n\n*/\n\n/**\n *\n * @param {object} error - the error object thrown by the code\n * @param {object} req - the request object associated with the route\n * @param {object} res - the response object associated with the route\n */\n\nfunction onError(error, req, res) {\n  console.error(error);\n  res.status(500).end(error.toString());\n}\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n  methods: ['GET', 'PUT', 'POST', 'DELETE'],\n  origin: '*',\n  allowedHeaders: ['Content-Type']\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL21pZGRsZXdhcmUuanM/YjY5MCJdLCJuYW1lcyI6WyJvbkVycm9yIiwiZXJyb3IiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwic3RhdHVzIiwiZW5kIiwidG9TdHJpbmciLCJjb3JzIiwiQ29ycyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJhbGxvd2VkSGVhZGVycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDdkNDLFNBQU8sQ0FBQ0gsS0FBUixDQUFjQSxLQUFkO0FBQ0FFLEtBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLENBQW9CTCxLQUFLLENBQUNNLFFBQU4sRUFBcEI7QUFDRDtBQUlNLE1BQU1DLElBQUksR0FBR0MsMkNBQUksQ0FBQztBQUNyQkMsU0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLFFBQXZCLENBRFk7QUFFdkJDLFFBQU0sRUFBRSxHQUZlO0FBR3ZCQyxnQkFBYyxFQUFFLENBQUMsY0FBRDtBQUhPLENBQUQsQ0FBakIiLCJmaWxlIjoiLi9zcmMvbGliL21pZGRsZXdhcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBtaWRkbGV3YXJlLmpzXG5cbiAgVGhpcyBmaWxlIGNvbnRhaW5zIG1pZGRsZXdhcmUgZnVuY3Rpb25zIGZvciB0aGUgQVBJIHJvdXRlcy5cblxuKi9cblxuaW1wb3J0IENvcnMgZnJvbSAnY29ycyc7XG5cblxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIC0gdGhlIGVycm9yIG9iamVjdCB0aHJvd24gYnkgdGhlIGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXEgLSB0aGUgcmVxdWVzdCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSByb3V0ZVxuICogQHBhcmFtIHtvYmplY3R9IHJlcyAtIHRoZSByZXNwb25zZSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSByb3V0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25FcnJvcihlcnJvciwgcmVxLCByZXMpIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJlcy5zdGF0dXMoNTAwKS5lbmQoZXJyb3IudG9TdHJpbmcoKSk7XG59XG5cblxuXG5leHBvcnQgY29uc3QgY29ycyA9IENvcnMoe1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BVVCcsICdQT1NUJywgJ0RFTEVURSddLFxuICBvcmlnaW46ICcqJyxcbiAgYWxsb3dlZEhlYWRlcnM6IFsnQ29udGVudC1UeXBlJ11cbiAgfSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/middleware.js\n");

/***/ }),

/***/ "./src/pages/api/articles/[id].js":
/*!****************************************!*\
  !*** ./src/pages/api/articles/[id].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_backend_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/backend-utils */ \"./src/lib/backend-utils.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/middleware */ \"./src/lib/middleware.js\");\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({\n  onError: _lib_middleware__WEBPACK_IMPORTED_MODULE_2__[\"onError\"]\n}).use(_lib_middleware__WEBPACK_IMPORTED_MODULE_2__[\"cors\"]).put(async (req, res) => {\n  const {\n    id\n  } = req.query;\n  const newArticle = req.body;\n  const count = await Object(_lib_backend_utils__WEBPACK_IMPORTED_MODULE_1__[\"updateArticle\"])(newArticle);\n\n  if (count === 0) {\n    res.status(404).end(`Article with id ${id} not found`);\n  } else {\n    res.status(200).end();\n  }\n}).delete(async (req, res) => {\n  const {\n    id\n  } = req.query;\n  const count = await Object(_lib_backend_utils__WEBPACK_IMPORTED_MODULE_1__[\"deleteArticle\"])(id);\n\n  if (count === 0) {\n    res.status(404).end(`Article with id ${id} not found`);\n  } else {\n    res.status(200).end();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2FydGljbGVzLy5qcz83YzI1Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJuYyIsIm9uRXJyb3IiLCJ1c2UiLCJjb3JzIiwicHV0IiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm5ld0FydGljbGUiLCJib2R5IiwiY291bnQiLCJ1cGRhdGVBcnRpY2xlIiwic3RhdHVzIiwiZW5kIiwiZGVsZXRlIiwiZGVsZXRlQXJ0aWNsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQUUsQ0FBQztBQUFFQyxrRUFBT0E7QUFBVCxDQUFELENBQUYsQ0FDZkMsR0FEZSxDQUNYQyxvREFEVyxFQUViQyxHQUZhLENBRVQsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3ZCLFFBQU07QUFBRUM7QUFBRixNQUFTRixHQUFHLENBQUNHLEtBQW5CO0FBQ0EsUUFBTUMsVUFBVSxHQUFHSixHQUFHLENBQUNLLElBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLHdFQUFhLENBQUNILFVBQUQsQ0FBakM7O0FBRUEsTUFBSUUsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZkwsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBcUIsbUJBQWtCUCxFQUFHLFlBQTFDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0Q7QUFDRixDQVphLEVBYWJDLE1BYmEsQ0FhTixPQUFPVixHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDMUIsUUFBTTtBQUFFQztBQUFGLE1BQVNGLEdBQUcsQ0FBQ0csS0FBbkI7QUFDQSxRQUFNRyxLQUFLLEdBQUcsTUFBTUssd0VBQWEsQ0FBQ1QsRUFBRCxDQUFqQzs7QUFDQSxNQUFJSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmTCxPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFxQixtQkFBa0JQLEVBQUcsWUFBMUM7QUFDRCxHQUZELE1BRU87QUFDTEQsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRDtBQUNGLENBckJhLENBQWhCO0FBdUJlZixzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xuXG5pbXBvcnQge1xuICBkZWxldGVBcnRpY2xlLFxuICB1cGRhdGVBcnRpY2xlLFxufSBmcm9tICcuLi8uLi8uLi9saWIvYmFja2VuZC11dGlscyc7XG5pbXBvcnQgeyBvbkVycm9yLCBjb3JzIH0gZnJvbSAnLi4vLi4vLi4vbGliL21pZGRsZXdhcmUnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoeyBvbkVycm9yIH0pXG4udXNlKGNvcnMpXG4gIC5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IG5ld0FydGljbGUgPSByZXEuYm9keTtcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHVwZGF0ZUFydGljbGUobmV3QXJ0aWNsZSk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoYEFydGljbGUgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbiAgfSlcbiAgLmRlbGV0ZShhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBkZWxldGVBcnRpY2xlKGlkKTtcbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoYEFydGljbGUgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/articles/[id].js\n");

/***/ }),

/***/ 6:
/*!**********************************************!*\
  !*** multi ./src/pages/api/articles/[id].js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexmerrill/Desktop/Middlebury/20-21/SWD/Web Dev/RDMBS/src/pages/api/articles/[id].js */"./src/pages/api/articles/[id].js");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrbmV4XCI/NjY3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrbmV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///knex\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ }),

/***/ "objection":
/*!****************************!*\
  !*** external "objection" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"objection\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3Rpb25cIj9hYTM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im9iamVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///objection\n");

/***/ })

/******/ });