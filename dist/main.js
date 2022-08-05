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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;;IAEtB,kBAAkB;;IAElB,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;;AAEnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,sBAAsB;;IAEtB,iBAAiB;IACjB,gCAAgC;IAChC,kCAAkC;;AAEtC;AACA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;;IAEtB,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;AACxB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,0BAA0B;IAC1B,eAAe;IACf,WAAW;AACf;;AAEA;AACA;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":["body{\n    padding: 0;\n    margin: 0;\n    background-color: rgb(240, 237, 231);\n    box-sizing: border-box;\n}\n\n.content{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar{\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n\n    padding: 20px 10px;\n\n    background-color:rgb(145, 174, 212);\n    font-size: 2rem;\n}\n\n.default-project, .project-header{\n    font-weight: bold;\n}\n\n.default-project{\n    font-size: 1.5rem;\n    border-bottom: 2px solid steelblue;\n    cursor: pointer;\n}\n\n.projects{\n    font-size: 1.5rem;\n    font-style: italic;\n}\n\n.project-header{\n\n}\n\n.project-item{\n    border-bottom: 1px solid steelblue;\n    border-left: 5px solid steelblue;\n    cursor: pointer;\n}\n\n.project-item:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.add-project{\n    margin-top: 10px;\n    font-style: normal;\n    padding-left: 5px;\n    font-size: 1.5rem;\n}\n\n.add-project > span, .task-add > span{\n    border: 1px solid steelblue;\n    border-radius: 20px;\n    padding: 4px 8px;\n    cursor: pointer;\n    \n}\n\n.add-project > span:hover, .project-item:hover, .default-project:hover, .task-add > span:hover, .active-project{\n    background-color: steelblue;\n    color: white;\n}\n\n.main-content{\n    padding: 10px 20px;\n    font-size: 1.2rem;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.tasks{\n    display: flex;\n    flex-direction: column;\n}\n\n.task-row{\n    display: grid;\n    grid-template-columns: 1fr 100px 250px;\n    width: max(60%, 800px);\n\n    padding: 15px 5px;\n    border-left: 5px solid steelblue;\n    border-bottom: 1px solid steelblue;\n    \n}\n.task-row:first-child{\n    border-top: 1px solid steelblue;\n}\n\n.task-add{\n    margin-top: 15px;\n    padding-left: 15px;\n}\n\n.task-btns{\n    padding-left: 20px;\n}\n\n.task-btns > button, .add-btns > button, .content-header>button{\n    background-color: rgb(53, 53, 54);\n    color: white;\n    border: 2px solid black;\n    border-radius: 20px;\n    padding: 5px 0px;\n    width: 60px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.task-btns > button:hover, .add-btns>button:hover, .content-header>button:hover{\n    color: rgb(53, 53, 54);\n    background-color: white;\n}\n\n.task-desc{\n    padding-left: 20px;\n    margin: 10px;\n    font-size: 1rem;\n}\n\n.task-add-form{\n    margin-top: 20px;\n    width: max(40%, 500px);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    justify-items: start;\n}\n\n.hidden {\n    display: none;\n  }\n\n.input-field{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    text-transform: capitalize;\n    font-size: 1rem;\n    color: gray;\n}\n\n.input-field > input{\n}\n\n.content-header{\n    width: max(60%, 800px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-header>button{\n    width: 180px;\n    height: 40px;\n    font-size: 1.2rem;\n    padding: 0;\n}\n\n.prio-high:hover{\n    background-color: red;\n}\n\n.prio-medium:hover{\n    background-color: yellow;\n}\n\n.prio-low:hover{\n    background-color: green;\n}\n\n.bad-input{\n    outline: 1px solid red;\n}\n\n.add-new-project-btns > button{\n    margin-left: 3px;\n    background-color: steelblue;\n    color: white;\n    border: 2px solid black;\n    padding: 5px;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n#new-project-name{\n    padding: 5px;\n    border: none;\n    border-radius: 20px;\n}\n"],"sourceRoot":""}]);
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
function createMainContent(project){

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
        this.BuildProject(currentProject);
    }

    SetActiveProject(idx){
        const active = document.querySelector('.active-project');
        console.log(active);
        if(active){
            active.classList.remove('active-project');
        }
        if(+idx === -1){
            document.querySelector('.default-project').classList.add('active-project');
        }
        else{
            document.querySelector(`[data-idx='${idx}']`).classList.add('active-project');
        }
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

    BuildProject(currentProject){
        //this.content.appendChild(createMainContent(currentProject));
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
                for(let task of projectRaw.tasks){
                    project.tasks.push(task);
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
/* harmony import */ var _DOM_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-handler */ "./src/handler-classes/DOM-handler.js");
/* harmony import */ var _logic_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic-handler */ "./src/handler-classes/logic-handler.js");



class SiteHandler{
    constructor(){
        this.logic = new _logic_handler__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.dom = new _DOM_handler__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Init(){
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(-1);
        this.AddEventHandlers();
    }
    AddEventHandlers(){
        this.AddChangeProjectEvents();
        this.AddNewProjectEvents();
    }

    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.dom.SetActiveProject(-1);
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.dom.SetActiveProject(item.dataset.idx);
            });
        });
    }

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
                this.dom.SetActiveProject(this.logic.GetCurrentIndex());
                this.AddEventHandlers();
            }
            else{
                input.classList.add('bad-input');
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

// localStorage.clear();

// let defaultProjectTest = new Project("Default Project");
// defaultProjectTest.addTask(new Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
// defaultProjectTest.addTask(new Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
// defaultProjectTest.addTask(new Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

// let project = {
//     name: "Project 1",
//     taskList: [
//         {name: "task1", desc: "task1 description", date: "2022-11-22", prio: "high"},
//         {name: "task2", desc: "task2 description", date: "2022-11-23", prio: "medium"},
//         {name: "task3", desc: "task3 description", date: "2022-11-24", prio: "low"}
//     ]
// }
// let project2 = {
//     name: "Project 2",
//     taskList: [
//         {name: "task1", desc: "task1 description"},
//         {name: "task2", desc: "task2 description"}
//     ]
// }
// let projectsTest = [project, project2]
// localStorage.projects = JSON.stringify(projectsTest);
// localStorage.defaultProject = JSON.stringify(defaultProjectTest);


const site = new _handler_classes_site_handler__WEBPACK_IMPORTED_MODULE_4__["default"]();
site.Init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRUFBMkU7QUFDdkYsWUFBWSw2RUFBNkU7QUFDekYsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlDQUF5QztBQUNyRCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUJBQWlCLHFFQUFXO0FBQzVCLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGF0YS1jbGFzc2VzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGF0YS1jbGFzc2VzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaGFuZGxlci1jbGFzc2VzL0RPTS1oYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2hhbmRsZXItY2xhc3Nlcy9sb2dpYy1oYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2hhbmRsZXItY2xhc3Nlcy9zaXRlLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNywgMjMxKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0NSwgMTc0LCAyMTIpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3QsIC5wcm9qZWN0LWhlYWRlcntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3R7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgc3RlZWxibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c3tcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByb2plY3QtaGVhZGVye1xcblxcbn1cXG5cXG4ucHJvamVjdC1pdGVte1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmZpcnN0LWNoaWxke1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgc3RlZWxibHVlO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QgPiBzcGFuLCAudGFzay1hZGQgPiBzcGFue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcblxcbi5hZGQtcHJvamVjdCA+IHNwYW46aG92ZXIsIC5wcm9qZWN0LWl0ZW06aG92ZXIsIC5kZWZhdWx0LXByb2plY3Q6aG92ZXIsIC50YXNrLWFkZCA+IHNwYW46aG92ZXIsIC5hY3RpdmUtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluLWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stcm93e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweCAyNTBweDtcXG4gICAgd2lkdGg6IG1heCg2MCUsIDgwMHB4KTtcXG5cXG4gICAgcGFkZGluZzogMTVweCA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBcXG59XFxuLnRhc2stcm93OmZpcnN0LWNoaWxke1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgc3RlZWxibHVlO1xcbn1cXG5cXG4udGFzay1hZGR7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLnRhc2stYnRuc3tcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1idG5zID4gYnV0dG9uLCAuYWRkLWJ0bnMgPiBidXR0b24sIC5jb250ZW50LWhlYWRlcj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDU0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWJ0bnMgPiBidXR0b246aG92ZXIsIC5hZGQtYnRucz5idXR0b246aG92ZXIsIC5jb250ZW50LWhlYWRlcj5idXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiByZ2IoNTMsIDUzLCA1NCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZXNje1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1hZGQtZm9ybXtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IG1heCg0MCUsIDUwMHB4KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LWZpZWxkID4gaW5wdXR7XFxufVxcblxcbi5jb250ZW50LWhlYWRlcntcXG4gICAgd2lkdGg6IG1heCg2MCUsIDgwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXI+YnV0dG9ue1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcmlvLWhpZ2g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnByaW8tbWVkaXVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcmlvLWxvdzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5iYWQtaW5wdXR7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3QtYnRucyA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1uYW1le1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGtCQUFrQjs7SUFFbEIsbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxrQ0FBa0M7O0FBRXRDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM3LCAyMzEpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ1LCAxNzQsIDIxMik7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdCwgLnByb2plY3QtaGVhZGVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJ7XFxuXFxufVxcblxcbi5wcm9qZWN0LWl0ZW17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06Zmlyc3QtY2hpbGR7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdCA+IHNwYW4sIC50YXNrLWFkZCA+IHNwYW57XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gc3Bhbjpob3ZlciwgLnByb2plY3QtaXRlbTpob3ZlciwgLmRlZmF1bHQtcHJvamVjdDpob3ZlciwgLnRhc2stYWRkID4gc3Bhbjpob3ZlciwgLmFjdGl2ZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4IDI1MHB4O1xcbiAgICB3aWR0aDogbWF4KDYwJSwgODAwcHgpO1xcblxcbiAgICBwYWRkaW5nOiAxNXB4IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIFxcbn1cXG4udGFzay1yb3c6Zmlyc3QtY2hpbGR7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcblxcbi50YXNrLWFkZHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGFzay1idG5ze1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50YXNrLWJ0bnMgPiBidXR0b24sIC5hZGQtYnRucyA+IGJ1dHRvbiwgLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stYnRucyA+IGJ1dHRvbjpob3ZlciwgLmFkZC1idG5zPmJ1dHRvbjpob3ZlciwgLmNvbnRlbnQtaGVhZGVyPmJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHJnYig1MywgNTMsIDU0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWRlc2N7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWFkZC1mb3Jte1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogbWF4KDQwJSwgNTAwcHgpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbi5pbnB1dC1maWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtZmllbGQgPiBpbnB1dHtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVye1xcbiAgICB3aWR0aDogbWF4KDYwJSwgODAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWhlYWRlcj5idXR0b257XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByaW8taGlnaDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpby1tZWRpdW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnByaW8tbG93OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJhZC1pbnB1dHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZC1uZXctcHJvamVjdC1idG5zID4gYnV0dG9ue1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LW5hbWV7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KHByb2plY3Qpe1xuXG59IiwiZnVuY3Rpb24gY3JlYXRlRGl2KGRpdkNsYXNzLCBkaXZUZXh0KXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXZDbGFzcyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gZGl2VGV4dDtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cyl7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0cyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgICAgaXRlbS5kYXRhc2V0LmlkeCA9IGk7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3RzRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRCdG4oKXtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnK05ldyBQcm9qZWN0JztcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgcmV0dXJuIGFkZEJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkSW5wdXRGaWVsZCgpe1xuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtaW5wdXQnKTtcbiAgICBpbnB1dERpdi5oaWRkZW4gPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmlkID0gJ25ldy1wcm9qZWN0LW5hbWUnO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmlkID0gJ2FkZC1uZXctcHJvamVjdCc7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLmlkID0gJ2NhbmNlbC1uZXctcHJvamVjdCc7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctcHJvamVjdC1idG5zJyk7XG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgICBcbiAgICByZXR1cm4gaW5wdXREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIocHJvamVjdHMpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCdkZWZhdWx0LXByb2plY3QnLCAnRGVmYXVsdCBUYXNrcycpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZURpdigncHJvamVjdC1oZWFkZXInLCAnUHJvamVjdHM6ICcpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzKHByb2plY3RzKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVBZGRCdG4oKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVBZGRJbnB1dEZpZWxkKCkpO1xuICAgIHJldHVybiBzaWRlYmFyO1xufSIsImV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZ2V0VGFzayhpbmRleCl7XG4gICAgICAgIHJldHVybiB0YXNrc1tpbmRleF07XG4gICAgfVxuICAgIGRlbGV0ZVRhc2soaWR4KXtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgZGVzYywgcHJpbyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMucHJpbyA9IHByaW87XG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVNYWluQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnRcIjtcbmltcG9ydCBjcmVhdGVTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NSGFuZGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIH1cblxuICAgIEJ1aWxkU2l0ZShwcm9qZWN0cywgY3VycmVudFByb2plY3Qpe1xuICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKHByb2plY3RzKSk7XG4gICAgICAgIHRoaXMuQnVpbGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBTZXRBY3RpdmVQcm9qZWN0KGlkeCl7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpO1xuICAgICAgICBpZihhY3RpdmUpe1xuICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoK2lkeCA9PT0gLTEpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkeD0nJHtpZHh9J11gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVG9nZ2xlTmV3UHJvamVjdEZvcm0oKXtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhZC1pbnB1dCcpO1xuICAgICAgICBhZGRQcm9qZWN0LmhpZGRlbiA9ICFhZGRQcm9qZWN0LmhpZGRlbjtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uaGlkZGVuID0gIWFkZFByb2plY3RGb3JtLmhpZGRlbjtcbiAgICB9XG5cbiAgICBCdWlsZFByb2plY3QoY3VycmVudFByb2plY3Qpe1xuICAgICAgICAvL3RoaXMuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGVudChjdXJyZW50UHJvamVjdCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL2RhdGEtY2xhc3Nlcy9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2ljSGFuZGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgVGFza3NcIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0UmF3ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFByb2plY3QnKSk7XG4gICAgICAgIGlmKGRlZmF1bHRQcm9qZWN0UmF3KXtcbiAgICAgICAgICAgIGZvcihsZXQgdGFzayBvZiBkZWZhdWx0UHJvamVjdFJhdy50YXNrcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3RzUmF3ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIGlmKHByb2plY3RzUmF3KXtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvamVjdFJhdyBvZiBwcm9qZWN0c1Jhdyl7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0UmF3Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgdGFzayBvZiBwcm9qZWN0UmF3LnRhc2tzKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG4gICAgfVxuICAgIEdldFByb2plY3RMaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0O1xuICAgIH1cbiAgICBHZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9qZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFt0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdldEN1cnJlbnRJbmRleCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvamVjdEluZGV4O1xuICAgIH1cbiAgICBTZXRDdXJyZW50UHJvamVjdChpZHgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPSBpZHg7XG4gICAgfVxuICAgIEFkZFByb2plY3QobmFtZSl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG4gICAgfVxuICAgIERlbGV0ZVByb2plY3QoaWR4KXtcbiAgICAgICAgaWYoaWR4ICE9PSAtMSl7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyaXRlVG9TdG9yYWdlKCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGVmYXVsdFByb2plY3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0TGlzdCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET00taGFuZGxlclwiO1xuaW1wb3J0IExvZ2ljSGFuZGxlciBmcm9tIFwiLi9sb2dpYy1oYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpdGVIYW5kbGVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubG9naWMgPSBuZXcgTG9naWNIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuZG9tID0gbmV3IERPTUhhbmRsZXIoKTtcbiAgICB9XG4gICAgSW5pdCgpe1xuICAgICAgICB0aGlzLmRvbS5CdWlsZFNpdGUodGhpcy5sb2dpYy5HZXRQcm9qZWN0TGlzdCgpLCB0aGlzLmxvZ2ljLkdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICB0aGlzLmRvbS5TZXRBY3RpdmVQcm9qZWN0KC0xKTtcbiAgICAgICAgdGhpcy5BZGRFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuICAgIEFkZEV2ZW50SGFuZGxlcnMoKXtcbiAgICAgICAgdGhpcy5BZGRDaGFuZ2VQcm9qZWN0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuQWRkTmV3UHJvamVjdEV2ZW50cygpO1xuICAgIH1cblxuICAgIEFkZENoYW5nZVByb2plY3RFdmVudHMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naWMuU2V0Q3VycmVudFByb2plY3QoLTEpO1xuICAgICAgICAgICAgdGhpcy5kb20uU2V0QWN0aXZlUHJvamVjdCgtMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpXS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLlNldEN1cnJlbnRQcm9qZWN0KGl0ZW0uZGF0YXNldC5pZHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tLlNldEFjdGl2ZVByb2plY3QoaXRlbS5kYXRhc2V0LmlkeCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQWRkTmV3UHJvamVjdEV2ZW50cygpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbS5Ub2dnbGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9tLlRvZ2dsZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWMuQWRkUHJvamVjdChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5TZXRDdXJyZW50UHJvamVjdCh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5Xcml0ZVRvU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tLkJ1aWxkU2l0ZSh0aGlzLmxvZ2ljLkdldFByb2plY3RMaXN0KCksIHRoaXMubG9naWMuR2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb20uU2V0QWN0aXZlUHJvamVjdCh0aGlzLmxvZ2ljLkdldEN1cnJlbnRJbmRleCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFkZEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYmFkLWlucHV0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vZGF0YS1jbGFzc2VzL3Byb2plY3QnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vZGF0YS1jbGFzc2VzL3Rhc2snO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSAnLi9oYW5kbGVyLWNsYXNzZXMvRE9NLWhhbmRsZXInO1xuaW1wb3J0IExvZ2ljSGFuZGxlciBmcm9tICcuL2hhbmRsZXItY2xhc3Nlcy9sb2dpYy1oYW5kbGVyJztcbmltcG9ydCBTaXRlSGFuZGxlciBmcm9tICcuL2hhbmRsZXItY2xhc3Nlcy9zaXRlLWhhbmRsZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIGxldCBkZWZhdWx0UHJvamVjdFRlc3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0VGVzdC5hZGRUYXNrKG5ldyBUYXNrKCdUYXNrIDEnLCcyMDIyLTExLTIyJywgJ1Rhc2sgMSBkZXNjcmlwdGlvbicsICdoaWdoJykpO1xuLy8gZGVmYXVsdFByb2plY3RUZXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgMicsJzIwMjItMTEtMjMnLCAnVGFzayAyIGRlc2NyaXB0aW9uJywgJ21lZGl1bScpKTtcbi8vIGRlZmF1bHRQcm9qZWN0VGVzdC5hZGRUYXNrKG5ldyBUYXNrKCdUYXNrIDMnLCcyMDIyLTExLTI0JywgJ1Rhc2sgMyBkZXNjcmlwdGlvbicsICdsb3cnKSk7XG5cbi8vIGxldCBwcm9qZWN0ID0ge1xuLy8gICAgIG5hbWU6IFwiUHJvamVjdCAxXCIsXG4vLyAgICAgdGFza0xpc3Q6IFtcbi8vICAgICAgICAge25hbWU6IFwidGFzazFcIiwgZGVzYzogXCJ0YXNrMSBkZXNjcmlwdGlvblwiLCBkYXRlOiBcIjIwMjItMTEtMjJcIiwgcHJpbzogXCJoaWdoXCJ9LFxuLy8gICAgICAgICB7bmFtZTogXCJ0YXNrMlwiLCBkZXNjOiBcInRhc2syIGRlc2NyaXB0aW9uXCIsIGRhdGU6IFwiMjAyMi0xMS0yM1wiLCBwcmlvOiBcIm1lZGl1bVwifSxcbi8vICAgICAgICAge25hbWU6IFwidGFzazNcIiwgZGVzYzogXCJ0YXNrMyBkZXNjcmlwdGlvblwiLCBkYXRlOiBcIjIwMjItMTEtMjRcIiwgcHJpbzogXCJsb3dcIn1cbi8vICAgICBdXG4vLyB9XG4vLyBsZXQgcHJvamVjdDIgPSB7XG4vLyAgICAgbmFtZTogXCJQcm9qZWN0IDJcIixcbi8vICAgICB0YXNrTGlzdDogW1xuLy8gICAgICAgICB7bmFtZTogXCJ0YXNrMVwiLCBkZXNjOiBcInRhc2sxIGRlc2NyaXB0aW9uXCJ9LFxuLy8gICAgICAgICB7bmFtZTogXCJ0YXNrMlwiLCBkZXNjOiBcInRhc2syIGRlc2NyaXB0aW9uXCJ9XG4vLyAgICAgXVxuLy8gfVxuLy8gbGV0IHByb2plY3RzVGVzdCA9IFtwcm9qZWN0LCBwcm9qZWN0Ml1cbi8vIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzVGVzdCk7XG4vLyBsb2NhbFN0b3JhZ2UuZGVmYXVsdFByb2plY3QgPSBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdFRlc3QpO1xuXG5cbmNvbnN0IHNpdGUgPSBuZXcgU2l0ZUhhbmRsZXIoKTtcbnNpdGUuSW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==