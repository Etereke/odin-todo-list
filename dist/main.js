/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    margin-left: 5px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form, .task-edit-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n\n.task-finished{\n    background-color: rgb(21, 243, 21);\n    color: gray;\n    text-decoration: line-through;\n}\n\n.task-finished:hover{\n    background-color: rgb(21, 243, 21);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;;IAEtB,kBAAkB;;IAElB,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;;AAEnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,sBAAsB;;IAEtB,iBAAiB;IACjB,gCAAgC;IAChC,kCAAkC;;AAEtC;AACA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;;IAEtB,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;AACxB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,0BAA0B;IAC1B,eAAe;IACf,WAAW;AACf;;AAEA;AACA;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":["body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    margin-left: 5px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form, .task-edit-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n\n.task-finished{\n    background-color: rgb(21, 243, 21);\n    color: gray;\n    text-decoration: line-through;\n}\n\n.task-finished:hover{\n    background-color: rgb(21, 243, 21);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/main-content.js":
/*!****************************************!*\
  !*** ./src/components/main-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainContent)
/* harmony export */ });
//Main content (or the currently viewed project) component
function createMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(createHeader(project.name));
    mainContent.appendChild(createTasklist(project.tasks));
    mainContent.appendChild(createTaskAdd());
    mainContent.appendChild(createTaskAddForm());
    mainContent.appendChild(createTaskEditForm());
    return mainContent;
}




function createHeader(name){
    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = `Project: ${name}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Project';
    contentHeader.appendChild(projectName);
    contentHeader.appendChild(deleteBtn);
    return contentHeader;
}

function createTaskrow(idx, task){
    const taskrow = document.createElement('div');
    taskrow.classList.add('task-row');
    taskrow.classList.add(`prio-${task.prio}`);
    taskrow.dataset.idx = idx;
    if(task.finished){
        taskrow.classList.add('task-finished');
    }

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = task.date;

    const taskBtns = document.createElement('div');
    taskBtns.classList.add('task-btns');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.dataset.idx = idx;
    taskBtns.appendChild(editBtn);
    const checkBtn = document.createElement('button');
    checkBtn.textContent = 'Check';
    checkBtn.classList.add('check-btn');
    checkBtn.dataset.idx = idx;
    taskBtns.appendChild(checkBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.dataset.idx = idx;
    taskBtns.appendChild(deleteBtn);
    
    const taskDesc = document.createElement('div');
    taskDesc.classList.add('task-desc');
    taskDesc.textContent = task.desc;
    taskDesc.hidden = true;

    taskrow.appendChild(taskName);
    taskrow.appendChild(taskDate);
    taskrow.appendChild(taskBtns);
    taskrow.appendChild(taskDesc);
    return taskrow;
}

function createTasklist(tasks){
    const taskList = document.createElement('div');
    taskList.classList.add('tasks');
    for(let i in tasks){
        taskList.appendChild(createTaskrow(i, tasks[i]));
    }
    return taskList;
}

function createTaskAdd(){
    const taskAdd = document.createElement('div');
    taskAdd.classList.add('task-add');
    taskAdd.innerHTML = '<span>+New Task</span>';
    return taskAdd;
}

function createTaskEditForm(){
    const taskEditForm = document.createElement('div');
    taskEditForm.classList.add('task-edit-form');
    taskEditForm.classList.add('hidden');
    taskEditForm.innerHTML = `<div class="task-edit-name edit-input-field">
    <label for="task-name">Task</label>
    <input type="text" name="task-name" id="task-name" data-field="name">
</div>
<div class="task-edit-date edit-input-field">
    <label for="task-date">Due date</label>
    <input type="date" name="task-date" id="task-date" data-field="date">
</div>
<div class="task-edit-desc edit-input-field">
    <label for="task-desc">Description</label>
    <textarea name="task-desc" id="task-desc" cols="30" rows="10" data-field="desc"></textarea>
</div>

<div class="task-edit-prio edit-input-field" data-field="prio">
    <label for="task-prio">Priority</label>
    <select name="task-prio" id="task-prio">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
</div>

<div class="add-btns">
    <button class="edit-task-btn">Edit</button>
</div>`;
    return taskEditForm;
}

function createTaskAddForm(){
    const taskAddForm = document.createElement('div');
    taskAddForm.classList.add('task-add-form');
    taskAddForm.classList.add('hidden');
    taskAddForm.innerHTML = `<div class="task-new-name input-field">
    <label for="task-name">Task</label>
    <input type="text" name="task-name" id="task-name">
</div>
<div class="task-new-date input-field">
    <label for="task-date">Due date</label>
    <input type="date" name="task-date" id="task-date">
</div>
<div class="task-new-desc input-field">
    <label for="task-desc">Description</label>
    <textarea name="task-desc" id="task-desc" cols="30" rows="10"></textarea>
</div>

<div class="task-new-prio input-field">
    <label for="task-prio">Priority</label>
    <select name="task-prio" id="task-prio">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
</div>

<div class="add-btns">
    <button class="add-new-task-btn">Add</button>
    <button class="cancel-new-task-btn">Cancel</button>
</div>`;
    return taskAddForm;
}

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSidebar)
/* harmony export */ });
//Sidebar component
function createSidebar(projects){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    sidebar.appendChild(createDiv('default-project', 'Default Tasks'));
    sidebar.appendChild(createDiv('project-header', 'Projects: '));
    sidebar.appendChild(createProjects(projects));
    sidebar.appendChild(createAddBtn());
    sidebar.appendChild(createAddInputField());
    return sidebar;
}



function createDiv(divClass, divText){
    const div = document.createElement('div');
    div.classList.add(divClass);
    div.textContent = divText;
    return div;
}

function createProjects(projects){
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    for(let i in projects){
        const item = document.createElement('div');
        item.classList.add('project-item');
        item.dataset.idx = i;
        item.textContent = projects[i].name;
        projectsDiv.appendChild(item);
    }
    return projectsDiv;
}

function createAddBtn(){
    const addBtn = document.createElement('div');
    addBtn.classList.add('add-project');
    const span = document.createElement('span');
    span.textContent = '+New Project';
    addBtn.appendChild(span);
    return addBtn;
}

function createAddInputField(){
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('add-project-input');
    inputDiv.hidden = true;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'new-project-name';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-new-project';
    addBtn.textContent = 'Add';
    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancel-new-project';
    cancelBtn.textContent = 'Cancel';

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('add-new-project-btns');
    buttonGroup.appendChild(addBtn);
    buttonGroup.appendChild(cancelBtn);

    inputDiv.appendChild(input);
    inputDiv.appendChild(buttonGroup);
    
    return inputDiv;
}

/***/ }),

/***/ "./src/data-classes/project.js":
/*!*************************************!*\
  !*** ./src/data-classes/project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    getTask(index){
        return this.tasks[index];
    }
    deleteTask(idx){
        this.tasks.splice(idx, 1);
    }
}

/***/ }),

/***/ "./src/data-classes/task.js":
/*!**********************************!*\
  !*** ./src/data-classes/task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task{
    constructor(name, date, desc, prio, finished = false){
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.prio = prio;
        this.finished = finished;
    }
    ToggleFinished(){
        this.finished = !this.finished;
    }

    Edit(name, date, desc, prio){
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.prio = prio;
    }
}

/***/ }),

/***/ "./src/handler-classes/DOM-handler.js":
/*!********************************************!*\
  !*** ./src/handler-classes/DOM-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMHandler)
/* harmony export */ });
/* harmony import */ var _components_main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-content */ "./src/components/main-content.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar */ "./src/components/sidebar.js");



//Handles changes to the DOM - mostly used to rebuild the whole site after a change occurs in the logic
class DOMHandler{
    constructor(){
        this.content = document.querySelector('.content');
    }

    BuildSite(projects, currentProject){
        this.content.innerHTML = '';
        this.content.appendChild((0,_components_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])(projects));
        this.CreateMainContent(currentProject);
    }

    CreateMainContent(currentProject){
        const mainContent = document.querySelector('.main-content');
        if(mainContent){
            mainContent.remove();
        }
        this.content.appendChild((0,_components_main_content__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject));
    }

    //Function that handles changing project (when clicking a project on the sidebar)
    SetActiveProject(idx, project){
        const active = document.querySelector('.active-project');
        if(active){
            active.classList.remove('active-project');
        }
        if(+idx === -1){
            document.querySelector('.default-project').classList.add('active-project');
        }
        else{
            document.querySelector(`[data-idx='${idx}']`).classList.add('active-project');
        }
        this.CreateMainContent(project);
    }

    //Toggle functions for the New Project, New Task and Edit buttons
    ToggleNewProjectForm(){
        const addProject = document.querySelector('.add-project');
        const addProjectForm = document.querySelector('.add-project-input');
        const projectNameInput = document.querySelector('#new-project-name');
        projectNameInput.value = '';
        projectNameInput.classList.remove('bad-input');
        addProject.hidden = !addProject.hidden;
        addProjectForm.hidden = !addProjectForm.hidden;
    }

    ToggleNewTaskForm(){
        const addTask = document.querySelector('.task-add');
        addTask.hidden = !addTask.hidden;
        const addTaskForm = document.querySelector('.task-add-form');
        addTaskForm.classList.toggle('hidden');
        [...document.querySelectorAll('.input-field')].forEach((item) => {
            const input = item.querySelector(':last-child');
            input.value = '';
            input.classList.remove('bad-input');
        });
        [...document.querySelectorAll('.edit-btn')].forEach((item) => {
            console.log(item);
            item.disabled = !item.disabled;
        });
    }

    ToggleEditTaskForm(task){
        const editTaskForm = document.querySelector('.task-edit-form');
        const addTask = document.querySelector('.task-add');
        addTask.hidden = !addTask.hidden;
        editTaskForm.classList.toggle('hidden');
        [...document.querySelectorAll('.edit-input-field')].forEach((item) => {
            const input = item.querySelector(':last-child');
            input.value = task[input.dataset.field];
            input.classList.remove('bad-input');
        });
    }
}

/***/ }),

/***/ "./src/handler-classes/logic-handler.js":
/*!**********************************************!*\
  !*** ./src/handler-classes/logic-handler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogicHandler)
/* harmony export */ });
/* harmony import */ var _data_classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-classes/project */ "./src/data-classes/project.js");
/* harmony import */ var _data_classes_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-classes/task */ "./src/data-classes/task.js");




//Handles the logic of the site - loads the content from local storage, applies changes in the memory, and writes everything back to local storage when a change happens
class LogicHandler{
    //Initializes the default project and the projectlist from local storage
    constructor(){
        this.projectList = [];
        this.defaultProject = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project("Default Tasks");
        const defaultProjectRaw = JSON.parse(localStorage.getItem('defaultProject'));
        if(defaultProjectRaw){
            for(let task of defaultProjectRaw.tasks){
                this.defaultProject.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task(task.name, task.date, task.desc, task.prio, task.finished));
            }
        }
        const projectsRaw = JSON.parse(localStorage.getItem('projects'));
        if(projectsRaw){
            for(let projectRaw of projectsRaw){
                let project = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project(projectRaw.name);
                if(projectRaw.tasks){
                    for(let task of projectRaw.tasks){
                        project.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task(task.name, task.date, task.desc, task.prio, task.finished));
                    }
                }
                this.projectList.push(project);
            }
        }
        this.currentProjectIndex = -1;
    }
    
    GetProjectList(){
        return this.projectList;
    }
    GetCurrentProject(){
        if(this.currentProjectIndex === -1){
            return this.defaultProject;
        }
        else{
            return this.projectList[this.currentProjectIndex];
        }
    }
    GetCurrentIndex(){
        return this.currentProjectIndex;
    }
    SetCurrentProject(idx){
        this.currentProjectIndex = idx;
    }
    AddProject(name){
        this.projectList.push(new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project(name));
    }
    DeleteProject(idx){
        if(idx !== -1){
            this.projectList.splice(idx, 1);
        }
    }
    WriteToStorage(){
        localStorage.setItem('defaultProject', JSON.stringify(this.defaultProject));
        localStorage.setItem('projects', JSON.stringify(this.projectList));
    }
}

/***/ }),

/***/ "./src/handler-classes/site-handler.js":
/*!*********************************************!*\
  !*** ./src/handler-classes/site-handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteHandler)
/* harmony export */ });
/* harmony import */ var _data_classes_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-classes/task */ "./src/data-classes/task.js");
/* harmony import */ var _DOM_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-handler */ "./src/handler-classes/DOM-handler.js");
/* harmony import */ var _logic_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic-handler */ "./src/handler-classes/logic-handler.js");




//Handles the site through the DOM-handler and logic-handler classes, responsible for setting up event handlers
class SiteHandler{
    constructor(){
        this.logic = new _logic_handler__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.dom = new _DOM_handler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    Init(){
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(-1, this.logic.GetCurrentProject());
        this.AddEventHandlers();
    }
    AddEventHandlers(){
        this.AddChangeProjectEvents();
        this.AddNewProjectEvents();
        this.AddDeleteProjectEvent();
        this.AddToggleDescriptionEvent();
        this.AddNewTaskEvents();
        this.AddTaskButtonEvents();
    }

    //Sidebar, change active project
    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.ExecuteModification();
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.ExecuteModification();
            });
        });
    }

    //Sidebar, add new project
    AddNewProjectEvents(){
        document.querySelector('.add-project').addEventListener('click', (e) => {
            this.dom.ToggleNewProjectForm();
        });
        document.querySelector('#cancel-new-project').addEventListener('click', (e) => {
            this.dom.ToggleNewProjectForm();
        });
        document.querySelector('#add-new-project').addEventListener('click', (e) => {
            const input = document.querySelector('#new-project-name');
            if(input.value){
                this.logic.AddProject(input.value);
                this.logic.SetCurrentProject(this.logic.GetProjectList().length - 1);
                this.ExecuteModification();
            }
            else{
                input.classList.add('bad-input');
            }
        });
    }

    //Main content, delete project
    AddDeleteProjectEvent(){
        document.querySelector('.content-header>button').addEventListener('click', (e) => {
            this.logic.DeleteProject(this.logic.GetCurrentIndex());
            this.logic.SetCurrentProject(-1);
            this.ExecuteModification();
        })
    }

    //Main content, toggle task description
    AddToggleDescriptionEvent(){
        [...document.querySelectorAll('.task-row')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                const desc = item.querySelector('.task-desc');
                desc.hidden = !desc.hidden;
            });
        });
    }

    //Main content, add new task to project
    AddNewTaskEvents(){
        document.querySelector('.task-add').addEventListener('click', (e) => {
            this.dom.ToggleNewTaskForm();
        });
        document.querySelector('.cancel-new-task-btn').addEventListener('click', (e) => {
            this.dom.ToggleNewTaskForm();
        });
        document.querySelector('.add-new-task-btn').addEventListener('click', (e) => {
            const taskFields = [];
            [...document.querySelectorAll('.input-field')].forEach((item) => {
                const input = item.querySelector(':last-child');
                input.classList.remove('bad-input');
                if(!input.value){
                    input.classList.add('bad-input');
                }
                else{
                    taskFields.push(input.value);
                }
            });
            if(taskFields.length >= 4){
                const task = new _data_classes_task__WEBPACK_IMPORTED_MODULE_0__.Task(taskFields[0], taskFields[1], taskFields[2], taskFields[3])
                this.logic.GetCurrentProject().addTask(task);
                this.ExecuteModification();
            }
        });
    }

    //Main content, events related to the buttons in the task rows (edit, check, delete buttons)
    AddTaskButtonEvents(){
        [...document.querySelectorAll('.delete-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.logic.GetCurrentProject().deleteTask(item.dataset.idx);
                this.ExecuteModification();
            });
        });
        [...document.querySelectorAll('.check-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.logic.GetCurrentProject().getTask(item.dataset.idx).ToggleFinished();
                this.ExecuteModification();
            });
        });
        [...document.querySelectorAll('.edit-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.dom.ToggleEditTaskForm(this.logic.GetCurrentProject().getTask(item.dataset.idx));
                let editBtn = document.querySelector('.edit-task-btn');
                editBtn.replaceWith(editBtn.cloneNode(true));
                editBtn = document.querySelector('.edit-task-btn');
                editBtn.addEventListener('click', (e) => {
                    const name = document.querySelector('.task-edit-name>:last-child');
                    const date = document.querySelector('.task-edit-date>:last-child');
                    const desc = document.querySelector('.task-edit-desc>:last-child');
                    const prio = document.querySelector('.task-edit-prio>:last-child');
                    let hasEmpty = false;
                    if(!name.value){
                        name.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        name.classList.remove('bad-input');
                    }
                    if(!date.value){
                        date.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        date.classList.remove('bad-input');
                    }
                    if(!desc.value){
                        desc.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        desc.classList.remove('bad-input');
                    }
                    if(!prio.value){
                        prio.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        prio.classList.remove('bad-input');
                    }
                    if(!hasEmpty){
                        this.logic.GetCurrentProject().getTask(item.dataset.idx).Edit(name.value, date.value, desc.value, prio.value);
                        this.ExecuteModification();
                    }
                });
                
            })
        })
    }

    //This function is called every time a change is made to a task or a project
    ExecuteModification(){
        this.logic.WriteToStorage();
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
        this.AddEventHandlers();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-classes/project */ "./src/data-classes/project.js");
/* harmony import */ var _data_classes_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-classes/task */ "./src/data-classes/task.js");
/* harmony import */ var _handler_classes_DOM_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler-classes/DOM-handler */ "./src/handler-classes/DOM-handler.js");
/* harmony import */ var _handler_classes_logic_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler-classes/logic-handler */ "./src/handler-classes/logic-handler.js");
/* harmony import */ var _handler_classes_site_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler-classes/site-handler */ "./src/handler-classes/site-handler.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const site = new _handler_classes_site_handler__WEBPACK_IMPORTED_MODULE_4__["default"]();
site.Init();


/* Test data 
    Uncomment and put site handler at the end of the page to use!*/
    
// localStorage.clear();

// let defaultProjectTest = new Project("Default Project");
// defaultProjectTest.addTask(new Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
// defaultProjectTest.addTask(new Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
// defaultProjectTest.addTask(new Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

// let project1 = new Project("Project Nexus");
// project1.addTask(new Task('Kill Auditor','2022-11-22', 'He is a wuss so he must die', 'high'));
// project1.addTask(new Task('Get the halo','2022-11-23', 'The halo is indispensible for the project', 'high'));
// project1.addTask(new Task('Get a hotdog','2022-11-24', 'Yummi!', 'low'));

// let project2 = new Project("Project Berseria");
// project2.addTask(new Task('Marry Velvet','2022-11-22', 'Velvet is bae', 'high'));
// project2.addTask(new Task('Listen to Eizen','2022-11-23', 'He has cool stories', 'medium'));
// project2.addTask(new Task('Drink with Rokurou','2022-11-24', 'Wonder if I can beat him', 'low'));

// let projectsTest = [project1, project2]
// localStorage.projects = JSON.stringify(projectsTest);
// localStorage.defaultProject = JSON.stringify(defaultProjectTest);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRDtBQUNOO0FBQ1k7QUFDSTtBQUNGO0FBQ3BDOztBQUVyQixpQkFBaUIscUVBQVc7QUFDNUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kYXRhLWNsYXNzZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kYXRhLWNsYXNzZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9oYW5kbGVyLWNsYXNzZXMvRE9NLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaGFuZGxlci1jbGFzc2VzL2xvZ2ljLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaGFuZGxlci1jbGFzc2VzL3NpdGUtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM3LCAyMzEpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ1LCAxNzQsIDIxMik7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdCwgLnByb2plY3QtaGVhZGVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuXFxufVxcblxcbi5wcm9qZWN0LWl0ZW17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06Zmlyc3QtY2hpbGR7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdCA+IHNwYW4sIC50YXNrLWFkZCA+IHNwYW57XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gc3Bhbjpob3ZlciwgLnByb2plY3QtaXRlbTpob3ZlciwgLmRlZmF1bHQtcHJvamVjdDpob3ZlciwgLnRhc2stYWRkID4gc3Bhbjpob3ZlciwgLmFjdGl2ZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4IDI1MHB4O1xcbiAgICB3aWR0aDogbWF4KDYwJSwgODAwcHgpO1xcblxcbiAgICBwYWRkaW5nOiAxNXB4IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIFxcbn1cXG4udGFzay1yb3c6Zmlyc3QtY2hpbGR7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcblxcbi50YXNrLWFkZHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGFzay1idG5ze1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50YXNrLWJ0bnMgPiBidXR0b24sIC5hZGQtYnRucyA+IGJ1dHRvbiwgLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stYnRucyA+IGJ1dHRvbjpob3ZlciwgLmFkZC1idG5zPmJ1dHRvbjpob3ZlciwgLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHJnYig1MywgNTMsIDU0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWRlc2N7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1mb3JtLCAudGFzay1lZGl0LWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBtYXgoNDAlLCA1MDBweCk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1maWVsZCA+IGlucHV0e1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXJ7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbntcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJpby1oaWdoOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcmlvLW1lZGl1bTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ucHJpby1sb3c6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmFkLWlucHV0e1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0LWJ0bnMgPiBidXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbmFtZXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrLWZpbmlzaGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDI0MywgMjEpO1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWZpbmlzaGVkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDI0MywgMjEpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsa0JBQWtCOztJQUVsQixtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGtDQUFrQzs7QUFFdEM7QUFDQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzcsIDIzMSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDUsIDE3NCwgMjEyKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0LCAucHJvamVjdC1oZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG5cXG59XFxuXFxuLnByb2plY3QtaXRlbXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gc3BhbiwgLnRhc2stYWRkID4gc3BhbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYWRkLXByb2plY3QgPiBzcGFuOmhvdmVyLCAucHJvamVjdC1pdGVtOmhvdmVyLCAuZGVmYXVsdC1wcm9qZWN0OmhvdmVyLCAudGFzay1hZGQgPiBzcGFuOmhvdmVyLCAuYWN0aXZlLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1le1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLXJvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMjUwcHg7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgXFxufVxcbi50YXNrLXJvdzpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLnRhc2stYWRke1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi50YXNrLWJ0bnN7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stYnRucyA+IGJ1dHRvbiwgLmFkZC1idG5zID4gYnV0dG9uLCAuY29udGVudC1oZWFkZXI+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1NCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1idG5zID4gYnV0dG9uOmhvdmVyLCAuYWRkLWJ0bnM+YnV0dG9uOmhvdmVyLCAuY29udGVudC1oZWFkZXI+YnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogcmdiKDUzLCA1MywgNTQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWZvcm0sIC50YXNrLWVkaXQtZm9ybXtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IG1heCg0MCUsIDUwMHB4KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LWZpZWxkID4gaW5wdXR7XFxufVxcblxcbi5jb250ZW50LWhlYWRlcntcXG4gICAgd2lkdGg6IG1heCg2MCUsIDgwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXI+YnV0dG9ue1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcmlvLWhpZ2g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnByaW8tbWVkaXVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcmlvLWxvdzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5iYWQtaW5wdXR7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3QtYnRucyA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1uYW1le1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2stZmluaXNoZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjQzLCAyMSk7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZmluaXNoZWQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjQzLCAyMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9NYWluIGNvbnRlbnQgKG9yIHRoZSBjdXJyZW50bHkgdmlld2VkIHByb2plY3QpIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIocHJvamVjdC5uYW1lKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza2xpc3QocHJvamVjdC50YXNrcykpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGQoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZEZvcm0oKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0VkaXRGb3JtKCkpO1xuICAgIHJldHVybiBtYWluQ29udGVudDtcbn1cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpe1xuICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaGVhZGVyJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke25hbWV9YDtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICByZXR1cm4gY29udGVudEhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza3JvdyhpZHgsIHRhc2spe1xuICAgIGNvbnN0IHRhc2tyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrcm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcm93Jyk7XG4gICAgdGFza3Jvdy5jbGFzc0xpc3QuYWRkKGBwcmlvLSR7dGFzay5wcmlvfWApO1xuICAgIHRhc2tyb3cuZGF0YXNldC5pZHggPSBpZHg7XG4gICAgaWYodGFzay5maW5pc2hlZCl7XG4gICAgICAgIHRhc2tyb3cuY2xhc3NMaXN0LmFkZCgndGFzay1maW5pc2hlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuXG4gICAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQnRucy5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bnMnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgZWRpdEJ0bi5kYXRhc2V0LmlkeCA9IGlkeDtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoZWNrQnRuLnRleHRDb250ZW50ID0gJ0NoZWNrJztcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVjay1idG4nKTtcbiAgICBjaGVja0J0bi5kYXRhc2V0LmlkeCA9IGlkeDtcbiAgICB0YXNrQnRucy5hcHBlbmRDaGlsZChjaGVja0J0bik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4uZGF0YXNldC5pZHggPSBpZHg7XG4gICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjO1xuICAgIHRhc2tEZXNjLmhpZGRlbiA9IHRydWU7XG5cbiAgICB0YXNrcm93LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICB0YXNrcm93LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICB0YXNrcm93LmFwcGVuZENoaWxkKHRhc2tCdG5zKTtcbiAgICB0YXNrcm93LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgICByZXR1cm4gdGFza3Jvdztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza2xpc3QodGFza3Mpe1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICBmb3IobGV0IGkgaW4gdGFza3Mpe1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrcm93KGksIHRhc2tzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrTGlzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0FkZCgpe1xuICAgIGNvbnN0IHRhc2tBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQWRkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWRkJyk7XG4gICAgdGFza0FkZC5pbm5lckhUTUwgPSAnPHNwYW4+K05ldyBUYXNrPC9zcGFuPic7XG4gICAgcmV0dXJuIHRhc2tBZGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFZGl0Rm9ybSgpe1xuICAgIGNvbnN0IHRhc2tFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tFZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtZm9ybScpO1xuICAgIHRhc2tFZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0YXNrRWRpdEZvcm0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXQtbmFtZSBlZGl0LWlucHV0LWZpZWxkXCI+XG4gICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2s8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZVwiIGRhdGEtZmllbGQ9XCJuYW1lXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0YXNrLWVkaXQtZGF0ZSBlZGl0LWlucHV0LWZpZWxkXCI+XG4gICAgPGxhYmVsIGZvcj1cInRhc2stZGF0ZVwiPkR1ZSBkYXRlPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidGFzay1kYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIiBkYXRhLWZpZWxkPVwiZGF0ZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidGFzay1lZGl0LWRlc2MgZWRpdC1pbnB1dC1maWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2stZGVzY1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGRhdGEtZmllbGQ9XCJkZXNjXCI+PC90ZXh0YXJlYT5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidGFzay1lZGl0LXByaW8gZWRpdC1pbnB1dC1maWVsZFwiIGRhdGEtZmllbGQ9XCJwcmlvXCI+XG4gICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb1wiPlByaW9yaXR5PC9sYWJlbD5cbiAgICA8c2VsZWN0IG5hbWU9XCJ0YXNrLXByaW9cIiBpZD1cInRhc2stcHJpb1wiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImFkZC1idG5zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtdGFzay1idG5cIj5FZGl0PC9idXR0b24+XG48L2Rpdj5gO1xuICAgIHJldHVybiB0YXNrRWRpdEZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBZGRGb3JtKCl7XG4gICAgY29uc3QgdGFza0FkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQWRkRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWFkZC1mb3JtJyk7XG4gICAgdGFza0FkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGFza0FkZEZvcm0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrLW5ldy1uYW1lIGlucHV0LWZpZWxkXCI+XG4gICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZVwiPlRhc2s8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidGFzay1uZXctZGF0ZSBpbnB1dC1maWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRhdGVcIj5EdWUgZGF0ZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInRhc2stZGF0ZVwiIGlkPVwidGFzay1kYXRlXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0YXNrLW5ldy1kZXNjIGlucHV0LWZpZWxkXCI+XG4gICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY1wiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICA8dGV4dGFyZWEgbmFtZT1cInRhc2stZGVzY1wiIGlkPVwidGFzay1kZXNjXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidGFzay1uZXctcHJpbyBpbnB1dC1maWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9cIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwidGFzay1wcmlvXCIgaWQ9XCJ0YXNrLXByaW9cIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJhZGQtYnRuc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJhZGQtbmV3LXRhc2stYnRuXCI+QWRkPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1uZXctdGFzay1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbjwvZGl2PmA7XG4gICAgcmV0dXJuIHRhc2tBZGRGb3JtO1xufSIsIi8vU2lkZWJhciBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIocHJvamVjdHMpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCdkZWZhdWx0LXByb2plY3QnLCAnRGVmYXVsdCBUYXNrcycpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZURpdigncHJvamVjdC1oZWFkZXInLCAnUHJvamVjdHM6ICcpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzKHByb2plY3RzKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVBZGRCdG4oKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVBZGRJbnB1dEZpZWxkKCkpO1xuICAgIHJldHVybiBzaWRlYmFyO1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGRpdkNsYXNzLCBkaXZUZXh0KXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXZDbGFzcyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gZGl2VGV4dDtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cyl7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0cyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgICAgaXRlbS5kYXRhc2V0LmlkeCA9IGk7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3RzRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRCdG4oKXtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnK05ldyBQcm9qZWN0JztcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgcmV0dXJuIGFkZEJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkSW5wdXRGaWVsZCgpe1xuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtaW5wdXQnKTtcbiAgICBpbnB1dERpdi5oaWRkZW4gPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmlkID0gJ25ldy1wcm9qZWN0LW5hbWUnO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmlkID0gJ2FkZC1uZXctcHJvamVjdCc7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLmlkID0gJ2NhbmNlbC1uZXctcHJvamVjdCc7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctcHJvamVjdC1idG5zJyk7XG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgICBcbiAgICByZXR1cm4gaW5wdXREaXY7XG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBnZXRUYXNrKGluZGV4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NbaW5kZXhdO1xuICAgIH1cbiAgICBkZWxldGVUYXNrKGlkeCl7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIGRlc2MsIHByaW8sIGZpbmlzaGVkID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnByaW8gPSBwcmlvO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XG4gICAgfVxuICAgIFRvZ2dsZUZpbmlzaGVkKCl7XG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSAhdGhpcy5maW5pc2hlZDtcbiAgICB9XG5cbiAgICBFZGl0KG5hbWUsIGRhdGUsIGRlc2MsIHByaW8pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnByaW8gPSBwcmlvO1xuICAgIH1cbn0iLCJpbXBvcnQgY3JlYXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbi1jb250ZW50XCI7XG5pbXBvcnQgY3JlYXRlU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5cbi8vSGFuZGxlcyBjaGFuZ2VzIHRvIHRoZSBET00gLSBtb3N0bHkgdXNlZCB0byByZWJ1aWxkIHRoZSB3aG9sZSBzaXRlIGFmdGVyIGEgY2hhbmdlIG9jY3VycyBpbiB0aGUgbG9naWNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUhhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICB9XG5cbiAgICBCdWlsZFNpdGUocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcihwcm9qZWN0cykpO1xuICAgICAgICB0aGlzLkNyZWF0ZU1haW5Db250ZW50KGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBDcmVhdGVNYWluQ29udGVudChjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgICAgICBpZihtYWluQ29udGVudCl7XG4gICAgICAgICAgICBtYWluQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoY3VycmVudFByb2plY3QpKTtcbiAgICB9XG5cbiAgICAvL0Z1bmN0aW9uIHRoYXQgaGFuZGxlcyBjaGFuZ2luZyBwcm9qZWN0ICh3aGVuIGNsaWNraW5nIGEgcHJvamVjdCBvbiB0aGUgc2lkZWJhcilcbiAgICBTZXRBY3RpdmVQcm9qZWN0KGlkeCwgcHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICBpZihhY3RpdmUpe1xuICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoK2lkeCA9PT0gLTEpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkeD0nJHtpZHh9J11gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgLy9Ub2dnbGUgZnVuY3Rpb25zIGZvciB0aGUgTmV3IFByb2plY3QsIE5ldyBUYXNrIGFuZCBFZGl0IGJ1dHRvbnNcbiAgICBUb2dnbGVOZXdQcm9qZWN0Rm9ybSgpe1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYmFkLWlucHV0Jyk7XG4gICAgICAgIGFkZFByb2plY3QuaGlkZGVuID0gIWFkZFByb2plY3QuaGlkZGVuO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5oaWRkZW4gPSAhYWRkUHJvamVjdEZvcm0uaGlkZGVuO1xuICAgIH1cblxuICAgIFRvZ2dsZU5ld1Rhc2tGb3JtKCl7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcbiAgICAgICAgYWRkVGFzay5oaWRkZW4gPSAhYWRkVGFzay5oaWRkZW47XG4gICAgICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZmllbGQnKV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJzpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYmFkLWlucHV0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnRuJyldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCA9ICFpdGVtLmRpc2FibGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBUb2dnbGVFZGl0VGFza0Zvcm0odGFzayl7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG4gICAgICAgIGFkZFRhc2suaGlkZGVuID0gIWFkZFRhc2suaGlkZGVuO1xuICAgICAgICBlZGl0VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pbnB1dC1maWVsZCcpXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGFza1tpbnB1dC5kYXRhc2V0LmZpZWxkXTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9kYXRhLWNsYXNzZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9kYXRhLWNsYXNzZXMvdGFza1wiO1xuXG5cbi8vSGFuZGxlcyB0aGUgbG9naWMgb2YgdGhlIHNpdGUgLSBsb2FkcyB0aGUgY29udGVudCBmcm9tIGxvY2FsIHN0b3JhZ2UsIGFwcGxpZXMgY2hhbmdlcyBpbiB0aGUgbWVtb3J5LCBhbmQgd3JpdGVzIGV2ZXJ5dGhpbmcgYmFjayB0byBsb2NhbCBzdG9yYWdlIHdoZW4gYSBjaGFuZ2UgaGFwcGVuc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naWNIYW5kbGVye1xuICAgIC8vSW5pdGlhbGl6ZXMgdGhlIGRlZmF1bHQgcHJvamVjdCBhbmQgdGhlIHByb2plY3RsaXN0IGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdCBUYXNrc1wiKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3RSYXcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0UHJvamVjdCcpKTtcbiAgICAgICAgaWYoZGVmYXVsdFByb2plY3RSYXcpe1xuICAgICAgICAgICAgZm9yKGxldCB0YXNrIG9mIGRlZmF1bHRQcm9qZWN0UmF3LnRhc2tzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2sodGFzay5uYW1lLCB0YXNrLmRhdGUsIHRhc2suZGVzYywgdGFzay5wcmlvLCB0YXNrLmZpbmlzaGVkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvamVjdHNSYXcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgaWYocHJvamVjdHNSYXcpe1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0UmF3IG9mIHByb2plY3RzUmF3KXtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RSYXcubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdFJhdy50YXNrcyl7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdGFzayBvZiBwcm9qZWN0UmF3LnRhc2tzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayhuZXcgVGFzayh0YXNrLm5hbWUsIHRhc2suZGF0ZSwgdGFzay5kZXNjLCB0YXNrLnByaW8sIHRhc2suZmluaXNoZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG4gICAgfVxuICAgIFxuICAgIEdldFByb2plY3RMaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0O1xuICAgIH1cbiAgICBHZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9qZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFt0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdldEN1cnJlbnRJbmRleCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvamVjdEluZGV4O1xuICAgIH1cbiAgICBTZXRDdXJyZW50UHJvamVjdChpZHgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPSBpZHg7XG4gICAgfVxuICAgIEFkZFByb2plY3QobmFtZSl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG4gICAgfVxuICAgIERlbGV0ZVByb2plY3QoaWR4KXtcbiAgICAgICAgaWYoaWR4ICE9PSAtMSl7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyaXRlVG9TdG9yYWdlKCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGVmYXVsdFByb2plY3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0TGlzdCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL2RhdGEtY2xhc3Nlcy90YXNrXCI7XG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET00taGFuZGxlclwiO1xuaW1wb3J0IExvZ2ljSGFuZGxlciBmcm9tIFwiLi9sb2dpYy1oYW5kbGVyXCI7XG5cbi8vSGFuZGxlcyB0aGUgc2l0ZSB0aHJvdWdoIHRoZSBET00taGFuZGxlciBhbmQgbG9naWMtaGFuZGxlciBjbGFzc2VzLCByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBldmVudCBoYW5kbGVyc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0ZUhhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sb2dpYyA9IG5ldyBMb2dpY0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5kb20gPSBuZXcgRE9NSGFuZGxlcigpO1xuICAgIH1cbiAgICBJbml0KCl7XG4gICAgICAgIHRoaXMuZG9tLkJ1aWxkU2l0ZSh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCksIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QoLTEsIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHRoaXMuQWRkRXZlbnRIYW5kbGVycygpO1xuICAgIH1cbiAgICBBZGRFdmVudEhhbmRsZXJzKCl7XG4gICAgICAgIHRoaXMuQWRkQ2hhbmdlUHJvamVjdEV2ZW50cygpO1xuICAgICAgICB0aGlzLkFkZE5ld1Byb2plY3RFdmVudHMoKTtcbiAgICAgICAgdGhpcy5BZGREZWxldGVQcm9qZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5BZGRUb2dnbGVEZXNjcmlwdGlvbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuQWRkTmV3VGFza0V2ZW50cygpO1xuICAgICAgICB0aGlzLkFkZFRhc2tCdXR0b25FdmVudHMoKTtcbiAgICB9XG5cbiAgICAvL1NpZGViYXIsIGNoYW5nZSBhY3RpdmUgcHJvamVjdFxuICAgIEFkZENoYW5nZVByb2plY3RFdmVudHMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naWMuU2V0Q3VycmVudFByb2plY3QoLTEpO1xuICAgICAgICAgICAgdGhpcy5FeGVjdXRlTW9kaWZpY2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpXS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLlNldEN1cnJlbnRQcm9qZWN0KGl0ZW0uZGF0YXNldC5pZHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXhlY3V0ZU1vZGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vU2lkZWJhciwgYWRkIG5ldyBwcm9qZWN0XG4gICAgQWRkTmV3UHJvamVjdEV2ZW50cygpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbS5Ub2dnbGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9tLlRvZ2dsZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWMuQWRkUHJvamVjdChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5TZXRDdXJyZW50UHJvamVjdCh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5FeGVjdXRlTW9kaWZpY2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL01haW4gY29udGVudCwgZGVsZXRlIHByb2plY3RcbiAgICBBZGREZWxldGVQcm9qZWN0RXZlbnQoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naWMuRGVsZXRlUHJvamVjdCh0aGlzLmxvZ2ljLkdldEN1cnJlbnRJbmRleCgpKTtcbiAgICAgICAgICAgIHRoaXMubG9naWMuU2V0Q3VycmVudFByb2plY3QoLTEpO1xuICAgICAgICAgICAgdGhpcy5FeGVjdXRlTW9kaWZpY2F0aW9uKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy9NYWluIGNvbnRlbnQsIHRvZ2dsZSB0YXNrIGRlc2NyaXB0aW9uXG4gICAgQWRkVG9nZ2xlRGVzY3JpcHRpb25FdmVudCgpe1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stcm93JyldLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKTtcbiAgICAgICAgICAgICAgICBkZXNjLmhpZGRlbiA9ICFkZXNjLmhpZGRlbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL01haW4gY29udGVudCwgYWRkIG5ldyB0YXNrIHRvIHByb2plY3RcbiAgICBBZGROZXdUYXNrRXZlbnRzKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9tLlRvZ2dsZU5ld1Rhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLW5ldy10YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9tLlRvZ2dsZU5ld1Rhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy10YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZHMgPSBbXTtcbiAgICAgICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZmllbGQnKV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCc6bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlmKCFpbnB1dC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGRzLnB1c2goaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYodGFza0ZpZWxkcy5sZW5ndGggPj0gNCl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tGaWVsZHNbMF0sIHRhc2tGaWVsZHNbMV0sIHRhc2tGaWVsZHNbMl0sIHRhc2tGaWVsZHNbM10pXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpLmFkZFRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgdGhpcy5FeGVjdXRlTW9kaWZpY2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vTWFpbiBjb250ZW50LCBldmVudHMgcmVsYXRlZCB0byB0aGUgYnV0dG9ucyBpbiB0aGUgdGFzayByb3dzIChlZGl0LCBjaGVjaywgZGVsZXRlIGJ1dHRvbnMpXG4gICAgQWRkVGFza0J1dHRvbkV2ZW50cygpe1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idG4nKV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLkdldEN1cnJlbnRQcm9qZWN0KCkuZGVsZXRlVGFzayhpdGVtLmRhdGFzZXQuaWR4KTtcbiAgICAgICAgICAgICAgICB0aGlzLkV4ZWN1dGVNb2RpZmljYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjay1idG4nKV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLkdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGFzayhpdGVtLmRhdGFzZXQuaWR4KS5Ub2dnbGVGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXhlY3V0ZU1vZGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtYnRuJyldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb20uVG9nZ2xlRWRpdFRhc2tGb3JtKHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKS5nZXRUYXNrKGl0ZW0uZGF0YXNldC5pZHgpKTtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5yZXBsYWNlV2l0aChlZGl0QnRuLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LW5hbWU+Omxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZGF0ZT46bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdC1kZXNjPjpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LXByaW8+Omxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFuYW1lLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnYmFkLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnYmFkLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIWRhdGUudmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdiYWQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdiYWQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZighZGVzYy52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCFwcmlvLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW8uY2xhc3NMaXN0LmFkZCgnYmFkLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW8uY2xhc3NMaXN0LnJlbW92ZSgnYmFkLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0VtcHR5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKS5nZXRUYXNrKGl0ZW0uZGF0YXNldC5pZHgpLkVkaXQobmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgZGVzYy52YWx1ZSwgcHJpby52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkV4ZWN1dGVNb2RpZmljYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgYSBjaGFuZ2UgaXMgbWFkZSB0byBhIHRhc2sgb3IgYSBwcm9qZWN0XG4gICAgRXhlY3V0ZU1vZGlmaWNhdGlvbigpe1xuICAgICAgICB0aGlzLmxvZ2ljLldyaXRlVG9TdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuZG9tLkJ1aWxkU2l0ZSh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCksIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QodGhpcy5sb2dpYy5HZXRDdXJyZW50SW5kZXgoKSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgdGhpcy5BZGRFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2RhdGEtY2xhc3Nlcy9wcm9qZWN0JztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL2RhdGEtY2xhc3Nlcy90YXNrJztcbmltcG9ydCBET01IYW5kbGVyIGZyb20gJy4vaGFuZGxlci1jbGFzc2VzL0RPTS1oYW5kbGVyJztcbmltcG9ydCBMb2dpY0hhbmRsZXIgZnJvbSAnLi9oYW5kbGVyLWNsYXNzZXMvbG9naWMtaGFuZGxlcic7XG5pbXBvcnQgU2l0ZUhhbmRsZXIgZnJvbSAnLi9oYW5kbGVyLWNsYXNzZXMvc2l0ZS1oYW5kbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBzaXRlID0gbmV3IFNpdGVIYW5kbGVyKCk7XG5zaXRlLkluaXQoKTtcblxuXG4vKiBUZXN0IGRhdGEgXG4gICAgVW5jb21tZW50IGFuZCBwdXQgc2l0ZSBoYW5kbGVyIGF0IHRoZSBlbmQgb2YgdGhlIHBhZ2UgdG8gdXNlISovXG4gICAgXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy8gbGV0IGRlZmF1bHRQcm9qZWN0VGVzdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuLy8gZGVmYXVsdFByb2plY3RUZXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgMScsJzIwMjItMTEtMjInLCAnVGFzayAxIGRlc2NyaXB0aW9uJywgJ2hpZ2gnKSk7XG4vLyBkZWZhdWx0UHJvamVjdFRlc3QuYWRkVGFzayhuZXcgVGFzaygnVGFzayAyJywnMjAyMi0xMS0yMycsICdUYXNrIDIgZGVzY3JpcHRpb24nLCAnbWVkaXVtJykpO1xuLy8gZGVmYXVsdFByb2plY3RUZXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgMycsJzIwMjItMTEtMjQnLCAnVGFzayAzIGRlc2NyaXB0aW9uJywgJ2xvdycpKTtcblxuLy8gbGV0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IE5leHVzXCIpO1xuLy8gcHJvamVjdDEuYWRkVGFzayhuZXcgVGFzaygnS2lsbCBBdWRpdG9yJywnMjAyMi0xMS0yMicsICdIZSBpcyBhIHd1c3Mgc28gaGUgbXVzdCBkaWUnLCAnaGlnaCcpKTtcbi8vIHByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soJ0dldCB0aGUgaGFsbycsJzIwMjItMTEtMjMnLCAnVGhlIGhhbG8gaXMgaW5kaXNwZW5zaWJsZSBmb3IgdGhlIHByb2plY3QnLCAnaGlnaCcpKTtcbi8vIHByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soJ0dldCBhIGhvdGRvZycsJzIwMjItMTEtMjQnLCAnWXVtbWkhJywgJ2xvdycpKTtcblxuLy8gbGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IEJlcnNlcmlhXCIpO1xuLy8gcHJvamVjdDIuYWRkVGFzayhuZXcgVGFzaygnTWFycnkgVmVsdmV0JywnMjAyMi0xMS0yMicsICdWZWx2ZXQgaXMgYmFlJywgJ2hpZ2gnKSk7XG4vLyBwcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKCdMaXN0ZW4gdG8gRWl6ZW4nLCcyMDIyLTExLTIzJywgJ0hlIGhhcyBjb29sIHN0b3JpZXMnLCAnbWVkaXVtJykpO1xuLy8gcHJvamVjdDIuYWRkVGFzayhuZXcgVGFzaygnRHJpbmsgd2l0aCBSb2t1cm91JywnMjAyMi0xMS0yNCcsICdXb25kZXIgaWYgSSBjYW4gYmVhdCBoaW0nLCAnbG93JykpO1xuXG4vLyBsZXQgcHJvamVjdHNUZXN0ID0gW3Byb2plY3QxLCBwcm9qZWN0Ml1cbi8vIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzVGVzdCk7XG4vLyBsb2NhbFN0b3JhZ2UuZGVmYXVsdFByb2plY3QgPSBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdFRlc3QpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==