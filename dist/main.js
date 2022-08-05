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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    margin-left: 5px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;;IAEtB,kBAAkB;;IAElB,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;;AAEnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,sBAAsB;;IAEtB,iBAAiB;IACjB,gCAAgC;IAChC,kCAAkC;;AAEtC;AACA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;;IAEtB,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;AACxB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,0BAA0B;IAC1B,eAAe;IACf,WAAW;AACf;;AAEA;AACA;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":["body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    margin-left: 5px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n"],"sourceRoot":""}]);
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

function createMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(createHeader(project.name));
    mainContent.appendChild(createTasklist(project.tasks));
    mainContent.appendChild(createTaskAdd());
    mainContent.appendChild(createTaskAddForm());
    return mainContent;
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
        return tasks[index];
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
    constructor(name, date, desc, prio){
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



class DOMHandler{
    constructor(){
        this.content = document.querySelector('.content');
    }

    BuildSite(projects, currentProject){
        this.content.innerHTML = '';
        this.content.appendChild((0,_components_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])(projects));
        this.CreateMainContent(currentProject);
    }

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
        // projectNameInput.value = '';
        // projectNameInput.classList.remove('bad-input');
        
    }

    CreateMainContent(currentProject){
        const mainContent = document.querySelector('.main-content');
        if(mainContent){
            mainContent.remove();
        }
        this.content.appendChild((0,_components_main_content__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject));
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


class LogicHandler{
    constructor(){
        this.projectList = [];
        this.defaultProject = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project("Default Tasks");
        const defaultProjectRaw = JSON.parse(localStorage.getItem('defaultProject'));
        if(defaultProjectRaw){
            for(let task of defaultProjectRaw.tasks){
                this.defaultProject.addTask(task);
            }
        }
        const projectsRaw = JSON.parse(localStorage.getItem('projects'));
        if(projectsRaw){
            for(let projectRaw of projectsRaw){
                let project = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project(projectRaw.name);
                if(projectRaw.tasks){
                    for(let task of projectRaw.tasks){
                        project.tasks.push(task);
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
    }



    //Sidebar, change active project
    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.dom.SetActiveProject(-1, this.logic.GetCurrentProject());
            this.AddEventHandlers();
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.dom.SetActiveProject(item.dataset.idx, this.logic.GetCurrentProject());
                this.AddEventHandlers();
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
                this.logic.WriteToStorage();
                this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
                this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
                this.AddEventHandlers();
            }
            else{
                input.classList.add('bad-input');
            }
        });
    }

    //Main content, delete project
    AddDeleteProjectEvent(){
        document.querySelector('.content-header>button').addEventListener('click', (e) => {
            console.log('aaa');
            this.logic.DeleteProject(this.logic.GetCurrentIndex());
            this.logic.SetCurrentProject(-1);
            this.logic.WriteToStorage();
            this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
            this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
            this.AddEventHandlers();
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
                this.logic.WriteToStorage();
                this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
                this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
                this.AddEventHandlers();
            }
            
        });
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






// const content = document.querySelector('.content');

localStorage.clear();

let defaultProjectTest = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project("Default Project");
defaultProjectTest.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
defaultProjectTest.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
defaultProjectTest.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

let project1 = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project("Project Nexus");
project1.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Kill Auditor','2022-11-22', 'He is a wuss so he must die', 'high'));
project1.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Get the halo','2022-11-23', 'The halo is indispensible for the project', 'high'));
project1.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Get a hotdog','2022-11-24', 'Yummi!', 'low'));

let project2 = new _data_classes_project__WEBPACK_IMPORTED_MODULE_0__.Project("Project Berseria");
project2.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Marry Velvet','2022-11-22', 'Velvet is bae', 'high'));
project2.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Listen to Eizen','2022-11-23', 'He has cool stories', 'medium'));
project2.addTask(new _data_classes_task__WEBPACK_IMPORTED_MODULE_1__.Task('Drink with Rokurou','2022-11-24', 'Wonder if I can beat him', 'low'));

let projectsTest = [project1, project2]
localStorage.projects = JSON.stringify(projectsTest);
localStorage.defaultProject = JSON.stringify(defaultProjectTest);


const site = new _handler_classes_site_handler__WEBPACK_IMPORTED_MODULE_4__["default"]();
site.Init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLGlCQUFpQixnQkFBZ0IsMkNBQTJDLDZCQUE2QixHQUFHLGFBQWEsd0JBQXdCLG9CQUFvQixxQ0FBcUMsR0FBRyxhQUFhLHVCQUF1QixvQkFBb0IsNkJBQTZCLDJCQUEyQiw0Q0FBNEMsc0JBQXNCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IseUNBQXlDLHNCQUFzQixHQUFHLGNBQWMsd0JBQXdCLHlCQUF5QixHQUFHLG9CQUFvQixLQUFLLGtCQUFrQix5Q0FBeUMsdUNBQXVDLHNCQUFzQixHQUFHLDhCQUE4QixzQ0FBc0MsR0FBRyxpQkFBaUIsdUJBQXVCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEdBQUcsMENBQTBDLGtDQUFrQywwQkFBMEIsdUJBQXVCLHNCQUFzQixTQUFTLG9IQUFvSCxrQ0FBa0MsbUJBQW1CLEdBQUcsa0JBQWtCLHlCQUF5Qix3QkFBd0IsR0FBRyxrQkFBa0Isc0JBQXNCLHdCQUF3QiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsR0FBRyxjQUFjLG9CQUFvQiw2Q0FBNkMsNkJBQTZCLDBCQUEwQix1Q0FBdUMseUNBQXlDLFNBQVMsd0JBQXdCLHNDQUFzQyxHQUFHLGNBQWMsdUJBQXVCLHlCQUF5QixHQUFHLGVBQWUseUJBQXlCLEdBQUcsb0VBQW9FLHdDQUF3QyxtQkFBbUIsOEJBQThCLDBCQUEwQix1QkFBdUIsdUJBQXVCLGtCQUFrQix3QkFBd0Isc0JBQXNCLEdBQUcsb0ZBQW9GLDZCQUE2Qiw4QkFBOEIsR0FBRyxlQUFlLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLHFDQUFxQyxnQkFBZ0IsMkJBQTJCLEdBQUcsYUFBYSxvQkFBb0IsS0FBSyxpQkFBaUIsb0JBQW9CLDZCQUE2QixlQUFlLGlDQUFpQyxzQkFBc0Isa0JBQWtCLEdBQUcseUJBQXlCLEdBQUcsb0JBQW9CLDZCQUE2QixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLDJCQUEyQixtQkFBbUIsbUJBQW1CLHdCQUF3QixpQkFBaUIsR0FBRyxxQkFBcUIsNEJBQTRCLEdBQUcsdUJBQXVCLCtCQUErQixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxlQUFlLDZCQUE2QixHQUFHLG1DQUFtQyx1QkFBdUIsa0NBQWtDLG1CQUFtQiw4QkFBOEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsR0FBRyxzQkFBc0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSwrQkFBK0IsaUJBQWlCLGdCQUFnQiwyQ0FBMkMsNkJBQTZCLEdBQUcsYUFBYSx3QkFBd0Isb0JBQW9CLHFDQUFxQyxHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLDRDQUE0QyxzQkFBc0IsR0FBRyxzQ0FBc0Msd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3Qix5Q0FBeUMsc0JBQXNCLEdBQUcsY0FBYyx3QkFBd0IseUJBQXlCLEdBQUcsb0JBQW9CLEtBQUssa0JBQWtCLHlDQUF5Qyx1Q0FBdUMsc0JBQXNCLEdBQUcsOEJBQThCLHNDQUFzQyxHQUFHLGlCQUFpQix1QkFBdUIseUJBQXlCLHdCQUF3Qix3QkFBd0IsR0FBRywwQ0FBMEMsa0NBQWtDLDBCQUEwQix1QkFBdUIsc0JBQXNCLFNBQVMsb0hBQW9ILGtDQUFrQyxtQkFBbUIsR0FBRyxrQkFBa0IseUJBQXlCLHdCQUF3QixHQUFHLGtCQUFrQixzQkFBc0Isd0JBQXdCLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixHQUFHLGNBQWMsb0JBQW9CLDZDQUE2Qyw2QkFBNkIsMEJBQTBCLHVDQUF1Qyx5Q0FBeUMsU0FBUyx3QkFBd0Isc0NBQXNDLEdBQUcsY0FBYyx1QkFBdUIseUJBQXlCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRyxvRUFBb0Usd0NBQXdDLG1CQUFtQiw4QkFBOEIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLHdCQUF3QixzQkFBc0IsR0FBRyxvRkFBb0YsNkJBQTZCLDhCQUE4QixHQUFHLGVBQWUseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsdUJBQXVCLDZCQUE2QixzQkFBc0IscUNBQXFDLGdCQUFnQiwyQkFBMkIsR0FBRyxhQUFhLG9CQUFvQixLQUFLLGlCQUFpQixvQkFBb0IsNkJBQTZCLGVBQWUsaUNBQWlDLHNCQUFzQixrQkFBa0IsR0FBRyx5QkFBeUIsR0FBRyxvQkFBb0IsNkJBQTZCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsMkJBQTJCLG1CQUFtQixtQkFBbUIsd0JBQXdCLGlCQUFpQixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyx1QkFBdUIsK0JBQStCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLGVBQWUsNkJBQTZCLEdBQUcsbUNBQW1DLHVCQUF1QixrQ0FBa0MsbUJBQW1CLDhCQUE4QixtQkFBbUIsd0JBQXdCLHlCQUF5QixHQUFHLHNCQUFzQixtQkFBbUIsbUJBQW1CLDBCQUEwQixHQUFHLHFCQUFxQjtBQUMxdVI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUQ7QUFDTjtBQUNZO0FBQ0k7QUFDRjtBQUNwQztBQUNyQjs7QUFFQTs7QUFFQSw2QkFBNkIsMERBQU87QUFDcEMsK0JBQStCLG9EQUFJO0FBQ25DLCtCQUErQixvREFBSTtBQUNuQywrQkFBK0Isb0RBQUk7O0FBRW5DLG1CQUFtQiwwREFBTztBQUMxQixxQkFBcUIsb0RBQUk7QUFDekIscUJBQXFCLG9EQUFJO0FBQ3pCLHFCQUFxQixvREFBSTs7QUFFekIsbUJBQW1CLDBEQUFPO0FBQzFCLHFCQUFxQixvREFBSTtBQUN6QixxQkFBcUIsb0RBQUk7QUFDekIscUJBQXFCLG9EQUFJOztBQUV6QjtBQUNBO0FBQ0E7OztBQUdBLGlCQUFpQixxRUFBVztBQUM1QixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RhdGEtY2xhc3Nlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RhdGEtY2xhc3Nlcy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2hhbmRsZXItY2xhc3Nlcy9ET00taGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9oYW5kbGVyLWNsYXNzZXMvbG9naWMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9oYW5kbGVyLWNsYXNzZXMvc2l0ZS1oYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzcsIDIzMSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDUsIDE3NCwgMjEyKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0LCAucHJvamVjdC1oZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG5cXG59XFxuXFxuLnByb2plY3QtaXRlbXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gc3BhbiwgLnRhc2stYWRkID4gc3BhbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYWRkLXByb2plY3QgPiBzcGFuOmhvdmVyLCAucHJvamVjdC1pdGVtOmhvdmVyLCAuZGVmYXVsdC1wcm9qZWN0OmhvdmVyLCAudGFzay1hZGQgPiBzcGFuOmhvdmVyLCAuYWN0aXZlLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1le1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLXJvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMjUwcHg7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgXFxufVxcbi50YXNrLXJvdzpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLnRhc2stYWRke1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi50YXNrLWJ0bnN7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stYnRucyA+IGJ1dHRvbiwgLmFkZC1idG5zID4gYnV0dG9uLCAuY29udGVudC1oZWFkZXI+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1NCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1idG5zID4gYnV0dG9uOmhvdmVyLCAuYWRkLWJ0bnM+YnV0dG9uOmhvdmVyLCAuY29udGVudC1oZWFkZXI+YnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogcmdiKDUzLCA1MywgNTQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBtYXgoNDAlLCA1MDBweCk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1maWVsZCA+IGlucHV0e1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXJ7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbntcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJpby1oaWdoOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcmlvLW1lZGl1bTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ucHJpby1sb3c6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmFkLWlucHV0e1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0LWJ0bnMgPiBidXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbmFtZXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixrQkFBa0I7O0lBRWxCLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsa0NBQWtDOztBQUV0QztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCOztJQUV0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzcsIDIzMSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDUsIDE3NCwgMjEyKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0LCAucHJvamVjdC1oZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcntcXG5cXG59XFxuXFxuLnByb2plY3QtaXRlbXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gc3BhbiwgLnRhc2stYWRkID4gc3BhbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYWRkLXByb2plY3QgPiBzcGFuOmhvdmVyLCAucHJvamVjdC1pdGVtOmhvdmVyLCAuZGVmYXVsdC1wcm9qZWN0OmhvdmVyLCAudGFzay1hZGQgPiBzcGFuOmhvdmVyLCAuYWN0aXZlLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1le1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLXJvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMjUwcHg7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgXFxufVxcbi50YXNrLXJvdzpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLnRhc2stYWRke1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi50YXNrLWJ0bnN7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stYnRucyA+IGJ1dHRvbiwgLmFkZC1idG5zID4gYnV0dG9uLCAuY29udGVudC1oZWFkZXI+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1NCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1idG5zID4gYnV0dG9uOmhvdmVyLCAuYWRkLWJ0bnM+YnV0dG9uOmhvdmVyLCAuY29udGVudC1oZWFkZXI+YnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogcmdiKDUzLCA1MywgNTQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGVzY3tcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYWRkLWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBtYXgoNDAlLCA1MDBweCk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1maWVsZCA+IGlucHV0e1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXJ7XFxuICAgIHdpZHRoOiBtYXgoNjAlLCA4MDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbntcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJpby1oaWdoOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcmlvLW1lZGl1bTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ucHJpby1sb3c6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmFkLWlucHV0e1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0LWJ0bnMgPiBidXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbmFtZXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpe1xuICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaGVhZGVyJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke25hbWV9YDtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICByZXR1cm4gY29udGVudEhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza3JvdyhpZHgsIHRhc2spe1xuICAgIGNvbnN0IHRhc2tyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrcm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcm93Jyk7XG4gICAgdGFza3Jvdy5jbGFzc0xpc3QuYWRkKGBwcmlvLSR7dGFzay5wcmlvfWApO1xuICAgIHRhc2tyb3cuZGF0YXNldC5pZHggPSBpZHg7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcblxuICAgIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0J0bnMuY2xhc3NMaXN0LmFkZCgndGFzay1idG5zJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGVkaXRCdG4uZGF0YXNldC5pZHggPSBpZHg7XG4gICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGVja0J0bi50ZXh0Q29udGVudCA9ICdDaGVjayc7XG4gICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2stYnRuJyk7XG4gICAgY2hlY2tCdG4uZGF0YXNldC5pZHggPSBpZHg7XG4gICAgdGFza0J0bnMuYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgZGVsZXRlQnRuLmRhdGFzZXQuaWR4ID0gaWR4O1xuICAgIHRhc2tCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcbiAgICB0YXNrRGVzYy5oaWRkZW4gPSB0cnVlO1xuXG4gICAgdGFza3Jvdy5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgdGFza3Jvdy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza3Jvdy5hcHBlbmRDaGlsZCh0YXNrQnRucyk7XG4gICAgdGFza3Jvdy5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgcmV0dXJuIHRhc2tyb3c7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tsaXN0KHRhc2tzKXtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJyk7XG4gICAgZm9yKGxldCBpIGluIHRhc2tzKXtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza3JvdyhpLCB0YXNrc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBZGQoKXtcbiAgICBjb25zdCB0YXNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0FkZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWFkZCcpO1xuICAgIHRhc2tBZGQuaW5uZXJIVE1MID0gJzxzcGFuPitOZXcgVGFzazwvc3Bhbj4nO1xuICAgIHJldHVybiB0YXNrQWRkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQWRkRm9ybSgpe1xuICAgIGNvbnN0IHRhc2tBZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0FkZEZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1hZGQtZm9ybScpO1xuICAgIHRhc2tBZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRhc2tBZGRGb3JtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFzay1uZXctbmFtZSBpbnB1dC1maWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj5UYXNrPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrLW5hbWVcIj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInRhc2stbmV3LWRhdGUgaW5wdXQtZmllbGRcIj5cbiAgICA8bGFiZWwgZm9yPVwidGFzay1kYXRlXCI+RHVlIGRhdGU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJ0YXNrLWRhdGVcIiBpZD1cInRhc2stZGF0ZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidGFzay1uZXctZGVzYyBpbnB1dC1maWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2stZGVzY1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInRhc2stbmV3LXByaW8gaW5wdXQtZmllbGRcIj5cbiAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvXCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgIDxzZWxlY3QgbmFtZT1cInRhc2stcHJpb1wiIGlkPVwidGFzay1wcmlvXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiYWRkLWJ0bnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLW5ldy10YXNrLWJ0blwiPkFkZDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtbmV3LXRhc2stYnRuXCI+Q2FuY2VsPC9idXR0b24+XG48L2Rpdj5gO1xuICAgIHJldHVybiB0YXNrQWRkRm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIocHJvamVjdC5uYW1lKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza2xpc3QocHJvamVjdC50YXNrcykpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tBZGQoKSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FkZEZvcm0oKSk7XG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xufSIsImZ1bmN0aW9uIGNyZWF0ZURpdihkaXZDbGFzcywgZGl2VGV4dCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2Q2xhc3MpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGRpdlRleHQ7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMocHJvamVjdHMpe1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgaW4gcHJvamVjdHMpe1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIGl0ZW0uZGF0YXNldC5pZHggPSBpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0c0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkQnRuKCl7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJytOZXcgUHJvamVjdCc7XG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHJldHVybiBhZGRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZElucHV0RmllbGQoKXtcbiAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWlucHV0Jyk7XG4gICAgaW5wdXREaXYuaGlkZGVuID0gdHJ1ZTtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5pZCA9ICduZXctcHJvamVjdC1uYW1lJztcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5pZCA9ICdhZGQtbmV3LXByb2plY3QnO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5pZCA9ICdjYW5jZWwtbmV3LXByb2plY3QnO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QtYnRucycpO1xuICAgIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG4gICAgXG4gICAgcmV0dXJuIGlucHV0RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyKHByb2plY3RzKXtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZURpdignZGVmYXVsdC1wcm9qZWN0JywgJ0RlZmF1bHQgVGFza3MnKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVEaXYoJ3Byb2plY3QtaGVhZGVyJywgJ1Byb2plY3RzOiAnKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkQnRuKCkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkSW5wdXRGaWVsZCgpKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn0iLCJleHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGdldFRhc2soaW5kZXgpe1xuICAgICAgICByZXR1cm4gdGFza3NbaW5kZXhdO1xuICAgIH1cbiAgICBkZWxldGVUYXNrKGlkeCl7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIGRlc2MsIHByaW8pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnByaW8gPSBwcmlvO1xuICAgIH1cbn0iLCJpbXBvcnQgY3JlYXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbi1jb250ZW50XCI7XG5pbXBvcnQgY3JlYXRlU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUhhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICB9XG5cbiAgICBCdWlsZFNpdGUocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcihwcm9qZWN0cykpO1xuICAgICAgICB0aGlzLkNyZWF0ZU1haW5Db250ZW50KGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBTZXRBY3RpdmVQcm9qZWN0KGlkeCwgcHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICBpZihhY3RpdmUpe1xuICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoK2lkeCA9PT0gLTEpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkeD0nJHtpZHh9J11gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgVG9nZ2xlTmV3UHJvamVjdEZvcm0oKXtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICBhZGRQcm9qZWN0LmhpZGRlbiA9ICFhZGRQcm9qZWN0LmhpZGRlbjtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uaGlkZGVuID0gIWFkZFByb2plY3RGb3JtLmhpZGRlbjtcbiAgICB9XG5cbiAgICBUb2dnbGVOZXdUYXNrRm9ybSgpe1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG4gICAgICAgIGFkZFRhc2suaGlkZGVuID0gIWFkZFRhc2suaGlkZGVuO1xuICAgICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZC1mb3JtJyk7XG4gICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpZWxkJyldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCc6bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAvLyBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBDcmVhdGVNYWluQ29udGVudChjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgICAgICBpZihtYWluQ29udGVudCl7XG4gICAgICAgICAgICBtYWluQ29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoY3VycmVudFByb2plY3QpKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9kYXRhLWNsYXNzZXMvcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpY0hhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFRhc2tzXCIpO1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdFJhdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JykpO1xuICAgICAgICBpZihkZWZhdWx0UHJvamVjdFJhdyl7XG4gICAgICAgICAgICBmb3IobGV0IHRhc2sgb2YgZGVmYXVsdFByb2plY3RSYXcudGFza3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qZWN0c1JhdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBpZihwcm9qZWN0c1Jhdyl7XG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3RSYXcgb2YgcHJvamVjdHNSYXcpe1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFJhdy5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0UmF3LnRhc2tzKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YXNrIG9mIHByb2plY3RSYXcudGFza3Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPSAtMTtcbiAgICB9XG4gICAgR2V0UHJvamVjdExpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3Q7XG4gICAgfVxuICAgIEdldEN1cnJlbnRQcm9qZWN0KCl7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFByb2plY3RJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb2plY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0W3RoaXMuY3VycmVudFByb2plY3RJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgR2V0Q3VycmVudEluZGV4KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXg7XG4gICAgfVxuICAgIFNldEN1cnJlbnRQcm9qZWN0KGlkeCl7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3RJbmRleCA9IGlkeDtcbiAgICB9XG4gICAgQWRkUHJvamVjdChuYW1lKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbiAgICB9XG4gICAgRGVsZXRlUHJvamVjdChpZHgpe1xuICAgICAgICBpZihpZHggIT09IC0xKXtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3Quc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgV3JpdGVUb1N0b3JhZ2UoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5kZWZhdWx0UHJvamVjdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RMaXN0KSk7XG4gICAgfVxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vZGF0YS1jbGFzc2VzL3Rhc2tcIjtcbmltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL0RPTS1oYW5kbGVyXCI7XG5pbXBvcnQgTG9naWNIYW5kbGVyIGZyb20gXCIuL2xvZ2ljLWhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0ZUhhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sb2dpYyA9IG5ldyBMb2dpY0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5kb20gPSBuZXcgRE9NSGFuZGxlcigpO1xuICAgIH1cbiAgICBJbml0KCl7XG4gICAgICAgIHRoaXMuZG9tLkJ1aWxkU2l0ZSh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCksIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QoLTEsIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgIHRoaXMuQWRkRXZlbnRIYW5kbGVycygpO1xuICAgIH1cbiAgICBBZGRFdmVudEhhbmRsZXJzKCl7XG4gICAgICAgIHRoaXMuQWRkQ2hhbmdlUHJvamVjdEV2ZW50cygpO1xuICAgICAgICB0aGlzLkFkZE5ld1Byb2plY3RFdmVudHMoKTtcbiAgICAgICAgdGhpcy5BZGREZWxldGVQcm9qZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5BZGRUb2dnbGVEZXNjcmlwdGlvbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuQWRkTmV3VGFza0V2ZW50cygpO1xuICAgIH1cblxuXG5cbiAgICAvL1NpZGViYXIsIGNoYW5nZSBhY3RpdmUgcHJvamVjdFxuICAgIEFkZENoYW5nZVByb2plY3RFdmVudHMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naWMuU2V0Q3VycmVudFByb2plY3QoLTEpO1xuICAgICAgICAgICAgdGhpcy5kb20uU2V0QWN0aXZlUHJvamVjdCgtMSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIHRoaXMuQWRkRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB9KTtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW0nKV0uZm9yRWFjaCgoaXRlbSk9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5TZXRDdXJyZW50UHJvamVjdChpdGVtLmRhdGFzZXQuaWR4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5TZXRBY3RpdmVQcm9qZWN0KGl0ZW0uZGF0YXNldC5pZHgsIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5BZGRFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9TaWRlYmFyLCBhZGQgbmV3IHByb2plY3RcbiAgICBBZGROZXdQcm9qZWN0RXZlbnRzKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9tLlRvZ2dsZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLW5ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb20uVG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICBpZihpbnB1dC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5BZGRQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLlNldEN1cnJlbnRQcm9qZWN0KHRoaXMubG9naWMuR2V0UHJvamVjdExpc3QoKS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLldyaXRlVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb20uQnVpbGRTaXRlKHRoaXMubG9naWMuR2V0UHJvamVjdExpc3QoKSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5TZXRBY3RpdmVQcm9qZWN0KHRoaXMubG9naWMuR2V0Q3VycmVudEluZGV4KCksIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5BZGRFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2JhZC1pbnB1dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL01haW4gY29udGVudCwgZGVsZXRlIHByb2plY3RcbiAgICBBZGREZWxldGVQcm9qZWN0RXZlbnQoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICAgICAgICAgIHRoaXMubG9naWMuRGVsZXRlUHJvamVjdCh0aGlzLmxvZ2ljLkdldEN1cnJlbnRJbmRleCgpKTtcbiAgICAgICAgICAgIHRoaXMubG9naWMuU2V0Q3VycmVudFByb2plY3QoLTEpO1xuICAgICAgICAgICAgdGhpcy5sb2dpYy5Xcml0ZVRvU3RvcmFnZSgpO1xuICAgICAgICAgICAgdGhpcy5kb20uQnVpbGRTaXRlKHRoaXMubG9naWMuR2V0UHJvamVjdExpc3QoKSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QodGhpcy5sb2dpYy5HZXRDdXJyZW50SW5kZXgoKSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIHRoaXMuQWRkRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vTWFpbiBjb250ZW50LCB0b2dnbGUgdGFzayBkZXNjcmlwdGlvblxuICAgIEFkZFRvZ2dsZURlc2NyaXB0aW9uRXZlbnQoKXtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXJvdycpXS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjJyk7XG4gICAgICAgICAgICAgICAgZGVzYy5oaWRkZW4gPSAhZGVzYy5oaWRkZW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9NYWluIGNvbnRlbnQsIGFkZCBuZXcgdGFzayB0byBwcm9qZWN0XG4gICAgQWRkTmV3VGFza0V2ZW50cygpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbS5Ub2dnbGVOZXdUYXNrRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1uZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbS5Ub2dnbGVOZXdUYXNrRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRmllbGRzID0gW107XG4gICAgICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpZWxkJyldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdiYWQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpZighaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdiYWQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkcy5wdXNoKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKHRhc2tGaWVsZHMubGVuZ3RoID49IDQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRmllbGRzWzBdLCB0YXNrRmllbGRzWzFdLCB0YXNrRmllbGRzWzJdLCB0YXNrRmllbGRzWzNdKVxuICAgICAgICAgICAgICAgIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKS5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWMuV3JpdGVUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5CdWlsZFNpdGUodGhpcy5sb2dpYy5HZXRQcm9qZWN0TGlzdCgpLCB0aGlzLmxvZ2ljLkdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QodGhpcy5sb2dpYy5HZXRDdXJyZW50SW5kZXgoKSwgdGhpcy5sb2dpYy5HZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFkZEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vZGF0YS1jbGFzc2VzL3Byb2plY3QnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vZGF0YS1jbGFzc2VzL3Rhc2snO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9oYW5kbGVyLWNsYXNzZXMvRE9NLWhhbmRsZXInO1xuaW1wb3J0IExvZ2ljSGFuZGxlciBmcm9tICcuL2hhbmRsZXItY2xhc3Nlcy9sb2dpYy1oYW5kbGVyJztcbmltcG9ydCBTaXRlSGFuZGxlciBmcm9tICcuL2hhbmRsZXItY2xhc3Nlcy9zaXRlLWhhbmRsZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmxldCBkZWZhdWx0UHJvamVjdFRlc3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTtcbmRlZmF1bHRQcm9qZWN0VGVzdC5hZGRUYXNrKG5ldyBUYXNrKCdUYXNrIDEnLCcyMDIyLTExLTIyJywgJ1Rhc2sgMSBkZXNjcmlwdGlvbicsICdoaWdoJykpO1xuZGVmYXVsdFByb2plY3RUZXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgMicsJzIwMjItMTEtMjMnLCAnVGFzayAyIGRlc2NyaXB0aW9uJywgJ21lZGl1bScpKTtcbmRlZmF1bHRQcm9qZWN0VGVzdC5hZGRUYXNrKG5ldyBUYXNrKCdUYXNrIDMnLCcyMDIyLTExLTI0JywgJ1Rhc2sgMyBkZXNjcmlwdGlvbicsICdsb3cnKSk7XG5cbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCBOZXh1c1wiKTtcbnByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soJ0tpbGwgQXVkaXRvcicsJzIwMjItMTEtMjInLCAnSGUgaXMgYSB3dXNzIHNvIGhlIG11c3QgZGllJywgJ2hpZ2gnKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCdHZXQgdGhlIGhhbG8nLCcyMDIyLTExLTIzJywgJ1RoZSBoYWxvIGlzIGluZGlzcGVuc2libGUgZm9yIHRoZSBwcm9qZWN0JywgJ2hpZ2gnKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKCdHZXQgYSBob3Rkb2cnLCcyMDIyLTExLTI0JywgJ1l1bW1pIScsICdsb3cnKSk7XG5cbmxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCBCZXJzZXJpYVwiKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJ01hcnJ5IFZlbHZldCcsJzIwMjItMTEtMjInLCAnVmVsdmV0IGlzIGJhZScsICdoaWdoJykpO1xucHJvamVjdDIuYWRkVGFzayhuZXcgVGFzaygnTGlzdGVuIHRvIEVpemVuJywnMjAyMi0xMS0yMycsICdIZSBoYXMgY29vbCBzdG9yaWVzJywgJ21lZGl1bScpKTtcbnByb2plY3QyLmFkZFRhc2sobmV3IFRhc2soJ0RyaW5rIHdpdGggUm9rdXJvdScsJzIwMjItMTEtMjQnLCAnV29uZGVyIGlmIEkgY2FuIGJlYXQgaGltJywgJ2xvdycpKTtcblxubGV0IHByb2plY3RzVGVzdCA9IFtwcm9qZWN0MSwgcHJvamVjdDJdXG5sb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c1Rlc3QpO1xubG9jYWxTdG9yYWdlLmRlZmF1bHRQcm9qZWN0ID0gSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFByb2plY3RUZXN0KTtcblxuXG5jb25zdCBzaXRlID0gbmV3IFNpdGVIYW5kbGVyKCk7XG5zaXRlLkluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=