(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Audio */ "./src/components/Audio.js");
/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _src_components_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Cursor */ "./src/components/Cursor.js");
/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Home */ "./src/components/Home.js");
/* harmony import */ var _src_components_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/News */ "./src/components/News.js");
/* harmony import */ var _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Portfolio */ "./src/components/Portfolio.js");
/* harmony import */ var _src_components_Price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Price */ "./src/components/Price.js");
/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Skills */ "./src/components/Skills.js");
/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Timeline */ "./src/components/Timeline.js");
/* harmony import */ var _src_layout_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/layout/Footer */ "./src/layout/Footer.js");
/* harmony import */ var _src_layout_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _src_layout_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/layout/Settings */ "./src/layout/Settings.js");
/* harmony import */ var _src_PageHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/PageHead */ "./src/PageHead.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_News__WEBPACK_IMPORTED_MODULE_5__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_News__WEBPACK_IMPORTED_MODULE_5__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\pages\\index.js";
















const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_PageHead__WEBPACK_IMPORTED_MODULE_13__.default, {
      page: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      id: "opened",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "kura_tm_all_wrap",
        "data-color": "orange",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_layout_Settings__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_layout_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Home__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Skills__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Price__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_News__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Contact__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_layout_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Audio__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Cursor__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
});

/***/ }),

/***/ "./src/PageHead.js":
/*!*************************!*\
  !*** ./src/PageHead.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\PageHead.js";



const PageHead = ({
  page
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: ["Kura | ", page]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);

/***/ }),

/***/ "./src/components/Audio.js":
/*!*********************************!*\
  !*** ./src/components/Audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Audio.js";



const Audio = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/1.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/2.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Audio);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Contact.js";



const Contact = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_contact",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Get in Touch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "contact_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "short",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "44 Place, Tokyo, Japan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 473.806 473.806",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "+77 033 442 55 57"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "Capa_1",
                      enableBackground: "new 0 0 479.058 479.058",
                      height: "512",
                      viewBox: "0 0 479.058 479.058",
                      width: "512",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "dodo@gmail.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 479.447 479.447",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M239.446,0.022c-8.594,0-17.182,0.462-25.727,1.383c-7.832,0.8-15.568,2.112-23.2,3.704    c-1.477,0.309-2.955,0.635-4.432,0.976C141.12,16.323,100.06,39.314,67.831,72.301c-2.997,3.072-5.931,6.235-8.8,9.488    c-87.06,99.948-76.612,251.548,23.337,338.608c95.688,83.349,239.723,77.803,328.719-12.656c3.003-3.072,5.936-6.235,8.8-9.488    c38.421-43.754,59.594-100.003,59.56-158.232C479.447,107.472,371.995,0.021,239.446,0.022z M78.495,84.301    c1.264-1.312,2.576-2.568,3.864-3.84c1.488-1.464,2.968-2.936,4.488-4.352c1.336-1.248,2.712-2.448,4.08-3.664    c1.544-1.368,3.08-2.736,4.664-4.056c1.392-1.176,2.824-2.304,4.248-3.44c1.6-1.28,3.2-2.56,4.848-3.792    c1.456-1.096,2.936-2.16,4.424-3.2c1.656-1.184,3.32-2.4,5.008-3.504c1.512-1.024,3.04-2.016,4.576-3    c1.712-1.096,3.432-2.176,5.168-3.2c1.563-0.933,3.136-1.851,4.72-2.752c1.771-1.008,3.549-1.992,5.336-2.952    c1.6-0.853,3.2-1.688,4.8-2.504c1.824-0.92,3.664-1.808,5.512-2.68c1.6-0.76,3.264-1.52,4.912-2.24c1.88-0.8,3.784-1.6,5.688-2.4    c1.656-0.68,3.304-1.344,4.976-1.984c1.936-0.736,3.896-1.424,5.856-2.112c1.672-0.584,3.344-1.168,5.04-1.72    c1.992-0.64,4-1.232,6.016-1.816c1.688-0.488,3.36-0.992,5.056-1.448c0.648-0.168,1.296-0.304,1.944-0.472    c-23.68,22.993-41.253,51.529-51.128,83.024c-18.988-5.008-37.37-12.082-54.816-21.096C78.039,84.821,78.263,84.541,78.495,84.301    z M66.991,97.181c19.217,10.412,39.595,18.522,60.712,24.16c-10.352,35.996-15.786,73.227-16.152,110.68h-95.92    C17.374,182.632,35.435,135.214,66.991,97.181z M66.991,382.861c-31.554-38.034-49.615-85.452-51.36-134.84h95.92    c0.366,37.453,5.799,74.684,16.152,110.68C106.587,364.341,86.209,372.45,66.991,382.861z M181.727,456.429    c-1.616-0.408-3.288-0.936-4.952-1.424c-2.024-0.592-4.056-1.184-6.056-1.832c-1.688-0.544-3.352-1.128-5.016-1.712    c-1.968-0.68-3.936-1.376-5.88-2.12c-1.664-0.632-3.304-1.296-4.952-1.968c-1.912-0.8-3.824-1.6-5.72-2.4    c-1.632-0.72-3.256-1.461-4.872-2.224c-1.864-0.88-3.72-1.776-5.6-2.704c-1.6-0.8-3.2-1.6-4.8-2.472    c-1.808-0.968-3.6-1.96-5.392-2.984c-1.6-0.888-3.12-1.8-4.664-2.728c-1.76-1.056-3.488-2.144-5.216-3.256    c-1.52-0.968-3.04-1.952-4.536-2.96c-1.704-1.152-3.392-2.352-5.064-3.552c-1.464-1.048-2.928-2.096-4.368-3.2    c-1.656-1.248-3.28-2.536-4.896-3.832c-1.416-1.128-2.824-2.248-4.208-3.408c-1.6-1.328-3.144-2.712-4.696-4.088    c-1.36-1.208-2.728-2.4-4.056-3.632c-1.528-1.424-3.008-2.904-4.496-4.368c-1.288-1.272-2.6-2.528-3.864-3.832    c-0.232-0.248-0.456-0.504-0.688-0.744c17.445-9.018,35.827-16.095,54.816-21.104c9.877,31.494,27.449,60.029,51.128,83.024    C183.031,456.741,182.375,456.605,181.727,456.429z M231.447,463.389c-34.232-4.864-64.24-40.592-83.12-93.352    c27.296-6.112,55.151-9.391,83.12-9.784V463.389z M231.447,344.253c-29.67,0.39-59.215,3.914-88.144,10.512    c-10.045-34.707-15.344-70.615-15.752-106.744h103.896V344.253z M231.447,232.021H127.551    c0.407-36.129,5.706-72.037,15.752-106.744c28.929,6.597,58.475,10.121,88.144,10.512V232.021z M231.447,119.789    c-27.97-0.39-55.824-3.669-83.12-9.784c18.88-52.76,48.888-88.488,83.12-93.352V119.789z M411.903,97.181    c31.554,38.034,49.615,85.452,51.36,134.84h-95.92c-0.366-37.453-5.799-74.684-16.152-110.68    C372.307,115.7,392.685,107.591,411.903,97.181z M297.103,23.605c1.68,0.416,3.352,0.944,5.016,1.432    c2.024,0.592,4.056,1.184,6.056,1.832c1.688,0.544,3.352,1.128,5.016,1.712c1.968,0.68,3.936,1.376,5.88,2.12    c1.664,0.632,3.304,1.296,4.952,1.968c1.912,0.8,3.824,1.6,5.72,2.4c1.632,0.72,3.256,1.461,4.872,2.224    c1.864,0.88,3.72,1.776,5.6,2.704c1.6,0.8,3.2,1.6,4.8,2.472c1.808,0.968,3.6,1.96,5.392,2.984c1.6,0.888,3.12,1.8,4.664,2.728    c1.76,1.056,3.488,2.144,5.216,3.256c1.52,0.968,3.04,1.952,4.536,2.96c1.704,1.152,3.384,2.344,5.056,3.544    c1.472,1.048,2.936,2.104,4.384,3.2c1.648,1.24,3.264,2.528,4.888,3.824c1.408,1.12,2.824,2.24,4.208,3.408    c1.6,1.328,3.144,2.712,4.696,4.088c1.36,1.208,2.728,2.4,4.056,3.632c1.528,1.424,3.008,2.904,4.496,4.368    c1.288,1.272,2.6,2.528,3.864,3.832c0.232,0.248,0.456,0.504,0.688,0.744c-17.445,9.018-35.827,16.095-54.816,21.104    c-9.896-31.498-27.491-60.031-51.192-83.016C295.799,23.293,296.455,23.429,297.103,23.605z M247.447,16.653    c34.232,4.864,64.24,40.592,83.12,93.352c-27.296,6.112-55.151,9.391-83.12,9.784V16.653z M247.447,135.789    c29.67-0.39,59.215-3.914,88.144-10.512c10.045,34.707,15.344,70.615,15.752,106.744H247.447V135.789z M247.447,248.021h103.896    c-0.407,36.129-5.706,72.037-15.752,106.744h0c-28.929-6.597-58.474-10.121-88.144-10.512V248.021z M247.447,463.389V360.253    c27.97,0.39,55.824,3.669,83.12,9.784C311.687,422.797,281.679,458.525,247.447,463.389z M400.399,395.741    c-1.264,1.304-2.568,2.56-3.856,3.832c-1.488,1.464-2.976,2.944-4.504,4.368c-1.328,1.24-2.696,2.4-4.056,3.64    c-1.552,1.376-3.096,2.752-4.68,4.08c-1.4,1.168-2.824,2.296-4.248,3.432c-1.6,1.28-3.2,2.56-4.848,3.792    c-1.456,1.096-2.936,2.16-4.424,3.2c-1.656,1.184-3.32,2.4-5.008,3.504c-1.512,1.024-3.04,2.016-4.576,2.992    c-1.712,1.104-3.437,2.171-5.176,3.2c-1.6,0.936-3.128,1.848-4.704,2.752c-1.771,1.008-3.552,1.992-5.344,2.952    c-1.6,0.853-3.2,1.688-4.8,2.504c-1.824,0.92-3.664,1.808-5.512,2.68c-1.6,0.76-3.264,1.52-4.912,2.24    c-1.88,0.8-3.784,1.6-5.688,2.4c-1.656,0.672-3.304,1.344-4.968,1.976c-1.952,0.744-3.912,1.44-5.88,2.12    c-1.664,0.584-3.328,1.168-5.016,1.712c-2,0.648-4,1.24-6.04,1.824c-1.672,0.496-3.352,0.992-5.04,1.448    c-0.648,0.168-1.296,0.304-1.944,0.472c23.68-22.993,41.253-51.529,51.128-83.024c18.988,5.008,37.37,12.082,54.816,21.096    C400.855,395.221,400.631,395.501,400.399,395.741z M411.903,382.861c-19.217-10.412-39.595-18.522-60.712-24.16    c10.352-35.996,15.786-73.227,16.152-110.68h95.92C461.521,297.409,443.459,344.828,411.903,382.861z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "www.domain.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fields",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                action: "/",
                method: "post",
                className: "contact_form",
                id: "contact_form",
                autoComplete: "off",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "returnmessage",
                  "data-success": "Your message has been received, We will contact you soon."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "empty_notice",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: "Please Fill Required Fields"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "first",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "name",
                        type: "text",
                        placeholder: "Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "email",
                        type: "text",
                        placeholder: "Email"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "last",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                    id: "message",
                    placeholder: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "kura_tm_button",
                  "data-position": "left",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    id: "send_message",
                    className: "d-flex align-items-center",
                    href: "#",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "Submit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: "/img/svg/right-arrow.svg",
                      className: "svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/ContentModal.js":
/*!****************************************!*\
  !*** ./src/components/ContentModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModal": () => (/* binding */ NewsModal),
/* harmony export */   "HomeModal": () => (/* binding */ HomeModal)
/* harmony export */ });
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\ContentModal.js";


const NewsModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};
const HomeModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "hidden_content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "popup_informations",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "description",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Cursor.js":
/*!**********************************!*\
  !*** ./src/components/Cursor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Cursor.js";




const Cursor = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.customCursor)();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-outer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-inner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Home.js";




const Home = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: ""
  });

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({
      img,
      title
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_hero",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "name",
              children: "Bernard Smith"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "job",
              children: "Creative Designer based in Japan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "services",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/1.jpg", "Creative Designer based in Japan"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/1.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Web Development"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/2.jpg", "Digital Marketing"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/2.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Digital Marketing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/1.jpg", "Graphic Design"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/3.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Graphic Design"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "short_info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: "10+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Years of", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25
                      }, undefined), "Experience"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: "3K+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Happy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), "Customers"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "image",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/img/thumbs/3-4.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "main",
                style: {
                  backgroundImage: "url(img/hero/1.jpg)"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "shape"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "down anchor",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#portfolio",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "svg",
                src: "/img/svg/down-arrow.svg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_1__.HomeModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\News.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const News = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: "",
    date: ""
  });

  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({
      img,
      title,
      date
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: "",
      date: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "news",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "kura_tm_news",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: "News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: "Latest News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "news_list wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "slick-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "slick-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__.newsSlider), {}, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/1.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "September 02, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "VS Code Gets New JavaScript Debugger"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/1.jpg`, "VS Code Gets New JavaScript Debugger", "September 02, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 69,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 77,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/2.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "August 17, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "Javalin Framework for Kotlin and Java Updated"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/2.jpg`, "Javalin Framework for Kotlin and Java Updated", "August 17, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 134,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/3.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "July 05, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "JavaScript Dominated Open Source in 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/3.jpg`, "JavaScript Dominated Open Source in 2021", "July 05, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 199,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 207,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 215,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 233,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/4.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "April 22, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 248,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "Perfecto Tests Progressive Web Apps"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/4.jpg`, "Perfecto Tests Progressive Web Apps", "April 22, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 264,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 272,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 280,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 263,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 262,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, undefined)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 304,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 313,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 312,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_3__.NewsModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title,
      date: modalValue.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);
});

/***/ }),

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-lightbox */ "react-awesome-lightbox");
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Portfolio.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const IMAGES = [{
  src: "/img/portfolio/1.jpg",
  thumbnail: "/img/portfolio/1.jpg",
  title: "Magic Art",
  sub: "Image"
}, {
  src: "/img/portfolio/2.jpg",
  thumbnail: "/img/portfolio/2.jpg",
  title: "Bona Green",
  sub: "Image"
}, {
  src: "/img/portfolio/3.jpg",
  thumbnail: "/img/portfolio/3.jpg",
  title: "Leo Dandora",
  sub: "Image"
}, {
  src: "/img/portfolio/4.jpg",
  thumbnail: "/img/portfolio/4.jpg",
  title: "Folio Grasia",
  sub: "Image"
}, {
  src: "/img/portfolio/5.jpg",
  thumbnail: "/img/portfolio/5.jpg",
  title: "Viva Mercury",
  sub: "Image"
}, {
  src: "/img/portfolio/6.jpg",
  thumbnail: "/img/portfolio/6.jpg",
  title: "Santa Onera",
  sub: "Image"
}];

const Portfolio = () => {
  const {
    0: showLight,
    1: setShowLight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const showLightBox = index => {
    setShowLight({
      startIndex: index
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "portfolio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "kura_tm_portfolio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: "Selected Works"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "portfolio_list gallery_zoom wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "swiper-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "swiper-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__.portfolioSlider), {}, {
                  children: IMAGES.map((image, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(" + image.src + ")"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "overlay"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "/img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "details",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                            children: image.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 92,
                            columnNumber: 31
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                            children: image.sub
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 93,
                            columnNumber: 31
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 29
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link popup-vimeo",
                        onClick: () => showLightBox(index)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 25
                    }, undefined)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, undefined))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), showLight ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default()), {
      images: IMAGES.map(img => ({
        url: img.src,
        title: img.caption
      })),
      startIndex: showLight.startIndex,
      onClose: hideLightBox
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);
});

/***/ }),

/***/ "./src/components/Price.js":
/*!*********************************!*\
  !*** ./src/components/Price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Price.js";



const Price = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "price",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_pricing",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "pricing_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "kura_tm_main_title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Pricing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: "Service Prices"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "WordPress Development"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "$500"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "Bold",
                      enableBackground: "new 0 0 24 24",
                      height: "512",
                      viewBox: "0 0 24 24",
                      width: "512",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".2s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "HTML Development"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "$400"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Layer_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M464.372,214.326v-96.7L346.747,0H47.628v214.326H23.814v226.233h23.814V512h416.744v-71.442h23.814V214.326H464.372z     M357.209,60.979l46.184,46.184h-46.184V60.979z M83.349,35.721h238.14v107.163h107.163v71.442H83.349V35.721z M428.651,476.279    H83.349v-35.721h345.302V476.279z M452.465,404.837H59.535V250.047h392.93V404.837z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 74,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 73,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "153.874,287.077 153.874,316.547 123.549,316.547 123.549,287.077 105.975,287.077 105.975,363.163     123.549,363.163 123.549,331.978 153.874,331.978 153.874,363.163 171.451,363.163 171.451,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "185.381,287.077 185.381,302.509 208.636,302.509 208.636,363.163 226.21,363.163 226.21,302.509     249.357,302.509 249.357,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "321.905,287.077 302.079,326.835 282.362,287.077 263.287,287.077 263.287,363.163 280.862,363.163     280.862,317.619 297.365,350.732 306.795,350.732 323.298,317.619 323.298,363.163 340.873,363.163 340.873,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "378.378,347.731 378.378,287.077 360.803,287.077 360.803,363.163 415.242,363.163 415.242,347.731   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 94,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 93,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".4s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "Content Writing"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "$300"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "_x31__x2C_5",
                      enableBackground: "new 0 0 24 24",
                      height: "512",
                      viewBox: "0 0 24 24",
                      width: "512",
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m16.81 13h-12.06c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-13v3h11.31c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m13.82 15.99h-9.02c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.02c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m10.84 18.99h-6.04c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.04c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m12.527 24c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.027-.151.1-.291.208-.4l7.425-7.424c.316-.316.651-.513.996-.585.477-.1.939.045 1.302.409l1.237 1.237c.682.682.682 1.792 0 2.475l-7.424 7.425c-.109.109-.249.182-.4.208l-3.005.53c-.044.007-.087.011-.131.011zm3.006-1.28h.01zm-1.778-2.112-.303 1.717 1.717-.303 7.257-7.258c.097-.098.097-.256 0-.354l-1.228-1.228c-.01.019-.085.067-.186.167z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m9.83 22h-7.08c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v7.29c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.29c0-.689-.561-1.25-1.25-1.25h-18.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h7.08c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m23.25 5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".6s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "Brand Identity"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "$200"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M432,100c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S437.52,100,432,100z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 169,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M80,100c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S85.52,100,80,100z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 176,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 175,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M502,220h-11.96c-3.738-28.804-12.77-56.253-26.944-81.705c-2.687-4.824-8.776-6.559-13.602-3.872    c-4.825,2.687-6.559,8.777-3.872,13.602c12.508,22.463,20.646,46.628,24.252,71.975H462c-5.523,0-10,4.477-10,10v40    c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40C512,224.477,507.523,220,502,220z M492,260h-20v-20h9.078    c0.003,0,0.007,0,0.01,0c0.004,0,0.007,0,0.011,0H492V260z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 181,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 180,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M365.981,292.621c-0.006-0.155-0.01-0.31-0.023-0.465c-0.018-0.212-0.047-0.421-0.078-0.629    c-0.019-0.128-0.034-0.256-0.059-0.384c-0.046-0.245-0.106-0.485-0.169-0.724c-0.024-0.091-0.043-0.182-0.07-0.272    c-0.089-0.299-0.193-0.592-0.309-0.879c-0.013-0.031-0.022-0.064-0.035-0.095c-0.138-0.334-0.293-0.659-0.465-0.973    l-99.998-182.996C263.022,101.996,259.657,100,256,100c-3.657,0-7.022,1.996-8.775,5.205l-99.998,182.996    c-0.172,0.314-0.327,0.639-0.465,0.973c-0.013,0.031-0.022,0.063-0.035,0.095c-0.116,0.287-0.22,0.58-0.309,0.879    c-0.027,0.09-0.046,0.181-0.07,0.272c-0.064,0.239-0.123,0.478-0.169,0.724c-0.024,0.127-0.039,0.255-0.059,0.384    c-0.031,0.208-0.06,0.417-0.078,0.629c-0.013,0.155-0.018,0.31-0.023,0.465c-0.005,0.126-0.019,0.25-0.019,0.378    c0,0.066,0.009,0.129,0.01,0.195c0.003,0.157,0.013,0.313,0.024,0.47c0.013,0.199,0.029,0.397,0.054,0.593    c0.018,0.138,0.04,0.275,0.063,0.413c0.036,0.216,0.079,0.43,0.129,0.641c0.028,0.119,0.059,0.238,0.092,0.356    c0.063,0.228,0.135,0.452,0.213,0.673c0.022,0.063,0.036,0.127,0.06,0.19l36.064,95.569c-2.893,1.434-5.569,3.339-7.92,5.689    C169.121,403.457,166,410.99,166,419c0,13.036,8.361,24.152,20,28.28V502c0,5.523,4.477,10,10,10h120c5.523,0,10-4.477,10-10    v-54.703c4.169-1.471,7.992-3.866,11.212-7.086C342.879,434.543,346,427.01,346,419c0-11.773-6.819-21.978-16.713-26.887    l36.069-95.582c0.024-0.063,0.038-0.127,0.06-0.19c0.078-0.221,0.15-0.445,0.213-0.673c0.033-0.118,0.063-0.237,0.092-0.356    c0.05-0.211,0.092-0.425,0.129-0.641c0.023-0.138,0.046-0.275,0.063-0.413c0.025-0.196,0.041-0.394,0.054-0.593    c0.01-0.157,0.021-0.313,0.024-0.47c0.001-0.065,0.01-0.129,0.01-0.195C366,292.872,365.986,292.748,365.981,292.621z M256,283    c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10c-5.514,0-10-4.486-10-10C246,287.486,250.486,283,256,283z M306,492H206v-43h100    V492z M323.069,426.068c-1.89,1.891-4.401,2.932-7.069,2.932H196c-5.514,0-10-4.486-10-10c0-2.668,1.041-5.179,2.931-7.068    c1.891-1.891,4.401-2.932,7.069-2.932h119.933c0.022,0,0.044,0.003,0.066,0.003c0.011,0,0.023-0.001,0.034-0.001    c5.499,0.018,9.968,4.495,9.968,9.998C326,421.668,324.959,424.179,323.069,426.068z M309.085,389h-106.17l-32.453-86H196    c5.523,0,10-4.477,10-10s-4.477-10-10-10h-23.14L246,149.154V264.72c-11.639,4.128-20,15.243-20,28.28c0,16.542,13.458,30,30,30    s30-13.458,30-30c0-13.036-8.361-24.152-20-28.28V149.154L339.14,283H316c-5.523,0-10,4.477-10,10s4.477,10,10,10h25.538    L309.085,389z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 186,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M62.505,134.423c-4.826-2.688-10.916-0.954-13.602,3.872C34.73,163.747,25.697,191.196,21.96,220H10    c-5.523,0-10,4.477-10,10v40c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40c0-5.523-4.477-10-10-10h-7.875    c3.607-25.347,11.744-49.512,24.252-71.975C69.064,143.2,67.331,137.11,62.505,134.423z M40,260H20v-20h10.901    c0.004,0,0.007,0,0.011,0c0.003,0,0.007,0,0.01,0H40V260z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M482,0c-13.036,0-24.152,8.361-28.28,20H286V10c0-5.523-4.477-10-10-10h-40c-5.523,0-10,4.477-10,10v10H58.28    C54.152,8.361,43.036,0,30,0C13.458,0,0,13.458,0,30s13.458,30,30,30c13.036,0,24.152-8.361,28.28-20h100.534    c-21.329,8.925-40.889,20.511-56.989,34.084c-4.223,3.56-4.76,9.869-1.2,14.091c1.978,2.347,4.805,3.555,7.65,3.555    c2.276,0,4.564-0.772,6.44-2.354C143.407,65.188,184.353,47.913,226,42.119V50c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10    v-7.881c41.647,5.794,82.593,23.069,111.285,47.256c1.876,1.582,4.164,2.355,6.44,2.354c2.846,0,5.673-1.208,7.65-3.555    c3.561-4.221,3.023-10.53-1.2-14.09c-16.1-13.573-35.66-25.159-56.989-34.084H453.72c4.128,11.639,15.243,20,28.28,20    c16.542,0,30-13.458,30-30S498.542,0,482,0z M30,40c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S35.514,40,30,40z     M266,30v0.9V40h-20v-9.1V30V20h20V30z M482,40c-5.514,0-10-4.486-10-10s4.486-10,10-10c5.514,0,10,4.486,10,10S487.514,40,482,40    z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".8s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "PSD Design"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: "$100"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M0,0v512h512V0H0z M482,482H30V30h452V482z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 243,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 242,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M213.102,181.6h-72.24V352h33.12v-57.12h40.32c29.531,0,53.04-25.713,53.04-56.64    C267.342,212,246.166,181.6,213.102,181.6z M212.382,265.84h-38.4v-55.2h36.96c14.057,0,22.8,13.2,22.8,27.6    C233.742,255,224,265.84,212.382,265.84z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 248,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M336.939,276.64c-4.642-1.118-24.72-4.39-24.72-15.84c0-9.175,7.531-14.16,19.2-14.16c15.831,0,30.079,9.12,36.48,13.92    l12.96-19.44c-6.881-6.079-21.609-17.28-49.2-17.28c-26.284,0-49.44,14.91-49.44,41.52c0,27.64,36.72,32.801,44.88,35.04    c9.757,2.723,27.6,6.225,27.6,17.04c0,8.81-8.449,13.92-20.64,13.92c-18.809,0-36.48-11.119-44.16-16.56l-12,20.16    c7.2,6.24,27.851,19.44,56.88,19.44c15.679,0,50.88-4.9,50.88-39.84C385.659,285,345.579,278.882,336.939,276.64z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 256,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 257,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 270,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Skills.js";




const ParallaxVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_components_Parallax_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Parallax */ "./src/components/Parallax.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Parallax */ "./src/components/Parallax.js")],
    modules: ["..\\src\\components\\Skills.js -> " + "./Parallax"]
  }
});

const Skills = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__.activeSkillProgress);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "skills",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "kura_tm_skills",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "skills_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "kura_tm_main_title light",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                children: "Programming Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": ".7s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: "For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "progress_inner",
                "data-value": "95",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "label",
                    children: "HTML & CSS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "number",
                    children: "95%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "background",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar_in",
                      style: {
                        width: "95%"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "progress_inner",
                "data-value": "80",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "label",
                    children: "JavaScript"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "number",
                    children: "80%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "background",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar_in",
                      style: {
                        width: "80%"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "progress_inner",
                "data-value": "90",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "label",
                    children: "WordPress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "number",
                    children: "90%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "background",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar_in",
                      style: {
                        width: "90%"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ParallaxVideo, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "my_image jarallax",
              "data-speed": "0",
              style: {
                backgroundImage: "url(/img/portfolio/2.jpg)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ }),

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Timeline.js";



const Timeline = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "timeline",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_timeline",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Timeline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "timeline_list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "April, 2019 - Today"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Head Designer & Co-founder"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Alan Klein Design, London"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "September, 2018 - April, 2019"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Creative Director & Senior Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Raxuna Poc, New York"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".4s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "October, 2015 - September, 2018"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Head Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Arimana Co. Ltd, Amsterdam"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".6s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "July, 2012 - October, 2015"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Senior UX & UI Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Baxdoro Design, London"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".8s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "March, 2010 - July, 2012"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Junior UX Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Simono Design Group, London"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./src/layout/Footer.js":
/*!******************************!*\
  !*** ./src/layout/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\layout\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "kura_tm_copyright",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "copyright_inner wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["Copyright \xA9 ", new Date().getFullYear(), ". All rights reserved."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "social",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/facebook.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/twitter.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/instagram.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/dribbble.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/tik-tok.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\layout\\Header.js";




const Header = ({
  dark
}) => {
  const {
    0: isToggled,
    1: setToggled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.openNav)(!isToggled);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.audioSoundAndOpen)();
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.scroll_);
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.stickyNav);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_topbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "wrapper",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "topbar_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "list",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "anchor_nav",
                id: "anchor_nav",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#home",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#portfolio",
                    children: "Portfolio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#skills",
                    children: "Skills"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#timeline",
                    children: "Timeline"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#price",
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#news",
                    children: "News"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#contact",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "trigger",
              onClick: () => toggleTrueFalse(),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: `hamburger hamburger--slider ${isToggled ? " is-active" : ""}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-box",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "hamburger-inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_mobile_menu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "mobile_menu_inner",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "mobile_in",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "trigger",
            onClick: toggleTrueFalse,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: isToggled ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "hamburger-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-inner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: isToggled ? "dropdown active" : "dropdown",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "dropdown_inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            className: "anchor_nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "current",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#home",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#portfolio",
                children: "Portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#skills",
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#timeline",
                children: "Timeline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#price",
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#news",
                children: "News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#contact",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/layout/Settings.js":
/*!********************************!*\
  !*** ./src/layout/Settings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\layout\\Settings.js";



const Settings = () => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cursor,
    1: setCursor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const colors = document.querySelectorAll("#colors li a");
    colors.forEach(color => {
      color.addEventListener("click", () => {
        document.querySelector(".kura_tm_all_wrap").setAttribute("data-color", color.classList[0]);
      });
    });
  }, []);

  const onClick = value => {
    setCursor(value);
    document.querySelector(".kura_tm_all_wrap").setAttribute("data-magic-cursor", value === 1 ? "show" : "hide");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: `kura_tm_settings ${toggle ? "opened" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          version: "1.1",
          id: "Capa_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 268.765 268.765",
          xmlSpace: "preserve",
          className: "svg settingSvg replaced-svg changeDark",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
            id: "Settings",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                d: "M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z",
                style: {
                  fillRule: "evenodd",
                  clipRule: "evenodd"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "link",
          href: "#",
          onClick: () => setToggle(!toggle)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Unlimited Colors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "colors",
          id: "colors",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "blue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "green",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "brown",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "pink",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "orange",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "bl",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "black",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "wh",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "white",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "purple",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "sky",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "cadetBlue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "crimson",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "olive",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "red",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Magic Cursor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "cursor",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 1 ? "showme show" : "hidden"}`,
              onClick: () => onClick(1),
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 2 ? "showme show" : "hidden"}`,
              onClick: () => onClick(2),
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "Capa_1",
                enableBackground: "new 0 0 512 512",
                height: 512,
                viewBox: "0 0 512 512",
                width: 512,
                className: "svg settingSvg replaced-svg changeDark",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451.002 183.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 -23.318 395.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m271.002 3.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 51.241 215.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m423.574 31.002h84.853v29.997h-84.853z",
                    transform: "matrix(.707 -.707 .707 .707 103.961 342.985)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m42.422 512 150.458-150.458 42.114 125.464 152.988-362.988-362.988 152.988 125.464 42.114-150.458 150.458z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m361 0h30v61h-30z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451 121h61v30h-61z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/swiperSliderProps.js":
/*!**********************************!*\
  !*** ./src/swiperSliderProps.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolioSlider": () => (/* binding */ portfolioSlider),
/* harmony export */   "newsSlider": () => (/* binding */ newsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
const portfolioSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
const newsSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
});

/***/ }),

/***/ "./src/utilits.js":
/*!************************!*\
  !*** ./src/utilits.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wowJsAnimation": () => (/* binding */ wowJsAnimation),
/* harmony export */   "customCursor": () => (/* binding */ customCursor),
/* harmony export */   "kura_tm_my_load": () => (/* binding */ kura_tm_my_load),
/* harmony export */   "stickyNav": () => (/* binding */ stickyNav),
/* harmony export */   "audioSoundAndOpen": () => (/* binding */ audioSoundAndOpen),
/* harmony export */   "openNav": () => (/* binding */ openNav),
/* harmony export */   "activeSkillProgress": () => (/* binding */ activeSkillProgress),
/* harmony export */   "activeMenuBySection": () => (/* binding */ activeMenuBySection),
/* harmony export */   "aTagClick": () => (/* binding */ aTagClick),
/* harmony export */   "scroll_": () => (/* binding */ scroll_)
/* harmony export */ });
const kura_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

const wowJsAnimation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n,
          i = 0,
          o = !1;
      window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
      }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
      function () {
        let a = document.querySelectorAll("a");
        e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

        for (let i = 0; i < a.length; i++) {
          const element = a[i];
          mouseEvent(element);
        }

        hamburger && mouseEvent(hamburger);
        kura_tm_topbar && mouseEvent(kura_tm_topbar);
        pointer && mouseEvent(pointer);
      }), e.style.visibility = "visible", t.style.visibility = "visible";
    }
  }
};
const kura_tm_my_load = () => {
  kura_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
}; // Header

const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".kura_tm_topbar");
  stickys.forEach(sticky => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};
const audioSoundAndOpen = () => {
  var audio1 = document.querySelectorAll("#audio1");
  var audio2 = document.querySelectorAll("#audio2");
  var hamburgers = document.querySelectorAll(".trigger .hamburger");
  hamburgers.forEach(hamburger => {
    hamburger.addEventListener("click", function () {
      var element = this;

      if (element.classList.contains("is-active")) {
        audio1[0].play();
      } else {
        audio2[0].play();
      }

      return false;
    });
  });
};
const openNav = toggle => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
    });
  }
};
const activeSkillProgress = () => {
  const boxes = document.querySelectorAll(".bar");
  const triggerBottom = window.innerHeight / 5 * 5;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });
}; // active

const activeMenuBySection = id => {
  const boxes = document.querySelectorAll(`#${id ? id : "home"}`);
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 5;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        activeMenu(id ? id : "home");
      } else {
        activeMenu("");
      }
    });
  }
};

const activeMenu = active => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      if (nav.classList.contains(active)) {
        nav.classList.add("current");
      } else {
        nav.classList.remove("current");
      }
    });
  }
};

