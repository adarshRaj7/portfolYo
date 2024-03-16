(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_layout_PreLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/layout/PreLoader */ "./src/layout/PreLoader.js");
/* harmony import */ var _src_utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utilits */ "./src/utilits.js");
/* harmony import */ var _styles_globalstyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globalstyle.css */ "./styles/globalstyle.css");
/* harmony import */ var _styles_globalstyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globalstyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_2__.kura_tm_my_load)();
    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_2__.wowJsAnimation)();
    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_2__.aTagClick)();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_layout_PreLoader__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/layout/PreLoader.js":
/*!*********************************!*\
  !*** ./src/layout/PreLoader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\layout\\PreLoader.js";


const PreLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "preloader",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "loader_line"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader);

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

/***/ "./styles/globalstyle.css":
/*!********************************!*\
  !*** ./styles/globalstyle.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtBQUMzQixRQUFNQyxRQUFRLEdBQUduRSxRQUFRLENBQUNZLGdCQUFULENBQTBCLGtCQUExQixDQUFqQjtBQUNBLFFBQU13RCxLQUFLLEdBQUdwRSxRQUFRLENBQUNZLGdCQUFULENBQTBCLGdCQUExQixDQUFkO0FBQ0EsTUFBSXlELE9BQU8sR0FBRyxFQUFkO0FBQ0FGLEVBQUFBLFFBQVEsQ0FBQzVCLE9BQVQsQ0FBa0IrQixPQUFELElBQWE7QUFDNUIsVUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUNFLFNBQTNCO0FBQ0EsVUFBTUMsYUFBYSxHQUFHSCxPQUFPLENBQUNJLFlBQTlCOztBQUNBLFFBQUlDLFdBQVcsSUFBSUosVUFBVSxHQUFHRSxhQUFhLEdBQUcsQ0FBaEQsRUFBbUQ7QUFDakRKLE1BQUFBLE9BQU8sR0FBR0MsT0FBTyxDQUFDTSxZQUFSLENBQXFCLElBQXJCLENBQVY7QUFDRDtBQUNGLEdBTkQ7QUFPQVIsRUFBQUEsS0FBSyxDQUFDN0IsT0FBTixDQUFlc0MsRUFBRCxJQUFRO0FBQ3BCQSxJQUFBQSxFQUFFLENBQUMxRSxTQUFILENBQWFFLE1BQWIsQ0FBb0IsU0FBcEI7O0FBQ0EsUUFBSXdFLEVBQUUsQ0FBQ0Msb0JBQUgsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0NGLFlBQWhDLENBQTZDLE1BQTdDLEtBQXlELElBQUdQLE9BQVEsRUFBeEUsRUFBMkU7QUFDekVRLE1BQUFBLEVBQUUsQ0FBQzFFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixTQUFqQjtBQUNEO0FBQ0YsR0FMRDtBQU1ELENBakJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUUzTFA7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdXJhLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2xheW91dC9QcmVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy91dGlsaXRzLmpzIiwid2VicGFjazovL2t1cmEvLi9zdHlsZXMvZ2xvYmFsc3R5bGUuY3NzIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJlTG9hZGVyIGZyb20gXCIuLi9zcmMvbGF5b3V0L1ByZUxvYWRlclwiO1xuaW1wb3J0IHsgYVRhZ0NsaWNrLCBrdXJhX3RtX215X2xvYWQsIHdvd0pzQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3NyYy91dGlsaXRzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsc3R5bGUuY3NzXCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBrdXJhX3RtX215X2xvYWQoKTtcbiAgICB3b3dKc0FuaW1hdGlvbigpO1xuICAgIGFUYWdDbGljaygpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UHJlTG9hZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJjb25zdCBQcmVMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJfbGluZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZUxvYWRlcjtcclxuIiwiY29uc3Qga3VyYV90bV9wcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGlzTW9iaWxlID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnRcclxuICApXHJcbiAgICA/IHRydWVcclxuICAgIDogZmFsc2U7XHJcbiAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbG9hZGVyXCIpO1xyXG5cclxuICBpZiAocHJlbG9hZGVyKSB7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVkXCIpO1xyXG4gICAgICB9LCA4MDApO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmVsb2FkZXIucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b3dKc0FuaW1hdGlvbiA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LldPVyA9IHJlcXVpcmUoXCJ3b3dqc1wiKTtcclxuICB9XHJcbiAgbmV3IFdPVy5XT1coKS5pbml0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3VzdG9tQ3Vyc29yID0gKCkgPT4ge1xyXG4gIHZhciBteUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW91c2UtY3Vyc29yXCIpLFxyXG4gICAgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIiksXHJcbiAgICBrdXJhX3RtX3RvcGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua3VyYV90bV90b3BiYXIgXCIpLFxyXG4gICAgcG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLXBvaW50ZXJcIiksXHJcbiAgICBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItaW5uZXJcIiksXHJcbiAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3Itb3V0ZXJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdXNlRXZlbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ob3ZlclwiKSwgdC5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yLWhvdmVyXCIpLCB0LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKG15Q3Vyc29yLmxlbmd0aCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgbGV0IG4sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbyA9ICExO1xyXG4gICAgICAod2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMpKTtcclxuICAgICAgICBvIHx8XHJcbiAgICAgICAgICAodC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHMuY2xpZW50WCArIFwicHgsIFwiICsgcy5jbGllbnRZICsgXCJweClcIiksXHJcbiAgICAgICAgICAoZS5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHMuY2xpZW50WCArIFwicHgsIFwiICsgcy5jbGllbnRZICsgXCJweClcIiksXHJcbiAgICAgICAgICAobiA9IHMuY2xpZW50WSksXHJcbiAgICAgICAgICAoaSA9IHMuY2xpZW50WCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIFwibW91c2VlbnRlclwiLFxyXG4gICAgICAgICAgLy8gXCJhLC5rdXJhX3RtX3RvcGJhciAudHJpZ2dlciwgLmN1cnNvci1wb2ludGVyXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImN1cnNvci1pbm5lclwiKSwgdC5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLW91dGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFbaV07XHJcbiAgICAgICAgICAgICAgbW91c2VFdmVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFtYnVyZ2VyICYmIG1vdXNlRXZlbnQoaGFtYnVyZ2VyKTtcclxuICAgICAgICAgICAga3VyYV90bV90b3BiYXIgJiYgbW91c2VFdmVudChrdXJhX3RtX3RvcGJhcik7XHJcbiAgICAgICAgICAgIHBvaW50ZXIgJiYgbW91c2VFdmVudChwb2ludGVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIChlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiksXHJcbiAgICAgICAgKHQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qga3VyYV90bV9teV9sb2FkID0gKCkgPT4ge1xyXG4gIGt1cmFfdG1fcHJlbG9hZGVyKCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xyXG4gIH0sIDE1MDApO1xyXG59O1xyXG5cclxuLy8gSGVhZGVyXHJcbmV4cG9ydCBjb25zdCBzdGlja3lOYXYgPSAoKSA9PiB7XHJcbiAgbGV0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGNvbnN0IHN0aWNreXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmt1cmFfdG1fdG9wYmFyXCIpO1xyXG4gIHN0aWNreXMuZm9yRWFjaCgoc3RpY2t5KSA9PiB7XHJcbiAgICBpZiAoc3RpY2t5KSB7XHJcbiAgICAgIGlmIChvZmZzZXQgPiAxMDApIHtcclxuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXVkaW9Tb3VuZEFuZE9wZW4gPSAoKSA9PiB7XHJcbiAgdmFyIGF1ZGlvMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYXVkaW8xXCIpO1xyXG4gIHZhciBhdWRpbzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2F1ZGlvMlwiKTtcclxuICB2YXIgaGFtYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlciAuaGFtYnVyZ2VyXCIpO1xyXG5cclxuICBoYW1idXJnZXJzLmZvckVhY2goKGhhbWJ1cmdlcikgPT4ge1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGF1ZGlvMVswXS5wbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW8yWzBdLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuTmF2ID0gKHRvZ2dsZSkgPT4ge1xyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbmNob3JfbmF2PiBsaVwiKTtcclxuICBpZiAobmF2SXRlbXMpIHtcclxuICAgIG5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICB0b2dnbGUgPyBuYXYuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKSA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZVNraWxsUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhclwiKTtcclxuICBjb25zdCB0cmlnZ2VyQm90dG9tID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDUpICogNTtcclxuICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGNvbnN0IGJveFRvcCA9IGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBpZiAoYm94VG9wIDwgdHJpZ2dlckJvdHRvbSkge1xyXG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBhY3RpdmVcclxuZXhwb3J0IGNvbnN0IGFjdGl2ZU1lbnVCeVNlY3Rpb24gPSAoaWQpID0+IHtcclxuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkID8gaWQgOiBcImhvbWVcIn1gKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja0JveGVzKTtcclxuICBjaGVja0JveGVzKCk7XHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hlcygpIHtcclxuICAgIGNvbnN0IHRyaWdnZXJCb3R0b20gPSAod2luZG93LmlubmVySGVpZ2h0IC8gNSkgKiA1O1xyXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJveFRvcCA9IGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICBpZiAoYm94VG9wIDwgdHJpZ2dlckJvdHRvbSkge1xyXG4gICAgICAgIGFjdGl2ZU1lbnUoaWQgPyBpZCA6IFwiaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVNZW51KFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhY3RpdmVNZW51ID0gKGFjdGl2ZSkgPT4ge1xyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbmNob3JfbmF2PiBsaVwiKTtcclxuICBpZiAobmF2SXRlbXMpIHtcclxuICAgIG5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmUpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgYVRhZ0NsaWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2hyZWY9JyMnXVwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFUYWcubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGEgPSBhVGFnW2ldO1xyXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjcm9sbF8gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmt1cmFfdG1fc2VjdGlvblwiKTtcclxuICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYW5jaG9yX25hdiBsaVwiKTtcclxuICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24uY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYgKHBhZ2VZT2Zmc2V0ID49IHNlY3Rpb25Ub3AgLSBzZWN0aW9uSGVpZ2h0IC8gMykge1xyXG4gICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgbGkuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICBpZiAobGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT0gYCMke2N1cnJlbnR9YCkge1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsIlByZUxvYWRlciIsImFUYWdDbGljayIsImt1cmFfdG1fbXlfbG9hZCIsIndvd0pzQW5pbWF0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJrdXJhX3RtX3ByZWxvYWRlciIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInByZWxvYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwid2luZG93IiwiV09XIiwicmVxdWlyZSIsImluaXQiLCJjdXN0b21DdXJzb3IiLCJteUN1cnNvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW1idXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwia3VyYV90bV90b3BiYXIiLCJwb2ludGVyIiwiZSIsInQiLCJtb3VzZUV2ZW50IiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJib2R5IiwibiIsImkiLCJvIiwib25tb3VzZW1vdmUiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiY2xpZW50WSIsImEiLCJ2aXNpYmlsaXR5Iiwic3RpY2t5TmF2Iiwib2Zmc2V0Iiwic2Nyb2xsWSIsInN0aWNreXMiLCJmb3JFYWNoIiwic3RpY2t5IiwiYXVkaW9Tb3VuZEFuZE9wZW4iLCJhdWRpbzEiLCJhdWRpbzIiLCJoYW1idXJnZXJzIiwiY29udGFpbnMiLCJwbGF5Iiwib3Blbk5hdiIsInRvZ2dsZSIsIm5hdkl0ZW1zIiwibmF2IiwiYWN0aXZlU2tpbGxQcm9ncmVzcyIsImJveGVzIiwidHJpZ2dlckJvdHRvbSIsImlubmVySGVpZ2h0IiwiYm94IiwiYm94VG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYWN0aXZlTWVudUJ5U2VjdGlvbiIsImlkIiwiY2hlY2tCb3hlcyIsImFjdGl2ZU1lbnUiLCJhY3RpdmUiLCJhVGFnIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxfIiwic2VjdGlvbnMiLCJuYXZMaSIsImN1cnJlbnQiLCJzZWN0aW9uIiwic2VjdGlvblRvcCIsIm9mZnNldFRvcCIsInNlY3Rpb25IZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJwYWdlWU9mZnNldCIsImdldEF0dHJpYnV0ZSIsImxpIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiXSwic291cmNlUm9vdCI6IiJ9