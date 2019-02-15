/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ \"@material-ui/core/ExpansionPanel\");\n/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ \"@material-ui/core/ExpansionPanelSummary\");\n/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ \"@material-ui/core/ExpansionPanelDetails\");\n/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\nvar ExpansionPanelBlock =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ExpansionPanelBlock, _Component);\n\n  function ExpansionPanelBlock() {\n    var _this;\n\n    _classCallCheck(this, ExpansionPanelBlock);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpansionPanelBlock).call(this));\n    _this.state = {\n      title: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(ExpansionPanelBlock, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        root: {\n          width: '100%'\n        },\n        heading: {\n          fontSize: 15,\n          fontWeight: 'normal'\n        }\n      };\n      var expansionPanelSettings = {};\n      var pdbConfig = drupalSettings.pdb.configuration;\n\n      if (pdbConfig !== undefined) {\n        for (var configId in pdbConfig) {\n          console.log(configId);\n\n          if (pdbConfig[configId].panel_details_1 !== undefined) {\n            expansionPanelSettings = pdbConfig[configId];\n          }\n        }\n      }\n\n      if (expansionPanelSettings.length <= 0) {\n        return false;\n      }\n\n      return React.createElement(\"div\", {\n        style: styles.root\n      }, React.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, null, React.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        expandIcon: React.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, null, \"expand_more\")\n      }, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        style: styles.heading\n      }, expansionPanelSettings.panel_summary_1)), React.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, null, expansionPanelSettings.panel_details_1))), React.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, null, React.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        expandIcon: React.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, null, \"expand_more\")\n      }, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        style: styles.heading\n      }, expansionPanelSettings.panel_summary_2)), React.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, null, expansionPanelSettings.panel_details_2))), React.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, null, React.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        expandIcon: React.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, null, \"expand_more\")\n      }, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        style: styles.heading\n      }, expansionPanelSettings.panel_summary_3)), React.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default.a, null, React.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, null, expansionPanelSettings.panel_details_3))));\n    }\n  }]);\n\n  return ExpansionPanelBlock;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpansionPanelBlock);\nvar wrapper = document.getElementById(\"expansion-panel\");\nwrapper ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(React.createElement(ExpansionPanelBlock, null), wrapper) : false;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!*********************************************************!*\
  !*** external "window[\"material-ui\"].ExpansionPanel" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].ExpansionPanel;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.ExpansionPanel%22?");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!****************************************************************!*\
  !*** external "window[\"material-ui\"].ExpansionPanelDetails" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].ExpansionPanelDetails;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.ExpansionPanelDetails%22?");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!****************************************************************!*\
  !*** external "window[\"material-ui\"].ExpansionPanelSummary" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].ExpansionPanelSummary;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.ExpansionPanelSummary%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!***********************************************!*\
  !*** external "window[\"material-ui\"].Icon" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].Icon;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.Icon%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!*****************************************************!*\
  !*** external "window[\"material-ui\"].Typography" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].Typography;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*************************************************!*\
  !*** external "window[\"material-ui\"].styles" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window[\"material-ui\"].styles;\n\n//# sourceURL=webpack:///external_%22window%5B\\%22material-ui\\%22%5D.styles%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });