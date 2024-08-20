/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Root Variables */\n*:focus {\n    outline: none;\n}\n\n:root {\n    --blue: #1c5279;\n    --light-blue: #229abe;\n    --dark-blue: #0f2b41;\n    --white: #ffffff;\n    --transparent-white: rgba(255, 255, 255, 0.5);\n    --warning-green: #7eb356;\n    --warning-yellow: #f9c74f;\n    --warning-orange: #ed8607;\n    --warning-red: #f94144;\n    --muted-text: #555;\n}\n\n/* Dark mode variables */\nbody.dark-mode {\n    --blue: #0e2d44;\n    --light-blue: #09223b;\n    --dark-blue: #081729;\n    --white: #e0e0e0;\n    --transparent-white: rgba(255, 255, 255, 0.9);\n    --warning-green: #7eb356;\n    --warning-yellow: #f9c74f;\n    --warning-orange: #ed8607;\n    --warning-red: #f94144;\n    --muted-text: #9d9d9d;\n}\n\n/* Apply transitions to elements that will change */\nbody,\n.search-input,\n.search-submit,\n.info,\n.day,\n.weather-detail,\n.footer {\n    transition: background-color 0.5s ease, color 0.5s ease;\n}\n\n\n/* Base Styles */\nbody,\np,\nh1,\nh2,\nh3 {\n    margin: 0;\n}\n\nbody {\n    font-family: 'Nunito', sans-serif;\n    font-weight: 700;\n    font-size: 16px;\n    color: var(--white);\n    background-color: var(--blue);\n    background: linear-gradient(to bottom, var(--light-blue), var(--blue));\n}\n\n/* Wrapper Grid Layout */\n.wrapper {\n    display: flex;\n    min-height: 100vh;\n    align-items: center;\n    flex-direction: column;\n}\n\n/* Top Navigation Bar */\n.top-nav {\n    width: 95%;\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    padding: 10px 20px;\n    position: relative;\n}\n\n.logo {\n    justify-self: start;\n    font-size: 26px;\n}\n\n.search {\n\n    display: flex;\n    justify-content: center;\n}\n\n.settings {\n    justify-self: end;\n}\n\n#toggle-dark-mode {\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    width: 128px;\n    padding: 10px 16px;\n    border-radius: 10px;\n    border: 2px solid var(--dark-blue);\n    border-right: none;\n    background-color: var(--dark-blue);\n    color: var(--white);\n    font-size: 18px;\n}\n\n.search-input {\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    width: 256px;\n    padding: 10px 16px;\n    border-radius: 20px 0 0 20px;\n    border: 2px solid var(--dark-blue);\n    border-right: none;\n    /* Remove right border-radius */\n    background-color: var(--dark-blue);\n    color: var(--white);\n    font-size: 24px;\n}\n\n.search-input:focus+.search-submit {\n    border: 2px solid var(--white);\n    border-left: none;\n    /* Maintain no left border on focus */\n    transition: border 0.3s;\n}\n\n.search-input:focus {\n    border: 2px solid var(--white);\n    border-right: none;\n    /* Maintain no right border on focus */\n    transition: border 0.3s;\n}\n\n.search-submit {\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    padding: 10px 16px;\n    border-radius: 0 20px 20px 0;\n    border: 2px solid var(--dark-blue);\n    border-left: none;\n    /* Remove left border-radius */\n    background-color: var(--dark-blue);\n    color: var(--white);\n    font-size: 24px;\n    cursor: pointer;\n}\n\n\n.settings {\n    margin-left: auto;\n}\n\n/* Current Day's Weather Information */\n.info {\n    margin: 30px;\n    padding: 20px;\n    background: rgba(255, 255, 255, 0.21);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5px);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    width: 600px;\n    text-align: center;\n}\n\n.section-weather {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n}\n\n.weather-main {\n    flex: 1;\n}\n\n.big-data {\n    font-size: 64px;\n    padding: 10px;\n    font-weight: bold;\n}\n\n.weather-desc {\n    font-size: 20px;\n    color: var(--muted-text);\n}\n\n.location-details {\n    margin: 18px;\n}\n\n.weather-details-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    /* 2 columns in the grid */\n    gap: 10px;\n    max-width: 500px;\n   \n}\n\n.weather-detail {\n    font-size: 16px;\n    background: rgba(255, 255, 255, 0.21);\n    border-radius: 8px;\n    padding: 10px;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(3px);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.daily-header {\n    font-size: 24px;\n    text-align: center;\n    padding: 10px;\n}\n\n.section-weather {\n    display: flex;\n    align-items: flex-start;\n    /* Aligns items at the start of the container */\n    justify-content: space-between;\n    /* Adds space between the main text and the grid */\n}\n\n.weather-main {\n    flex: 1;\n    /* This allows the temperature section to take up as much space as needed */\n    margin-right: 20px;\n    /* Adds some space between the temperature section and the grid */\n}\n\n\n\n/* Other Days' Weather Information */\n.main-container {\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.bottom-row {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n}\n\n.day {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--dark-blue);\n    padding: 20px;\n    border-radius: 12px;\n}\n\n/* Footer */\n.footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n    color: var(--transparent-white);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/convert.js":
/*!************************!*\
  !*** ./src/convert.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\nfunction fahrenheitToCelsius(fahrenheit) { \n    return Math.round((fahrenheit - 32) * 5 / 9); \n} \n\n//# sourceURL=webpack://weatherapp/./src/convert.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _convert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert.js */ \"./src/convert.js\");\n\n\n\n\n//for just the first day\nconst feelikeTxt = document.querySelector(\".feel-like\");\nconst degreeTxt = document.querySelector(\".degree\");\n\n\nlet time = 0;\n\nasync function getWeather(location) {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=JJRFS5VFYMCPJ28PGPUWV8RK3`, { mode: 'cors' });\n    const weatherData = await response.json();\n    return weatherData;\n}\nlet place;\ndocument.addEventListener('DOMContentLoaded', () => {\n    document.getElementById('submitButton').addEventListener('click', () => {\n        const inputText = document.getElementById('userInput').value;\n        place = inputText;\n        updateWeather();\n    });\n});\n\n\n\nasync function updateWeather() {\n    const loadingElement = document.getElementById('loading');\n    const locationResult = document.getElementById('result');\n    const elementsToHide = [degreeTxt, feelikeTxt, locationResult];\n\n    // Show loading component, hide other elements\n    loadingElement.style.display = 'block';\n    elementsToHide.forEach(el => el.style.display = 'none');\n\n    try {\n        const weatherData = await getWeather(place);\n\n        // Show the data elements\n        elementsToHide.forEach(el => el.style.display = 'block');\n\n        // Update current day content\n        locationResult.textContent = `Location: ${weatherData.resolvedAddress}`;\n        degreeTxt.textContent = `Degrees: ${(0,_convert_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius)(weatherData.currentConditions.temp)}`;\n        feelikeTxt.textContent = `Feels like: ${(0,_convert_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius)(weatherData.currentConditions.feelslike)}`;\n\n        // Update grid with other weather details\n        document.getElementById('wind').textContent = `Wind: ${weatherData.currentConditions.windspeed} km/h`;\n        document.getElementById('humidity').textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;\n        document.getElementById('chanceOfRain').textContent = `Chance of Rain: ${weatherData.currentConditions.precipprob}%`;\n        document.getElementById('cloudiness').textContent = `Cloudiness: ${weatherData.currentConditions.cloudcover}%`;\n\n        // If sunrise and sunset times are available, update them\n        if (weatherData.currentConditions.sunrise && weatherData.currentConditions.sunset) {\n            document.getElementById('sunrise').textContent = `Sunrise: ${weatherData.currentConditions.sunrise}`;\n            document.getElementById('sunset').textContent = `Sunset: ${weatherData.currentConditions.sunset}`;\n        } else {\n            // Handle cases where sunrise/sunset data is not available\n            document.getElementById('sunrise').textContent = `Sunrise: N/A`;\n            document.getElementById('sunset').textContent = `Sunset: N/A`;\n        }\n\n        // Update content for the bottom row (next 6 days)\n        const daysClasses = ['two', 'three', 'four', 'five', 'six', 'seven'];\n        for (let i = 0; i < daysClasses.length; i++) {\n            const degreeElement = document.querySelector(`.degree.${daysClasses[i]}`);\n            const feelikeElement = document.querySelector(`.feel-like.${daysClasses[i]}`);\n\n            degreeElement.textContent = `Degrees: ${(0,_convert_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius)(weatherData.days[i + 1].tempmax)}°C`;\n            feelikeElement.textContent = `/${(0,_convert_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius)(weatherData.days[i + 1].tempmin)}°C`;\n        }\n    } catch (error) {\n        elementsToHide.forEach(el => el.style.display = 'block');\n        locationResult.style.display = 'none';\n        degreeTxt.textContent = \"Could not retrieve weather data.\";\n        feelikeTxt.textContent = \"Could not retrieve weather data.\";\n\n        // Handle error for grid elements\n        document.getElementById('wind').textContent = \"Could not retrieve data.\";\n        document.getElementById('humidity').textContent = \"Could not retrieve data.\";\n        document.getElementById('chanceOfRain').textContent = \"Could not retrieve data.\";\n        document.getElementById('cloudiness').textContent = \"Could not retrieve data.\";\n        document.getElementById('sunrise').textContent = \"Could not retrieve data.\";\n        document.getElementById('sunset').textContent = \"Could not retrieve data.\";\n\n        // Handle error for bottom row headers\n        const daysClasses = ['two', 'three', 'four', 'five', 'six', 'seven'];\n        for (let i = 0; i < daysClasses.length; i++) {\n            const degreeElement = document.querySelector(`.degree.${daysClasses[i]}`);\n            const feelikeElement = document.querySelector(`.feel-like.${daysClasses[i]}`);\n\n            degreeElement.textContent = \"Could not retrieve weather data.\";\n            feelikeElement.textContent = \"Could not retrieve weather data.\";\n        }\n    } finally {\n        // Hide the loading component\n        loadingElement.style.display = 'none';\n    }\n}\n\n\n\n\nplace = 'london'; // set defualt location\nupdateWeather();\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;