const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");

  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", e => {
      e.preventDefault();
    });
  }
};
const scroll_ = () => {
  const sections = document.querySelectorAll(".kura_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(li => {
    li.classList.remove("current");

    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "jarallax":
/*!***************************!*\
  !*** external "jarallax" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("jarallax");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-awesome-lightbox":
/*!*****************************************!*\
  !*** external "react-awesome-lightbox" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-lightbox");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-modal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFhOzs7Ozs7OztBQUNiQSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxhQUFBLEdBQWdCRSxLQUFoQjtBQUNBRixlQUFBLEdBQWtCSSxPQUFsQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFSLENBQXRDOztBQUNBLFNBQVNELHNCQUFULENBQWdDRyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNOLElBQUFBLE9BQU8sRUFBRU07QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNRSxZQUFZLE9BQWxCOztBQUNBLFNBQVNULEtBQVQsQ0FBZVUsbUJBQWYsRUFBb0NDLGVBQXBDLEVBQXFEO0FBQ2pEO0FBQ0EsU0FBT0EsZUFBZSxDQUFDQyxPQUF2QjtBQUNBLFNBQU9ELGVBQWUsQ0FBQ0UsT0FBdkIsQ0FIaUQsQ0FJakQ7O0FBQ0EsTUFBSSxDQUFDSixZQUFMLEVBQW1CO0FBQ2YsV0FBT0MsbUJBQW1CLENBQUNDLGVBQUQsQ0FBMUI7QUFDSDs7QUFDRCxRQUFNRyxPQUFPLEdBQUdILGVBQWUsQ0FBQ0ksT0FBaEMsQ0FSaUQsQ0FTakQ7O0FBQ0EsU0FBTyxNQUFJLGFBQWNaLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlZSxhQUFmLENBQTZCRixPQUE3QixFQUFzQztBQUN2REcsSUFBQUEsS0FBSyxFQUFFLElBRGdEO0FBRXZEQyxJQUFBQSxTQUFTLEVBQUUsSUFGNEM7QUFHdkRDLElBQUFBLFNBQVMsRUFBRSxLQUg0QztBQUl2REMsSUFBQUEsUUFBUSxFQUFFO0FBSjZDLEdBQXRDLENBQXpCO0FBT0g7O0FBQ0QsU0FBU2xCLE9BQVQsQ0FBaUJtQixjQUFqQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDdEMsTUFBSUMsVUFBVSxHQUFHakIsU0FBUyxDQUFDTCxPQUEzQjtBQUNBLE1BQUlVLGVBQWUsR0FBRztBQUNsQjtBQUNBSSxJQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFRSxNQUFBQSxLQUFGO0FBQVVDLE1BQUFBLFNBQVY7QUFBc0JDLE1BQUFBO0FBQXRCLEtBQUQsS0FBc0M7QUFDM0MsVUFBSSxDQUFDQSxTQUFMLEVBQWdCLE9BQU8sSUFBUDs7QUFDaEIsZ0JBQTRDO0FBQ3hDLFlBQUlELFNBQUosRUFBZTtBQUNYLGlCQUFPLElBQVA7QUFDSDs7QUFDRCxZQUFJRCxLQUFKLEVBQVc7QUFDUCxpQkFBTyxhQUFjZCxNQUFNLENBQUNGLE9BQVAsQ0FBZWUsYUFBZixDQUE2QixHQUE3QixFQUFrQyxJQUFsQyxFQUF3Q0MsS0FBSyxDQUFDTyxPQUE5QyxFQUF1RCxhQUFjckIsTUFBTSxDQUFDRixPQUFQLENBQWVlLGFBQWYsQ0FBNkIsSUFBN0IsRUFBbUMsSUFBbkMsQ0FBckUsRUFBK0dDLEtBQUssQ0FBQ1EsS0FBckgsQ0FBckI7QUFDSDtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBYmlCLEdBQXRCLENBRnNDLENBaUJ0QztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJSixjQUFjLFlBQVlLLE9BQTlCLEVBQXVDO0FBQ25DZixJQUFBQSxlQUFlLENBQUNnQixNQUFoQixHQUF5QixNQUFJTixjQUE3QixDQURtQyxDQUd2Qzs7QUFDQyxHQUpELE1BSU8sSUFBSSxPQUFPQSxjQUFQLEtBQTBCLFVBQTlCLEVBQTBDO0FBQzdDVixJQUFBQSxlQUFlLENBQUNnQixNQUFoQixHQUF5Qk4sY0FBekIsQ0FENkMsQ0FFakQ7QUFDQyxHQUhNLE1BR0EsSUFBSSxPQUFPQSxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQzNDVixJQUFBQSxlQUFlLG1DQUNSQSxlQURRLEdBRVJVLGNBRlEsQ0FBZjtBQUlILEdBakNxQyxDQWtDdEM7OztBQUNBVixFQUFBQSxlQUFlLG1DQUNSQSxlQURRLEdBRVJXLE9BRlEsQ0FBZjtBQUlBLFFBQU1NLGVBQWUsR0FBR2pCLGVBQXhCOztBQUNBLE1BQUksSUFBSixFQUE2QztBQUN6QztBQUNBLFFBQUksU0FBa0NpQixlQUFlLENBQUNLLFFBQXRELEVBQWdFO0FBQzVEO0FBQ0EsWUFBTSxJQUFJQyxLQUFKLENBQVcscUhBQVgsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsTUFBSU4sZUFBZSxDQUFDSyxRQUFwQixFQUE4QjtBQUMxQixXQUFPVixVQUFVLENBQUNLLGVBQUQsQ0FBakI7QUFDSCxHQWpEcUMsQ0FrRHRDOzs7QUFDQSxNQUFJakIsZUFBZSxDQUFDd0IsaUJBQXBCLEVBQXVDO0FBQ25DeEIsSUFBQUEsZUFBZSxtQ0FDUkEsZUFEUSxHQUVSQSxlQUFlLENBQUN3QixpQkFGUixDQUFmO0FBSUEsV0FBT3hCLGVBQWUsQ0FBQ3dCLGlCQUF2QjtBQUNILEdBekRxQyxDQTBEdEM7OztBQUNBLE1BQUksT0FBT3hCLGVBQWUsQ0FBQ3lCLEdBQXZCLEtBQStCLFNBQW5DLEVBQThDO0FBQzFDLFFBQUksQ0FBQ3pCLGVBQWUsQ0FBQ3lCLEdBQXJCLEVBQTBCO0FBQ3RCLGFBQU96QixlQUFlLENBQUN5QixHQUF2QjtBQUNBLGFBQU9wQyxLQUFLLENBQUN1QixVQUFELEVBQWFaLGVBQWIsQ0FBWjtBQUNIOztBQUNELFdBQU9BLGVBQWUsQ0FBQ3lCLEdBQXZCO0FBQ0g7O0FBQ0QsU0FBT2IsVUFBVSxDQUFDWixlQUFELENBQWpCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNd0MsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0UsK0RBQUMsMkNBQUQ7QUFBQSw0QkFDRSwrREFBQyxtREFBRDtBQUFVLFVBQUksRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLFFBQUUsRUFBQyxRQUFSO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQWtDLHNCQUFXLFFBQTdDO0FBQUEsZ0NBQ0UsK0RBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLCtEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSwrREFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUUsK0RBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRSwrREFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0UsK0RBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFLCtEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRSwrREFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBVUUsK0RBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFLCtEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEYsZUFZRSwrREFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0F0QkQ7O0FBd0JBLGlFQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7OztBQUNBLE1BQU1ELFFBQVEsR0FBRyxDQUFDO0FBQUVHLEVBQUFBO0FBQUYsQ0FBRCxLQUFjO0FBQzdCLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUEsMkJBQ0U7QUFBQSw0QkFBZUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFBLGlFQUFlSCxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7QUFFQSxNQUFNWixLQUFLLEdBQUcsTUFBTTtBQUNsQixzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQU8sUUFBRSxFQUFDLFFBQVY7QUFBQSw2QkFDRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBTyxRQUFFLEVBQUMsUUFBVjtBQUFBLDZCQUNFO0FBQVEsV0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQVhEOztBQWFBLGlFQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxNQUFFLEVBQUMsU0FBcEM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxpQ0FBa0IsS0FBckQ7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVFFO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0U7QUFDRSwyQkFBSyxFQUFDLDRCQURSO0FBRUUsNkJBQU8sRUFBQyxLQUZWO0FBR0Usd0JBQUUsRUFBQyxRQUhMO0FBSUUsdUJBQUMsRUFBQyxLQUpKO0FBS0UsdUJBQUMsRUFBQyxLQUxKO0FBTUUsNkJBQU8sRUFBQyxhQU5WO0FBT0UsMkJBQUssRUFBRTtBQUNMZ0Isd0JBQUFBLGdCQUFnQixFQUFFO0FBRGIsdUJBUFQ7QUFVRSwrQkFBUyxFQUFDLGtCQVZaO0FBQUEsOENBWUU7QUFBQSwrQ0FDRTtBQUFBLGlEQUNFO0FBQU0sNkJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FaRixlQWlCRTtBQUFBLCtDQUNFO0FBQUEsaURBQ0U7QUFBTSw2QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWpCRixlQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXRCRixlQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXZCRixlQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXhCRixlQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXpCRixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTFCRixlQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTNCRixlQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTVCRixlQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTdCRixlQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTlCRixlQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQS9CRixlQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWhDRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWpDRixlQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWxDRixlQW1DRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQW5DRixlQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUF1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUE0Q0U7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQ0UsMkJBQUssRUFBQyw0QkFEUjtBQUVFLDZCQUFPLEVBQUMsS0FGVjtBQUdFLHdCQUFFLEVBQUMsUUFITDtBQUlFLHVCQUFDLEVBQUMsS0FKSjtBQUtFLHVCQUFDLEVBQUMsS0FMSjtBQU1FLDZCQUFPLEVBQUMscUJBTlY7QUFPRSwyQkFBSyxFQUFFO0FBQ0xBLHdCQUFBQSxnQkFBZ0IsRUFBRTtBQURiLHVCQVBUO0FBVUUsK0JBQVMsRUFBQyxrQkFWWjtBQUFBLDhDQVlFO0FBQUEsK0NBQ0U7QUFBQSxrREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLGVBRUU7QUFBTSw2QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FGRixlQUdFO0FBQU0sNkJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FaRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQW5CRixlQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXBCRixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXJCRixlQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXRCRixlQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXZCRixlQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXhCRixlQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXpCRixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTFCRixlQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTNCRixlQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTVCRixlQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTdCRixlQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTlCRixlQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQS9CRixlQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWhDRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFvQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBNUNGLGVBb0ZFO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUNFLDJCQUFLLEVBQUMsNEJBRFI7QUFFRSx3QkFBRSxFQUFDLFFBRkw7QUFHRSxzQ0FBZ0IsRUFBQyx5QkFIbkI7QUFJRSw0QkFBTSxFQUFDLEtBSlQ7QUFLRSw2QkFBTyxFQUFDLHFCQUxWO0FBTUUsMkJBQUssRUFBQyxLQU5SO0FBT0UsK0JBQVMsRUFBQyxrQkFQWjtBQUFBLDZDQVNFO0FBQU0seUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFwRkYsZUFvR0U7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQ0UsMkJBQUssRUFBQyw0QkFEUjtBQUVFLDZCQUFPLEVBQUMsS0FGVjtBQUdFLHdCQUFFLEVBQUMsUUFITDtBQUlFLHVCQUFDLEVBQUMsS0FKSjtBQUtFLHVCQUFDLEVBQUMsS0FMSjtBQU1FLDZCQUFPLEVBQUMscUJBTlY7QUFPRSwyQkFBSyxFQUFFO0FBQ0xBLHdCQUFBQSxnQkFBZ0IsRUFBRTtBQURiLHVCQVBUO0FBVUUsK0JBQVMsRUFBQyxrQkFWWjtBQUFBLDhDQVlFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBWkYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FqQkYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FsQkYsZUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FuQkYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FwQkYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FyQkYsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0F0QkYsZUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0F2QkYsZUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0F4QkYsZUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0F6QkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0ExQkYsZUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0EzQkYsZUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0E1QkYsZUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0E3QkYsZUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0E5QkYsZUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXBHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQXVKRTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBb0MsaUNBQWtCLEtBQXREO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSxxQ0FDRTtBQUNFLHNCQUFNLEVBQUMsR0FEVDtBQUVFLHNCQUFNLEVBQUMsTUFGVDtBQUdFLHlCQUFTLEVBQUMsY0FIWjtBQUlFLGtCQUFFLEVBQUMsY0FKTDtBQUtFLDRCQUFZLEVBQUMsS0FMZjtBQUFBLHdDQU9FO0FBQ0UsMkJBQVMsRUFBQyxlQURaO0FBRUUsa0NBQWE7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBGLGVBV0U7QUFBSywyQkFBUyxFQUFDLGNBQWY7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEYsZUFjRTtBQUFLLDJCQUFTLEVBQUMsT0FBZjtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBQSw2Q0FDRTtBQUFPLDBCQUFFLEVBQUMsTUFBVjtBQUFpQiw0QkFBSSxFQUFDLE1BQXRCO0FBQTZCLG1DQUFXLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFJRTtBQUFBLDZDQUNFO0FBQU8sMEJBQUUsRUFBQyxPQUFWO0FBQWtCLDRCQUFJLEVBQUMsTUFBdkI7QUFBOEIsbUNBQVcsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWRGLGVBd0JFO0FBQUssMkJBQVMsRUFBQyxNQUFmO0FBQUEseUNBQ0U7QUFBVSxzQkFBRSxFQUFDLFNBQWI7QUFBdUIsK0JBQVcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF4QkYsZUEyQkU7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQWdDLG1DQUFjLE1BQTlDO0FBQUEseUNBQ0U7QUFDRSxzQkFBRSxFQUFDLGNBREw7QUFFRSw2QkFBUyxFQUFDLDJCQUZaO0FBR0Usd0JBQUksRUFBQyxHQUhQO0FBQUEsNENBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEYsZUFNRTtBQUNFLHlCQUFHLEVBQUMsMEJBRE47QUFFRSwrQkFBUyxFQUFDLEtBRlo7QUFHRSx5QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrTkQsQ0FuTkQ7O0FBcU5BLGlFQUFlaEIsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk5BOztBQUNPLE1BQU1rQixTQUFTLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxJQUFGO0FBQVFDLEVBQUFBLFlBQVI7QUFBc0JDLEVBQUFBLEdBQXRCO0FBQTJCQyxFQUFBQSxLQUEzQjtBQUFrQ0MsRUFBQUE7QUFBbEMsQ0FBRCxLQUE4QztBQUNyRSxzQkFDRSw4REFBQyx5REFBRDtBQUFPLFFBQUksRUFBRUosSUFBYjtBQUFtQixXQUFPLEVBQUUsTUFBTUMsWUFBWSxFQUE5QztBQUFrRCxVQUFNLE1BQXhEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxhQUFLLEVBQUU7QUFBRUksVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBekM7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMseUJBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUgsR0FBVjtBQUFlLGlCQUFHLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsaUJBQUssRUFBRTtBQUFFSSxjQUFBQSxZQUFZLEVBQUU7QUFBaEIsYUFBaEM7QUFBQSx1QkFDR0YsSUFBSSxpQkFBSTtBQUFBLHdCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFgsZUFFRTtBQUFBLHdCQUFLRCxLQUFLLEdBQUdBLEtBQUgsR0FBWTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsZUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwQ0QsQ0EzQ007QUE0Q0EsTUFBTUksU0FBUyxHQUFHLENBQUM7QUFBRVAsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxZQUFSO0FBQXNCQyxFQUFBQSxHQUF0QjtBQUEyQkMsRUFBQUEsS0FBM0I7QUFBa0NDLEVBQUFBO0FBQWxDLENBQUQsS0FBOEM7QUFDckUsc0JBQ0UsOERBQUMseURBQUQ7QUFBTyxRQUFJLEVBQUVKLElBQWI7QUFBbUIsV0FBTyxFQUFFLE1BQU1DLFlBQVksRUFBOUM7QUFBa0QsVUFBTSxNQUF4RDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBa0MsYUFBSyxFQUFFO0FBQUVJLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXpDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVILEdBQVY7QUFBZSxpQkFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQUtFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQXlCLGlCQUFLLEVBQUU7QUFBRUksY0FBQUEsWUFBWSxFQUFFO0FBQWhCLGFBQWhDO0FBQUEsdUJBQ0dGLElBQUksaUJBQUk7QUFBQSx3QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURYLGVBRUU7QUFBQSx3QkFBS0QsS0FBSyxHQUFHQSxLQUFILEdBQVk7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLGVBVUU7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJGLGVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUErQ0QsQ0FoRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDUDtBQUNBOzs7QUFFQSxNQUFNckIsTUFBTSxHQUFHLE1BQU07QUFDbkIwQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZEMsSUFBQUEsc0RBQVk7QUFDYixHQUZRLENBQVQ7QUFHQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBVkQ7O0FBWUEsaUVBQWUzQixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOzs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ2lCLElBQUQ7QUFBQSxPQUFPVztBQUFQLE1BQWtCRCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJILCtDQUFRLENBQUM7QUFDM0NSLElBQUFBLEdBQUcsRUFBRSxJQURzQztBQUUzQ0MsSUFBQUEsS0FBSyxFQUFFO0FBRm9DLEdBQUQsQ0FBNUM7O0FBSUEsUUFBTVcsV0FBVyxHQUFHLENBQUNaLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUNsQ1EsSUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRSxJQUFBQSxhQUFhLENBQUM7QUFBRVgsTUFBQUEsR0FBRjtBQUFPQyxNQUFBQTtBQUFQLEtBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBSUEsUUFBTUYsWUFBWSxHQUFHLE1BQU07QUFDekJVLElBQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDQUUsSUFBQUEsYUFBYSxDQUFDO0FBQUVYLE1BQUFBLEdBQUcsRUFBRSxJQUFQO0FBQWFDLE1BQUFBLEtBQUssRUFBRTtBQUFwQixLQUFELENBQWI7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsRUFBQyxNQUFwQztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFNLHVCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFO0FBQ0Usd0JBQUksRUFBQyxHQURQO0FBRUUsMkJBQU8sRUFBRSxNQUNQVyxXQUFXLENBQ1Qsb0JBRFMsRUFFVCxrQ0FGUyxDQUhmO0FBQUEsNENBU0U7QUFBSywrQkFBUyxFQUFDLE9BQWY7QUFBdUIseUJBQUcsRUFBQyxvQkFBM0I7QUFBZ0QseUJBQUcsRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVkYsZUFXRTtBQUNFLCtCQUFTLEVBQUMsS0FEWjtBQUVFLHlCQUFHLEVBQUMsMEJBRk47QUFHRSx5QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBb0JFO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLEdBRFA7QUFFRSwyQkFBTyxFQUFFLE1BQ1BBLFdBQVcsQ0FBQyxvQkFBRCxFQUF1QixtQkFBdkIsQ0FIZjtBQUFBLDRDQU1FO0FBQUssK0JBQVMsRUFBQyxPQUFmO0FBQXVCLHlCQUFHLEVBQUMsb0JBQTNCO0FBQWdELHlCQUFHLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVBGLGVBUUU7QUFDRSwrQkFBUyxFQUFDLEtBRFo7QUFFRSx5QkFBRyxFQUFDLDBCQUZOO0FBR0UseUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFwQkYsZUFvQ0U7QUFBQSx5Q0FDRTtBQUNFLHdCQUFJLEVBQUMsR0FEUDtBQUVFLDJCQUFPLEVBQUUsTUFDUEEsV0FBVyxDQUFDLG9CQUFELEVBQXVCLGdCQUF2QixDQUhmO0FBQUEsNENBTUU7QUFBSywrQkFBUyxFQUFDLE9BQWY7QUFBdUIseUJBQUcsRUFBQyxvQkFBM0I7QUFBZ0QseUJBQUcsRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUEYsZUFRRTtBQUNFLCtCQUFTLEVBQUMsS0FEWjtBQUVFLHlCQUFHLEVBQUMsMEJBRk47QUFHRSx5QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBMERFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFFRTtBQUFBLDBEQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFXRTtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFFRTtBQUFBLHVEQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkExREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBb0ZFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMscUJBQVQ7QUFBK0IsbUJBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFDRSx5QkFBUyxFQUFDLE1BRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVDLGtCQUFBQSxlQUFlLEVBQUU7QUFBbkI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLGVBTUU7QUFBSyx5QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBGRixlQThGRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxZQUFSO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIsbUJBQUcsRUFBQyx5QkFBekI7QUFBbUQsbUJBQUcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBOUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBeUdFLDhEQUFDLG9EQUFEO0FBQ0UsVUFBSSxFQUFFZixJQURSO0FBRUUsa0JBQVksRUFBRSxNQUFNQyxZQUFZLEVBRmxDO0FBR0UsU0FBRyxFQUFFVyxVQUFVLENBQUNWLEdBSGxCO0FBSUUsV0FBSyxFQUFFVSxVQUFVLENBQUNUO0FBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0hELENBaElEOztBQWtJQSxpRUFBZXBCLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNnQixJQUFEO0FBQUEsT0FBT1c7QUFBUCxNQUFrQkQsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNFLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSCwrQ0FBUSxDQUFDO0FBQzNDUixJQUFBQSxHQUFHLEVBQUUsSUFEc0M7QUFFM0NDLElBQUFBLEtBQUssRUFBRSxFQUZvQztBQUczQ0MsSUFBQUEsSUFBSSxFQUFFO0FBSHFDLEdBQUQsQ0FBNUM7O0FBS0EsUUFBTVUsV0FBVyxHQUFHLENBQUNaLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxJQUFiLEtBQXNCO0FBQ3hDTyxJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQztBQUFFWCxNQUFBQSxHQUFGO0FBQU9DLE1BQUFBLEtBQVA7QUFBY0MsTUFBQUE7QUFBZCxLQUFELENBQWI7QUFDRCxHQUhEOztBQUlBLFFBQU1ILFlBQVksR0FBRyxNQUFNO0FBQ3pCVSxJQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQztBQUFFWCxNQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxNQUFBQSxLQUFLLEVBQUUsRUFBcEI7QUFBd0JDLE1BQUFBLElBQUksRUFBRTtBQUE5QixLQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLE1BQXBDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxvQkFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQXdDLGlDQUFrQixLQUExRDtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsdUNBQ0UsOERBQUMsZ0RBQUQsa0NBQVljLDBEQUFaO0FBQUEsMENBQ0UsOERBQUMscURBQUQ7QUFBYSw2QkFBUyxFQUFDLGFBQXZCO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLFlBQWY7QUFBQSw4Q0FDRTtBQUFLLGlDQUFTLEVBQUMsT0FBZjtBQUFBLGdEQUNFO0FBQUssNkJBQUcsRUFBQyw0QkFBVDtBQUFzQyw2QkFBRyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsZUFFRTtBQUNFLG1DQUFTLEVBQUMsTUFEWjtBQUVFLCtCQUFLLEVBQUU7QUFDTEgsNEJBQUFBLGVBQWUsRUFBRTtBQURaO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFVRTtBQUFLLGlDQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVZGLGVBV0U7QUFDRSxpQ0FBUyxFQUFDLEtBRFo7QUFFRSwyQkFBRyxFQUFDLDBCQUZOO0FBR0UsMkJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBWEYsZUFnQkU7QUFBSyxpQ0FBUyxFQUFDLFNBQWY7QUFBQSxnREFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FoQkYsZUFvQkU7QUFDRSxpQ0FBUyxFQUFDLG1CQURaO0FBRUUsK0JBQU8sRUFBRSxNQUNQRCxXQUFXLENBQ1IsZ0JBRFEsRUFFVCxzQ0FGUyxFQUdULG9CQUhTO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FwQkYsZUE4QkU7QUFBSyxpQ0FBUyxFQUFDLHFCQUFmO0FBQUEsK0NBQ0U7QUFBSyxtQ0FBUyxFQUFDLHlCQUFmO0FBQUEsaURBQ0U7QUFBSyxxQ0FBUyxFQUFDLE1BQWY7QUFBQSxvREFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQVRGLGVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQWtFRSw4REFBQyxxREFBRDtBQUFhLDZCQUFTLEVBQUMsYUFBdkI7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUFBLDhDQUNFO0FBQUssaUNBQVMsRUFBQyxPQUFmO0FBQUEsZ0RBQ0U7QUFBSyw2QkFBRyxFQUFDLDRCQUFUO0FBQXNDLDZCQUFHLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixlQUVFO0FBQ0UsbUNBQVMsRUFBQyxNQURaO0FBRUUsK0JBQUssRUFBRTtBQUNMQyw0QkFBQUEsZUFBZSxFQUFFO0FBRFo7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixlQVVFO0FBQUssaUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkYsZUFXRTtBQUNFLGlDQUFTLEVBQUMsS0FEWjtBQUVFLDJCQUFHLEVBQUMsMEJBRk47QUFHRSwyQkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FYRixlQWdCRTtBQUFLLGlDQUFTLEVBQUMsU0FBZjtBQUFBLGdEQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWhCRixlQW9CRTtBQUNFLGlDQUFTLEVBQUMsbUJBRFo7QUFFRSwrQkFBTyxFQUFFLE1BQ1BELFdBQVcsQ0FDUixnQkFEUSxFQUVULCtDQUZTLEVBR1QsaUJBSFM7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXBCRixlQThCRTtBQUFLLGlDQUFTLEVBQUMscUJBQWY7QUFBQSwrQ0FDRTtBQUFLLG1DQUFTLEVBQUMseUJBQWY7QUFBQSxpREFDRTtBQUFLLHFDQUFTLEVBQUMsTUFBZjtBQUFBLG9EQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBVEYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWxFRixlQW1JRSw4REFBQyxxREFBRDtBQUFhLDZCQUFTLEVBQUMsYUFBdkI7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUFBLDhDQUNFO0FBQUssaUNBQVMsRUFBQyxPQUFmO0FBQUEsZ0RBQ0U7QUFBSyw2QkFBRyxFQUFDLDRCQUFUO0FBQXNDLDZCQUFHLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixlQUVFO0FBQ0UsbUNBQVMsRUFBQyxNQURaO0FBRUUsK0JBQUssRUFBRTtBQUNMQyw0QkFBQUEsZUFBZSxFQUFFO0FBRFo7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixlQVVFO0FBQUssaUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkYsZUFXRTtBQUNFLGlDQUFTLEVBQUMsS0FEWjtBQUVFLDJCQUFHLEVBQUMsMEJBRk47QUFHRSwyQkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FYRixlQWdCRTtBQUFLLGlDQUFTLEVBQUMsU0FBZjtBQUFBLGdEQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWhCRixlQW9CRTtBQUNFLGlDQUFTLEVBQUMsbUJBRFo7QUFFRSwrQkFBTyxFQUFFLE1BQ1BELFdBQVcsQ0FDUixnQkFEUSxFQUVULDBDQUZTLEVBR1QsZUFIUztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBcEJGLGVBOEJFO0FBQUssaUNBQVMsRUFBQyxxQkFBZjtBQUFBLCtDQUNFO0FBQUssbUNBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNFO0FBQUsscUNBQVMsRUFBQyxNQUFmO0FBQUEsb0RBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FURixlQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBbklGLGVBb01FLDhEQUFDLHFEQUFEO0FBQWEsNkJBQVMsRUFBQyxhQUF2QjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQUEsOENBQ0U7QUFBSyxpQ0FBUyxFQUFDLE9BQWY7QUFBQSxnREFDRTtBQUFLLDZCQUFHLEVBQUMsNEJBQVQ7QUFBc0MsNkJBQUcsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLGVBRUU7QUFDRSxtQ0FBUyxFQUFDLE1BRFo7QUFFRSwrQkFBSyxFQUFFO0FBQ0xDLDRCQUFBQSxlQUFlLEVBQUU7QUFEWjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBVUU7QUFBSyxpQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FWRixlQVdFO0FBQ0UsaUNBQVMsRUFBQyxLQURaO0FBRUUsMkJBQUcsRUFBQywwQkFGTjtBQUdFLDJCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVhGLGVBZ0JFO0FBQUssaUNBQVMsRUFBQyxTQUFmO0FBQUEsZ0RBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaEJGLGVBb0JFO0FBQ0UsaUNBQVMsRUFBQyxtQkFEWjtBQUVFLCtCQUFPLEVBQUUsTUFDUEQsV0FBVyxDQUNSLGdCQURRLEVBRVQscUNBRlMsRUFHVCxnQkFIUztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBcEJGLGVBOEJFO0FBQUssaUNBQVMsRUFBQyxxQkFBZjtBQUFBLCtDQUNFO0FBQUssbUNBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNFO0FBQUsscUNBQVMsRUFBQyxNQUFmO0FBQUEsb0RBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FURixlQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBcE1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUEwUUU7QUFBSyx5QkFBUyxFQUFDLDhCQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUssMkJBQVMsRUFBQyxlQUFmO0FBQUEseUNBQ0U7QUFBQSw0Q0FDRTtBQUFBLDZDQUNFO0FBQUcsaUNBQVMsRUFBQyxTQUFiO0FBQUEsK0NBQ0U7QUFDRSxtQ0FBUyxFQUFDLEtBRFo7QUFFRSw2QkFBRyxFQUFDLHlCQUZOO0FBR0UsNkJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQVVFO0FBQUEsNkNBQ0U7QUFBRyxpQ0FBUyxFQUFDLFNBQWI7QUFBQSwrQ0FDRTtBQUNFLG1DQUFTLEVBQUMsS0FEWjtBQUVFLDZCQUFHLEVBQUMseUJBRk47QUFHRSw2QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTFRRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaVRFLDhEQUFDLG9EQUFEO0FBQ0UsVUFBSSxFQUFFZCxJQURSO0FBRUUsa0JBQVksRUFBRSxNQUFNQyxZQUFZLEVBRmxDO0FBR0UsU0FBRyxFQUFFVyxVQUFVLENBQUNWLEdBSGxCO0FBSUUsV0FBSyxFQUFFVSxVQUFVLENBQUNULEtBSnBCO0FBS0UsVUFBSSxFQUFFUyxVQUFVLENBQUNSO0FBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBalRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMlRELENBM1VEOztBQTZVQSxpRUFBZXBCLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1xQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxFQUFBQSxHQUFHLEVBQUUsc0JBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFLHNCQUZiO0FBR0VwQixFQUFBQSxLQUFLLEVBQUUsV0FIVDtBQUlFcUIsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FEYSxFQU9iO0FBQ0VGLEVBQUFBLEdBQUcsRUFBRSxzQkFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsc0JBRmI7QUFHRXBCLEVBQUFBLEtBQUssRUFBRSxZQUhUO0FBSUVxQixFQUFBQSxHQUFHLEVBQUU7QUFKUCxDQVBhLEVBY2I7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLHNCQURQO0FBRUVDLEVBQUFBLFNBQVMsRUFBRSxzQkFGYjtBQUdFcEIsRUFBQUEsS0FBSyxFQUFFLGFBSFQ7QUFJRXFCLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBZGEsRUFvQmI7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLHNCQURQO0FBRUVDLEVBQUFBLFNBQVMsRUFBRSxzQkFGYjtBQUdFcEIsRUFBQUEsS0FBSyxFQUFFLGNBSFQ7QUFJRXFCLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBcEJhLEVBMEJiO0FBQ0VGLEVBQUFBLEdBQUcsRUFBRSxzQkFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsc0JBRmI7QUFHRXBCLEVBQUFBLEtBQUssRUFBRSxjQUhUO0FBSUVxQixFQUFBQSxHQUFHLEVBQUU7QUFKUCxDQTFCYSxFQWdDYjtBQUNFRixFQUFBQSxHQUFHLEVBQUUsc0JBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFLHNCQUZiO0FBR0VwQixFQUFBQSxLQUFLLEVBQUUsYUFIVDtBQUlFcUIsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FoQ2EsQ0FBZjs7QUF3Q0EsTUFBTXZDLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU07QUFBQSxPQUFDd0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJoQiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7O0FBRUEsUUFBTWlCLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCRixJQUFBQSxZQUFZLENBQUM7QUFDWEcsTUFBQUEsVUFBVSxFQUFFRDtBQURELEtBQUQsQ0FBWjtBQUdELEdBSkQ7O0FBTUEsUUFBTUUsWUFBWSxHQUFHLE1BQU07QUFDekJKLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUdBLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLFdBQXBDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQ0UscUJBQVMsRUFBQywwQ0FEWjtBQUVFLGlDQUFrQixLQUZwQjtBQUFBLG1DQUlFO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBLHVDQUNFLDhEQUFDLGdEQUFELGtDQUFZTiwrREFBWjtBQUFBLDRCQUNHQyxNQUFNLENBQUNVLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFKLEtBQVIsa0JBQ1YsOERBQUMscURBQUQ7QUFBeUIsNkJBQVMsRUFBQyxjQUFuQztBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQUEsOENBQ0U7QUFBSyxpQ0FBUyxFQUFDLE9BQWY7QUFBQSxnREFDRTtBQUFLLDZCQUFHLEVBQUMsNEJBQVQ7QUFBc0MsNkJBQUcsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLGVBRUU7QUFDRSxtQ0FBUyxFQUFDLE1BRFo7QUFFRSwrQkFBSyxFQUFFO0FBQ0xiLDRCQUFBQSxlQUFlLEVBQUUsU0FBU2lCLEtBQUssQ0FBQ1YsR0FBZixHQUFxQjtBQURqQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkYsZUFRRTtBQUFLLG1DQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQVJGLGVBU0U7QUFDRSxtQ0FBUyxFQUFDLEtBRFo7QUFFRSw2QkFBRyxFQUFDLDBCQUZOO0FBR0UsNkJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBVEYsZUFjRTtBQUFLLG1DQUFTLEVBQUMsU0FBZjtBQUFBLGtEQUNFO0FBQUEsc0NBQUtVLEtBQUssQ0FBQzdCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERixlQUVFO0FBQUEsc0NBQU82QixLQUFLLENBQUNSO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBb0JFO0FBQ0UsaUNBQVMsRUFBQywrQkFEWjtBQUVFLCtCQUFPLEVBQUUsTUFBTUcsWUFBWSxDQUFDQyxLQUFEO0FBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUFrQkEsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBa0NFO0FBQUsseUJBQVMsRUFBQyw4QkFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFLLDJCQUFTLEVBQUMsZUFBZjtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBQSw2Q0FDRTtBQUFHLGlDQUFTLEVBQUMsU0FBYjtBQUFBLCtDQUNFO0FBQ0UsbUNBQVMsRUFBQyxLQURaO0FBRUUsNkJBQUcsRUFBQyx5QkFGTjtBQUdFLDZCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFVRTtBQUFBLDZDQUNFO0FBQUcsaUNBQVMsRUFBQyxTQUFiO0FBQUEsK0NBQ0U7QUFDRSxtQ0FBUyxFQUFDLEtBRFo7QUFFRSw2QkFBRyxFQUFDLHlCQUZOO0FBR0UsNkJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQTRFR0gsU0FBUyxnQkFDUiw4REFBQywrREFBRDtBQUNFLFlBQU0sRUFBRUosTUFBTSxDQUFDVSxHQUFQLENBQVk3QixHQUFELEtBQVU7QUFDM0IrQixRQUFBQSxHQUFHLEVBQUUvQixHQUFHLENBQUNvQixHQURrQjtBQUUzQm5CLFFBQUFBLEtBQUssRUFBRUQsR0FBRyxDQUFDZ0M7QUFGZ0IsT0FBVixDQUFYLENBRFY7QUFLRSxnQkFBVSxFQUFFVCxTQUFTLENBQUNJLFVBTHhCO0FBTUUsYUFBTyxFQUFFQztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFEsR0FTTixJQXJGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlGRCxDQXJHRDs7QUF1R0EsaUVBQWU3QyxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7OztBQUVBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsRUFBQyxPQUFwQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFLRTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBZ0JFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUMsY0FBZDtBQUE2Qix1Q0FBa0IsS0FBL0M7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQUssK0JBQVMsRUFBQyxPQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBSUU7QUFBSywrQkFBUyxFQUFDLE1BQWY7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkYsZUFPRTtBQUNFLDJCQUFLLEVBQUMsNEJBRFI7QUFFRSx3QkFBRSxFQUFDLE1BRkw7QUFHRSxzQ0FBZ0IsRUFBQyxlQUhuQjtBQUlFLDRCQUFNLEVBQUMsS0FKVDtBQUtFLDZCQUFPLEVBQUMsV0FMVjtBQU1FLDJCQUFLLEVBQUMsS0FOUjtBQU9FLCtCQUFTLEVBQUMsa0JBUFo7QUFBQSw2Q0FTRTtBQUFNLHlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBc0JFO0FBQ0UsMkJBQVMsRUFBQyxjQURaO0FBRUUsdUNBQWtCLEtBRnBCO0FBR0Usb0NBQWUsS0FIakI7QUFBQSx5Q0FLRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNFO0FBQUssK0JBQVMsRUFBQyxPQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBSUU7QUFBSywrQkFBUyxFQUFDLE1BQWY7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkYsZUFPRTtBQUNFLDJCQUFLLEVBQUMsNEJBRFI7QUFFRSw2QkFBTyxFQUFDLEtBRlY7QUFHRSx3QkFBRSxFQUFDLFNBSEw7QUFJRSx1QkFBQyxFQUFDLEtBSko7QUFLRSx1QkFBQyxFQUFDLEtBTEo7QUFNRSw2QkFBTyxFQUFDLGFBTlY7QUFPRSwyQkFBSyxFQUFFO0FBQ0xXLHdCQUFBQSxnQkFBZ0IsRUFBRTtBQURiLHVCQVBUO0FBVUUsK0JBQVMsRUFBQyxrQkFWWjtBQUFBLDhDQVlFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBWkYsZUFpQkU7QUFBQSwrQ0FDRTtBQUFBLGlEQUNFO0FBQVMsa0NBQU0sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakJGLGVBc0JFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFTLGtDQUFNLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQXRCRixlQTJCRTtBQUFBLCtDQUNFO0FBQUEsaURBQ0U7QUFBUyxrQ0FBTSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0EzQkYsZUFnQ0U7QUFBQSwrQ0FDRTtBQUFBLGlEQUNFO0FBQVMsa0NBQU0sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaENGLGVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBckNGLGVBc0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdENGLGVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdkNGLGVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBeENGLGVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBekNGLGVBMENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBMUNGLGVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBM0NGLGVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBNUNGLGVBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBN0NGLGVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBOUNGLGVBK0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBL0NGLGVBZ0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaERGLGVBaURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakRGLGVBa0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbERGLGVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXRCRixlQXlGRTtBQUNFLDJCQUFTLEVBQUMsY0FEWjtBQUVFLHVDQUFrQixLQUZwQjtBQUdFLG9DQUFlLEtBSGpCO0FBQUEseUNBS0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUFLLCtCQUFTLEVBQUMsT0FBZjtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUlFO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpGLGVBT0U7QUFDRSwyQkFBSyxFQUFDLDRCQURSO0FBRUUsd0JBQUUsRUFBQyxhQUZMO0FBR0Usc0NBQWdCLEVBQUMsZUFIbkI7QUFJRSw0QkFBTSxFQUFDLEtBSlQ7QUFLRSw2QkFBTyxFQUFDLFdBTFY7QUFNRSwyQkFBSyxFQUFDLEtBTlI7QUFPRSwrQkFBUyxFQUFDLGtCQVBaO0FBQUEsOENBU0U7QUFBTSx5QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FURixlQVVFO0FBQU0seUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkYsZUFXRTtBQUFNLHlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVhGLGVBWUU7QUFBTSx5QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FaRixlQWFFO0FBQU0seUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBYkYsZUFjRTtBQUFNLHlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXpGRixlQXVIRTtBQUNFLDJCQUFTLEVBQUMsY0FEWjtBQUVFLHVDQUFrQixLQUZwQjtBQUdFLG9DQUFlLEtBSGpCO0FBQUEseUNBS0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUFLLCtCQUFTLEVBQUMsT0FBZjtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUlFO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpGLGVBT0U7QUFDRSwyQkFBSyxFQUFDLDRCQURSO0FBRUUsNkJBQU8sRUFBQyxLQUZWO0FBR0Usd0JBQUUsRUFBQyxRQUhMO0FBSUUsdUJBQUMsRUFBQyxLQUpKO0FBS0UsdUJBQUMsRUFBQyxLQUxKO0FBTUUsNkJBQU8sRUFBQyxhQU5WO0FBT0UsMkJBQUssRUFBRTtBQUNMQSx3QkFBQUEsZ0JBQWdCLEVBQUU7QUFEYix1QkFQVDtBQVVFLCtCQUFTLEVBQUMsa0JBVlo7QUFBQSw4Q0FZRTtBQUFBLCtDQUNFO0FBQUEsaURBQ0U7QUFBTSw2QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVpGLGVBaUJFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakJGLGVBc0JFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdEJGLGVBMkJFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBM0JGLGVBZ0NFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaENGLGVBcUNFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBckNGLGVBMENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBMUNGLGVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBM0NGLGVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBNUNGLGVBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBN0NGLGVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBOUNGLGVBK0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBL0NGLGVBZ0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaERGLGVBaURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakRGLGVBa0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbERGLGVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbkRGLGVBb0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBcERGLGVBcURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBckRGLGVBc0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdERGLGVBdURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdkRGLGVBd0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXZIRixlQStMRTtBQUNFLDJCQUFTLEVBQUMsY0FEWjtBQUVFLHVDQUFrQixLQUZwQjtBQUdFLG9DQUFlLEtBSGpCO0FBQUEseUNBS0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUFLLCtCQUFTLEVBQUMsT0FBZjtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUlFO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpGLGVBT0U7QUFDRSwyQkFBSyxFQUFDLDRCQURSO0FBRUUsNkJBQU8sRUFBQyxLQUZWO0FBR0Usd0JBQUUsRUFBQyxRQUhMO0FBSUUsdUJBQUMsRUFBQyxLQUpKO0FBS0UsdUJBQUMsRUFBQyxLQUxKO0FBTUUsNkJBQU8sRUFBQyxhQU5WO0FBT0UsMkJBQUssRUFBRTtBQUNMQSx3QkFBQUEsZ0JBQWdCLEVBQUU7QUFEYix1QkFQVDtBQVVFLCtCQUFTLEVBQUMsa0JBVlo7QUFBQSw4Q0FZRTtBQUFBLCtDQUNFO0FBQUEsaURBQ0U7QUFBTSw2QkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVpGLGVBaUJFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakJGLGVBc0JFO0FBQUEsK0NBQ0U7QUFBQSxpREFDRTtBQUFNLDZCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdEJGLGVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBM0JGLGVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBNUJGLGVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBN0JGLGVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBOUJGLGVBK0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBL0JGLGVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBaENGLGVBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBakNGLGVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbENGLGVBbUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBbkNGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBcENGLGVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBckNGLGVBc0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdENGLGVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdkNGLGVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBeENGLGVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQS9MRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQkY7QUFB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LEdBQUdELE9BQU8sQ0FBQ0UsU0FBM0I7QUFDQSxVQUFNQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0ksWUFBOUI7O0FBQ0EsUUFBSUMsV0FBVyxJQUFJSixVQUFVLEdBQUdFLGFBQWEsR0FBRyxDQUFoRCxFQUFtRDtBQUNqREosTUFBQUEsT0FBTyxHQUFHQyxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsSUFBckIsQ0FBVjtBQUNEO0FBQ0YsR0FORDtBQU9BUixFQUFBQSxLQUFLLENBQUNsRixPQUFOLENBQWUyRixFQUFELElBQVE7QUFDcEJBLElBQUFBLEVBQUUsQ0FBQ3ZGLFNBQUgsQ0FBYXlCLE1BQWIsQ0FBb0IsU0FBcEI7O0FBQ0EsUUFBSThELEVBQUUsQ0FBQ0Msb0JBQUgsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0NGLFlBQWhDLENBQTZDLE1BQTdDLEtBQXlELElBQUdQLE9BQVEsRUFBeEUsRUFBMkU7QUFDekVRLE1BQUFBLEVBQUUsQ0FBQ3ZGLFNBQUgsQ0FBYXdCLEdBQWIsQ0FBaUIsU0FBakI7QUFDRDtBQUNGLEdBTEQ7QUFNRCxDQWpCTTs7Ozs7Ozs7OztBQzNMUCx1SEFBcUQ7Ozs7Ozs7Ozs7OztBQ0FyRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2t1cmEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9QYWdlSGVhZC5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRNb2RhbC5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvQ3Vyc29yLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL1ByaWNlLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9sYXlvdXQvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9zd2lwZXJTbGlkZXJQcm9wcy5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL3V0aWxpdHMuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcImphcmFsbGF4XCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLWxpZ2h0Ym94XCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtbW9kYWxcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJzd2lwZXIvcmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgO1xufVxuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTKSB7XG4gICAgICAgIC8vIEVycm9yIGlmIHJlYWN0IHJvb3QgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX1JPT1QgJiYgc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgZG9jIHdoZW4gdGhpcyBmZWF0dXJlIGlzIHN0YWJsZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1ZGlvIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BdWRpb1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0N1cnNvclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCBOZXdzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9OZXdzXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW9cIjtcbmltcG9ydCBQcmljZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUHJpY2VcIjtcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NraWxsc1wiO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9sYXlvdXQvSGVhZGVyXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uL3NyYy9sYXlvdXQvU2V0dGluZ3NcIjtcbmltcG9ydCBQYWdlSGVhZCBmcm9tIFwiLi4vc3JjL1BhZ2VIZWFkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQYWdlSGVhZCBwYWdlPVwiSG9tZVwiIC8+XG4gICAgICA8ZGl2IGlkPVwib3BlbmVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9hbGxfd3JhcFwiIGRhdGEtY29sb3I9XCJvcmFuZ2VcIj5cbiAgICAgICAgICA8U2V0dGluZ3MgLz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICA8UG9ydGZvbGlvIC8+XG4gICAgICAgICAgPFNraWxscyAvPlxuICAgICAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgICAgIDxQcmljZSAvPlxuICAgICAgICAgIDxOZXdzIC8+XG4gICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPEF1ZGlvIC8+XG4gICAgICAgICAgPEN1cnNvciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuY29uc3QgUGFnZUhlYWQgPSAoeyBwYWdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5LdXJhIHwge3BhZ2V9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWQ7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdWRpbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpbzFcIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9hdWRpby8xLm1wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvMlwiPlxyXG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL2F1ZGlvLzIubXAzXCIgLz5cclxuICAgICAgPC9hdWRpbz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Db250YWN0PC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+R2V0IGluIFRvdWNoPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIG91dCB0aGUgZm9ybSBvbiB0aGlzIHNlY3Rpb24gdG8gY29udGFjdCB3aXRoIG1lLlxyXG4gICAgICAgICAgICAgICAgICBPciBjYWxsIGJldHdlZW4gOTowMCBhLm0uIGFuZCA4OjAwIHAubS4gRVQsIE1vbmRheSB0aHJvdWdoXHJcbiAgICAgICAgICAgICAgICAgIEZyaWRheVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA1MTIgNTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjU2LDBDMTU2Ljc0OCwwLDc2LDgwLjc0OCw3NiwxODBjMCwzMy41MzQsOS4yODksNjYuMjYsMjYuODY5LDk0LjY1MmwxNDIuODg1LDIzMC4yNTcgICAgYzIuNzM3LDQuNDExLDcuNTU5LDcuMDkxLDEyLjc0NSw3LjA5MWMwLjA0LDAsMC4wNzksMCwwLjExOSwwYzUuMjMxLTAuMDQxLDEwLjA2My0yLjgwNCwxMi43NS03LjI5Mkw0MTAuNjExLDI3Mi4yMiAgICBDNDI3LjIyMSwyNDQuNDI4LDQzNiwyMTIuNTM5LDQzNiwxODBDNDM2LDgwLjc0OCwzNTUuMjUyLDAsMjU2LDB6IE0zODQuODY2LDI1Ni44MThMMjU4LjI3Miw0NjguMTg2bC0xMjkuOTA1LTIwOS4zNCAgICBDMTEzLjczNCwyMzUuMjE0LDEwNS44LDIwNy45NSwxMDUuOCwxODBjMC04Mi43MSw2Ny40OS0xNTAuMiwxNTAuMi0xNTAuMlM0MDYuMSw5Ny4yOSw0MDYuMSwxODAgICAgQzQwNi4xLDIwNy4xMjEsMzk4LjY4OSwyMzMuNjg4LDM4NC44NjYsMjU2LjgxOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNTYsOTBjLTQ5LjYyNiwwLTkwLDQwLjM3NC05MCw5MGMwLDQ5LjMwOSwzOS43MTcsOTAsOTAsOTBjNTAuOTAzLDAsOTAtNDEuMjMzLDkwLTkwQzM0NiwxMzAuMzc0LDMwNS42MjYsOTAsMjU2LDkweiAgICAgTTI1NiwyNDAuMmMtMzMuMjU3LDAtNjAuMi0yNy4wMzMtNjAuMi02MC4yYzAtMzMuMDg0LDI3LjExNi02MC4yLDYwLjItNjAuMnM2MC4xLDI3LjExNiw2MC4xLDYwLjIgICAgQzMxNi4xLDIxMi42ODMsMjg5Ljc4NCwyNDAuMiwyNTYsMjQwLjJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj40NCBQbGFjZSwgVG9reW8sIEphcGFuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDczLjgwNiA0NzMuODA2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNTEyIDUxMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM3NC40NTYsMjkzLjUwNmMtOS43LTEwLjEtMjEuNC0xNS41LTMzLjgtMTUuNWMtMTIuMywwLTI0LjEsNS4zLTM0LjIsMTUuNGwtMzEuNiwzMS41Yy0yLjYtMS40LTUuMi0yLjctNy43LTQgICAgYy0zLjYtMS44LTctMy41LTkuOS01LjNjLTI5LjYtMTguOC01Ni41LTQzLjMtODIuMy03NWMtMTIuNS0xNS44LTIwLjktMjkuMS0yNy00Mi42YzguMi03LjUsMTUuOC0xNS4zLDIzLjItMjIuOCAgICBjMi44LTIuOCw1LjYtNS43LDguNC04LjVjMjEtMjEsMjEtNDguMiwwLTY5LjJsLTI3LjMtMjcuM2MtMy4xLTMuMS02LjMtNi4zLTkuMy05LjVjLTYtNi4yLTEyLjMtMTIuNi0xOC44LTE4LjYgICAgYy05LjctOS42LTIxLjMtMTQuNy0zMy41LTE0LjdzLTI0LDUuMS0zNCwxNC43Yy0wLjEsMC4xLTAuMSwwLjEtMC4yLDAuMmwtMzQsMzQuM2MtMTIuOCwxMi44LTIwLjEsMjguNC0yMS43LDQ2LjUgICAgYy0yLjQsMjkuMiw2LjIsNTYuNCwxMi44LDc0LjJjMTYuMiw0My43LDQwLjQsODQuMiw3Ni41LDEyNy42YzQzLjgsNTIuMyw5Ni41LDkzLjYsMTU2LjcsMTIyLjdjMjMsMTAuOSw1My43LDIzLjgsODgsMjYgICAgYzIuMSwwLjEsNC4zLDAuMiw2LjMsMC4yYzIzLjEsMCw0Mi41LTguMyw1Ny43LTI0LjhjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVjNS4yLTYuMywxMS4yLTEyLDE3LjUtMTguMWM0LjMtNC4xLDguNy04LjQsMTMtMTIuOSAgICBjOS45LTEwLjMsMTUuMS0yMi4zLDE1LjEtMzQuNmMwLTEyLjQtNS4zLTI0LjMtMTUuNC0zNC4zTDM3NC40NTYsMjkzLjUwNnogTTQxMC4yNTYsMzk4LjgwNiAgICBDNDEwLjE1NiwzOTguODA2LDQxMC4xNTYsMzk4LjkwNiw0MTAuMjU2LDM5OC44MDZjLTMuOSw0LjItNy45LDgtMTIuMiwxMi4yYy02LjUsNi4yLTEzLjEsMTIuNy0xOS4zLDIwICAgIGMtMTAuMSwxMC44LTIyLDE1LjktMzcuNiwxNS45Yy0xLjUsMC0zLjEsMC00LjYtMC4xYy0yOS43LTEuOS01Ny4zLTEzLjUtNzgtMjMuNGMtNTYuNi0yNy40LTEwNi4zLTY2LjMtMTQ3LjYtMTE1LjYgICAgYy0zNC4xLTQxLjEtNTYuOS03OS4xLTcyLTExOS45Yy05LjMtMjQuOS0xMi43LTQ0LjMtMTEuMi02Mi42YzEtMTEuNyw1LjUtMjEuNCwxMy44LTI5LjdsMzQuMS0zNC4xYzQuOS00LjYsMTAuMS03LjEsMTUuMi03LjEgICAgYzYuMywwLDExLjQsMy44LDE0LjYsN2MwLjEsMC4xLDAuMiwwLjIsMC4zLDAuM2M2LjEsNS43LDExLjksMTEuNiwxOCwxNy45YzMuMSwzLjIsNi4zLDYuNCw5LjUsOS43bDI3LjMsMjcuMyAgICBjMTAuNiwxMC42LDEwLjYsMjAuNCwwLDMxYy0yLjksMi45LTUuNyw1LjgtOC42LDguNmMtOC40LDguNi0xNi40LDE2LjYtMjUuMSwyNC40Yy0wLjIsMC4yLTAuNCwwLjMtMC41LDAuNSAgICBjLTguNiw4LjYtNywxNy01LjIsMjIuN2MwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOWM3LjEsMTcuMiwxNy4xLDMzLjQsMzIuMyw1Mi43bDAuMSwwLjFjMjcuNiwzNCw1Ni43LDYwLjUsODguOCw4MC44ICAgIGM0LjEsMi42LDguMyw0LjcsMTIuMyw2LjdjMy42LDEuOCw3LDMuNSw5LjksNS4zYzAuNCwwLjIsMC44LDAuNSwxLjIsMC43YzMuNCwxLjcsNi42LDIuNSw5LjksMi41YzguMywwLDEzLjUtNS4yLDE1LjItNi45ICAgIGwzNC4yLTM0LjJjMy40LTMuNCw4LjgtNy41LDE1LjEtNy41YzYuMiwwLDExLjMsMy45LDE0LjQsNy4zYzAuMSwwLjEsMC4xLDAuMSwwLjIsMC4ybDU1LjEsNTUuMSAgICBDNDIwLjQ1NiwzNzcuNzA2LDQyMC40NTYsMzg4LjIwNiw0MTAuMjU2LDM5OC44MDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNTYuMDU2LDExMi43MDZjMjYuMiw0LjQsNTAsMTYuOCw2OSwzNS44czMxLjMsNDIuOCwzNS44LDY5YzEuMSw2LjYsNi44LDExLjIsMTMuMywxMS4yYzAuOCwwLDEuNS0wLjEsMi4zLTAuMiAgICBjNy40LTEuMiwxMi4zLTguMiwxMS4xLTE1LjZjLTUuNC0zMS43LTIwLjQtNjAuNi00My4zLTgzLjVzLTUxLjgtMzcuOS04My41LTQzLjNjLTcuNC0xLjItMTQuMywzLjctMTUuNiwxMSAgICBTMjQ4LjY1NiwxMTEuNTA2LDI1Ni4wNTYsMTEyLjcwNnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3My4yNTYsMjA5LjAwNmMtOC45LTUyLjItMzMuNS05OS43LTcxLjMtMTM3LjVzLTg1LjMtNjIuNC0xMzcuNS03MS4zYy03LjMtMS4zLTE0LjIsMy43LTE1LjUsMTEgICAgYy0xLjIsNy40LDMuNywxNC4zLDExLjEsMTUuNmM0Ni42LDcuOSw4OS4xLDMwLDEyMi45LDYzLjdjMzMuOCwzMy44LDU1LjgsNzYuMyw2My43LDEyMi45YzEuMSw2LjYsNi44LDExLjIsMTMuMywxMS4yICAgIGMwLjgsMCwxLjUtMC4xLDIuMy0wLjJDNDY5LjU1NiwyMjMuMzA2LDQ3NC41NTYsMjE2LjMwNiw0NzMuMjU2LDIwOS4wMDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rNzcgMDMzIDQ0MiA1NSA1Nzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA0NzkuMDU4IDQ3OS4wNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3OS4wNTggNDc5LjA1OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDM0LjE0NiA1OS44ODJoLTM4OS4yMzRjLTI0Ljc2NiAwLTQ0LjkxMiAyMC4xNDYtNDQuOTEyIDQ0LjkxMnYyNjkuNDdjMCAyNC43NjYgMjAuMTQ2IDQ0LjkxMiA0NC45MTIgNDQuOTEyaDM4OS4yMzRjMjQuNzY2IDAgNDQuOTEyLTIwLjE0NiA0NC45MTItNDQuOTEydi0yNjkuNDdjMC0yNC43NjYtMjAuMTQ2LTQ0LjkxMi00NC45MTItNDQuOTEyem0wIDI5Ljk0MWMyLjAzNCAwIDMuOTY5LjQyMiA1LjczOCAxLjE1OWwtMjAwLjM1NSAxNzMuNjQ5LTIwMC4zNTYtMTczLjY0OWMxLjc2OS0uNzM2IDMuNzA0LTEuMTU5IDUuNzM4LTEuMTU5em0wIDI5OS40MTFoLTM4OS4yMzRjLTguMjYgMC0xNC45NzEtNi43MS0xNC45NzEtMTQuOTcxdi0yNTEuNjQ4bDE5OS43NzggMTczLjE0MWMyLjgyMiAyLjQ0MSA2LjMxNiAzLjY1NSA5LjgxIDMuNjU1czYuOTg4LTEuMjEzIDkuODEtMy42NTVsMTk5Ljc3OC0xNzMuMTQxdjI1MS42NDljLS4wMDEgOC4yNi02LjcxMSAxNC45Ny0xNC45NzEgMTQuOTd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5kb2RvQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3OS40NDcgNDc5LjQ0N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMzkuNDQ2LDAuMDIyYy04LjU5NCwwLTE3LjE4MiwwLjQ2Mi0yNS43MjcsMS4zODNjLTcuODMyLDAuOC0xNS41NjgsMi4xMTItMjMuMiwzLjcwNCAgICBjLTEuNDc3LDAuMzA5LTIuOTU1LDAuNjM1LTQuNDMyLDAuOTc2QzE0MS4xMiwxNi4zMjMsMTAwLjA2LDM5LjMxNCw2Ny44MzEsNzIuMzAxYy0yLjk5NywzLjA3Mi01LjkzMSw2LjIzNS04LjgsOS40ODggICAgYy04Ny4wNiw5OS45NDgtNzYuNjEyLDI1MS41NDgsMjMuMzM3LDMzOC42MDhjOTUuNjg4LDgzLjM0OSwyMzkuNzIzLDc3LjgwMywzMjguNzE5LTEyLjY1NmMzLjAwMy0zLjA3Miw1LjkzNi02LjIzNSw4LjgtOS40ODggICAgYzM4LjQyMS00My43NTQsNTkuNTk0LTEwMC4wMDMsNTkuNTYtMTU4LjIzMkM0NzkuNDQ3LDEwNy40NzIsMzcxLjk5NSwwLjAyMSwyMzkuNDQ2LDAuMDIyeiBNNzguNDk1LDg0LjMwMSAgICBjMS4yNjQtMS4zMTIsMi41NzYtMi41NjgsMy44NjQtMy44NGMxLjQ4OC0xLjQ2NCwyLjk2OC0yLjkzNiw0LjQ4OC00LjM1MmMxLjMzNi0xLjI0OCwyLjcxMi0yLjQ0OCw0LjA4LTMuNjY0ICAgIGMxLjU0NC0xLjM2OCwzLjA4LTIuNzM2LDQuNjY0LTQuMDU2YzEuMzkyLTEuMTc2LDIuODI0LTIuMzA0LDQuMjQ4LTMuNDRjMS42LTEuMjgsMy4yLTIuNTYsNC44NDgtMy43OTIgICAgYzEuNDU2LTEuMDk2LDIuOTM2LTIuMTYsNC40MjQtMy4yYzEuNjU2LTEuMTg0LDMuMzItMi40LDUuMDA4LTMuNTA0YzEuNTEyLTEuMDI0LDMuMDQtMi4wMTYsNC41NzYtMyAgICBjMS43MTItMS4wOTYsMy40MzItMi4xNzYsNS4xNjgtMy4yYzEuNTYzLTAuOTMzLDMuMTM2LTEuODUxLDQuNzItMi43NTJjMS43NzEtMS4wMDgsMy41NDktMS45OTIsNS4zMzYtMi45NTIgICAgYzEuNi0wLjg1MywzLjItMS42ODgsNC44LTIuNTA0YzEuODI0LTAuOTIsMy42NjQtMS44MDgsNS41MTItMi42OGMxLjYtMC43NiwzLjI2NC0xLjUyLDQuOTEyLTIuMjRjMS44OC0wLjgsMy43ODQtMS42LDUuNjg4LTIuNCAgICBjMS42NTYtMC42OCwzLjMwNC0xLjM0NCw0Ljk3Ni0xLjk4NGMxLjkzNi0wLjczNiwzLjg5Ni0xLjQyNCw1Ljg1Ni0yLjExMmMxLjY3Mi0wLjU4NCwzLjM0NC0xLjE2OCw1LjA0LTEuNzIgICAgYzEuOTkyLTAuNjQsNC0xLjIzMiw2LjAxNi0xLjgxNmMxLjY4OC0wLjQ4OCwzLjM2LTAuOTkyLDUuMDU2LTEuNDQ4YzAuNjQ4LTAuMTY4LDEuMjk2LTAuMzA0LDEuOTQ0LTAuNDcyICAgIGMtMjMuNjgsMjIuOTkzLTQxLjI1Myw1MS41MjktNTEuMTI4LDgzLjAyNGMtMTguOTg4LTUuMDA4LTM3LjM3LTEyLjA4Mi01NC44MTYtMjEuMDk2Qzc4LjAzOSw4NC44MjEsNzguMjYzLDg0LjU0MSw3OC40OTUsODQuMzAxICAgIHogTTY2Ljk5MSw5Ny4xODFjMTkuMjE3LDEwLjQxMiwzOS41OTUsMTguNTIyLDYwLjcxMiwyNC4xNmMtMTAuMzUyLDM1Ljk5Ni0xNS43ODYsNzMuMjI3LTE2LjE1MiwxMTAuNjhoLTk1LjkyICAgIEMxNy4zNzQsMTgyLjYzMiwzNS40MzUsMTM1LjIxNCw2Ni45OTEsOTcuMTgxeiBNNjYuOTkxLDM4Mi44NjFjLTMxLjU1NC0zOC4wMzQtNDkuNjE1LTg1LjQ1Mi01MS4zNi0xMzQuODRoOTUuOTIgICAgYzAuMzY2LDM3LjQ1Myw1Ljc5OSw3NC42ODQsMTYuMTUyLDExMC42OEMxMDYuNTg3LDM2NC4zNDEsODYuMjA5LDM3Mi40NSw2Ni45OTEsMzgyLjg2MXogTTE4MS43MjcsNDU2LjQyOSAgICBjLTEuNjE2LTAuNDA4LTMuMjg4LTAuOTM2LTQuOTUyLTEuNDI0Yy0yLjAyNC0wLjU5Mi00LjA1Ni0xLjE4NC02LjA1Ni0xLjgzMmMtMS42ODgtMC41NDQtMy4zNTItMS4xMjgtNS4wMTYtMS43MTIgICAgYy0xLjk2OC0wLjY4LTMuOTM2LTEuMzc2LTUuODgtMi4xMmMtMS42NjQtMC42MzItMy4zMDQtMS4yOTYtNC45NTItMS45NjhjLTEuOTEyLTAuOC0zLjgyNC0xLjYtNS43Mi0yLjQgICAgYy0xLjYzMi0wLjcyLTMuMjU2LTEuNDYxLTQuODcyLTIuMjI0Yy0xLjg2NC0wLjg4LTMuNzItMS43NzYtNS42LTIuNzA0Yy0xLjYtMC44LTMuMi0xLjYtNC44LTIuNDcyICAgIGMtMS44MDgtMC45NjgtMy42LTEuOTYtNS4zOTItMi45ODRjLTEuNi0wLjg4OC0zLjEyLTEuOC00LjY2NC0yLjcyOGMtMS43Ni0xLjA1Ni0zLjQ4OC0yLjE0NC01LjIxNi0zLjI1NiAgICBjLTEuNTItMC45NjgtMy4wNC0xLjk1Mi00LjUzNi0yLjk2Yy0xLjcwNC0xLjE1Mi0zLjM5Mi0yLjM1Mi01LjA2NC0zLjU1MmMtMS40NjQtMS4wNDgtMi45MjgtMi4wOTYtNC4zNjgtMy4yICAgIGMtMS42NTYtMS4yNDgtMy4yOC0yLjUzNi00Ljg5Ni0zLjgzMmMtMS40MTYtMS4xMjgtMi44MjQtMi4yNDgtNC4yMDgtMy40MDhjLTEuNi0xLjMyOC0zLjE0NC0yLjcxMi00LjY5Ni00LjA4OCAgICBjLTEuMzYtMS4yMDgtMi43MjgtMi40LTQuMDU2LTMuNjMyYy0xLjUyOC0xLjQyNC0zLjAwOC0yLjkwNC00LjQ5Ni00LjM2OGMtMS4yODgtMS4yNzItMi42LTIuNTI4LTMuODY0LTMuODMyICAgIGMtMC4yMzItMC4yNDgtMC40NTYtMC41MDQtMC42ODgtMC43NDRjMTcuNDQ1LTkuMDE4LDM1LjgyNy0xNi4wOTUsNTQuODE2LTIxLjEwNGM5Ljg3NywzMS40OTQsMjcuNDQ5LDYwLjAyOSw1MS4xMjgsODMuMDI0ICAgIEMxODMuMDMxLDQ1Ni43NDEsMTgyLjM3NSw0NTYuNjA1LDE4MS43MjcsNDU2LjQyOXogTTIzMS40NDcsNDYzLjM4OWMtMzQuMjMyLTQuODY0LTY0LjI0LTQwLjU5Mi04My4xMi05My4zNTIgICAgYzI3LjI5Ni02LjExMiw1NS4xNTEtOS4zOTEsODMuMTItOS43ODRWNDYzLjM4OXogTTIzMS40NDcsMzQ0LjI1M2MtMjkuNjcsMC4zOS01OS4yMTUsMy45MTQtODguMTQ0LDEwLjUxMiAgICBjLTEwLjA0NS0zNC43MDctMTUuMzQ0LTcwLjYxNS0xNS43NTItMTA2Ljc0NGgxMDMuODk2VjM0NC4yNTN6IE0yMzEuNDQ3LDIzMi4wMjFIMTI3LjU1MSAgICBjMC40MDctMzYuMTI5LDUuNzA2LTcyLjAzNywxNS43NTItMTA2Ljc0NGMyOC45MjksNi41OTcsNTguNDc1LDEwLjEyMSw4OC4xNDQsMTAuNTEyVjIzMi4wMjF6IE0yMzEuNDQ3LDExOS43ODkgICAgYy0yNy45Ny0wLjM5LTU1LjgyNC0zLjY2OS04My4xMi05Ljc4NGMxOC44OC01Mi43Niw0OC44ODgtODguNDg4LDgzLjEyLTkzLjM1MlYxMTkuNzg5eiBNNDExLjkwMyw5Ny4xODEgICAgYzMxLjU1NCwzOC4wMzQsNDkuNjE1LDg1LjQ1Miw1MS4zNiwxMzQuODRoLTk1LjkyYy0wLjM2Ni0zNy40NTMtNS43OTktNzQuNjg0LTE2LjE1Mi0xMTAuNjggICAgQzM3Mi4zMDcsMTE1LjcsMzkyLjY4NSwxMDcuNTkxLDQxMS45MDMsOTcuMTgxeiBNMjk3LjEwMywyMy42MDVjMS42OCwwLjQxNiwzLjM1MiwwLjk0NCw1LjAxNiwxLjQzMiAgICBjMi4wMjQsMC41OTIsNC4wNTYsMS4xODQsNi4wNTYsMS44MzJjMS42ODgsMC41NDQsMy4zNTIsMS4xMjgsNS4wMTYsMS43MTJjMS45NjgsMC42OCwzLjkzNiwxLjM3Niw1Ljg4LDIuMTIgICAgYzEuNjY0LDAuNjMyLDMuMzA0LDEuMjk2LDQuOTUyLDEuOTY4YzEuOTEyLDAuOCwzLjgyNCwxLjYsNS43MiwyLjRjMS42MzIsMC43MiwzLjI1NiwxLjQ2MSw0Ljg3MiwyLjIyNCAgICBjMS44NjQsMC44OCwzLjcyLDEuNzc2LDUuNiwyLjcwNGMxLjYsMC44LDMuMiwxLjYsNC44LDIuNDcyYzEuODA4LDAuOTY4LDMuNiwxLjk2LDUuMzkyLDIuOTg0YzEuNiwwLjg4OCwzLjEyLDEuOCw0LjY2NCwyLjcyOCAgICBjMS43NiwxLjA1NiwzLjQ4OCwyLjE0NCw1LjIxNiwzLjI1NmMxLjUyLDAuOTY4LDMuMDQsMS45NTIsNC41MzYsMi45NmMxLjcwNCwxLjE1MiwzLjM4NCwyLjM0NCw1LjA1NiwzLjU0NCAgICBjMS40NzIsMS4wNDgsMi45MzYsMi4xMDQsNC4zODQsMy4yYzEuNjQ4LDEuMjQsMy4yNjQsMi41MjgsNC44ODgsMy44MjRjMS40MDgsMS4xMiwyLjgyNCwyLjI0LDQuMjA4LDMuNDA4ICAgIGMxLjYsMS4zMjgsMy4xNDQsMi43MTIsNC42OTYsNC4wODhjMS4zNiwxLjIwOCwyLjcyOCwyLjQsNC4wNTYsMy42MzJjMS41MjgsMS40MjQsMy4wMDgsMi45MDQsNC40OTYsNC4zNjggICAgYzEuMjg4LDEuMjcyLDIuNiwyLjUyOCwzLjg2NCwzLjgzMmMwLjIzMiwwLjI0OCwwLjQ1NiwwLjUwNCwwLjY4OCwwLjc0NGMtMTcuNDQ1LDkuMDE4LTM1LjgyNywxNi4wOTUtNTQuODE2LDIxLjEwNCAgICBjLTkuODk2LTMxLjQ5OC0yNy40OTEtNjAuMDMxLTUxLjE5Mi04My4wMTZDMjk1Ljc5OSwyMy4yOTMsMjk2LjQ1NSwyMy40MjksMjk3LjEwMywyMy42MDV6IE0yNDcuNDQ3LDE2LjY1MyAgICBjMzQuMjMyLDQuODY0LDY0LjI0LDQwLjU5Miw4My4xMiw5My4zNTJjLTI3LjI5Niw2LjExMi01NS4xNTEsOS4zOTEtODMuMTIsOS43ODRWMTYuNjUzeiBNMjQ3LjQ0NywxMzUuNzg5ICAgIGMyOS42Ny0wLjM5LDU5LjIxNS0zLjkxNCw4OC4xNDQtMTAuNTEyYzEwLjA0NSwzNC43MDcsMTUuMzQ0LDcwLjYxNSwxNS43NTIsMTA2Ljc0NEgyNDcuNDQ3VjEzNS43ODl6IE0yNDcuNDQ3LDI0OC4wMjFoMTAzLjg5NiAgICBjLTAuNDA3LDM2LjEyOS01LjcwNiw3Mi4wMzctMTUuNzUyLDEwNi43NDRoMGMtMjguOTI5LTYuNTk3LTU4LjQ3NC0xMC4xMjEtODguMTQ0LTEwLjUxMlYyNDguMDIxeiBNMjQ3LjQ0Nyw0NjMuMzg5VjM2MC4yNTMgICAgYzI3Ljk3LDAuMzksNTUuODI0LDMuNjY5LDgzLjEyLDkuNzg0QzMxMS42ODcsNDIyLjc5NywyODEuNjc5LDQ1OC41MjUsMjQ3LjQ0Nyw0NjMuMzg5eiBNNDAwLjM5OSwzOTUuNzQxICAgIGMtMS4yNjQsMS4zMDQtMi41NjgsMi41Ni0zLjg1NiwzLjgzMmMtMS40ODgsMS40NjQtMi45NzYsMi45NDQtNC41MDQsNC4zNjhjLTEuMzI4LDEuMjQtMi42OTYsMi40LTQuMDU2LDMuNjQgICAgYy0xLjU1MiwxLjM3Ni0zLjA5NiwyLjc1Mi00LjY4LDQuMDhjLTEuNCwxLjE2OC0yLjgyNCwyLjI5Ni00LjI0OCwzLjQzMmMtMS42LDEuMjgtMy4yLDIuNTYtNC44NDgsMy43OTIgICAgYy0xLjQ1NiwxLjA5Ni0yLjkzNiwyLjE2LTQuNDI0LDMuMmMtMS42NTYsMS4xODQtMy4zMiwyLjQtNS4wMDgsMy41MDRjLTEuNTEyLDEuMDI0LTMuMDQsMi4wMTYtNC41NzYsMi45OTIgICAgYy0xLjcxMiwxLjEwNC0zLjQzNywyLjE3MS01LjE3NiwzLjJjLTEuNiwwLjkzNi0zLjEyOCwxLjg0OC00LjcwNCwyLjc1MmMtMS43NzEsMS4wMDgtMy41NTIsMS45OTItNS4zNDQsMi45NTIgICAgYy0xLjYsMC44NTMtMy4yLDEuNjg4LTQuOCwyLjUwNGMtMS44MjQsMC45Mi0zLjY2NCwxLjgwOC01LjUxMiwyLjY4Yy0xLjYsMC43Ni0zLjI2NCwxLjUyLTQuOTEyLDIuMjQgICAgYy0xLjg4LDAuOC0zLjc4NCwxLjYtNS42ODgsMi40Yy0xLjY1NiwwLjY3Mi0zLjMwNCwxLjM0NC00Ljk2OCwxLjk3NmMtMS45NTIsMC43NDQtMy45MTIsMS40NC01Ljg4LDIuMTIgICAgYy0xLjY2NCwwLjU4NC0zLjMyOCwxLjE2OC01LjAxNiwxLjcxMmMtMiwwLjY0OC00LDEuMjQtNi4wNCwxLjgyNGMtMS42NzIsMC40OTYtMy4zNTIsMC45OTItNS4wNCwxLjQ0OCAgICBjLTAuNjQ4LDAuMTY4LTEuMjk2LDAuMzA0LTEuOTQ0LDAuNDcyYzIzLjY4LTIyLjk5Myw0MS4yNTMtNTEuNTI5LDUxLjEyOC04My4wMjRjMTguOTg4LDUuMDA4LDM3LjM3LDEyLjA4Miw1NC44MTYsMjEuMDk2ICAgIEM0MDAuODU1LDM5NS4yMjEsNDAwLjYzMSwzOTUuNTAxLDQwMC4zOTksMzk1Ljc0MXogTTQxMS45MDMsMzgyLjg2MWMtMTkuMjE3LTEwLjQxMi0zOS41OTUtMTguNTIyLTYwLjcxMi0yNC4xNiAgICBjMTAuMzUyLTM1Ljk5NiwxNS43ODYtNzMuMjI3LDE2LjE1Mi0xMTAuNjhoOTUuOTJDNDYxLjUyMSwyOTcuNDA5LDQ0My40NTksMzQ0LjgyOCw0MTEuOTAzLDM4Mi44NjF6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53d3cuZG9tYWluLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdF9mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0X2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV0dXJubWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zdWNjZXNzPVwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkLCBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uXCJcclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsZWFzZSBGaWxsIFJlcXVpcmVkIEZpZWxkczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9idXR0b25cIiBkYXRhLXBvc2l0aW9uPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbmRfbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdWJtaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtbW9kYWxcIjtcclxuZXhwb3J0IGNvbnN0IE5ld3NNb2RhbCA9ICh7IG9wZW4sIG9uQ2xvc2VNb2RhbCwgaW1nLCB0aXRsZSwgZGF0ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBvbkNsb3NlTW9kYWwoKX0gY2VudGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BvcHVwX2luZm9ybWF0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtkYXRlICYmIDxzcGFuPntkYXRlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPGgzPnt0aXRsZSA/IHRpdGxlIDogYFZTIENvZGUgR2V0cyBOZXcgSmF2YVNjcmlwdCBEZWJ1Z2dlcmB9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuIGF3YXJkLXdpbm5pbmcgZGVzaWduXHJcbiAgICAgICAgICAgICAgICB0ZWFtIHRoYXQgY3JlYXRlcyBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlXHJcbiAgICAgICAgICAgICAgICB5b3VyIGJyYW5kLCBpbXByb3ZlIHlvdXIgY29udmVyc2lvbiByYXRlcywgYW5kIG1heGltaXplIHlvdXJcclxuICAgICAgICAgICAgICAgIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3MgYW5kIGFjaGlldmUgeW91ciBnb2Fscy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJbiB0b2RheeKAmXMgZGlnaXRhbCB3b3JsZCwgeW91ciB3ZWJzaXRlIGlzIHRoZSBmaXJzdCBpbnRlcmFjdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyIGJ1c2luZXNzLiBUaGF0J3Mgd2h5IGFsbW9zdCA5NSBwZXJjZW50XHJcbiAgICAgICAgICAgICAgICBvZiBhIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLiBJdOKAmXMgYWxzb1xyXG4gICAgICAgICAgICAgICAgd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW4gaW1tZW5zZSBpbXBhY3Qgb24geW91clxyXG4gICAgICAgICAgICAgICAgY29tcGFueeKAmXMgYm90dG9tIGxpbmUuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhhdOKAmXMgd2h5IG1vcmUgY29tcGFuaWVzIGFyZSBub3Qgb25seSByZWV2YWx1YXRpbmcgdGhlaXJcclxuICAgICAgICAgICAgICAgIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzbyBwYXJ0bmVyaW5nIHdpdGggS3VyYSwgdGhlIHdlYiBkZXNpZ25cclxuICAgICAgICAgICAgICAgIGFnZW5jeSB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlIGZvciBpdHNcclxuICAgICAgICAgICAgICAgIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkcyB1bmRlciBvdXIgYmVsdCwgd2UncmVcclxuICAgICAgICAgICAgICAgIGNvbmZpZGVudCB3ZSBjYW4gZGVzaWduIGEgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yXHJcbiAgICAgICAgICAgICAgICB5b3VyIHVuaXF1ZSBidXNpbmVzcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgSG9tZU1vZGFsID0gKHsgb3Blbiwgb25DbG9zZU1vZGFsLCBpbWcsIHRpdGxlLCBkYXRlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9eygpID0+IG9uQ2xvc2VNb2RhbCgpfSBjZW50ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X2lubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl93cmFwXCIgc3R5bGU9e3sgcGFkZGluZzogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge2RhdGUgJiYgPHNwYW4+e2RhdGV9PC9zcGFuPn1cclxuICAgICAgICAgICAgICA8aDM+e3RpdGxlID8gdGl0bGUgOiBgVlMgQ29kZSBHZXRzIE5ldyBKYXZhU2NyaXB0IERlYnVnZ2VyYH08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhbiBhd2FyZC13aW5uaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzIGlubm92YXRpdmUsIGVmZmVjdGl2ZSB3ZWJzaXRlcyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSB5b3VyIGJyYW5kLCBpbXByb3ZlIHlvdXIgY29udmVyc2lvbiByYXRlcywgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW1pemUgeW91ciByZXZlbnVlIHRvIGhlbHAgZ3JvdyB5b3VyIGJ1c2luZXNzIGFuZCBhY2hpZXZlXHJcbiAgICAgICAgICAgICAgICAgICAgeW91ciBnb2Fscy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBJbiB0b2RheeKAmXMgZGlnaXRhbCB3b3JsZCwgeW91ciB3ZWJzaXRlIGlzIHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uIGNvbnN1bWVycyBoYXZlIHdpdGggeW91ciBidXNpbmVzcy4gVGhhdCdzIHdoeVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbW9zdCA5NSBwZXJjZW50IG9mIGEgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViIGRlc2lnbi4gSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHkgcmVldmFsdWF0aW5nIHRoZWlyXHJcbiAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduIGFnZW5jeSB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpblxyXG4gICAgICAgICAgICAgICAgICAgIHJldmVudWUgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYSBjdXN0b21cclxuICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZSBidXNpbmVzcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGN1c3RvbUN1cnNvciB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcblxyXG5jb25zdCBDdXJzb3IgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGN1c3RvbUN1cnNvcigpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW91c2UtY3Vyc29yIGN1cnNvci1vdXRlclwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdXNlLWN1cnNvciBjdXJzb3ItaW5uZXJcIj48L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnNvcjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSG9tZU1vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBvbk9wZW5Nb2RhbCA9IChpbWcsIHRpdGxlKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0TW9kYWxWYWx1ZSh7IGltZywgdGl0bGUgfSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWc6IG51bGwsIHRpdGxlOiBcIlwiIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9oZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+QmVybmFyZCBTbWl0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiam9iXCI+Q3JlYXRpdmUgRGVzaWduZXIgYmFzZWQgaW4gSmFwYW48L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Nb2RhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWcvc2VydmljZS8xLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3JlYXRpdmUgRGVzaWduZXIgYmFzZWQgaW4gSmFwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz1cIi9pbWcvc2VydmljZS8xLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XZWIgRGV2ZWxvcG1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Nb2RhbChcIi9pbWcvc2VydmljZS8yLmpwZ1wiLCBcIkRpZ2l0YWwgTWFya2V0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz1cIi9pbWcvc2VydmljZS8yLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaWdpdGFsIE1hcmtldGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFwiL2ltZy9zZXJ2aWNlLzEuanBnXCIsIFwiR3JhcGhpYyBEZXNpZ25cIilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPVwiL2ltZy9zZXJ2aWNlLzMuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdyYXBoaWMgRGVzaWduPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+MTArPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZZWFycyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+M0srPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIYXBweVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy90aHVtYnMvMy00LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGltZy9oZXJvLzEuanBnKVwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd24gYW5jaG9yXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiL2ltZy9zdmcvZG93bi1hcnJvdy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIb21lTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4gb25DbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgaW1nPXttb2RhbFZhbHVlLmltZ31cclxuICAgICAgICB0aXRsZT17bW9kYWxWYWx1ZS50aXRsZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IG5ld3NTbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuaW1wb3J0IHsgTmV3c01vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcblxyXG5jb25zdCBOZXdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25PcGVuTW9kYWwgPSAoaW1nLCB0aXRsZSwgZGF0ZSkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWcsIHRpdGxlLCBkYXRlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nOiBudWxsLCB0aXRsZTogXCJcIiwgZGF0ZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwibmV3c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9uZXdzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5ld3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPkxhdGVzdCBOZXdzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19saXN0IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljay1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2std3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpcGVyIHsuLi5uZXdzU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic2xpY2stc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3BvcnRmb2xpby80MTAtNDYwLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWcvbmV3cy8xLmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VwdGVtYmVyIDAyLCAyMDIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WUyBDb2RlIEdldHMgTmV3IEphdmFTY3JpcHQgRGVidWdnZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW1nL25ld3MvMS5qcGdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZTIENvZGUgR2V0cyBOZXcgSmF2YVNjcmlwdCBEZWJ1Z2dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlcHRlbWJlciAwMiwgMjAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfaGlkZGVuX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkLXdpbm5pbmcgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZSB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzbGljay1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcG9ydGZvbGlvLzQxMC00NjAuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltZy9uZXdzLzIuanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdWd1c3QgMTcsIDIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkphdmFsaW4gRnJhbWV3b3JrIGZvciBLb3RsaW4gYW5kIEphdmEgVXBkYXRlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1cmFfdG1fZnVsbF9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbWcvbmV3cy8yLmpwZ2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSmF2YWxpbiBGcmFtZXdvcmsgZm9yIEtvdGxpbiBhbmQgSmF2YSBVcGRhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVndXN0IDE3LCAyMDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19oaWRkZW5fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhcmQtd2lubmluZyBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudCBvZiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWV2YWx1YXRpbmcgdGhlaXIgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWIgZGVzaWduIGFnZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInNsaWNrLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vNDEwLTQ2MC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1nL25ld3MvMy5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkp1bHkgMDUsIDIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkphdmFTY3JpcHQgRG9taW5hdGVkIE9wZW4gU291cmNlIGluIDIwMjE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW1nL25ld3MvMy5qcGdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkphdmFTY3JpcHQgRG9taW5hdGVkIE9wZW4gU291cmNlIGluIDIwMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5IDA1LCAyMDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19oaWRkZW5fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhcmQtd2lubmluZyBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudCBvZiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWV2YWx1YXRpbmcgdGhlaXIgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWIgZGVzaWduIGFnZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInNsaWNrLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vNDEwLTQ2MC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1nL25ld3MvNC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFwcmlsIDIyLCAyMDIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QZXJmZWN0byBUZXN0cyBQcm9ncmVzc2l2ZSBXZWIgQXBwczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1cmFfdG1fZnVsbF9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbWcvbmV3cy80LmpwZ2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGVyZmVjdG8gVGVzdHMgUHJvZ3Jlc3NpdmUgV2ViIEFwcHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbCAyMiwgMjAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfaGlkZGVuX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkLXdpbm5pbmcgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZSB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zd2lwZXJfcHJvZ3Jlc3MgZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X3BhZ2luYXRpb25faW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXdzTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4gb25DbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgaW1nPXttb2RhbFZhbHVlLmltZ31cclxuICAgICAgICB0aXRsZT17bW9kYWxWYWx1ZS50aXRsZX1cclxuICAgICAgICBkYXRlPXttb2RhbFZhbHVlLmRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaWdodEJveCBmcm9tIFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBwb3J0Zm9saW9TbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuXHJcbmNvbnN0IElNQUdFUyA9IFtcclxuICB7XHJcbiAgICBzcmM6IFwiL2ltZy9wb3J0Zm9saW8vMS5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCIvaW1nL3BvcnRmb2xpby8xLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiTWFnaWMgQXJ0XCIsXHJcbiAgICBzdWI6IFwiSW1hZ2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogXCIvaW1nL3BvcnRmb2xpby8yLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcIi9pbWcvcG9ydGZvbGlvLzIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJCb25hIEdyZWVuXCIsXHJcbiAgICBzdWI6IFwiSW1hZ2VcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBzcmM6IFwiL2ltZy9wb3J0Zm9saW8vMy5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCIvaW1nL3BvcnRmb2xpby8zLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiTGVvIERhbmRvcmFcIixcclxuICAgIHN1YjogXCJJbWFnZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBcIi9pbWcvcG9ydGZvbGlvLzQuanBnXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiL2ltZy9wb3J0Zm9saW8vNC5qcGdcIixcclxuICAgIHRpdGxlOiBcIkZvbGlvIEdyYXNpYVwiLFxyXG4gICAgc3ViOiBcIkltYWdlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6IFwiL2ltZy9wb3J0Zm9saW8vNS5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCIvaW1nL3BvcnRmb2xpby81LmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVml2YSBNZXJjdXJ5XCIsXHJcbiAgICBzdWI6IFwiSW1hZ2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogXCIvaW1nL3BvcnRmb2xpby82LmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcIi9pbWcvcG9ydGZvbGlvLzYuanBnXCIsXHJcbiAgICB0aXRsZTogXCJTYW50YSBPbmVyYVwiLFxyXG4gICAgc3ViOiBcIkltYWdlXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0xpZ2h0LCBzZXRTaG93TGlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHNob3dMaWdodEJveCA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0U2hvd0xpZ2h0KHtcclxuICAgICAgc3RhcnRJbmRleDogaW5kZXgsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTGlnaHRCb3ggPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TGlnaHQobnVsbCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwicG9ydGZvbGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Qb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbGVjdGVkIFdvcmtzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW9fbGlzdCBnYWxsZXJ5X3pvb20gd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciB7Li4ucG9ydGZvbGlvU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7SU1BR0VTLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vNDEwLTQ2MC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaW1hZ2Uuc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpbWFnZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aW1hZ2Uuc3VifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGluayBwb3B1cC12aW1lb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TGlnaHRCb3goaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zd2lwZXJfcHJvZ3Jlc3MgZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X3BhZ2luYXRpb25faW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TGlnaHQgPyAoXHJcbiAgICAgICAgPExpZ2h0Qm94XHJcbiAgICAgICAgICBpbWFnZXM9e0lNQUdFUy5tYXAoKGltZykgPT4gKHtcclxuICAgICAgICAgICAgdXJsOiBpbWcuc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogaW1nLmNhcHRpb24sXHJcbiAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICBzdGFydEluZGV4PXtzaG93TGlnaHQuc3RhcnRJbmRleH1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hpZGVMaWdodEJveH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJpY2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJwcmljZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fcHJpY2luZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmdfaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3N0aWNreV9zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5QcmljaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+U2VydmljZSBQcmljZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRm9yIG1vcmUgdGhhbiAyMCB5ZWFycyBvdXIgZXhwZXJ0cyBoYXZlIGJlZW4gYWNjb21wbGlzaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGVub3VnaCB3aXRoIG1vZGVybiBXZWIgRGV2ZWxvcG1lbnQsIG5ldyBnZW5lcmF0aW9uIHdlYiBhbmRcclxuICAgICAgICAgICAgICAgICAgICBhcHAgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zdGlja3lfc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V29yZFByZXNzIERldmVsb3BtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDUwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJCb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMiAwYy02LjYxNSAwLTEyIDUuMzgxLTEyIDEyIDAgNi42MTUgNS4zODUgMTIgMTIgMTJzMTItNS4zODUgMTItMTJjMC02LjYyLTUuMzg1LTEyLTEyLTEyem0tMTAuNzkgMTEuOTk5YzAtMS41NjMuMzMzLTMuMDQ4LjkzNC00LjM4OWw1LjE0OCAxNC4xYy0zLjYwMS0xLjc1MS02LjA4Mi01LjQ0Mi02LjA4Mi05LjcxMXptMTAuNzkgMTAuNzkxYy0xLjA2IDAtMi4wODEtLjE1NS0zLjA0OC0uNDQxbDMuMjM3LTkuNDA2IDMuMzE1IDkuMDg3Yy4wMjQuMDU0LjA0OS4xMDEuMDc3LjE1LTEuMTE4LjM5Mi0yLjMyMy42MS0zLjU4MS42MXptMS40ODUtMTUuODQ1di0uMDAxYy42NDgtLjAzNCAxLjIzMy0uMTAxIDEuMjMzLS4xMDEuNTgxLS4wNjguNTEzLS45MjQtLjA2OC0uODkxIDAgMC0xLjc0Ny4xMzUtMi44NzQuMTM1LTEuMDYgMC0yLjg0MS0uMTM1LTIuODQxLS4xMzUtLjU4LS4wMzQtLjY0Ny44NTctLjA2Ny44OTEgMCAwIC41NTEuMDY4IDEuMTMyLjEwMWwxLjY3OSA0LjYwNi0yLjM2MSA3LjA3OS0zLjkyOC0xMS42ODVjLjY0OS0uMDM0IDEuMjM0LS4xMDEgMS4yMzQtLjEwMS41ODEtLjA2OC41MTMtLjkyNC0uMDY4LS44OTEgMCAwLTEuNzQ3LjEzNS0yLjg3NC4xMzUtLjIwMyAwLS40NDEtLjAwNS0uNjk3LS4wMTQgMS45MzEtMi45MjggNS4yNDUtNC44NjMgOS4wMTUtNC44NjMgMi44MDcgMCA1LjM2NiAxLjA3NSA3LjI4NyAyLjgzLS4wNDktLjAwNS0uMDkyLS4wMDktLjE0LS4wMDktMS4wNiAwLTEuODEuOTI0LTEuODEgMS45MTYgMCAuODkuNTEzIDEuNjQgMS4wNiAyLjUzMS40MTEuNzE2Ljg5MSAxLjY0Ljg5MSAyLjk3NiAwIC45MjQtLjM1MyAxLjk5My0uODIzIDMuNDg5bC0xLjA3NSAzLjU5NXptNy45ODUtLjEyMmMuODQyIDEuNTM5IDEuMzIxIDMuMyAxLjMyMSA1LjE3OCAwIDMuOTgyLTIuMTU4IDcuNDU2LTUuMzY2IDkuMzI0bC0uMDAxLS4wMDEgMy4yOTUtOS41MjhjLjYxNC0xLjUzOS44MjMtMi43NjcuODIzLTMuODY2IDAtLjM5Ni0uMDI0LS43NjQtLjA3Mi0xLjEwN3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuMnNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhUTUwgRGV2ZWxvcG1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kNDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJMYXllcl8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA1MTIgNTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDY0LjM3MiwyMTQuMzI2di05Ni43TDM0Ni43NDcsMEg0Ny42Mjh2MjE0LjMyNkgyMy44MTR2MjI2LjIzM2gyMy44MTRWNTEyaDQxNi43NDR2LTcxLjQ0MmgyMy44MTRWMjE0LjMyNkg0NjQuMzcyeiAgICAgTTM1Ny4yMDksNjAuOTc5bDQ2LjE4NCw0Ni4xODRoLTQ2LjE4NFY2MC45Nzl6IE04My4zNDksMzUuNzIxaDIzOC4xNHYxMDcuMTYzaDEwNy4xNjN2NzEuNDQySDgzLjM0OVYzNS43MjF6IE00MjguNjUxLDQ3Ni4yNzkgICAgSDgzLjM0OXYtMzUuNzIxaDM0NS4zMDJWNDc2LjI3OXogTTQ1Mi40NjUsNDA0LjgzN0g1OS41MzVWMjUwLjA0N2gzOTIuOTNWNDA0LjgzN3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTUzLjg3NCwyODcuMDc3IDE1My44NzQsMzE2LjU0NyAxMjMuNTQ5LDMxNi41NDcgMTIzLjU0OSwyODcuMDc3IDEwNS45NzUsMjg3LjA3NyAxMDUuOTc1LDM2My4xNjMgICAgIDEyMy41NDksMzYzLjE2MyAxMjMuNTQ5LDMzMS45NzggMTUzLjg3NCwzMzEuOTc4IDE1My44NzQsMzYzLjE2MyAxNzEuNDUxLDM2My4xNjMgMTcxLjQ1MSwyODcuMDc3ICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjE4NS4zODEsMjg3LjA3NyAxODUuMzgxLDMwMi41MDkgMjA4LjYzNiwzMDIuNTA5IDIwOC42MzYsMzYzLjE2MyAyMjYuMjEsMzYzLjE2MyAyMjYuMjEsMzAyLjUwOSAgICAgMjQ5LjM1NywzMDIuNTA5IDI0OS4zNTcsMjg3LjA3NyAgIFwiPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIzMjEuOTA1LDI4Ny4wNzcgMzAyLjA3OSwzMjYuODM1IDI4Mi4zNjIsMjg3LjA3NyAyNjMuMjg3LDI4Ny4wNzcgMjYzLjI4NywzNjMuMTYzIDI4MC44NjIsMzYzLjE2MyAgICAgMjgwLjg2MiwzMTcuNjE5IDI5Ny4zNjUsMzUwLjczMiAzMDYuNzk1LDM1MC43MzIgMzIzLjI5OCwzMTcuNjE5IDMyMy4yOTgsMzYzLjE2MyAzNDAuODczLDM2My4xNjMgMzQwLjg3MywyODcuMDc3ICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjM3OC4zNzgsMzQ3LjczMSAzNzguMzc4LDI4Ny4wNzcgMzYwLjgwMywyODcuMDc3IDM2MC44MDMsMzYzLjE2MyA0MTUuMjQyLDM2My4xNjMgNDE1LjI0MiwzNDcuNzMxICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjRzXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db250ZW50IFdyaXRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kMzAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIl94MzFfX3gyQ181XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xNi44MSAxM2gtMTIuMDZjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di00LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1aDE0LjVjLjQxNCAwIC43NS4zMzYuNzUuNzV2Mi4yNWMwIC40MTQtLjMzNi43NS0uNzUuNzVzLS43NS0uMzM2LS43NS0uNzV2LTEuNWgtMTN2M2gxMS4zMWMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEzLjgyIDE1Ljk5aC05LjAyYy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoOS4wMmMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEwLjg0IDE4Ljk5aC02LjA0Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXMuMzM2LS43NS43NS0uNzVoNi4wNGMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEyLjUyNyAyNGMtLjE5NyAwLS4zODktLjA3OC0uNTMtLjIyLS4xNzMtLjE3My0uMjUxLS40MTktLjIwOC0uNjYxbC41My0zLjAwNWMuMDI3LS4xNTEuMS0uMjkxLjIwOC0uNGw3LjQyNS03LjQyNGMuMzE2LS4zMTYuNjUxLS41MTMuOTk2LS41ODUuNDc3LS4xLjkzOS4wNDUgMS4zMDIuNDA5bDEuMjM3IDEuMjM3Yy42ODIuNjgyLjY4MiAxLjc5MiAwIDIuNDc1bC03LjQyNCA3LjQyNWMtLjEwOS4xMDktLjI0OS4xODItLjQuMjA4bC0zLjAwNS41M2MtLjA0NC4wMDctLjA4Ny4wMTEtLjEzMS4wMTF6bTMuMDA2LTEuMjhoLjAxem0tMS43NzgtMi4xMTItLjMwMyAxLjcxNyAxLjcxNy0uMzAzIDcuMjU3LTcuMjU4Yy4wOTctLjA5OC4wOTctLjI1NiAwLS4zNTRsLTEuMjI4LTEuMjI4Yy0uMDEuMDE5LS4wODUuMDY3LS4xODYuMTY3elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm05LjgzIDIyaC03LjA4Yy0xLjUxNyAwLTIuNzUtMS4yMzMtMi43NS0yLjc1di0xNi41YzAtMS41MTcgMS4yMzMtMi43NSAyLjc1LTIuNzVoMTguNWMxLjUxNyAwIDIuNzUgMS4yMzMgMi43NSAyLjc1djcuMjljMCAuNDE0LS4zMzYuNzUtLjc1Ljc1cy0uNzUtLjMzNi0uNzUtLjc1di03LjI5YzAtLjY4OS0uNTYxLTEuMjUtMS4yNS0xLjI1aC0xOC41Yy0uNjg5IDAtMS4yNS41NjEtMS4yNSAxLjI1djE2LjVjMCAuNjg5LjU2MSAxLjI1IDEuMjUgMS4yNWg3LjA4Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMjMuMjUgNWgtMjIuNWMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzVzLjMzNi0uNzUuNzUtLjc1aDIyLjVjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIi42c1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnJhbmQgSWRlbnRpdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kMjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MzIsMTAwYy01LjUyLDAtMTAsNC40OC0xMCwxMHM0LjQ4LDEwLDEwLDEwYzUuNTIsMCwxMC00LjQ4LDEwLTEwUzQzNy41MiwxMDAsNDMyLDEwMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04MCwxMDBjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFM4NS41MiwxMDAsODAsMTAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwMiwyMjBoLTExLjk2Yy0zLjczOC0yOC44MDQtMTIuNzctNTYuMjUzLTI2Ljk0NC04MS43MDVjLTIuNjg3LTQuODI0LTguNzc2LTYuNTU5LTEzLjYwMi0zLjg3MiAgICBjLTQuODI1LDIuNjg3LTYuNTU5LDguNzc3LTMuODcyLDEzLjYwMmMxMi41MDgsMjIuNDYzLDIwLjY0Niw0Ni42MjgsMjQuMjUyLDcxLjk3NUg0NjJjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2NDAgICAgYzAsNS41MjMsNC40NzcsMTAsMTAsMTBoNDBjNS41MjMsMCwxMC00LjQ3NywxMC0xMHYtNDBDNTEyLDIyNC40NzcsNTA3LjUyMywyMjAsNTAyLDIyMHogTTQ5MiwyNjBoLTIwdi0yMGg5LjA3OCAgICBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMGMwLjAwNCwwLDAuMDA3LDAsMC4wMTEsMEg0OTJWMjYwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM2NS45ODEsMjkyLjYyMWMtMC4wMDYtMC4xNTUtMC4wMS0wLjMxLTAuMDIzLTAuNDY1Yy0wLjAxOC0wLjIxMi0wLjA0Ny0wLjQyMS0wLjA3OC0wLjYyOSAgICBjLTAuMDE5LTAuMTI4LTAuMDM0LTAuMjU2LTAuMDU5LTAuMzg0Yy0wLjA0Ni0wLjI0NS0wLjEwNi0wLjQ4NS0wLjE2OS0wLjcyNGMtMC4wMjQtMC4wOTEtMC4wNDMtMC4xODItMC4wNy0wLjI3MiAgICBjLTAuMDg5LTAuMjk5LTAuMTkzLTAuNTkyLTAuMzA5LTAuODc5Yy0wLjAxMy0wLjAzMS0wLjAyMi0wLjA2NC0wLjAzNS0wLjA5NWMtMC4xMzgtMC4zMzQtMC4yOTMtMC42NTktMC40NjUtMC45NzMgICAgbC05OS45OTgtMTgyLjk5NkMyNjMuMDIyLDEwMS45OTYsMjU5LjY1NywxMDAsMjU2LDEwMGMtMy42NTcsMC03LjAyMiwxLjk5Ni04Ljc3NSw1LjIwNWwtOTkuOTk4LDE4Mi45OTYgICAgYy0wLjE3MiwwLjMxNC0wLjMyNywwLjYzOS0wLjQ2NSwwLjk3M2MtMC4wMTMsMC4wMzEtMC4wMjIsMC4wNjMtMC4wMzUsMC4wOTVjLTAuMTE2LDAuMjg3LTAuMjIsMC41OC0wLjMwOSwwLjg3OSAgICBjLTAuMDI3LDAuMDktMC4wNDYsMC4xODEtMC4wNywwLjI3MmMtMC4wNjQsMC4yMzktMC4xMjMsMC40NzgtMC4xNjksMC43MjRjLTAuMDI0LDAuMTI3LTAuMDM5LDAuMjU1LTAuMDU5LDAuMzg0ICAgIGMtMC4wMzEsMC4yMDgtMC4wNiwwLjQxNy0wLjA3OCwwLjYyOWMtMC4wMTMsMC4xNTUtMC4wMTgsMC4zMS0wLjAyMywwLjQ2NWMtMC4wMDUsMC4xMjYtMC4wMTksMC4yNS0wLjAxOSwwLjM3OCAgICBjMCwwLjA2NiwwLjAwOSwwLjEyOSwwLjAxLDAuMTk1YzAuMDAzLDAuMTU3LDAuMDEzLDAuMzEzLDAuMDI0LDAuNDdjMC4wMTMsMC4xOTksMC4wMjksMC4zOTcsMC4wNTQsMC41OTMgICAgYzAuMDE4LDAuMTM4LDAuMDQsMC4yNzUsMC4wNjMsMC40MTNjMC4wMzYsMC4yMTYsMC4wNzksMC40MywwLjEyOSwwLjY0MWMwLjAyOCwwLjExOSwwLjA1OSwwLjIzOCwwLjA5MiwwLjM1NiAgICBjMC4wNjMsMC4yMjgsMC4xMzUsMC40NTIsMC4yMTMsMC42NzNjMC4wMjIsMC4wNjMsMC4wMzYsMC4xMjcsMC4wNiwwLjE5bDM2LjA2NCw5NS41NjljLTIuODkzLDEuNDM0LTUuNTY5LDMuMzM5LTcuOTIsNS42ODkgICAgQzE2OS4xMjEsNDAzLjQ1NywxNjYsNDEwLjk5LDE2Niw0MTljMCwxMy4wMzYsOC4zNjEsMjQuMTUyLDIwLDI4LjI4VjUwMmMwLDUuNTIzLDQuNDc3LDEwLDEwLDEwaDEyMGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwICAgIHYtNTQuNzAzYzQuMTY5LTEuNDcxLDcuOTkyLTMuODY2LDExLjIxMi03LjA4NkMzNDIuODc5LDQzNC41NDMsMzQ2LDQyNy4wMSwzNDYsNDE5YzAtMTEuNzczLTYuODE5LTIxLjk3OC0xNi43MTMtMjYuODg3ICAgIGwzNi4wNjktOTUuNTgyYzAuMDI0LTAuMDYzLDAuMDM4LTAuMTI3LDAuMDYtMC4xOWMwLjA3OC0wLjIyMSwwLjE1LTAuNDQ1LDAuMjEzLTAuNjczYzAuMDMzLTAuMTE4LDAuMDYzLTAuMjM3LDAuMDkyLTAuMzU2ICAgIGMwLjA1LTAuMjExLDAuMDkyLTAuNDI1LDAuMTI5LTAuNjQxYzAuMDIzLTAuMTM4LDAuMDQ2LTAuMjc1LDAuMDYzLTAuNDEzYzAuMDI1LTAuMTk2LDAuMDQxLTAuMzk0LDAuMDU0LTAuNTkzICAgIGMwLjAxLTAuMTU3LDAuMDIxLTAuMzEzLDAuMDI0LTAuNDdjMC4wMDEtMC4wNjUsMC4wMS0wLjEyOSwwLjAxLTAuMTk1QzM2NiwyOTIuODcyLDM2NS45ODYsMjkyLjc0OCwzNjUuOTgxLDI5Mi42MjF6IE0yNTYsMjgzICAgIGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwYzAsNS41MTQtNC40ODYsMTAtMTAsMTBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBDMjQ2LDI4Ny40ODYsMjUwLjQ4NiwyODMsMjU2LDI4M3ogTTMwNiw0OTJIMjA2di00M2gxMDAgICAgVjQ5MnogTTMyMy4wNjksNDI2LjA2OGMtMS44OSwxLjg5MS00LjQwMSwyLjkzMi03LjA2OSwyLjkzMkgxOTZjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC0yLjY2OCwxLjA0MS01LjE3OSwyLjkzMS03LjA2OCAgICBjMS44OTEtMS44OTEsNC40MDEtMi45MzIsNy4wNjktMi45MzJoMTE5LjkzM2MwLjAyMiwwLDAuMDQ0LDAuMDAzLDAuMDY2LDAuMDAzYzAuMDExLDAsMC4wMjMtMC4wMDEsMC4wMzQtMC4wMDEgICAgYzUuNDk5LDAuMDE4LDkuOTY4LDQuNDk1LDkuOTY4LDkuOTk4QzMyNiw0MjEuNjY4LDMyNC45NTksNDI0LjE3OSwzMjMuMDY5LDQyNi4wNjh6IE0zMDkuMDg1LDM4OWgtMTA2LjE3bC0zMi40NTMtODZIMTk2ICAgIGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwcy00LjQ3Ny0xMC0xMC0xMGgtMjMuMTRMMjQ2LDE0OS4xNTRWMjY0LjcyYy0xMS42MzksNC4xMjgtMjAsMTUuMjQzLTIwLDI4LjI4YzAsMTYuNTQyLDEzLjQ1OCwzMCwzMCwzMCAgICBzMzAtMTMuNDU4LDMwLTMwYzAtMTMuMDM2LTguMzYxLTI0LjE1Mi0yMC0yOC4yOFYxNDkuMTU0TDMzOS4xNCwyODNIMzE2Yy01LjUyMywwLTEwLDQuNDc3LTEwLDEwczQuNDc3LDEwLDEwLDEwaDI1LjUzOCAgICBMMzA5LjA4NSwzODl6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjIuNTA1LDEzNC40MjNjLTQuODI2LTIuNjg4LTEwLjkxNi0wLjk1NC0xMy42MDIsMy44NzJDMzQuNzMsMTYzLjc0NywyNS42OTcsMTkxLjE5NiwyMS45NiwyMjBIMTAgICAgYy01LjUyMywwLTEwLDQuNDc3LTEwLDEwdjQwYzAsNS41MjMsNC40NzcsMTAsMTAsMTBoNDBjNS41MjMsMCwxMC00LjQ3NywxMC0xMHYtNDBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtNy44NzUgICAgYzMuNjA3LTI1LjM0NywxMS43NDQtNDkuNTEyLDI0LjI1Mi03MS45NzVDNjkuMDY0LDE0My4yLDY3LjMzMSwxMzcuMTEsNjIuNTA1LDEzNC40MjN6IE00MCwyNjBIMjB2LTIwaDEwLjkwMSAgICBjMC4wMDQsMCwwLjAwNywwLDAuMDExLDBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMEg0MFYyNjB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDgyLDBjLTEzLjAzNiwwLTI0LjE1Miw4LjM2MS0yOC4yOCwyMEgyODZWMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtNDBjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2MTBINTguMjggICAgQzU0LjE1Miw4LjM2MSw0My4wMzYsMCwzMCwwQzEzLjQ1OCwwLDAsMTMuNDU4LDAsMzBzMTMuNDU4LDMwLDMwLDMwYzEzLjAzNiwwLDI0LjE1Mi04LjM2MSwyOC4yOC0yMGgxMDAuNTM0ICAgIGMtMjEuMzI5LDguOTI1LTQwLjg4OSwyMC41MTEtNTYuOTg5LDM0LjA4NGMtNC4yMjMsMy41Ni00Ljc2LDkuODY5LTEuMiwxNC4wOTFjMS45NzgsMi4zNDcsNC44MDUsMy41NTUsNy42NSwzLjU1NSAgICBjMi4yNzYsMCw0LjU2NC0wLjc3Miw2LjQ0LTIuMzU0QzE0My40MDcsNjUuMTg4LDE4NC4zNTMsNDcuOTEzLDIyNiw0Mi4xMTlWNTBjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMGg0MGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwICAgIHYtNy44ODFjNDEuNjQ3LDUuNzk0LDgyLjU5MywyMy4wNjksMTExLjI4NSw0Ny4yNTZjMS44NzYsMS41ODIsNC4xNjQsMi4zNTUsNi40NCwyLjM1NGMyLjg0NiwwLDUuNjczLTEuMjA4LDcuNjUtMy41NTUgICAgYzMuNTYxLTQuMjIxLDMuMDIzLTEwLjUzLTEuMi0xNC4wOWMtMTYuMS0xMy41NzMtMzUuNjYtMjUuMTU5LTU2Ljk4OS0zNC4wODRINDUzLjcyYzQuMTI4LDExLjYzOSwxNS4yNDMsMjAsMjguMjgsMjAgICAgYzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFM0OTguNTQyLDAsNDgyLDB6IE0zMCw0MGMtNS41MTQsMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCwxMC0xMHMxMCw0LjQ4NiwxMCwxMFMzNS41MTQsNDAsMzAsNDB6ICAgICBNMjY2LDMwdjAuOVY0MGgtMjB2LTkuMVYzMFYyMGgyMFYzMHogTTQ4Miw0MGMtNS41MTQsMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwUzQ4Ny41MTQsNDAsNDgyLDQwICAgIHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuOHNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBTRCBEZXNpZ248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kMTAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLDB2NTEyaDUxMlYwSDB6IE00ODIsNDgySDMwVjMwaDQ1MlY0ODJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEzLjEwMiwxODEuNmgtNzIuMjRWMzUyaDMzLjEydi01Ny4xMmg0MC4zMmMyOS41MzEsMCw1My4wNC0yNS43MTMsNTMuMDQtNTYuNjQgICAgQzI2Ny4zNDIsMjEyLDI0Ni4xNjYsMTgxLjYsMjEzLjEwMiwxODEuNnogTTIxMi4zODIsMjY1Ljg0aC0zOC40di01NS4yaDM2Ljk2YzE0LjA1NywwLDIyLjgsMTMuMiwyMi44LDI3LjYgICAgQzIzMy43NDIsMjU1LDIyNCwyNjUuODQsMjEyLjM4MiwyNjUuODR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzM2LjkzOSwyNzYuNjRjLTQuNjQyLTEuMTE4LTI0LjcyLTQuMzktMjQuNzItMTUuODRjMC05LjE3NSw3LjUzMS0xNC4xNiwxOS4yLTE0LjE2YzE1LjgzMSwwLDMwLjA3OSw5LjEyLDM2LjQ4LDEzLjkyICAgIGwxMi45Ni0xOS40NGMtNi44ODEtNi4wNzktMjEuNjA5LTE3LjI4LTQ5LjItMTcuMjhjLTI2LjI4NCwwLTQ5LjQ0LDE0LjkxLTQ5LjQ0LDQxLjUyYzAsMjcuNjQsMzYuNzIsMzIuODAxLDQ0Ljg4LDM1LjA0ICAgIGM5Ljc1NywyLjcyMywyNy42LDYuMjI1LDI3LjYsMTcuMDRjMCw4LjgxLTguNDQ5LDEzLjkyLTIwLjY0LDEzLjkyYy0xOC44MDksMC0zNi40OC0xMS4xMTktNDQuMTYtMTYuNTZsLTEyLDIwLjE2ICAgIGM3LjIsNi4yNCwyNy44NTEsMTkuNDQsNTYuODgsMTkuNDRjMTUuNjc5LDAsNTAuODgtNC45LDUwLjg4LTM5Ljg0QzM4NS42NTksMjg1LDM0NS41NzksMjc4Ljg4MiwzMzYuOTM5LDI3Ni42NHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlO1xyXG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYWN0aXZlU2tpbGxQcm9ncmVzcyB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcblxyXG5jb25zdCBQYXJhbGxheFZpZGVvID0gZHluYW1pYyhpbXBvcnQoXCIuL1BhcmFsbGF4XCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFjdGl2ZVNraWxsUHJvZ3Jlc3MpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInNraWxsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2tpbGxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlIGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ta2lsbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+UHJvZ3JhbW1pbmcgU2tpbGxzPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBGb3IgbW9yZSB0aGFuIDIwIHllYXJzIG91ciBleHBlcnRzIGhhdmUgYmVlbiBhY2NvbXBsaXNoaW5nXHJcbiAgICAgICAgICAgICAgICAgIGVub3VnaCB3aXRoIG1vZGVybiBXZWIgRGV2ZWxvcG1lbnQsIG5ldyBnZW5lcmF0aW9uIHdlYiBhbmQgYXBwXHJcbiAgICAgICAgICAgICAgICAgIHByb2dyYW1taW5nIGxhbmd1YWdlLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvZG9fcHJvZ3Jlc3Mgd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjJzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzX2lubmVyXCIgZGF0YS12YWx1ZT1cIjk1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SFRNTCAmYW1wOyBDU1M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+OTUlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9pblwiIHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc19pbm5lclwiIGRhdGEtdmFsdWU9XCI4MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkphdmFTY3JpcHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+ODAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9pblwiIHN0eWxlPXt7IHdpZHRoOiBcIjgwJVwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc19pbm5lclwiIGRhdGEtdmFsdWU9XCI5MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPldvcmRQcmVzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJcIj45MCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX2luXCIgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPFBhcmFsbGF4VmlkZW8gLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteV9pbWFnZSBqYXJhbGxheFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNwZWVkPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWcvcG9ydGZvbGlvLzIuanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJ0aW1lbGluZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fdGltZWxpbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+VGltZWxpbmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5Xb3JraW5nIFBlcmlvZDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfbGlzdFwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QXByaWwsIDIwMTkgLSBUb2RheTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkhlYWQgRGVzaWduZXIgJmFtcDsgQ28tZm91bmRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFsYW4gS2xlaW4gRGVzaWduLCBMb25kb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjJzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2VwdGVtYmVyLCAyMDE4IC0gQXByaWwsIDIwMTk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DcmVhdGl2ZSBEaXJlY3RvciAmYW1wOyBTZW5pb3IgRGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5SYXh1bmEgUG9jLCBOZXcgWW9yazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuNHNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5PY3RvYmVyLCAyMDE1IC0gU2VwdGVtYmVyLCAyMDE4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+SGVhZCBEZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFyaW1hbmEgQ28uIEx0ZCwgQW1zdGVyZGFtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIi42c1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkp1bHksIDIwMTIgLSBPY3RvYmVyLCAyMDE1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2VuaW9yIFVYICZhbXA7IFVJIERlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QmF4ZG9ybyBEZXNpZ24sIExvbmRvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuOHNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5NYXJjaCwgMjAxMCAtIEp1bHksIDIwMTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5KdW5pb3IgVVggRGVzaWduZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TaW1vbm8gRGVzaWduIEdyb3VwLCBMb25kb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2NvcHlyaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHlyaWdodF9pbm5lciB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIEFsbCByaWdodHNcclxuICAgICAgICAgICAgICAgICAgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3NvY2lhbC9mYWNlYm9vay5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9zb2NpYWwvdHdpdHRlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9zb2NpYWwvaW5zdGFncmFtLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3NvY2lhbC9kcmliYmJsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9zb2NpYWwvdGlrLXRvay5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdWRpb1NvdW5kQW5kT3Blbiwgb3Blbk5hdiwgc2Nyb2xsXywgc3RpY2t5TmF2IH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGRhcmsgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc1RvZ2dsZWQsIHNldFRvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVRydWVGYWxzZSA9ICgpID0+IHtcclxuICAgIHNldFRvZ2dsZWQoIWlzVG9nZ2xlZCk7XHJcbiAgICBvcGVuTmF2KCFpc1RvZ2dsZWQpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhdWRpb1NvdW5kQW5kT3BlbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsXyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzdGlja3lOYXYpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJrdXJhX3RtX3RvcGJhclwifT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGFyayA/IFwiL2ltZy9sb2dvL2xvZ28ucG5nXCIgOiBcIi9pbWcvbG9nby9kYXJrLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhbmNob3JfbmF2XCIgaWQ9XCJhbmNob3JfbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NraWxsc1wiPlNraWxsczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGltZWxpbmVcIj5UaW1lbGluZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJpY2VcIj5QcmljZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPk5ld3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWdnZXJcIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUcnVlRmFsc2UoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiIGlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tb2JpbGVfbWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX21lbnVfaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX2luXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGFyayA/IFwiL2ltZy9sb2dvL2xvZ28ucG5nXCIgOiBcIi9pbWcvbG9nby9kYXJrLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWdnZXJcIiBvbkNsaWNrPXt0b2dnbGVUcnVlRmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJoYW1idXJnZXIgaGFtYnVyZ2VyLS1zbGlkZXIgaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc2xpZGVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RvZ2dsZWQgPyBcImRyb3Bkb3duIGFjdGl2ZVwiIDogXCJkcm9wZG93blwifT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25faW5uZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFuY2hvcl9uYXZcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3VycmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNza2lsbHNcIj5Ta2lsbHM8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RpbWVsaW5lXCI+VGltZWxpbmU8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3ByaWNlXCI+UHJpY2U8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25ld3NcIj5OZXdzPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3Vyc29yLCBzZXRDdXJzb3JdID0gdXNlU3RhdGUoMSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29sb3JzIGxpIGFcIik7XHJcbiAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcclxuICAgICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIua3VyYV90bV9hbGxfd3JhcFwiKVxyXG4gICAgICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgY29sb3IuY2xhc3NMaXN0WzBdKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgIHNldEN1cnNvcih2YWx1ZSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5rdXJhX3RtX2FsbF93cmFwXCIpXHJcbiAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1hZ2ljLWN1cnNvclwiLCB2YWx1ZSA9PT0gMSA/IFwic2hvd1wiIDogXCJoaWRlXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1cmFfdG1fc2V0dGluZ3MgJHt0b2dnbGUgPyBcIm9wZW5lZFwiIDogXCJcIn1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI2OC43NjUgMjY4Ljc2NVwiXHJcbiAgICAgICAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgc2V0dGluZ1N2ZyByZXBsYWNlZC1zdmcgY2hhbmdlRGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMjY3LjkyLDExOS40NjFjLTAuNDI1LTMuNzc4LTQuODMtNi42MTctOC42MzktNi42MTcgICAgYy0xMi4zMTUsMC0yMy4yNDMtNy4yMzEtMjcuODI2LTE4LjQxNGMtNC42ODItMTEuNDU0LTEuNjYzLTI0LjgxMiw3LjUxNS0zMy4yMzFjMi44ODktMi42NDEsMy4yNC03LjA2MiwwLjgxNy0xMC4xMzMgICAgYy02LjMwMy04LjAwNC0xMy40NjctMTUuMjM0LTIxLjI4OS0yMS41Yy0zLjA2My0yLjQ1OC03LjU1Ny0yLjExNi0xMC4yMTMsMC44MjVjLTguMDEsOC44NzEtMjIuMzk4LDEyLjE2OC0zMy41MTYsNy41MjkgICAgYy0xMS41Ny00Ljg2Ny0xOC44NjYtMTYuNTkxLTE4LjE1Mi0yOS4xNzZjMC4yMzUtMy45NTMtMi42NTQtNy4zOS02LjU5NS03Ljg0OWMtMTAuMDM4LTEuMTYxLTIwLjE2NC0xLjE5Ny0zMC4yMzItMC4wOCAgICBjLTMuODk2LDAuNDMtNi43ODUsMy43ODYtNi42NTQsNy42ODljMC40MzgsMTIuNDYxLTYuOTQ2LDIzLjk4LTE4LjQwMSwyOC42NzJjLTEwLjk4NSw0LjQ4Ny0yNS4yNzIsMS4yMTgtMzMuMjY2LTcuNTc0ICAgIGMtMi42NDItMi44OTYtNy4wNjMtMy4yNTItMTAuMTQxLTAuODUzYy04LjA1NCw2LjMxOS0xNS4zNzksMTMuNTU1LTIxLjc0LDIxLjQ5M2MtMi40ODEsMy4wODYtMi4xMTYsNy41NTksMC44MDIsMTAuMjE0ICAgIGM5LjM1Myw4LjQ3LDEyLjM3MywyMS45NDQsNy41MTQsMzMuNTNjLTQuNjM5LDExLjA0Ni0xNi4xMDksMTguMTY1LTI5LjI0LDE4LjE2NWMtNC4yNjEtMC4xMzctNy4yOTYsMi43MjMtNy43NjIsNi41OTcgICAgYy0xLjE4MiwxMC4wOTYtMS4xOTYsMjAuMzgzLTAuMDU4LDMwLjU2MWMwLjQyMiwzLjc5NCw0Ljk2MSw2LjYwOCw4LjgxMiw2LjYwOGMxMS43MDItMC4yOTksMjIuOTM3LDYuOTQ2LDI3LjY1LDE4LjQxNSAgICBjNC42OTgsMTEuNDU0LDEuNjc4LDI0LjgwNC03LjUxNCwzMy4yM2MtMi44NzUsMi42NDEtMy4yNCw3LjA1NS0wLjgxNywxMC4xMjZjNi4yNDQsNy45NTMsMTMuNDA5LDE1LjE5LDIxLjI1OSwyMS41MDggICAgYzMuMDc5LDIuNDgxLDcuNTU5LDIuMTMxLDEwLjIyOC0wLjgxYzguMDQtOC44OTMsMjIuNDI3LTEyLjE4NCwzMy41MDEtNy41MzZjMTEuNTk5LDQuODUyLDE4Ljg5NSwxNi41NzUsMTguMTgxLDI5LjE2NyAgICBjLTAuMjMzLDMuOTU1LDIuNjcsNy4zOTgsNi41OTUsNy44NWM1LjEzNSwwLjU5OSwxMC4zMDEsMC44OTgsMTUuNDgxLDAuODk4YzQuOTE3LDAsOS44MzUtMC4yNywxNC43NTItMC44MTcgICAgYzMuODk3LTAuNDMsNi43ODQtMy43ODYsNi42NTMtNy42OTZjLTAuNDUxLTEyLjQ1NCw2Ljk0Ni0yMy45NzMsMTguMzg2LTI4LjY1N2MxMS4wNTktNC41MTcsMjUuMjg2LTEuMjExLDMzLjI4MSw3LjU3MiAgICBjMi42NTcsMi44OSw3LjA0NywzLjIzOSwxMC4xNDIsMC44NDhjOC4wMzktNi4zMDQsMTUuMzQ5LTEzLjUzNCwyMS43NC0yMS40OTRjMi40OC0zLjA3OSwyLjEzLTcuNTU5LTAuODAzLTEwLjIxMyAgICBjLTkuMzUzLTguNDctMTIuMzg4LTIxLjk0Ni03LjUyOS0zMy41MjRjNC41NjgtMTAuODk5LDE1LjYxMi0xOC4yMTcsMjcuNDkxLTE4LjIxN2wxLjY2MiwwLjA0MyAgICBjMy44NTMsMC4zMTMsNy4zOTgtMi42NTUsNy44NjUtNi41ODhDMjY5LjA0NCwxMzkuOTE3LDI2OS4wNTgsMTI5LjYzOSwyNjcuOTIsMTE5LjQ2MXogTTEzNC41OTUsMTc5LjQ5MSAgICBjLTI0LjcxOCwwLTQ0LjgyNC0yMC4xMDYtNDQuODI0LTQ0LjgyNGMwLTI0LjcxNywyMC4xMDYtNDQuODI0LDQ0LjgyNC00NC44MjRjMjQuNzE3LDAsNDQuODIzLDIwLjEwNyw0NC44MjMsNDQuODI0ICAgIEMxNzkuNDE4LDE1OS4zODUsMTU5LjMxMiwxNzkuNDkxLDEzNC41OTUsMTc5LjQ5MXpcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmaWxsUnVsZTogXCJldmVub2RkXCIsIGNsaXBSdWxlOiBcImV2ZW5vZGRcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgICAgPGcgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5VbmxpbWl0ZWQgQ29sb3JzPC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG9yc1wiIGlkPVwiY29sb3JzXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibHVlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmVlblwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnJvd25cIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBpbmtcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9yYW5nZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibGFja1wiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2hcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3aGl0ZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHVycGxlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJza3lcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhZGV0Qmx1ZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3JpbXNvblwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2xpdmVcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlZFwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TWFnaWMgQ3Vyc29yPC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1cnNvclwiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3Vyc29yID09PSAxID8gXCJzaG93bWUgc2hvd1wiIDogXCJoaWRkZW5cIn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygxKX1cclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3Vyc29yID09PSAyID8gXCJzaG93bWUgc2hvd1wiIDogXCJoaWRkZW5cIn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygyKX1cclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn1cclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHNldHRpbmdTdmcgcmVwbGFjZWQtc3ZnIGNoYW5nZURhcmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIm00NTEuMDAyIDE4My41NzRoMjkuOTk3djg0Ljg1M2gtMjkuOTk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTIzLjMxOCAzOTUuNzA2KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIm0yNzEuMDAyIDMuNTc0aDI5Ljk5N3Y4NC44NTNoLTI5Ljk5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IDUxLjI0MSAyMTUuNzA2KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIm00MjMuNTc0IDMxLjAwMmg4NC44NTN2MjkuOTk3aC04NC44NTN6XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAxMDMuOTYxIDM0Mi45ODUpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDIuNDIyIDUxMiAxNTAuNDU4LTE1MC40NTggNDIuMTE0IDEyNS40NjQgMTUyLjk4OC0zNjIuOTg4LTM2Mi45ODggMTUyLjk4OCAxMjUuNDY0IDQyLjExNC0xNTAuNDU4IDE1MC40NTh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTM2MSAwaDMwdjYxaC0zMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDUxIDEyMWg2MXYzMGgtNjF6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uXSk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9ydGZvbGlvU2xpZGVyID0ge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIHByZXZFbDogXCIubXlfcHJldlwiLFxyXG4gICAgbmV4dEVsOiBcIi5teV9uZXh0XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NTbGlkZXIgPSB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgcHJldkVsOiBcIi5teV9wcmV2XCIsXHJcbiAgICBuZXh0RWw6IFwiLm15X25leHRcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA2NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImNvbnN0IGt1cmFfdG1fcHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gIGxldCBpc01vYmlsZSA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QoXHJcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgKVxyXG4gICAgPyB0cnVlXHJcbiAgICA6IGZhbHNlO1xyXG4gIGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKTtcclxuXHJcbiAgaWYgKHByZWxvYWRlcikge1xyXG4gICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlZFwiKTtcclxuICAgICAgfSwgODAwKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZWxvYWRlci5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd293SnNBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5XT1cgPSByZXF1aXJlKFwid293anNcIik7XHJcbiAgfVxyXG4gIG5ldyBXT1cuV09XKCkuaW5pdCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1c3RvbUN1cnNvciA9ICgpID0+IHtcclxuICB2YXIgbXlDdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdXNlLWN1cnNvclwiKSxcclxuICAgIGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLFxyXG4gICAga3VyYV90bV90b3BiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmt1cmFfdG1fdG9wYmFyIFwiKSxcclxuICAgIHBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1wb2ludGVyXCIpLFxyXG4gICAgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLWlubmVyXCIpLFxyXG4gICAgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLW91dGVyXCIpO1xyXG5cclxuICBmdW5jdGlvbiBtb3VzZUV2ZW50KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItaG92ZXJcIiksIHQuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ob3ZlclwiKTtcclxuICAgIH0pO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvci1ob3ZlclwiKSwgdC5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChteUN1cnNvci5sZW5ndGgpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgIGxldCBuLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG8gPSAhMTtcclxuICAgICAgKHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzKSk7XHJcbiAgICAgICAgbyB8fFxyXG4gICAgICAgICAgKHQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBzLmNsaWVudFggKyBcInB4LCBcIiArIHMuY2xpZW50WSArIFwicHgpXCIpLFxyXG4gICAgICAgICAgKGUuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBzLmNsaWVudFggKyBcInB4LCBcIiArIHMuY2xpZW50WSArIFwicHgpXCIpLFxyXG4gICAgICAgICAgKG4gPSBzLmNsaWVudFkpLFxyXG4gICAgICAgICAgKGkgPSBzLmNsaWVudFgpO1xyXG4gICAgICB9KSxcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBcIm1vdXNlZW50ZXJcIixcclxuICAgICAgICAgIC8vIFwiYSwua3VyYV90bV90b3BiYXIgLnRyaWdnZXIsIC5jdXJzb3ItcG9pbnRlclwiLFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItaW5uZXJcIiksIHQuY2xhc3NMaXN0LmFkZChcImN1cnNvci1vdXRlclwiKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhW2ldO1xyXG4gICAgICAgICAgICAgIG1vdXNlRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhbWJ1cmdlciAmJiBtb3VzZUV2ZW50KGhhbWJ1cmdlcik7XHJcbiAgICAgICAgICAgIGt1cmFfdG1fdG9wYmFyICYmIG1vdXNlRXZlbnQoa3VyYV90bV90b3BiYXIpO1xyXG4gICAgICAgICAgICBwb2ludGVyICYmIG1vdXNlRXZlbnQocG9pbnRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICAoZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpLFxyXG4gICAgICAgICh0LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGt1cmFfdG1fbXlfbG9hZCA9ICgpID0+IHtcclxuICBrdXJhX3RtX3ByZWxvYWRlcigpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcclxuICB9LCAxNTAwKTtcclxufTtcclxuXHJcbi8vIEhlYWRlclxyXG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2ID0gKCkgPT4ge1xyXG4gIGxldCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICBjb25zdCBzdGlja3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rdXJhX3RtX3RvcGJhclwiKTtcclxuICBzdGlja3lzLmZvckVhY2goKHN0aWNreSkgPT4ge1xyXG4gICAgaWYgKHN0aWNreSkge1xyXG4gICAgICBpZiAob2Zmc2V0ID4gMTAwKSB7XHJcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0aWNreS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1ZGlvU291bmRBbmRPcGVuID0gKCkgPT4ge1xyXG4gIHZhciBhdWRpbzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2F1ZGlvMVwiKTtcclxuICB2YXIgYXVkaW8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhdWRpbzJcIik7XHJcbiAgdmFyIGhhbWJ1cmdlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXIgLmhhbWJ1cmdlclwiKTtcclxuXHJcbiAgaGFtYnVyZ2Vycy5mb3JFYWNoKChoYW1idXJnZXIpID0+IHtcclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikpIHtcclxuICAgICAgICBhdWRpbzFbMF0ucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvMlswXS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb3Blbk5hdiA9ICh0b2dnbGUpID0+IHtcclxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYW5jaG9yX25hdj4gbGlcIik7XHJcbiAgaWYgKG5hdkl0ZW1zKSB7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChuYXYpID0+IHtcclxuICAgICAgdG9nZ2xlID8gbmF2LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIikgOiBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVTa2lsbFByb2dyZXNzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYXJcIik7XHJcbiAgY29uc3QgdHJpZ2dlckJvdHRvbSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyA1KSAqIDU7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBjb25zdCBib3hUb3AgPSBib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgaWYgKGJveFRvcCA8IHRyaWdnZXJCb3R0b20pIHtcclxuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gYWN0aXZlXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVNZW51QnlTZWN0aW9uID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZCA/IGlkIDogXCJob21lXCJ9YCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tCb3hlcyk7XHJcbiAgY2hlY2tCb3hlcygpO1xyXG4gIGZ1bmN0aW9uIGNoZWNrQm94ZXMoKSB7XHJcbiAgICBjb25zdCB0cmlnZ2VyQm90dG9tID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDUpICogNTtcclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBjb25zdCBib3hUb3AgPSBib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgICAgaWYgKGJveFRvcCA8IHRyaWdnZXJCb3R0b20pIHtcclxuICAgICAgICBhY3RpdmVNZW51KGlkID8gaWQgOiBcImhvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlTWVudShcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYWN0aXZlTWVudSA9IChhY3RpdmUpID0+IHtcclxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYW5jaG9yX25hdj4gbGlcIik7XHJcbiAgaWYgKG5hdkl0ZW1zKSB7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChuYXYpID0+IHtcclxuICAgICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlKSkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGFUYWdDbGljayA9ICgpID0+IHtcclxuICBjb25zdCBhVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltocmVmPScjJ11cIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhVGFnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBhID0gYVRhZ1tpXTtcclxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxfID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rdXJhX3RtX3NlY3Rpb25cIik7XHJcbiAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFuY2hvcl9uYXYgbGlcIik7XHJcbiAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPSBzZWN0aW9uLmNsaWVudEhlaWdodDtcclxuICAgIGlmIChwYWdlWU9mZnNldCA+PSBzZWN0aW9uVG9wIC0gc2VjdGlvbkhlaWdodCAvIDMpIHtcclxuICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgaWYgKGxpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09IGAjJHtjdXJyZW50fWApIHtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGltcG9ydChcInN3aXBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSBpbXBvcnQoXCJzd2lwZXIvcmVhY3RcIik7OyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkZyYWdtZW50IiwiQXVkaW8iLCJDb250YWN0IiwiQ3Vyc29yIiwiSG9tZSIsIk5ld3MiLCJQb3J0Zm9saW8iLCJQcmljZSIsIlNraWxscyIsIlRpbWVsaW5lIiwiRm9vdGVyIiwiSGVhZGVyIiwiU2V0dGluZ3MiLCJQYWdlSGVhZCIsIkluZGV4IiwiSGVhZCIsInBhZ2UiLCJSZWFjdCIsImVuYWJsZUJhY2tncm91bmQiLCJNb2RhbCIsIk5ld3NNb2RhbCIsIm9wZW4iLCJvbkNsb3NlTW9kYWwiLCJpbWciLCJ0aXRsZSIsImRhdGUiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiSG9tZU1vZGFsIiwidXNlRWZmZWN0IiwiY3VzdG9tQ3Vyc29yIiwidXNlU3RhdGUiLCJzZXRPcGVuIiwibW9kYWxWYWx1ZSIsInNldE1vZGFsVmFsdWUiLCJvbk9wZW5Nb2RhbCIsImJhY2tncm91bmRJbWFnZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwibmV3c1NsaWRlciIsIkxpZ2h0Qm94IiwicG9ydGZvbGlvU2xpZGVyIiwiSU1BR0VTIiwic3JjIiwidGh1bWJuYWlsIiwic3ViIiwic2hvd0xpZ2h0Iiwic2V0U2hvd0xpZ2h0Iiwic2hvd0xpZ2h0Qm94IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaGlkZUxpZ2h0Qm94IiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJjYXB0aW9uIiwiYWN0aXZlU2tpbGxQcm9ncmVzcyIsIlBhcmFsbGF4VmlkZW8iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid2lkdGgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJhdWRpb1NvdW5kQW5kT3BlbiIsIm9wZW5OYXYiLCJzY3JvbGxfIiwic3RpY2t5TmF2IiwiZGFyayIsImlzVG9nZ2xlZCIsInNldFRvZ2dsZWQiLCJ0b2dnbGVUcnVlRmFsc2UiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJjdXJzb3IiLCJzZXRDdXJzb3IiLCJjb2xvcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29sb3IiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0Iiwib25DbGljayIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJTd2lwZXJDb3JlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwiYnJlYWtwb2ludHMiLCJrdXJhX3RtX3ByZWxvYWRlciIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInByZWxvYWRlciIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsImFkZCIsInJlbW92ZSIsIndvd0pzQW5pbWF0aW9uIiwiV09XIiwiaW5pdCIsIm15Q3Vyc29yIiwiaGFtYnVyZ2VyIiwia3VyYV90bV90b3BiYXIiLCJwb2ludGVyIiwiZSIsInQiLCJtb3VzZUV2ZW50IiwiZWxlbWVudCIsImxlbmd0aCIsImJvZHkiLCJuIiwiaSIsIm8iLCJvbm1vdXNlbW92ZSIsInMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsaWVudFgiLCJjbGllbnRZIiwiYSIsInZpc2liaWxpdHkiLCJrdXJhX3RtX215X2xvYWQiLCJvZmZzZXQiLCJzY3JvbGxZIiwic3RpY2t5cyIsInN0aWNreSIsImF1ZGlvMSIsImF1ZGlvMiIsImhhbWJ1cmdlcnMiLCJjb250YWlucyIsInBsYXkiLCJuYXZJdGVtcyIsIm5hdiIsImJveGVzIiwidHJpZ2dlckJvdHRvbSIsImlubmVySGVpZ2h0IiwiYm94IiwiYm94VG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYWN0aXZlTWVudUJ5U2VjdGlvbiIsImlkIiwiY2hlY2tCb3hlcyIsImFjdGl2ZU1lbnUiLCJhY3RpdmUiLCJhVGFnQ2xpY2siLCJhVGFnIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9ucyIsIm5hdkxpIiwiY3VycmVudCIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2VjdGlvbkhlaWdodCIsImNsaWVudEhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiZ2V0QXR0cmlidXRlIiwibGkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=