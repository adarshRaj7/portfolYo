(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_Parallax_js"],{

/***/ "./src/components/Parallax.js":
/*!************************************!*\
  !*** ./src/components/Parallax.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ "./node_modules/jarallax/dist/jarallax.css");
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\study\\Projects\\PortfolYo\\kura\\src\\components\\Parallax.js",
    _s = $RefreshSig$();



 // import "./styles.css";


function Parallax() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo)();
    (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax)(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=7e90gBu4pas"
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "jarallax"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

_s(Parallax, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Parallax;

var _c;

$RefreshReg$(_c, "Parallax");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/jarallax/index.js":
/*!****************************************!*\
  !*** ./node_modules/jarallax/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const jarallax = __webpack_require__(/*! ./src/jarallax.esm */ "./node_modules/jarallax/src/jarallax.esm.js").default;
const jarallaxVideo = __webpack_require__(/*! ./src/jarallax-video.esm */ "./node_modules/jarallax/src/jarallax-video.esm.js").default;
const jarallaxElement = __webpack_require__(/*! ./src/jarallax-element.esm */ "./node_modules/jarallax/src/jarallax-element.esm.js").default;

module.exports = {
    jarallax,
    jarallaxElement() {
        return jarallaxElement( jarallax );
    },
    jarallaxVideo() {
        return jarallaxVideo( jarallax );
    },
};


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax-element.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax-element.esm.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jarallaxElement; }
/* harmony export */ });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* eslint no-case-declarations: "off" */


function jarallaxElement( jarallax = (global__WEBPACK_IMPORTED_MODULE_0___default().jarallax) ) {
    if ( 'undefined' === typeof jarallax ) {
        return;
    }

    const Jarallax = jarallax.constructor;

    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'clipContainer',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize',
    ].forEach( ( key ) => {
        const def = Jarallax.prototype[ key ];
        Jarallax.prototype[ key ] = function( ...args ) {
            const self = this;

            if ( 'initImg' === key && null !== self.$item.getAttribute( 'data-jarallax-element' ) ) {
                self.options.type = 'element';
                self.pureOptions.speed = self.$item.getAttribute( 'data-jarallax-element' ) || self.pureOptions.speed;
            }
            if ( 'element' !== self.options.type ) {
                return def.apply( self, args );
            }

            self.pureOptions.threshold = self.$item.getAttribute( 'data-threshold' ) || '';

            switch ( key ) {
            case 'init':
                const speedArr = self.pureOptions.speed.split( ' ' );
                self.options.speed = self.pureOptions.speed || 0;
                self.options.speedY = speedArr[ 0 ] ? parseFloat( speedArr[ 0 ] ) : 0;
                self.options.speedX = speedArr[ 1 ] ? parseFloat( speedArr[ 1 ] ) : 0;

                const thresholdArr = self.pureOptions.threshold.split( ' ' );
                self.options.thresholdY = thresholdArr[ 0 ] ? parseFloat( thresholdArr[ 0 ] ) : null;
                self.options.thresholdX = thresholdArr[ 1 ] ? parseFloat( thresholdArr[ 1 ] ) : null;

                def.apply( self, args );

                // restore background image if available.
                const originalStylesTag = self.$item.getAttribute( 'data-jarallax-original-styles' );
                if ( originalStylesTag ) {
                    self.$item.setAttribute( 'style', originalStylesTag );
                }

                return true;
            case 'onResize':
                const defTransform = self.css( self.$item, 'transform' );
                self.css( self.$item, { transform: '' } );
                const rect = self.$item.getBoundingClientRect();
                self.itemData = {
                    width: rect.width,
                    height: rect.height,
                    y: rect.top + self.getWindowData().y,
                    x: rect.left,
                };
                self.css( self.$item, { transform: defTransform } );
                break;
            case 'onScroll':
                const wnd = self.getWindowData();
                const centerPercent = ( wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2 ) / ( wnd.height / 2 );
                const moveY = centerPercent * self.options.speedY;
                const moveX = centerPercent * self.options.speedX;
                let my = moveY;
                let mx = moveX;
                if ( null !== self.options.thresholdY && moveY > self.options.thresholdY ) my = 0;
                if ( null !== self.options.thresholdX && moveX > self.options.thresholdX ) mx = 0;
                self.css( self.$item, { transform: `translate3d(${ mx }px,${ my }px,0)` } );
                break;
            case 'initImg':
            case 'isVisible':
            case 'clipContainer':
            case 'coverImage':
                return true;
            // no default
            }
            return def.apply( self, args );
        };
    } );
}


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax-video.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax-video.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jarallaxVideo; }
/* harmony export */ });
/* harmony import */ var video_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video-worker */ "./node_modules/video-worker/src/video-worker.esm.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);



function jarallaxVideo( jarallax = (global__WEBPACK_IMPORTED_MODULE_1___default().jarallax) ) {
    if ( 'undefined' === typeof jarallax ) {
        return;
    }

    const Jarallax = jarallax.constructor;

    // append video after when block will be visible.
    const defOnScroll = Jarallax.prototype.onScroll;
    Jarallax.prototype.onScroll = function() {
        const self = this;

        defOnScroll.apply( self );

        const isReady = ! self.isVideoInserted
                        && self.video
                        && ( ! self.options.videoLazyLoading || self.isElementInViewport )
                        && ! self.options.disableVideo();

        if ( isReady ) {
            self.isVideoInserted = true;

            self.video.getVideo( ( video ) => {
                const $parent = video.parentNode;
                self.css( video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    pointerEvents: 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform,opacity',
                    margin: 0,
                    zIndex: -1,
                } );
                self.$video = video;

                // add Poster attribute to self-hosted video
                if ( 'local' === self.video.type ) {
                    if ( self.image.src ) {
                        self.$video.setAttribute( 'poster', self.image.src );
                    } else if ( self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src ) {
                        self.$video.setAttribute( 'poster', self.image.$item.src );
                    }
                }

                // insert video tag
                self.image.$container.appendChild( video );

                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild( $parent );
            } );
        }
    };

    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function() {
        const self = this;
        const imageData = defCoverImage.apply( self );
        const node = self.image.$item ? self.image.$item.nodeName : false;

        if ( imageData && self.video && node && ( 'IFRAME' === node || 'VIDEO' === node ) ) {
            let h = imageData.image.height;
            let w = ( h * self.image.width ) / self.image.height;
            let ml = ( imageData.container.width - w ) / 2;
            let mt = imageData.image.marginTop;

            if ( imageData.container.width > w ) {
                w = imageData.container.width;
                h = ( w * self.image.height ) / self.image.width;
                ml = 0;
                mt += ( imageData.image.height - h ) / 2;
            }

            // add video height over than need to hide controls
            if ( 'IFRAME' === node ) {
                h += 400;
                mt -= 200;
            }

            self.css( self.$video, {
                width: `${ w }px`,
                marginLeft: `${ ml }px`,
                height: `${ h }px`,
                marginTop: `${ mt }px`,
            } );
        }

        return imageData;
    };

    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function() {
        const self = this;
        const defaultResult = defInitImg.apply( self );

        if ( ! self.options.videoSrc ) {
            self.options.videoSrc = self.$item.getAttribute( 'data-jarallax-video' ) || null;
        }

        if ( self.options.videoSrc ) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }

        return defaultResult;
    };

    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function() {
        const self = this;
        let defaultResult = defCanInitParallax.apply( self );

        if ( ! self.options.videoSrc ) {
            return defaultResult;
        }

        // Init video api
        const video = new video_worker__WEBPACK_IMPORTED_MODULE_0__.default( self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showControls: false,
            accessibilityHidden: true,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0,
        } );

        function resetDefaultImage() {
            if ( self.image.$default_item ) {
                self.image.$item = self.image.$default_item;
                self.image.$item.style.display = 'block';

                // set image width and height
                self.coverImage();
                self.clipContainer();
                self.onScroll();
            }
        }

        if ( video.isValid() ) {
            // Force enable parallax.
            // When the parallax disabled on mobile devices, we still need to display videos.
            // https://github.com/nk-o/jarallax/issues/159
            if ( this.options.disableParallax() ) {
                defaultResult = true;
                self.image.position = 'absolute';
                self.options.type = 'scroll';
                self.options.speed = 1;
            }

            // if parallax will not be inited, we can add thumbnail on background.
            if ( ! defaultResult ) {
                if ( ! self.defaultInitImgResult ) {
                    video.getImageURL( ( url ) => {
                        // save default user styles
                        const curStyle = self.$item.getAttribute( 'style' );
                        if ( curStyle ) {
                            self.$item.setAttribute( 'data-jarallax-original-styles', curStyle );
                        }

                        // set new background
                        self.css( self.$item, {
                            'background-image': `url("${ url }")`,
                            'background-position': 'center',
                            'background-size': 'cover',
                        } );
                    } );
                }

                // init video
            } else {
                video.on( 'ready', () => {
                    if ( self.options.videoPlayOnlyVisible ) {
                        const oldOnScroll = self.onScroll;
                        self.onScroll = function() {
                            oldOnScroll.apply( self );
                            if ( ! self.videoError && ( self.options.videoLoop || ( ! self.options.videoLoop && ! self.videoEnded ) ) ) {
                                if ( self.isVisible() ) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }
                        };
                    } else {
                        video.play();
                    }
                } );
                video.on( 'started', () => {
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;

                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();

                    // hide image
                    if ( self.image.$default_item ) {
                        self.image.$default_item.style.display = 'none';
                    }
                } );

                video.on( 'ended', () => {
                    self.videoEnded = true;

                    if ( ! self.options.videoLoop ) {
                        // show default image if Loop disabled.
                        resetDefaultImage();
                    }
                } );
                video.on( 'error', () => {
                    self.videoError = true;

                    // show default image if video loading error.
                    resetDefaultImage();
                } );

                self.video = video;

                // set image if not exists
                if ( ! self.defaultInitImgResult ) {
                    // set empty image on self-hosted video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

                    if ( 'local' !== video.type ) {
                        video.getImageURL( ( url ) => {
                            self.image.bgImage = `url("${ url }")`;
                            self.init();
                        } );

                        return false;
                    }
                }
            }
        }

        return defaultResult;
    };

    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function() {
        const self = this;

        if ( self.image.$default_item ) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }

        defDestroy.apply( self );
    };
}


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lite-ready */ "./node_modules/lite-ready/liteready.js");
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);



const {
    navigator,
} = global__WEBPACK_IMPORTED_MODULE_1__.window;

const isIE = -1 < navigator.userAgent.indexOf( 'MSIE ' ) || -1 < navigator.userAgent.indexOf( 'Trident/' ) || -1 < navigator.userAgent.indexOf( 'Edge/' );
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );

const supportTransform = ( () => {
    const prefixes = 'transform WebkitTransform MozTransform'.split( ' ' );
    const div = document.createElement( 'div' );
    for ( let i = 0; i < prefixes.length; i += 1 ) {
        if ( div && div.style[ prefixes[ i ] ] !== undefined ) {
            return prefixes[ i ];
        }
    }
    return false;
} )();

let $deviceHelper;

/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */
function getDeviceHeight() {
    if ( ! $deviceHelper && document.body ) {
        $deviceHelper = document.createElement( 'div' );
        $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
        document.body.appendChild( $deviceHelper );
    }

    return ( $deviceHelper ? $deviceHelper.clientHeight : 0 ) || global__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight || document.documentElement.clientHeight;
}

// Window height data
let wndH;
function updateWndVars() {
    if ( isMobile ) {
        wndH = getDeviceHeight();
    } else {
        wndH = global__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight || document.documentElement.clientHeight;
    }
}
updateWndVars();
global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener( 'resize', updateWndVars );
global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener( 'orientationchange', updateWndVars );
global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener( 'load', updateWndVars );
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()( () => {
    updateWndVars( {
        type: 'dom-loaded',
    } );
} );

// list with all jarallax instances
// need to render all in one scroll/resize event
const jarallaxList = [];

// get all parents of the element.
function getParents( elem ) {
    const parents = [];

    while ( null !== elem.parentElement ) {
        elem = elem.parentElement;

        if ( 1 === elem.nodeType ) {
            parents.push( elem );
        }
    }

    return parents;
}

function updateParallax() {
    if ( ! jarallaxList.length ) {
        return;
    }

    jarallaxList.forEach( ( data, k ) => {
        const {
            instance,
            oldData,
        } = data;

        const clientRect = instance.$item.getBoundingClientRect();

        const newData = {
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top,
            bottom: clientRect.bottom,
            wndW: global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth,
            wndH,
        };

        const isResized = ! oldData
                           || oldData.wndW !== newData.wndW
                           || oldData.wndH !== newData.wndH
                           || oldData.width !== newData.width
                           || oldData.height !== newData.height;
        const isScrolled = isResized
                           || ! oldData
                           || oldData.top !== newData.top
                           || oldData.bottom !== newData.bottom;

        jarallaxList[ k ].oldData = newData;

        if ( isResized ) {
            instance.onResize();
        }
        if ( isScrolled ) {
            instance.onScroll();
        }
    } );

    global__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame( updateParallax );
}

let instanceID = 0;

// Jarallax class
class Jarallax {
    constructor( item, userOptions ) {
        const self = this;

        self.instanceID = instanceID;
        instanceID += 1;

        self.$item = item;

        self.defaults = {
            type: 'scroll', // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
            speed: 0.5, // supported value from -1 to 2
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat', // supported only for background, not for <img> tag
            keepImg: false, // keep <img> tag in it's default place
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,

            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            videoLazyLoading: true,

            // events
            onScroll: null, // function(calculations) {}
            onInit: null, // function() {}
            onDestroy: null, // function() {}
            onCoverImage: null, // function() {}
        };

        // prepare data-options
        const dataOptions = self.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys( dataOptions ).forEach( ( key ) => {
            const loweCaseOption = key.substr( 0, 1 ).toLowerCase() + key.substr( 1 );
            if ( loweCaseOption && 'undefined' !== typeof self.defaults[ loweCaseOption ] ) {
                pureDataOptions[ loweCaseOption ] = dataOptions[ key ];
            }
        } );

        self.options = self.extend( {}, self.defaults, pureDataOptions, userOptions );
        self.pureOptions = self.extend( {}, self.options );

        // prepare 'true' and 'false' strings to boolean
        Object.keys( self.options ).forEach( ( key ) => {
            if ( 'true' === self.options[ key ] ) {
                self.options[ key ] = true;
            } else if ( 'false' === self.options[ key ] ) {
                self.options[ key ] = false;
            }
        } );

        // fix speed option [-1.0, 2.0]
        self.options.speed = Math.min( 2, Math.max( -1, parseFloat( self.options.speed ) ) );

        // prepare disableParallax callback
        if ( 'string' === typeof self.options.disableParallax ) {
            self.options.disableParallax = new RegExp( self.options.disableParallax );
        }
        if ( self.options.disableParallax instanceof RegExp ) {
            const disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = () => disableParallaxRegexp.test( navigator.userAgent );
        }
        if ( 'function' !== typeof self.options.disableParallax ) {
            self.options.disableParallax = () => false;
        }

        // prepare disableVideo callback
        if ( 'string' === typeof self.options.disableVideo ) {
            self.options.disableVideo = new RegExp( self.options.disableVideo );
        }
        if ( self.options.disableVideo instanceof RegExp ) {
            const disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = () => disableVideoRegexp.test( navigator.userAgent );
        }
        if ( 'function' !== typeof self.options.disableVideo ) {
            self.options.disableVideo = () => false;
        }

        // custom element to check if parallax in viewport
        let elementInVP = self.options.elementInViewport;
        // get first item from array
        if ( elementInVP && 'object' === typeof elementInVP && 'undefined' !== typeof elementInVP.length ) {
            [ elementInVP ] = elementInVP;
        }
        // check if dom element
        if ( ! ( elementInVP instanceof Element ) ) {
            elementInVP = null;
        }
        self.options.elementInViewport = elementInVP;

        self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,

            // 1. Position fixed is needed for the most of browsers because absolute position have glitches
            // 2. On MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // 3. Previously used 'absolute' for mobile devices. But we re-tested on iPhone 12 and 'fixed' position is working better, then 'absolute', so for now position is always 'fixed'
            position: 'fixed',
        };

        if ( self.initImg() && self.canInitParallax() ) {
            self.init();
        }
    }

    // add styles to element
    // eslint-disable-next-line class-methods-use-this
    css( el, styles ) {
        if ( 'string' === typeof styles ) {
            return global__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle( el ).getPropertyValue( styles );
        }

        // add transform property with vendor prefix
        if ( styles.transform && supportTransform ) {
            styles[ supportTransform ] = styles.transform;
        }

        Object.keys( styles ).forEach( ( key ) => {
            el.style[ key ] = styles[ key ];
        } );
        return el;
    }

    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend( out, ...args ) {
        out = out || {};

        Object.keys( args ).forEach( ( i ) => {
            if ( ! args[ i ] ) {
                return;
            }
            Object.keys( args[ i ] ).forEach( ( key ) => {
                out[ key ] = args[ i ][ key ];
            } );
        } );

        return out;
    }

    // get window size and scroll position. Useful for extensions
    // eslint-disable-next-line class-methods-use-this
    getWindowData() {
        return {
            width: global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth || document.documentElement.clientWidth,
            height: wndH,
            y: document.documentElement.scrollTop,
        };
    }

    // Jarallax functions
    initImg() {
        const self = this;

        // find image element
        let $imgElement = self.options.imgElement;
        if ( $imgElement && 'string' === typeof $imgElement ) {
            $imgElement = self.$item.querySelector( $imgElement );
        }

        // check if dom element
        if ( ! ( $imgElement instanceof Element ) ) {
            if ( self.options.imgSrc ) {
                $imgElement = new Image();
                $imgElement.src = self.options.imgSrc;
            } else {
                $imgElement = null;
            }
        }

        if ( $imgElement ) {
            if ( self.options.keepImg ) {
                self.image.$item = $imgElement.cloneNode( true );
            } else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
            }
            self.image.useImgTag = true;
        }

        // true if there is img tag
        if ( self.image.$item ) {
            return true;
        }

        // get image src
        if ( null === self.image.src ) {
            self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            self.image.bgImage = self.css( self.$item, 'background-image' );
        }
        return ! ( ! self.image.bgImage || 'none' === self.image.bgImage );
    }

    canInitParallax() {
        return supportTransform && ! this.options.disableParallax();
    }

    init() {
        const self = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        };
        let imageStyles = {
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform,opacity',
        };

        if ( ! self.options.keepImg ) {
            // save default user styles
            const curStyle = self.$item.getAttribute( 'style' );
            if ( curStyle ) {
                self.$item.setAttribute( 'data-jarallax-original-styles', curStyle );
            }
            if ( self.image.useImgTag ) {
                const curImgStyle = self.image.$item.getAttribute( 'style' );
                if ( curImgStyle ) {
                    self.image.$item.setAttribute( 'data-jarallax-original-styles', curImgStyle );
                }
            }
        }

        // set relative position and z-index to the parent
        if ( 'static' === self.css( self.$item, 'position' ) ) {
            self.css( self.$item, {
                position: 'relative',
            } );
        }
        if ( 'auto' === self.css( self.$item, 'z-index' ) ) {
            self.css( self.$item, {
                zIndex: 0,
            } );
        }

        // container for parallax image
        self.image.$container = document.createElement( 'div' );
        self.css( self.image.$container, containerStyles );
        self.css( self.image.$container, {
            'z-index': self.options.zIndex,
        } );

        // fix for IE https://github.com/nk-o/jarallax/issues/110
        if ( isIE ) {
            self.css( self.image.$container, {
                opacity: 0.9999,
            } );
        }

        self.image.$container.setAttribute( 'id', `jarallax-container-${ self.instanceID }` );
        self.$item.appendChild( self.image.$container );

        // use img tag
        if ( self.image.useImgTag ) {
            imageStyles = self.extend( {
                'object-fit': self.options.imgSize,
                'object-position': self.options.imgPosition,
                // support for plugin https://github.com/bfred-it/object-fit-images
                'font-family': `object-fit: ${ self.options.imgSize }; object-position: ${ self.options.imgPosition };`,
                'max-width': 'none',
            }, containerStyles, imageStyles );

        // use div with background image
        } else {
            self.image.$item = document.createElement( 'div' );
            if ( self.image.src ) {
                imageStyles = self.extend( {
                    'background-position': self.options.imgPosition,
                    'background-size': self.options.imgSize,
                    'background-repeat': self.options.imgRepeat,
                    'background-image': self.image.bgImage || `url("${ self.image.src }")`,
                }, containerStyles, imageStyles );
            }
        }

        if ( 'opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed ) {
            self.image.position = 'absolute';
        }

        // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        //    discussion - https://github.com/nk-o/jarallax/issues/9
        // 2. Check if parents have overflow scroll
        if ( 'fixed' === self.image.position ) {
            const $parents = getParents( self.$item ).filter( ( el ) => {
                const styles = global__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle( el );
                const parentTransform = styles[ '-webkit-transform' ] || styles[ '-moz-transform' ] || styles.transform;
                const overflowRegex = /(auto|scroll)/;

                return ( parentTransform && 'none' !== parentTransform ) || overflowRegex.test( styles.overflow + styles[ 'overflow-y' ] + styles[ 'overflow-x' ] );
            } );

            self.image.position = $parents.length ? 'absolute' : 'fixed';
        }

        // add position to parallax block
        imageStyles.position = self.image.position;

        // insert parallax image
        self.css( self.image.$item, imageStyles );
        self.image.$container.appendChild( self.image.$item );

        // set initial position and size
        self.onResize();
        self.onScroll( true );

        // call onInit event
        if ( self.options.onInit ) {
            self.options.onInit.call( self );
        }

        // remove default user background
        if ( 'none' !== self.css( self.$item, 'background-image' ) ) {
            self.css( self.$item, {
                'background-image': 'none',
            } );
        }

        self.addToParallaxList();
    }

    // add to parallax instances list
    addToParallaxList() {
        jarallaxList.push( {
            instance: this,
        } );

        if ( 1 === jarallaxList.length ) {
            global__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame( updateParallax );
        }
    }

    // remove from parallax instances list
    removeFromParallaxList() {
        const self = this;

        jarallaxList.forEach( ( data, key ) => {
            if ( data.instance.instanceID === self.instanceID ) {
                jarallaxList.splice( key, 1 );
            }
        } );
    }

    destroy() {
        const self = this;

        self.removeFromParallaxList();

        // return styles on container as before jarallax init
        const originalStylesTag = self.$item.getAttribute( 'data-jarallax-original-styles' );
        self.$item.removeAttribute( 'data-jarallax-original-styles' );
        // null occurs if there is no style tag before jarallax init
        if ( ! originalStylesTag ) {
            self.$item.removeAttribute( 'style' );
        } else {
            self.$item.setAttribute( 'style', originalStylesTag );
        }

        if ( self.image.useImgTag ) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self.image.$item.getAttribute( 'data-jarallax-original-styles' );
            self.image.$item.removeAttribute( 'data-jarallax-original-styles' );
            // null occurs if there is no style tag before jarallax init
            if ( ! originalStylesImgTag ) {
                self.image.$item.removeAttribute( 'style' );
            } else {
                self.image.$item.setAttribute( 'style', originalStylesTag );
            }

            // move img tag to its default position
            if ( self.image.$itemParent ) {
                self.image.$itemParent.appendChild( self.image.$item );
            }
        }

        // remove additional dom elements
        if ( self.$clipStyles ) {
            self.$clipStyles.parentNode.removeChild( self.$clipStyles );
        }
        if ( self.image.$container ) {
            self.image.$container.parentNode.removeChild( self.image.$container );
        }

        // call onDestroy event
        if ( self.options.onDestroy ) {
            self.options.onDestroy.call( self );
        }

        // delete jarallax from item
        delete self.$item.jarallax;
    }

    // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    clipContainer() {
        // needed only when background in fixed position
        if ( 'fixed' !== this.image.position ) {
            return;
        }

        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const { width, height } = rect;

        if ( ! self.$clipStyles ) {
            self.$clipStyles = document.createElement( 'style' );
            self.$clipStyles.setAttribute( 'type', 'text/css' );
            self.$clipStyles.setAttribute( 'id', `jarallax-clip-${ self.instanceID }` );
            const head = document.head || document.getElementsByTagName( 'head' )[ 0 ];
            head.appendChild( self.$clipStyles );
        }

        // clip is used for old browsers.
        // clip-path for modern browsers (also fixes Safari v14 bug https://github.com/nk-o/jarallax/issues/181 ).
        const styles = `#jarallax-container-${ self.instanceID } {
            clip: rect(0 ${ width }px ${ height }px 0);
            clip: rect(0, ${ width }px, ${ height }px, 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }`;

        // add clip styles inline (this method need for support IE8 and less browsers)
        if ( self.$clipStyles.styleSheet ) {
            self.$clipStyles.styleSheet.cssText = styles;
        } else {
            self.$clipStyles.innerHTML = styles;
        }
    }

    coverImage() {
        const self = this;

        const rect = self.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed } = self.options;
        const isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;

        // scroll parallax
        if ( isScroll ) {
            // scroll distance and height for image
            if ( 0 > speed ) {
                scrollDist = speed * Math.max( contH, wndH );

                if ( wndH < contH ) {
                    scrollDist -= speed * ( contH - wndH );
                }
            } else {
                scrollDist = speed * ( contH + wndH );
            }

            // size for scroll parallax
            if ( 1 < speed ) {
                resultH = Math.abs( scrollDist - wndH );
            } else if ( 0 > speed ) {
                resultH = scrollDist / speed + Math.abs( scrollDist );
            } else {
                resultH += ( wndH - contH ) * ( 1 - speed );
            }

            scrollDist /= 2;
        }

        // store scroll distance
        self.parallaxScrollDistance = scrollDist;

        // vertical center
        if ( isScroll ) {
            resultMT = ( wndH - resultH ) / 2;
        } else {
            resultMT = ( contH - resultH ) / 2;
        }

        // apply result to item
        self.css( self.image.$item, {
            height: `${ resultH }px`,
            marginTop: `${ resultMT }px`,
            left: 'fixed' === self.image.position ? `${ rect.left }px` : '0',
            width: `${ rect.width }px`,
        } );

        // call onCoverImage event
        if ( self.options.onCoverImage ) {
            self.options.onCoverImage.call( self );
        }

        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT,
            },
            container: rect,
        };
    }

    isVisible() {
        return this.isElementInViewport || false;
    }

    onScroll( force ) {
        const self = this;

        const rect = self.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {};

        // check if in viewport
        let viewportRect = rect;
        if ( self.options.elementInViewport ) {
            viewportRect = self.options.elementInViewport.getBoundingClientRect();
        }
        self.isElementInViewport = 0 <= viewportRect.bottom
            && 0 <= viewportRect.right
            && viewportRect.top <= wndH
            && viewportRect.left <= global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth;

        // stop calculations if item is not in viewport
        if ( force ? false : ! self.isElementInViewport ) {
            return;
        }

        // calculate parallax helping variables
        const beforeTop = Math.max( 0, contT );
        const beforeTopEnd = Math.max( 0, contH + contT );
        const afterTop = Math.max( 0, -contT );
        const beforeBottom = Math.max( 0, contT + contH - wndH );
        const beforeBottomEnd = Math.max( 0, contH - ( contT + contH - wndH ) );
        const afterBottom = Math.max( 0, -contT + wndH - contH );
        const fromViewportCenter = 1 - 2 * ( ( wndH - contT ) / ( wndH + contH ) );

        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if ( contH < wndH ) {
            visiblePercent = 1 - ( afterTop || beforeBottom ) / contH;
        } else if ( beforeTopEnd <= wndH ) {
            visiblePercent = beforeTopEnd / wndH;
        } else if ( beforeBottomEnd <= wndH ) {
            visiblePercent = beforeBottomEnd / wndH;
        }

        // opacity
        if ( 'opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type ) {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }

        // scale
        if ( 'scale' === self.options.type || 'scale-opacity' === self.options.type ) {
            let scale = 1;
            if ( 0 > self.options.speed ) {
                scale -= self.options.speed * visiblePercent;
            } else {
                scale += self.options.speed * ( 1 - visiblePercent );
            }
            styles.transform = `scale(${ scale }) translate3d(0,0,0)`;
        }

        // scroll
        if ( 'scroll' === self.options.type || 'scroll-opacity' === self.options.type ) {
            let positionY = self.parallaxScrollDistance * fromViewportCenter;

            // fix if parallax block in absolute position
            if ( 'absolute' === self.image.position ) {
                positionY -= contT;
            }

            styles.transform = `translate3d(0,${ positionY }px,0)`;
        }

        self.css( self.image.$item, styles );

        // call onScroll event
        if ( self.options.onScroll ) {
            self.options.onScroll.call( self, {
                section: rect,

                beforeTop,
                beforeTopEnd,
                afterTop,
                beforeBottom,
                beforeBottomEnd,
                afterBottom,

                visiblePercent,
                fromViewportCenter,
            } );
        }
    }

    onResize() {
        this.coverImage();
        this.clipContainer();
    }
}

// global definition
const plugin = function( items, options, ...args ) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if ( 'object' === typeof HTMLElement ? items instanceof HTMLElement : items && 'object' === typeof items && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName ) {
        items = [ items ];
    }

    const len = items.length;
    let k = 0;
    let ret;

    for ( k; k < len; k += 1 ) {
        if ( 'object' === typeof options || 'undefined' === typeof options ) {
            if ( ! items[ k ].jarallax ) {
                items[ k ].jarallax = new Jarallax( items[ k ], options );
            }
        } else if ( items[ k ].jarallax ) {
            // eslint-disable-next-line prefer-spread
            ret = items[ k ].jarallax[ options ].apply( items[ k ].jarallax, args );
        }
        if ( 'undefined' !== typeof ret ) {
            return ret;
        }
    }

    return items;
};
plugin.constructor = Jarallax;

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),

/***/ "./node_modules/lite-ready/liteready.js":
/*!**********************************************!*\
  !*** ./node_modules/lite-ready/liteready.js ***!
  \**********************************************/
/***/ (function(module) {

module.exports = function (callback) {

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Already ready or interactive, execute callback
		callback.call();
	}
	else if (document.attachEvent) {
		// Old browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'interactive')
				callback.call();
		});
	}
	else if (document.addEventListener) {
		// Modern browsers
		document.addEventListener('DOMContentLoaded', callback);
	}
}


/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.css":
/*!*************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/jarallax/dist/jarallax.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/jarallax/dist/jarallax.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/jarallax/dist/jarallax.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
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
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/jarallax/dist/jarallax.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/jarallax/dist/jarallax.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jarallax {\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n.jarallax > .jarallax-img {\r\n    position: absolute;\r\n    object-fit: cover;\r\n    /* support for plugin https://github.com/bfred-it/object-fit-images */\r\n    font-family: 'object-fit: cover;';\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n}", "",{"version":3,"sources":["webpack://node_modules/jarallax/dist/jarallax.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qEAAqE;IACrE,iCAAiC;IACjC,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,WAAW;AACf","sourcesContent":[".jarallax {\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n.jarallax > .jarallax-img {\r\n    position: absolute;\r\n    object-fit: cover;\r\n    /* support for plugin https://github.com/bfred-it/object-fit-images */\r\n    font-family: 'object-fit: cover;';\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/video-worker/src/video-worker.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/video-worker/src/video-worker.esm.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoWorker; }
/* harmony export */ });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);


// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}

Deferred.prototype = {
    execute( list, args ) {
        let i = list.length;
        args = Array.prototype.slice.call( args );

        while ( i ) {
            i -= 1;
            list[ i ].apply( null, args );
        }
    },
    resolve( ...args ) {
        this.execute( this.doneCallbacks, args );
    },
    reject( ...args ) {
        this.execute( this.failCallbacks, args );
    },
    done( callback ) {
        this.doneCallbacks.push( callback );
    },
    fail( callback ) {
        this.failCallbacks.push( callback );
    },
};

let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = new Deferred();
const loadingVimeoDefer = new Deferred();

class VideoWorker {
    constructor( url, options ) {
        const self = this;

        self.url = url;

        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showControls: true,
            accessibilityHidden: false,

            // start / end video time in seconds
            startTime: 0,
            endTime: 0,
        };

        self.options = self.extend( {}, self.options_default, options );

        // Fix wrong option name.
        // Thanks to https://github.com/nk-o/video-worker/issues/13.
        if ( 'undefined' !== typeof self.options.showContols ) {
            self.options.showControls = self.options.showContols;
            delete self.options.showContols;
        }

        // check URL
        self.videoID = self.parseURL( url );

        // init
        if ( self.videoID ) {
            self.ID = ID;
            ID += 1;
            self.loadAPI();
            self.init();
        }
    }

    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend( ...args ) {
        const out = args[ 0 ] || {};

        Object.keys( args ).forEach( ( i ) => {
            if ( ! args[ i ] ) {
                return;
            }
            Object.keys( args[ i ] ).forEach( ( key ) => {
                out[ key ] = args[ i ][ key ];
            } );
        } );

        return out;
    }

    parseURL( url ) {
        // parse youtube ID
        function getYoutubeID( ytUrl ) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            const match = ytUrl.match( regExp );
            return match && 11 === match[ 1 ].length ? match[ 1 ] : false;
        }

        // parse vimeo ID
        function getVimeoID( vmUrl ) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            const match = vmUrl.match( regExp );
            return match && match[ 3 ] ? match[ 3 ] : false;
        }

        // parse local string
        function getLocalVideos( locUrl ) {
            // eslint-disable-next-line no-useless-escape
            const videoFormats = locUrl.split( /,(?=mp4\:|webm\:|ogv\:|ogg\:)/ );
            const result = {};
            let ready = 0;
            videoFormats.forEach( ( val ) => {
                // eslint-disable-next-line no-useless-escape
                const match = val.match( /^(mp4|webm|ogv|ogg)\:(.*)/ );
                if ( match && match[ 1 ] && match[ 2 ] ) {
                    // eslint-disable-next-line prefer-destructuring
                    result[ 'ogv' === match[ 1 ] ? 'ogg' : match[ 1 ] ] = match[ 2 ];
                    ready = 1;
                }
            } );
            return ready ? result : false;
        }

        const Youtube = getYoutubeID( url );
        const Vimeo = getVimeoID( url );
        const Local = getLocalVideos( url );

        if ( Youtube ) {
            this.type = 'youtube';
            return Youtube;
        }

        if ( Vimeo ) {
            this.type = 'vimeo';
            return Vimeo;
        }

        if ( Local ) {
            this.type = 'local';
            return Local;
        }

        return false;
    }

    isValid() {
        return !! this.videoID;
    }

    // events
    on( name, callback ) {
        this.userEventsList = this.userEventsList || [];

        // add new callback in events list
        ( this.userEventsList[ name ] || ( this.userEventsList[ name ] = [] ) ).push( callback );
    }

    off( name, callback ) {
        if ( ! this.userEventsList || ! this.userEventsList[ name ] ) {
            return;
        }

        if ( ! callback ) {
            delete this.userEventsList[ name ];
        } else {
            this.userEventsList[ name ].forEach( ( val, key ) => {
                if ( val === callback ) {
                    this.userEventsList[ name ][ key ] = false;
                }
            } );
        }
    }

    fire( name, ...args ) {
        if ( this.userEventsList && 'undefined' !== typeof this.userEventsList[ name ] ) {
            this.userEventsList[ name ].forEach( ( val ) => {
                // call with all arguments
                if ( val ) {
                    val.apply( this, args );
                }
            } );
        }
    }

    play( start ) {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.playVideo ) {
            if ( 'undefined' !== typeof start ) {
                self.player.seekTo( start || 0 );
            }
            if ( (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PLAYING) !== self.player.getPlayerState() ) {
                self.player.playVideo();
            }
        }

        if ( 'vimeo' === self.type ) {
            if ( 'undefined' !== typeof start ) {
                self.player.setCurrentTime( start );
            }
            self.player.getPaused().then( ( paused ) => {
                if ( paused ) {
                    self.player.play();
                }
            } );
        }

        if ( 'local' === self.type ) {
            if ( 'undefined' !== typeof start ) {
                self.player.currentTime = start;
            }
            if ( self.player.paused ) {
                self.player.play();
            }
        }
    }

    pause() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.pauseVideo ) {
            if ( (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PLAYING) === self.player.getPlayerState() ) {
                self.player.pauseVideo();
            }
        }

        if ( 'vimeo' === self.type ) {
            self.player.getPaused().then( ( paused ) => {
                if ( ! paused ) {
                    self.player.pause();
                }
            } );
        }

        if ( 'local' === self.type ) {
            if ( ! self.player.paused ) {
                self.player.pause();
            }
        }
    }

    mute() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.mute ) {
            self.player.mute();
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( 0 );
        }

        if ( 'local' === self.type ) {
            self.$video.muted = true;
        }
    }

    unmute() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.mute ) {
            self.player.unMute();
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( self.options.volume );
        }

        if ( 'local' === self.type ) {
            self.$video.muted = false;
        }
    }

    setVolume( volume = false ) {
        const self = this;
        if ( ! self.player || ! volume ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.setVolume ) {
            self.player.setVolume( volume );
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( volume );
        }

        if ( 'local' === self.type ) {
            self.$video.volume = volume / 100;
        }
    }

    getVolume( callback ) {
        const self = this;
        if ( ! self.player ) {
            callback( false );
            return;
        }

        if ( 'youtube' === self.type && self.player.getVolume ) {
            callback( self.player.getVolume() );
        }

        if ( 'vimeo' === self.type && self.player.getVolume ) {
            self.player.getVolume().then( ( volume ) => {
                callback( volume );
            } );
        }

        if ( 'local' === self.type ) {
            callback( self.$video.volume * 100 );
        }
    }

    getMuted( callback ) {
        const self = this;
        if ( ! self.player ) {
            callback( null );
            return;
        }

        if ( 'youtube' === self.type && self.player.isMuted ) {
            callback( self.player.isMuted() );
        }

        if ( 'vimeo' === self.type && self.player.getVolume ) {
            self.player.getVolume().then( ( volume ) => {
                callback( !! volume );
            } );
        }

        if ( 'local' === self.type ) {
            callback( self.$video.muted );
        }
    }

    getImageURL( callback ) {
        const self = this;

        if ( self.videoImage ) {
            callback( self.videoImage );
            return;
        }

        if ( 'youtube' === self.type ) {
            const availableSizes = [
                'maxresdefault',
                'sddefault',
                'hqdefault',
                '0',
            ];
            let step = 0;

            const tempImg = new Image();
            tempImg.onload = function() {
                // if no thumbnail, youtube add their own image with width = 120px
                if ( 120 !== ( this.naturalWidth || this.width ) || step === availableSizes.length - 1 ) {
                    // ok
                    self.videoImage = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
                    callback( self.videoImage );
                } else {
                    // try another size
                    step += 1;
                    this.src = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
                }
            };
            tempImg.src = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
        }

        if ( 'vimeo' === self.type ) {
            let request = new XMLHttpRequest();
            request.open( 'GET', `https://vimeo.com/api/v2/video/${ self.videoID }.json`, true );
            request.onreadystatechange = function() {
                if ( 4 === this.readyState ) {
                    if ( 200 <= this.status && 400 > this.status ) {
                        // Success!
                        const response = JSON.parse( this.responseText );
                        self.videoImage = response[ 0 ].thumbnail_large;
                        callback( self.videoImage );
                    } else {
                        // Error :(
                    }
                }
            };
            request.send();
            request = null;
        }
    }

    // fallback to the old version.
    getIframe( callback ) {
        this.getVideo( callback );
    }

    getVideo( callback ) {
        const self = this;

        // return generated video block
        if ( self.$video ) {
            callback( self.$video );
            return;
        }

        // generate new video block
        self.onAPIready( () => {
            let hiddenDiv;
            if ( ! self.$video ) {
                hiddenDiv = document.createElement( 'div' );
                hiddenDiv.style.display = 'none';
            }

            // Youtube
            if ( 'youtube' === self.type ) {
                self.playerOptions = {
                    // GDPR Compliance.
                    host: 'https://www.youtube-nocookie.com',
                    videoId: self.videoID,
                    playerVars: {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        // autoplay enable on mobile devices
                        playsinline: 1,
                    },
                };

                // hide controls
                if ( ! self.options.showControls ) {
                    self.playerOptions.playerVars.iv_load_policy = 3;
                    self.playerOptions.playerVars.modestbranding = 1;
                    self.playerOptions.playerVars.controls = 0;
                    self.playerOptions.playerVars.showinfo = 0;
                    self.playerOptions.playerVars.disablekb = 1;
                }

                // events
                let ytStarted;
                let ytProgressInterval;
                self.playerOptions.events = {
                    onReady( e ) {
                        // mute
                        if ( self.options.mute ) {
                            e.target.mute();
                        } else if ( self.options.volume ) {
                            e.target.setVolume( self.options.volume );
                        }

                        // autoplay
                        if ( self.options.autoplay ) {
                            self.play( self.options.startTime );
                        }
                        self.fire( 'ready', e );

                        // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                        // https://github.com/nk-o/video-worker/issues/2
                        if ( self.options.loop && ! self.options.endTime ) {
                            const secondsOffset = 0.1;
                            self.options.endTime = self.player.getDuration() - secondsOffset;
                        }

                        // volumechange
                        setInterval( () => {
                            self.getVolume( ( volume ) => {
                                if ( self.options.volume !== volume ) {
                                    self.options.volume = volume;
                                    self.fire( 'volumechange', e );
                                }
                            } );
                        }, 150 );
                    },
                    onStateChange( e ) {
                        // loop
                        if ( self.options.loop && e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.ENDED) ) {
                            self.play( self.options.startTime );
                        }
                        if ( ! ytStarted && e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PLAYING) ) {
                            ytStarted = 1;
                            self.fire( 'started', e );
                        }
                        if ( e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PLAYING) ) {
                            self.fire( 'play', e );
                        }
                        if ( e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PAUSED) ) {
                            self.fire( 'pause', e );
                        }
                        if ( e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.ENDED) ) {
                            self.fire( 'ended', e );
                        }

                        // progress check
                        if ( e.data === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.PlayerState.PLAYING) ) {
                            ytProgressInterval = setInterval( () => {
                                self.fire( 'timeupdate', e );

                                // check for end of video and play again or stop
                                if ( self.options.endTime && self.player.getCurrentTime() >= self.options.endTime ) {
                                    if ( self.options.loop ) {
                                        self.play( self.options.startTime );
                                    } else {
                                        self.pause();
                                    }
                                }
                            }, 150 );
                        } else {
                            clearInterval( ytProgressInterval );
                        }
                    },
                    onError( e ) {
                        self.fire( 'error', e );
                    },
                };

                const firstInit = ! self.$video;
                if ( firstInit ) {
                    const div = document.createElement( 'div' );
                    div.setAttribute( 'id', self.playerID );
                    hiddenDiv.appendChild( div );
                    document.body.appendChild( hiddenDiv );
                }
                self.player = self.player || new (global__WEBPACK_IMPORTED_MODULE_0___default().YT.Player)( self.playerID, self.playerOptions );
                if ( firstInit ) {
                    self.$video = document.getElementById( self.playerID );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    // get video width and height
                    self.videoWidth = parseInt( self.$video.getAttribute( 'width' ), 10 ) || 1280;
                    self.videoHeight = parseInt( self.$video.getAttribute( 'height' ), 10 ) || 720;
                }
            }

            // Vimeo
            if ( 'vimeo' === self.type ) {
                self.playerOptions = {
                    // GDPR Compliance.
                    dnt: 1,
                    id: self.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: self.options.autoplay ? 1 : 0,
                    loop: self.options.loop ? 1 : 0,
                    muted: self.options.mute ? 1 : 0,
                };

                if ( self.options.volume ) {
                    self.playerOptions.volume = self.options.volume;
                }

                // hide controls
                if ( ! self.options.showControls ) {
                    self.playerOptions.badge = 0;
                    self.playerOptions.byline = 0;
                    self.playerOptions.portrait = 0;
                    self.playerOptions.title = 0;
                    self.playerOptions.background = 1;
                }

                if ( ! self.$video ) {
                    let playerOptionsString = '';
                    Object.keys( self.playerOptions ).forEach( ( key ) => {
                        if ( '' !== playerOptionsString ) {
                            playerOptionsString += '&';
                        }
                        playerOptionsString += `${ key }=${ encodeURIComponent( self.playerOptions[ key ] ) }`;
                    } );

                    // we need to create iframe manually because when we create it using API
                    // js events won't triggers after iframe moved to another place
                    self.$video = document.createElement( 'iframe' );
                    self.$video.setAttribute( 'id', self.playerID );
                    self.$video.setAttribute( 'src', `https://player.vimeo.com/video/${ self.videoID }?${ playerOptionsString }` );
                    self.$video.setAttribute( 'frameborder', '0' );
                    self.$video.setAttribute( 'mozallowfullscreen', '' );
                    self.$video.setAttribute( 'allowfullscreen', '' );
                    self.$video.setAttribute( 'title', 'Vimeo video player' );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    hiddenDiv.appendChild( self.$video );
                    document.body.appendChild( hiddenDiv );
                }
                self.player = self.player || new (global__WEBPACK_IMPORTED_MODULE_0___default().Vimeo.Player)( self.$video, self.playerOptions );

                // set current time for autoplay
                if ( self.options.startTime && self.options.autoplay ) {
                    self.player.setCurrentTime( self.options.startTime );
                }

                // get video width and height
                self.player.getVideoWidth().then( ( width ) => {
                    self.videoWidth = width || 1280;
                } );
                self.player.getVideoHeight().then( ( height ) => {
                    self.videoHeight = height || 720;
                } );

                // events
                let vmStarted;
                self.player.on( 'timeupdate', ( e ) => {
                    if ( ! vmStarted ) {
                        self.fire( 'started', e );
                        vmStarted = 1;
                    }

                    self.fire( 'timeupdate', e );

                    // check for end of video and play again or stop
                    if ( self.options.endTime ) {
                        if ( self.options.endTime && e.seconds >= self.options.endTime ) {
                            if ( self.options.loop ) {
                                self.play( self.options.startTime );
                            } else {
                                self.pause();
                            }
                        }
                    }
                } );
                self.player.on( 'play', ( e ) => {
                    self.fire( 'play', e );

                    // check for the start time and start with it
                    if ( self.options.startTime && 0 === e.seconds ) {
                        self.play( self.options.startTime );
                    }
                } );
                self.player.on( 'pause', ( e ) => {
                    self.fire( 'pause', e );
                } );
                self.player.on( 'ended', ( e ) => {
                    self.fire( 'ended', e );
                } );
                self.player.on( 'loaded', ( e ) => {
                    self.fire( 'ready', e );
                } );
                self.player.on( 'volumechange', ( e ) => {
                    self.fire( 'volumechange', e );
                } );
                self.player.on( 'error', ( e ) => {
                    self.fire( 'error', e );
                } );
            }

            // Local
            function addSourceToLocal( element, src, type ) {
                const source = document.createElement( 'source' );
                source.src = src;
                source.type = type;
                element.appendChild( source );
            }
            if ( 'local' === self.type ) {
                if ( ! self.$video ) {
                    self.$video = document.createElement( 'video' );

                    // show controls
                    if ( self.options.showControls ) {
                        self.$video.controls = true;
                    }

                    // mute
                    if ( self.options.mute ) {
                        self.$video.muted = true;
                    } else if ( self.$video.volume ) {
                        self.$video.volume = self.options.volume / 100;
                    }

                    // loop
                    if ( self.options.loop ) {
                        self.$video.loop = true;
                    }

                    // autoplay enable on mobile devices
                    self.$video.setAttribute( 'playsinline', '' );
                    self.$video.setAttribute( 'webkit-playsinline', '' );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    self.$video.setAttribute( 'id', self.playerID );
                    hiddenDiv.appendChild( self.$video );
                    document.body.appendChild( hiddenDiv );

                    Object.keys( self.videoID ).forEach( ( key ) => {
                        addSourceToLocal( self.$video, self.videoID[ key ], `video/${ key }` );
                    } );
                }

                self.player = self.player || self.$video;

                let locStarted;
                self.player.addEventListener( 'playing', ( e ) => {
                    if ( ! locStarted ) {
                        self.fire( 'started', e );
                    }
                    locStarted = 1;
                } );
                self.player.addEventListener( 'timeupdate', function( e ) {
                    self.fire( 'timeupdate', e );

                    // check for end of video and play again or stop
                    if ( self.options.endTime ) {
                        if ( self.options.endTime && this.currentTime >= self.options.endTime ) {
                            if ( self.options.loop ) {
                                self.play( self.options.startTime );
                            } else {
                                self.pause();
                            }
                        }
                    }
                } );
                self.player.addEventListener( 'play', ( e ) => {
                    self.fire( 'play', e );
                } );
                self.player.addEventListener( 'pause', ( e ) => {
                    self.fire( 'pause', e );
                } );
                self.player.addEventListener( 'ended', ( e ) => {
                    self.fire( 'ended', e );
                } );
                self.player.addEventListener( 'loadedmetadata', function() {
                    // get video width and height
                    self.videoWidth = this.videoWidth || 1280;
                    self.videoHeight = this.videoHeight || 720;

                    self.fire( 'ready' );

                    // autoplay
                    if ( self.options.autoplay ) {
                        self.play( self.options.startTime );
                    }
                } );
                self.player.addEventListener( 'volumechange', ( e ) => {
                    self.getVolume( ( volume ) => {
                        self.options.volume = volume;
                    } );
                    self.fire( 'volumechange', e );
                } );
                self.player.addEventListener( 'error', ( e ) => {
                    self.fire( 'error', e );
                } );
            }
            callback( self.$video );
        } );
    }

    init() {
        const self = this;

        self.playerID = `VideoWorker-${ self.ID }`;
    }

    loadAPI() {
        const self = this;

        if ( YoutubeAPIadded && VimeoAPIadded ) {
            return;
        }

        let src = '';

        // load Youtube API
        if ( 'youtube' === self.type && ! YoutubeAPIadded ) {
            YoutubeAPIadded = 1;
            src = 'https://www.youtube.com/iframe_api';
        }

        // load Vimeo API
        if ( 'vimeo' === self.type && ! VimeoAPIadded ) {
            VimeoAPIadded = 1;

            // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7
            if ( 'undefined' !== typeof (global__WEBPACK_IMPORTED_MODULE_0___default().Vimeo) ) {
                return;
            }

            src = 'https://player.vimeo.com/api/player.js';
        }

        if ( ! src ) {
            return;
        }

        // add script in head section
        let tag = document.createElement( 'script' );
        let head = document.getElementsByTagName( 'head' )[ 0 ];
        tag.src = src;

        head.appendChild( tag );

        head = null;
        tag = null;
    }

    onAPIready( callback ) {
        const self = this;

        // Youtube
        if ( 'youtube' === self.type ) {
            // Listen for global YT player callback
            if ( ( 'undefined' === typeof (global__WEBPACK_IMPORTED_MODULE_0___default().YT) || 0 === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.loaded) ) && ! loadingYoutubePlayer ) {
                // Prevents Ready event from being called twice
                loadingYoutubePlayer = 1;

                // Creates deferred so, other players know when to wait.
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    loadingYoutubeDefer.resolve( 'done' );
                    callback();
                };
            } else if ( 'object' === typeof (global__WEBPACK_IMPORTED_MODULE_0___default().YT) && 1 === (global__WEBPACK_IMPORTED_MODULE_0___default().YT.loaded) ) {
                callback();
            } else {
                loadingYoutubeDefer.done( () => {
                    callback();
                } );
            }
        }

        // Vimeo
        if ( 'vimeo' === self.type ) {
            if ( 'undefined' === typeof (global__WEBPACK_IMPORTED_MODULE_0___default().Vimeo) && ! loadingVimeoPlayer ) {
                loadingVimeoPlayer = 1;
                const vimeoInterval = setInterval( () => {
                    if ( 'undefined' !== typeof (global__WEBPACK_IMPORTED_MODULE_0___default().Vimeo) ) {
                        clearInterval( vimeoInterval );
                        loadingVimeoDefer.resolve( 'done' );
                        callback();
                    }
                }, 20 );
            } else if ( 'undefined' !== typeof (global__WEBPACK_IMPORTED_MODULE_0___default().Vimeo) ) {
                callback();
            } else {
                loadingVimeoDefer.done( () => {
                    callback();
                } );
            }
        }

        // Local
        if ( 'local' === self.type ) {
            callback();
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfY29tcG9uZW50c19QYXJhbGxheF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOzs7QUFFZSxTQUFTRyxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDRCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZEQsSUFBQUEsdURBQWE7QUFDYkQsSUFBQUEsa0RBQVEsQ0FBQ0ksUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUFELEVBQXlDO0FBQy9DQyxNQUFBQSxLQUFLLEVBQUUsR0FEd0M7QUFFL0NDLE1BQUFBLFFBQVEsRUFBRTtBQUZxQyxLQUF6QyxDQUFSO0FBSUQsR0FOUSxDQUFUO0FBT0Esc0JBQU87QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FUdUJKOztLQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054Qjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0IscUJBQU07QUFDeEIsVUFBVSxxQkFBTTtBQUNoQixFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNaQSxpQkFBaUIsb0dBQXVDO0FBQ3hELHNCQUFzQixnSEFBNkM7QUFDbkUsd0JBQXdCLG9IQUErQzs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDNEI7O0FBRWIscUNBQXFDLHdEQUFlO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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MENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQXVCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsVUFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNFQUE2QjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzRUFBNkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLHFEQUFZO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFTLFVBQVUseURBQWdCO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEIsa0RBQVMsVUFBVSx5REFBZ0I7QUFDL0U7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MscURBQVk7QUFDcEQ7QUFDQTtBQUNBLGdEQUFnRCxxREFBWTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjLGlDQUFpQyxxREFBWTtBQUMzRDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhcmFsbGF4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvamFyYWxsYXgvc3JjL2phcmFsbGF4LWVsZW1lbnQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvamFyYWxsYXgvc3JjL2phcmFsbGF4LXZpZGVvLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L3NyYy9qYXJhbGxheC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9saXRlLXJlYWR5L2xpdGVyZWFkeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzP2MyNzMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvamFyYWxsYXgvZGlzdC9qYXJhbGxheC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy92aWRlby13b3JrZXIvc3JjL3ZpZGVvLXdvcmtlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgamFyYWxsYXgsIGphcmFsbGF4VmlkZW8gfSBmcm9tIFwiamFyYWxsYXhcIjtcclxuaW1wb3J0IFwiamFyYWxsYXgvZGlzdC9qYXJhbGxheC5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFsbGF4KCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBqYXJhbGxheFZpZGVvKCk7XHJcbiAgICBqYXJhbGxheChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmphcmFsbGF4XCIpLCB7XHJcbiAgICAgIHNwZWVkOiAwLjIsXHJcbiAgICAgIHZpZGVvU3JjOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9N2U5MGdCdTRwYXNcIixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImphcmFsbGF4XCIgLz47XHJcbn1cclxuIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG4iLCJjb25zdCBqYXJhbGxheCA9IHJlcXVpcmUoICcuL3NyYy9qYXJhbGxheC5lc20nICkuZGVmYXVsdDtcbmNvbnN0IGphcmFsbGF4VmlkZW8gPSByZXF1aXJlKCAnLi9zcmMvamFyYWxsYXgtdmlkZW8uZXNtJyApLmRlZmF1bHQ7XG5jb25zdCBqYXJhbGxheEVsZW1lbnQgPSByZXF1aXJlKCAnLi9zcmMvamFyYWxsYXgtZWxlbWVudC5lc20nICkuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgamFyYWxsYXgsXG4gICAgamFyYWxsYXhFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gamFyYWxsYXhFbGVtZW50KCBqYXJhbGxheCApO1xuICAgIH0sXG4gICAgamFyYWxsYXhWaWRlbygpIHtcbiAgICAgICAgcmV0dXJuIGphcmFsbGF4VmlkZW8oIGphcmFsbGF4ICk7XG4gICAgfSxcbn07XG4iLCIvKiBlc2xpbnQgbm8tY2FzZS1kZWNsYXJhdGlvbnM6IFwib2ZmXCIgKi9cbmltcG9ydCBnbG9iYWwgZnJvbSAnZ2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gamFyYWxsYXhFbGVtZW50KCBqYXJhbGxheCA9IGdsb2JhbC5qYXJhbGxheCApIHtcbiAgICBpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgamFyYWxsYXggKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBKYXJhbGxheCA9IGphcmFsbGF4LmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gcmVkZWZpbmUgZGVmYXVsdCBtZXRob2RzXG4gICAgW1xuICAgICAgICAnaW5pdEltZycsXG4gICAgICAgICdjYW5Jbml0UGFyYWxsYXgnLFxuICAgICAgICAnaW5pdCcsXG4gICAgICAgICdkZXN0cm95JyxcbiAgICAgICAgJ2NsaXBDb250YWluZXInLFxuICAgICAgICAnY292ZXJJbWFnZScsXG4gICAgICAgICdpc1Zpc2libGUnLFxuICAgICAgICAnb25TY3JvbGwnLFxuICAgICAgICAnb25SZXNpemUnLFxuICAgIF0uZm9yRWFjaCggKCBrZXkgKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZiA9IEphcmFsbGF4LnByb3RvdHlwZVsga2V5IF07XG4gICAgICAgIEphcmFsbGF4LnByb3RvdHlwZVsga2V5IF0gPSBmdW5jdGlvbiggLi4uYXJncyApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoICdpbml0SW1nJyA9PT0ga2V5ICYmIG51bGwgIT09IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1qYXJhbGxheC1lbGVtZW50JyApICkge1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy50eXBlID0gJ2VsZW1lbnQnO1xuICAgICAgICAgICAgICAgIHNlbGYucHVyZU9wdGlvbnMuc3BlZWQgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtZWxlbWVudCcgKSB8fCBzZWxmLnB1cmVPcHRpb25zLnNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCAnZWxlbWVudCcgIT09IHNlbGYub3B0aW9ucy50eXBlICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWYuYXBwbHkoIHNlbGYsIGFyZ3MgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5wdXJlT3B0aW9ucy50aHJlc2hvbGQgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdGhyZXNob2xkJyApIHx8ICcnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBrZXkgKSB7XG4gICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVlZEFyciA9IHNlbGYucHVyZU9wdGlvbnMuc3BlZWQuc3BsaXQoICcgJyApO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZCA9IHNlbGYucHVyZU9wdGlvbnMuc3BlZWQgfHwgMDtcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWRZID0gc3BlZWRBcnJbIDAgXSA/IHBhcnNlRmxvYXQoIHNwZWVkQXJyWyAwIF0gKSA6IDA7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkWCA9IHNwZWVkQXJyWyAxIF0gPyBwYXJzZUZsb2F0KCBzcGVlZEFyclsgMSBdICkgOiAwO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkQXJyID0gc2VsZi5wdXJlT3B0aW9ucy50aHJlc2hvbGQuc3BsaXQoICcgJyApO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy50aHJlc2hvbGRZID0gdGhyZXNob2xkQXJyWyAwIF0gPyBwYXJzZUZsb2F0KCB0aHJlc2hvbGRBcnJbIDAgXSApIDogbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMudGhyZXNob2xkWCA9IHRocmVzaG9sZEFyclsgMSBdID8gcGFyc2VGbG9hdCggdGhyZXNob2xkQXJyWyAxIF0gKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBkZWYuYXBwbHkoIHNlbGYsIGFyZ3MgKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgYmFja2dyb3VuZCBpbWFnZSBpZiBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNUYWcgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyApO1xuICAgICAgICAgICAgICAgIGlmICggb3JpZ2luYWxTdHlsZXNUYWcgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCAnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnb25SZXNpemUnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZlRyYW5zZm9ybSA9IHNlbGYuY3NzKCBzZWxmLiRpdGVtLCAndHJhbnNmb3JtJyApO1xuICAgICAgICAgICAgICAgIHNlbGYuY3NzKCBzZWxmLiRpdGVtLCB7IHRyYW5zZm9ybTogJycgfSApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzZWxmLiRpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuaXRlbURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB5OiByZWN0LnRvcCArIHNlbGYuZ2V0V2luZG93RGF0YSgpLnksXG4gICAgICAgICAgICAgICAgICAgIHg6IHJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNlbGYuY3NzKCBzZWxmLiRpdGVtLCB7IHRyYW5zZm9ybTogZGVmVHJhbnNmb3JtIH0gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29uU2Nyb2xsJzpcbiAgICAgICAgICAgICAgICBjb25zdCB3bmQgPSBzZWxmLmdldFdpbmRvd0RhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJQZXJjZW50ID0gKCB3bmQueSArIHduZC5oZWlnaHQgLyAyIC0gc2VsZi5pdGVtRGF0YS55IC0gc2VsZi5pdGVtRGF0YS5oZWlnaHQgLyAyICkgLyAoIHduZC5oZWlnaHQgLyAyICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBjZW50ZXJQZXJjZW50ICogc2VsZi5vcHRpb25zLnNwZWVkWTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlWCA9IGNlbnRlclBlcmNlbnQgKiBzZWxmLm9wdGlvbnMuc3BlZWRYO1xuICAgICAgICAgICAgICAgIGxldCBteSA9IG1vdmVZO1xuICAgICAgICAgICAgICAgIGxldCBteCA9IG1vdmVYO1xuICAgICAgICAgICAgICAgIGlmICggbnVsbCAhPT0gc2VsZi5vcHRpb25zLnRocmVzaG9sZFkgJiYgbW92ZVkgPiBzZWxmLm9wdGlvbnMudGhyZXNob2xkWSApIG15ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIG51bGwgIT09IHNlbGYub3B0aW9ucy50aHJlc2hvbGRYICYmIG1vdmVYID4gc2VsZi5vcHRpb25zLnRocmVzaG9sZFggKSBteCA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZi5jc3MoIHNlbGYuJGl0ZW0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHsgbXggfXB4LCR7IG15IH1weCwwKWAgfSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5pdEltZyc6XG4gICAgICAgICAgICBjYXNlICdpc1Zpc2libGUnOlxuICAgICAgICAgICAgY2FzZSAnY2xpcENvbnRhaW5lcic6XG4gICAgICAgICAgICBjYXNlICdjb3ZlckltYWdlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWYuYXBwbHkoIHNlbGYsIGFyZ3MgKTtcbiAgICAgICAgfTtcbiAgICB9ICk7XG59XG4iLCJpbXBvcnQgVmlkZW9Xb3JrZXIgZnJvbSAndmlkZW8td29ya2VyJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnZ2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gamFyYWxsYXhWaWRlbyggamFyYWxsYXggPSBnbG9iYWwuamFyYWxsYXggKSB7XG4gICAgaWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGphcmFsbGF4ICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgSmFyYWxsYXggPSBqYXJhbGxheC5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIGFwcGVuZCB2aWRlbyBhZnRlciB3aGVuIGJsb2NrIHdpbGwgYmUgdmlzaWJsZS5cbiAgICBjb25zdCBkZWZPblNjcm9sbCA9IEphcmFsbGF4LnByb3RvdHlwZS5vblNjcm9sbDtcbiAgICBKYXJhbGxheC5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZGVmT25TY3JvbGwuYXBwbHkoIHNlbGYgKTtcblxuICAgICAgICBjb25zdCBpc1JlYWR5ID0gISBzZWxmLmlzVmlkZW9JbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgc2VsZi52aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCAhIHNlbGYub3B0aW9ucy52aWRlb0xhenlMb2FkaW5nIHx8IHNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCApXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8oKTtcblxuICAgICAgICBpZiAoIGlzUmVhZHkgKSB7XG4gICAgICAgICAgICBzZWxmLmlzVmlkZW9JbnNlcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHNlbGYudmlkZW8uZ2V0VmlkZW8oICggdmlkZW8gKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHBhcmVudCA9IHZpZGVvLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgc2VsZi5jc3MoIHZpZGVvLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzZWxmLmltYWdlLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0sb3BhY2l0eScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8gPSB2aWRlbztcblxuICAgICAgICAgICAgICAgIC8vIGFkZCBQb3N0ZXIgYXR0cmlidXRlIHRvIHNlbGYtaG9zdGVkIHZpZGVvXG4gICAgICAgICAgICAgICAgaWYgKCAnbG9jYWwnID09PSBzZWxmLnZpZGVvLnR5cGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5pbWFnZS5zcmMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICdwb3N0ZXInLCBzZWxmLmltYWdlLnNyYyApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBzZWxmLmltYWdlLiRpdGVtICYmICdJTUcnID09PSBzZWxmLmltYWdlLiRpdGVtLnRhZ05hbWUgJiYgc2VsZi5pbWFnZS4kaXRlbS5zcmMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICdwb3N0ZXInLCBzZWxmLmltYWdlLiRpdGVtLnNyYyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHZpZGVvIHRhZ1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5hcHBlbmRDaGlsZCggdmlkZW8gKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBwYXJlbnQgdmlkZW8gZWxlbWVudCAoY3JlYXRlZCBieSBWaWRlb1dvcmtlcilcbiAgICAgICAgICAgICAgICAkcGFyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoICRwYXJlbnQgKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb3ZlciB2aWRlb1xuICAgIGNvbnN0IGRlZkNvdmVySW1hZ2UgPSBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZTtcbiAgICBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gZGVmQ292ZXJJbWFnZS5hcHBseSggc2VsZiApO1xuICAgICAgICBjb25zdCBub2RlID0gc2VsZi5pbWFnZS4kaXRlbSA/IHNlbGYuaW1hZ2UuJGl0ZW0ubm9kZU5hbWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAoIGltYWdlRGF0YSAmJiBzZWxmLnZpZGVvICYmIG5vZGUgJiYgKCAnSUZSQU1FJyA9PT0gbm9kZSB8fCAnVklERU8nID09PSBub2RlICkgKSB7XG4gICAgICAgICAgICBsZXQgaCA9IGltYWdlRGF0YS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgdyA9ICggaCAqIHNlbGYuaW1hZ2Uud2lkdGggKSAvIHNlbGYuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IG1sID0gKCBpbWFnZURhdGEuY29udGFpbmVyLndpZHRoIC0gdyApIC8gMjtcbiAgICAgICAgICAgIGxldCBtdCA9IGltYWdlRGF0YS5pbWFnZS5tYXJnaW5Ub3A7XG5cbiAgICAgICAgICAgIGlmICggaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aCA+IHcgKSB7XG4gICAgICAgICAgICAgICAgdyA9IGltYWdlRGF0YS5jb250YWluZXIud2lkdGg7XG4gICAgICAgICAgICAgICAgaCA9ICggdyAqIHNlbGYuaW1hZ2UuaGVpZ2h0ICkgLyBzZWxmLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgIG1sID0gMDtcbiAgICAgICAgICAgICAgICBtdCArPSAoIGltYWdlRGF0YS5pbWFnZS5oZWlnaHQgLSBoICkgLyAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgdmlkZW8gaGVpZ2h0IG92ZXIgdGhhbiBuZWVkIHRvIGhpZGUgY29udHJvbHNcbiAgICAgICAgICAgIGlmICggJ0lGUkFNRScgPT09IG5vZGUgKSB7XG4gICAgICAgICAgICAgICAgaCArPSA0MDA7XG4gICAgICAgICAgICAgICAgbXQgLT0gMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNzcyggc2VsZi4kdmlkZW8sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7IHcgfXB4YCxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHsgbWwgfXB4YCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAkeyBoIH1weGAsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBgJHsgbXQgfXB4YCxcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbWFnZURhdGE7XG4gICAgfTtcblxuICAgIC8vIGluaXQgdmlkZW9cbiAgICBjb25zdCBkZWZJbml0SW1nID0gSmFyYWxsYXgucHJvdG90eXBlLmluaXRJbWc7XG4gICAgSmFyYWxsYXgucHJvdG90eXBlLmluaXRJbWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSBkZWZJbml0SW1nLmFwcGx5KCBzZWxmICk7XG5cbiAgICAgICAgaWYgKCAhIHNlbGYub3B0aW9ucy52aWRlb1NyYyApIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy52aWRlb1NyYyA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1qYXJhbGxheC12aWRlbycgKSB8fCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMudmlkZW9TcmMgKSB7XG4gICAgICAgICAgICBzZWxmLmRlZmF1bHRJbml0SW1nUmVzdWx0ID0gZGVmYXVsdFJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlZkNhbkluaXRQYXJhbGxheCA9IEphcmFsbGF4LnByb3RvdHlwZS5jYW5Jbml0UGFyYWxsYXg7XG4gICAgSmFyYWxsYXgucHJvdG90eXBlLmNhbkluaXRQYXJhbGxheCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGRlZmF1bHRSZXN1bHQgPSBkZWZDYW5Jbml0UGFyYWxsYXguYXBwbHkoIHNlbGYgKTtcblxuICAgICAgICBpZiAoICEgc2VsZi5vcHRpb25zLnZpZGVvU3JjICkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IHZpZGVvIGFwaVxuICAgICAgICBjb25zdCB2aWRlbyA9IG5ldyBWaWRlb1dvcmtlciggc2VsZi5vcHRpb25zLnZpZGVvU3JjLCB7XG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHNlbGYub3B0aW9ucy52aWRlb0xvb3AsXG4gICAgICAgICAgICBzaG93Q29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0VGltZTogc2VsZi5vcHRpb25zLnZpZGVvU3RhcnRUaW1lIHx8IDAsXG4gICAgICAgICAgICBlbmRUaW1lOiBzZWxmLm9wdGlvbnMudmlkZW9FbmRUaW1lIHx8IDAsXG4gICAgICAgICAgICBtdXRlOiBzZWxmLm9wdGlvbnMudmlkZW9Wb2x1bWUgPyAwIDogMSxcbiAgICAgICAgICAgIHZvbHVtZTogc2VsZi5vcHRpb25zLnZpZGVvVm9sdW1lIHx8IDAsXG4gICAgICAgIH0gKTtcblxuICAgICAgICBmdW5jdGlvbiByZXNldERlZmF1bHRJbWFnZSgpIHtcbiAgICAgICAgICAgIGlmICggc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtICkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgICAgIC8vIHNldCBpbWFnZSB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgc2VsZi5jb3ZlckltYWdlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGlwQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5vblNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB2aWRlby5pc1ZhbGlkKCkgKSB7XG4gICAgICAgICAgICAvLyBGb3JjZSBlbmFibGUgcGFyYWxsYXguXG4gICAgICAgICAgICAvLyBXaGVuIHRoZSBwYXJhbGxheCBkaXNhYmxlZCBvbiBtb2JpbGUgZGV2aWNlcywgd2Ugc3RpbGwgbmVlZCB0byBkaXNwbGF5IHZpZGVvcy5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy8xNTlcbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmRpc2FibGVQYXJhbGxheCgpICkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy50eXBlID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgcGFyYWxsYXggd2lsbCBub3QgYmUgaW5pdGVkLCB3ZSBjYW4gYWRkIHRodW1ibmFpbCBvbiBiYWNrZ3JvdW5kLlxuICAgICAgICAgICAgaWYgKCAhIGRlZmF1bHRSZXN1bHQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAhIHNlbGYuZGVmYXVsdEluaXRJbWdSZXN1bHQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLmdldEltYWdlVVJMKCAoIHVybCApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgZGVmYXVsdCB1c2VyIHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyU3R5bGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ3N0eWxlJyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBjdXJTdHlsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IG5ldyBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNzcyggc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybChcIiR7IHVybCB9XCIpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaW5pdCB2aWRlb1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5vbiggJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy52aWRlb1BsYXlPbmx5VmlzaWJsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZE9uU2Nyb2xsID0gc2VsZi5vblNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25TY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRPblNjcm9sbC5hcHBseSggc2VsZiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggISBzZWxmLnZpZGVvRXJyb3IgJiYgKCBzZWxmLm9wdGlvbnMudmlkZW9Mb29wIHx8ICggISBzZWxmLm9wdGlvbnMudmlkZW9Mb29wICYmICEgc2VsZi52aWRlb0VuZGVkICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLmlzVmlzaWJsZSgpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgdmlkZW8ub24oICdzdGFydGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0gPSBzZWxmLmltYWdlLiRpdGVtO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gc2VsZi4kdmlkZW87XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS53aWR0aCA9IHNlbGYudmlkZW8udmlkZW9XaWR0aCB8fCAxMjgwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmltYWdlLmhlaWdodCA9IHNlbGYudmlkZW8udmlkZW9IZWlnaHQgfHwgNzIwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvdmVySW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGlwQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25TY3JvbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICB2aWRlby5vbiggJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvRW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggISBzZWxmLm9wdGlvbnMudmlkZW9Mb29wICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBkZWZhdWx0IGltYWdlIGlmIExvb3AgZGlzYWJsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldERlZmF1bHRJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIHZpZGVvLm9uKCAnZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9FcnJvciA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBkZWZhdWx0IGltYWdlIGlmIHZpZGVvIGxvYWRpbmcgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0RGVmYXVsdEltYWdlKCk7XG4gICAgICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICAgICAgc2VsZi52aWRlbyA9IHZpZGVvO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGltYWdlIGlmIG5vdCBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAoICEgc2VsZi5kZWZhdWx0SW5pdEltZ1Jlc3VsdCApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGVtcHR5IGltYWdlIG9uIHNlbGYtaG9zdGVkIHZpZGVvIGlmIG5vdCBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAnbG9jYWwnICE9PSB2aWRlby50eXBlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8uZ2V0SW1hZ2VVUkwoICggdXJsICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuYmdJbWFnZSA9IGB1cmwoXCIkeyB1cmwgfVwiKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICAgIH07XG5cbiAgICAvLyBEZXN0cm95IHZpZGVvIHBhcmFsbGF4XG4gICAgY29uc3QgZGVmRGVzdHJveSA9IEphcmFsbGF4LnByb3RvdHlwZS5kZXN0cm95O1xuICAgIEphcmFsbGF4LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICggc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtICkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZEZXN0cm95LmFwcGx5KCBzZWxmICk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBkb21SZWFkeSBmcm9tICdsaXRlLXJlYWR5JztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJ2dsb2JhbCc7XG5cbmNvbnN0IHtcbiAgICBuYXZpZ2F0b3IsXG59ID0gd2luZG93O1xuXG5jb25zdCBpc0lFID0gLTEgPCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoICdNU0lFICcgKSB8fCAtMSA8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZiggJ1RyaWRlbnQvJyApIHx8IC0xIDwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCAnRWRnZS8nICk7XG5jb25zdCBpc01vYmlsZSA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuXG5jb25zdCBzdXBwb3J0VHJhbnNmb3JtID0gKCAoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4ZXMgPSAndHJhbnNmb3JtIFdlYmtpdFRyYW5zZm9ybSBNb3pUcmFuc2Zvcm0nLnNwbGl0KCAnICcgKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSArPSAxICkge1xuICAgICAgICBpZiAoIGRpdiAmJiBkaXYuc3R5bGVbIHByZWZpeGVzWyBpIF0gXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVzWyBpIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufSApKCk7XG5cbmxldCAkZGV2aWNlSGVscGVyO1xuXG4vKipcbiAqIFRoZSBtb3N0IHBvcHVsYXIgbW9iaWxlIGJyb3dzZXJzIGNoYW5nZXMgaGVpZ2h0IGFmdGVyIHBhZ2Ugc2Nyb2xsIGFuZCB0aGlzIGdlbmVyYXRlcyBpbWFnZSBqdW1waW5nLlxuICogV2UgY2FuIGZpeCBpdCB1c2luZyB0aGlzIHdvcmthcm91bmQgd2l0aCB2aCB1bml0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0RGV2aWNlSGVpZ2h0KCkge1xuICAgIGlmICggISAkZGV2aWNlSGVscGVyICYmIGRvY3VtZW50LmJvZHkgKSB7XG4gICAgICAgICRkZXZpY2VIZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICAkZGV2aWNlSGVscGVyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGZpeGVkOyB0b3A6IC05OTk5cHg7IGxlZnQ6IDA7IGhlaWdodDogMTAwdmg7IHdpZHRoOiAwOyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoICRkZXZpY2VIZWxwZXIgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCAkZGV2aWNlSGVscGVyID8gJGRldmljZUhlbHBlci5jbGllbnRIZWlnaHQgOiAwICkgfHwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG59XG5cbi8vIFdpbmRvdyBoZWlnaHQgZGF0YVxubGV0IHduZEg7XG5mdW5jdGlvbiB1cGRhdGVXbmRWYXJzKCkge1xuICAgIGlmICggaXNNb2JpbGUgKSB7XG4gICAgICAgIHduZEggPSBnZXREZXZpY2VIZWlnaHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3bmRIID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxufVxudXBkYXRlV25kVmFycygpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB1cGRhdGVXbmRWYXJzICk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlV25kVmFycyApO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdXBkYXRlV25kVmFycyApO1xuZG9tUmVhZHkoICgpID0+IHtcbiAgICB1cGRhdGVXbmRWYXJzKCB7XG4gICAgICAgIHR5cGU6ICdkb20tbG9hZGVkJyxcbiAgICB9ICk7XG59ICk7XG5cbi8vIGxpc3Qgd2l0aCBhbGwgamFyYWxsYXggaW5zdGFuY2VzXG4vLyBuZWVkIHRvIHJlbmRlciBhbGwgaW4gb25lIHNjcm9sbC9yZXNpemUgZXZlbnRcbmNvbnN0IGphcmFsbGF4TGlzdCA9IFtdO1xuXG4vLyBnZXQgYWxsIHBhcmVudHMgb2YgdGhlIGVsZW1lbnQuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKCBlbGVtICkge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcblxuICAgIHdoaWxlICggbnVsbCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50ICkge1xuICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICggMSA9PT0gZWxlbS5ub2RlVHlwZSApIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuICAgIGlmICggISBqYXJhbGxheExpc3QubGVuZ3RoICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgamFyYWxsYXhMaXN0LmZvckVhY2goICggZGF0YSwgayApID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICBvbGREYXRhLFxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICBjb25zdCBjbGllbnRSZWN0ID0gaW5zdGFuY2UuJGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBjbGllbnRSZWN0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjbGllbnRSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogY2xpZW50UmVjdC50b3AsXG4gICAgICAgICAgICBib3R0b206IGNsaWVudFJlY3QuYm90dG9tLFxuICAgICAgICAgICAgd25kVzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICB3bmRILFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGlzUmVzaXplZCA9ICEgb2xkRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgb2xkRGF0YS53bmRXICE9PSBuZXdEYXRhLnduZFdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IG9sZERhdGEud25kSCAhPT0gbmV3RGF0YS53bmRIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBvbGREYXRhLndpZHRoICE9PSBuZXdEYXRhLndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBvbGREYXRhLmhlaWdodCAhPT0gbmV3RGF0YS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSBpc1Jlc2l6ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEgb2xkRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgb2xkRGF0YS50b3AgIT09IG5ld0RhdGEudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBvbGREYXRhLmJvdHRvbSAhPT0gbmV3RGF0YS5ib3R0b207XG5cbiAgICAgICAgamFyYWxsYXhMaXN0WyBrIF0ub2xkRGF0YSA9IG5ld0RhdGE7XG5cbiAgICAgICAgaWYgKCBpc1Jlc2l6ZWQgKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5vblJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggaXNTY3JvbGxlZCApIHtcbiAgICAgICAgICAgIGluc3RhbmNlLm9uU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGVQYXJhbGxheCApO1xufVxuXG5sZXQgaW5zdGFuY2VJRCA9IDA7XG5cbi8vIEphcmFsbGF4IGNsYXNzXG5jbGFzcyBKYXJhbGxheCB7XG4gICAgY29uc3RydWN0b3IoIGl0ZW0sIHVzZXJPcHRpb25zICkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmluc3RhbmNlSUQgPSBpbnN0YW5jZUlEO1xuICAgICAgICBpbnN0YW5jZUlEICs9IDE7XG5cbiAgICAgICAgc2VsZi4kaXRlbSA9IGl0ZW07XG5cbiAgICAgICAgc2VsZi5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzY3JvbGwnLCAvLyB0eXBlIG9mIHBhcmFsbGF4OiBzY3JvbGwsIHNjYWxlLCBvcGFjaXR5LCBzY2FsZS1vcGFjaXR5LCBzY3JvbGwtb3BhY2l0eVxuICAgICAgICAgICAgc3BlZWQ6IDAuNSwgLy8gc3VwcG9ydGVkIHZhbHVlIGZyb20gLTEgdG8gMlxuICAgICAgICAgICAgaW1nU3JjOiBudWxsLFxuICAgICAgICAgICAgaW1nRWxlbWVudDogJy5qYXJhbGxheC1pbWcnLFxuICAgICAgICAgICAgaW1nU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIGltZ1Bvc2l0aW9uOiAnNTAlIDUwJScsXG4gICAgICAgICAgICBpbWdSZXBlYXQ6ICduby1yZXBlYXQnLCAvLyBzdXBwb3J0ZWQgb25seSBmb3IgYmFja2dyb3VuZCwgbm90IGZvciA8aW1nPiB0YWdcbiAgICAgICAgICAgIGtlZXBJbWc6IGZhbHNlLCAvLyBrZWVwIDxpbWc+IHRhZyBpbiBpdCdzIGRlZmF1bHQgcGxhY2VcbiAgICAgICAgICAgIGVsZW1lbnRJblZpZXdwb3J0OiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiAtMTAwLFxuICAgICAgICAgICAgZGlzYWJsZVBhcmFsbGF4OiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVWaWRlbzogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIHZpZGVvXG4gICAgICAgICAgICB2aWRlb1NyYzogbnVsbCxcbiAgICAgICAgICAgIHZpZGVvU3RhcnRUaW1lOiAwLFxuICAgICAgICAgICAgdmlkZW9FbmRUaW1lOiAwLFxuICAgICAgICAgICAgdmlkZW9Wb2x1bWU6IDAsXG4gICAgICAgICAgICB2aWRlb0xvb3A6IHRydWUsXG4gICAgICAgICAgICB2aWRlb1BsYXlPbmx5VmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZGVvTGF6eUxvYWRpbmc6IHRydWUsXG5cbiAgICAgICAgICAgIC8vIGV2ZW50c1xuICAgICAgICAgICAgb25TY3JvbGw6IG51bGwsIC8vIGZ1bmN0aW9uKGNhbGN1bGF0aW9ucykge31cbiAgICAgICAgICAgIG9uSW5pdDogbnVsbCwgLy8gZnVuY3Rpb24oKSB7fVxuICAgICAgICAgICAgb25EZXN0cm95OiBudWxsLCAvLyBmdW5jdGlvbigpIHt9XG4gICAgICAgICAgICBvbkNvdmVySW1hZ2U6IG51bGwsIC8vIGZ1bmN0aW9uKCkge31cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwcmVwYXJlIGRhdGEtb3B0aW9uc1xuICAgICAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHNlbGYuJGl0ZW0uZGF0YXNldCB8fCB7fTtcbiAgICAgICAgY29uc3QgcHVyZURhdGFPcHRpb25zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKCBkYXRhT3B0aW9ucyApLmZvckVhY2goICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG93ZUNhc2VPcHRpb24gPSBrZXkuc3Vic3RyKCAwLCAxICkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHIoIDEgKTtcbiAgICAgICAgICAgIGlmICggbG93ZUNhc2VPcHRpb24gJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzZWxmLmRlZmF1bHRzWyBsb3dlQ2FzZU9wdGlvbiBdICkge1xuICAgICAgICAgICAgICAgIHB1cmVEYXRhT3B0aW9uc1sgbG93ZUNhc2VPcHRpb24gXSA9IGRhdGFPcHRpb25zWyBrZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHNlbGYub3B0aW9ucyA9IHNlbGYuZXh0ZW5kKCB7fSwgc2VsZi5kZWZhdWx0cywgcHVyZURhdGFPcHRpb25zLCB1c2VyT3B0aW9ucyApO1xuICAgICAgICBzZWxmLnB1cmVPcHRpb25zID0gc2VsZi5leHRlbmQoIHt9LCBzZWxmLm9wdGlvbnMgKTtcblxuICAgICAgICAvLyBwcmVwYXJlICd0cnVlJyBhbmQgJ2ZhbHNlJyBzdHJpbmdzIHRvIGJvb2xlYW5cbiAgICAgICAgT2JqZWN0LmtleXMoIHNlbGYub3B0aW9ucyApLmZvckVhY2goICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAndHJ1ZScgPT09IHNlbGYub3B0aW9uc1sga2V5IF0gKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zWyBrZXkgXSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAnZmFsc2UnID09PSBzZWxmLm9wdGlvbnNbIGtleSBdICkge1xuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9uc1sga2V5IF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIGZpeCBzcGVlZCBvcHRpb24gWy0xLjAsIDIuMF1cbiAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gTWF0aC5taW4oIDIsIE1hdGgubWF4KCAtMSwgcGFyc2VGbG9hdCggc2VsZi5vcHRpb25zLnNwZWVkICkgKSApO1xuXG4gICAgICAgIC8vIHByZXBhcmUgZGlzYWJsZVBhcmFsbGF4IGNhbGxiYWNrXG4gICAgICAgIGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ICkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9IG5ldyBSZWdFeHAoIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggaW5zdGFuY2VvZiBSZWdFeHAgKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlUGFyYWxsYXhSZWdleHAgPSBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4O1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9ICgpID0+IGRpc2FibGVQYXJhbGxheFJlZ2V4cC50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCApIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAoKSA9PiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgZGlzYWJsZVZpZGVvIGNhbGxiYWNrXG4gICAgICAgIGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvICkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9IG5ldyBSZWdFeHAoIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gaW5zdGFuY2VvZiBSZWdFeHAgKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlVmlkZW9SZWdleHAgPSBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9ICgpID0+IGRpc2FibGVWaWRlb1JlZ2V4cC50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyApIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSAoKSA9PiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1c3RvbSBlbGVtZW50IHRvIGNoZWNrIGlmIHBhcmFsbGF4IGluIHZpZXdwb3J0XG4gICAgICAgIGxldCBlbGVtZW50SW5WUCA9IHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydDtcbiAgICAgICAgLy8gZ2V0IGZpcnN0IGl0ZW0gZnJvbSBhcnJheVxuICAgICAgICBpZiAoIGVsZW1lbnRJblZQICYmICdvYmplY3QnID09PSB0eXBlb2YgZWxlbWVudEluVlAgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBlbGVtZW50SW5WUC5sZW5ndGggKSB7XG4gICAgICAgICAgICBbIGVsZW1lbnRJblZQIF0gPSBlbGVtZW50SW5WUDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuICAgICAgICBpZiAoICEgKCBlbGVtZW50SW5WUCBpbnN0YW5jZW9mIEVsZW1lbnQgKSApIHtcbiAgICAgICAgICAgIGVsZW1lbnRJblZQID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQgPSBlbGVtZW50SW5WUDtcblxuICAgICAgICBzZWxmLmltYWdlID0ge1xuICAgICAgICAgICAgc3JjOiBzZWxmLm9wdGlvbnMuaW1nU3JjIHx8IG51bGwsXG4gICAgICAgICAgICAkY29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgdXNlSW1nVGFnOiBmYWxzZSxcblxuICAgICAgICAgICAgLy8gMS4gUG9zaXRpb24gZml4ZWQgaXMgbmVlZGVkIGZvciB0aGUgbW9zdCBvZiBicm93c2VycyBiZWNhdXNlIGFic29sdXRlIHBvc2l0aW9uIGhhdmUgZ2xpdGNoZXNcbiAgICAgICAgICAgIC8vIDIuIE9uIE1hY09TIHdpdGggc21vb3RoIHNjcm9sbCB0aGVyZSBpcyBhIGh1Z2UgbGFncyB3aXRoIGFic29sdXRlIHBvc2l0aW9uIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzc1XG4gICAgICAgICAgICAvLyAzLiBQcmV2aW91c2x5IHVzZWQgJ2Fic29sdXRlJyBmb3IgbW9iaWxlIGRldmljZXMuIEJ1dCB3ZSByZS10ZXN0ZWQgb24gaVBob25lIDEyIGFuZCAnZml4ZWQnIHBvc2l0aW9uIGlzIHdvcmtpbmcgYmV0dGVyLCB0aGVuICdhYnNvbHV0ZScsIHNvIGZvciBub3cgcG9zaXRpb24gaXMgYWx3YXlzICdmaXhlZCdcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggc2VsZi5pbml0SW1nKCkgJiYgc2VsZi5jYW5Jbml0UGFyYWxsYXgoKSApIHtcbiAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHN0eWxlcyB0byBlbGVtZW50XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjc3MoIGVsLCBzdHlsZXMgKSB7XG4gICAgICAgIGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBzdHlsZXMgKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGVsICkuZ2V0UHJvcGVydHlWYWx1ZSggc3R5bGVzICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdHJhbnNmb3JtIHByb3BlcnR5IHdpdGggdmVuZG9yIHByZWZpeFxuICAgICAgICBpZiAoIHN0eWxlcy50cmFuc2Zvcm0gJiYgc3VwcG9ydFRyYW5zZm9ybSApIHtcbiAgICAgICAgICAgIHN0eWxlc1sgc3VwcG9ydFRyYW5zZm9ybSBdID0gc3R5bGVzLnRyYW5zZm9ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKCBzdHlsZXMgKS5mb3JFYWNoKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlWyBrZXkgXSA9IHN0eWxlc1sga2V5IF07XG4gICAgICAgIH0gKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8vIEV4dGVuZCBsaWtlIGpRdWVyeS5leHRlbmRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGV4dGVuZCggb3V0LCAuLi5hcmdzICkge1xuICAgICAgICBvdXQgPSBvdXQgfHwge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoIGFyZ3MgKS5mb3JFYWNoKCAoIGkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICEgYXJnc1sgaSBdICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKCBhcmdzWyBpIF0gKS5mb3JFYWNoKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICBvdXRbIGtleSBdID0gYXJnc1sgaSBdWyBrZXkgXTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSApO1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHdpbmRvdyBzaXplIGFuZCBzY3JvbGwgcG9zaXRpb24uIFVzZWZ1bCBmb3IgZXh0ZW5zaW9uc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0V2luZG93RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHduZEgsXG4gICAgICAgICAgICB5OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEphcmFsbGF4IGZ1bmN0aW9uc1xuICAgIGluaXRJbWcoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGZpbmQgaW1hZ2UgZWxlbWVudFxuICAgICAgICBsZXQgJGltZ0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuaW1nRWxlbWVudDtcbiAgICAgICAgaWYgKCAkaW1nRWxlbWVudCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mICRpbWdFbGVtZW50ICkge1xuICAgICAgICAgICAgJGltZ0VsZW1lbnQgPSBzZWxmLiRpdGVtLnF1ZXJ5U2VsZWN0b3IoICRpbWdFbGVtZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuICAgICAgICBpZiAoICEgKCAkaW1nRWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgKSApIHtcbiAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmltZ1NyYyApIHtcbiAgICAgICAgICAgICAgICAkaW1nRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICRpbWdFbGVtZW50LnNyYyA9IHNlbGYub3B0aW9ucy5pbWdTcmM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRpbWdFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJGltZ0VsZW1lbnQgKSB7XG4gICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5rZWVwSW1nICkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSAkaW1nRWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9ICRpbWdFbGVtZW50O1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW1QYXJlbnQgPSAkaW1nRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5pbWFnZS51c2VJbWdUYWcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ1ZSBpZiB0aGVyZSBpcyBpbWcgdGFnXG4gICAgICAgIGlmICggc2VsZi5pbWFnZS4kaXRlbSApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGltYWdlIHNyY1xuICAgICAgICBpZiAoIG51bGwgPT09IHNlbGYuaW1hZ2Uuc3JjICkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JztcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UuYmdJbWFnZSA9IHNlbGYuY3NzKCBzZWxmLiRpdGVtLCAnYmFja2dyb3VuZC1pbWFnZScgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISAoICEgc2VsZi5pbWFnZS5iZ0ltYWdlIHx8ICdub25lJyA9PT0gc2VsZi5pbWFnZS5iZ0ltYWdlICk7XG4gICAgfVxuXG4gICAgY2FuSW5pdFBhcmFsbGF4KCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydFRyYW5zZm9ybSAmJiAhIHRoaXMub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGVzID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgaW1hZ2VTdHlsZXMgPSB7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogJ3ByZXNlcnZlLTNkJyxcbiAgICAgICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtLG9wYWNpdHknLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggISBzZWxmLm9wdGlvbnMua2VlcEltZyApIHtcbiAgICAgICAgICAgIC8vIHNhdmUgZGVmYXVsdCB1c2VyIHN0eWxlc1xuICAgICAgICAgICAgY29uc3QgY3VyU3R5bGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ3N0eWxlJyApO1xuICAgICAgICAgICAgaWYgKCBjdXJTdHlsZSApIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggc2VsZi5pbWFnZS51c2VJbWdUYWcgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VySW1nU3R5bGUgPSBzZWxmLmltYWdlLiRpdGVtLmdldEF0dHJpYnV0ZSggJ3N0eWxlJyApO1xuICAgICAgICAgICAgICAgIGlmICggY3VySW1nU3R5bGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc2V0QXR0cmlidXRlKCAnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnLCBjdXJJbWdTdHlsZSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCByZWxhdGl2ZSBwb3NpdGlvbiBhbmQgei1pbmRleCB0byB0aGUgcGFyZW50XG4gICAgICAgIGlmICggJ3N0YXRpYycgPT09IHNlbGYuY3NzKCBzZWxmLiRpdGVtLCAncG9zaXRpb24nICkgKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyggc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgICAgIGlmICggJ2F1dG8nID09PSBzZWxmLmNzcyggc2VsZi4kaXRlbSwgJ3otaW5kZXgnICkgKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyggc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnRhaW5lciBmb3IgcGFyYWxsYXggaW1hZ2VcbiAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgc2VsZi5jc3MoIHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwgY29udGFpbmVyU3R5bGVzICk7XG4gICAgICAgIHNlbGYuY3NzKCBzZWxmLmltYWdlLiRjb250YWluZXIsIHtcbiAgICAgICAgICAgICd6LWluZGV4Jzogc2VsZi5vcHRpb25zLnpJbmRleCxcbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIGZpeCBmb3IgSUUgaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzExMFxuICAgICAgICBpZiAoIGlzSUUgKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyggc2VsZi5pbWFnZS4kY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45OTk5LFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLnNldEF0dHJpYnV0ZSggJ2lkJywgYGphcmFsbGF4LWNvbnRhaW5lci0keyBzZWxmLmluc3RhbmNlSUQgfWAgKTtcbiAgICAgICAgc2VsZi4kaXRlbS5hcHBlbmRDaGlsZCggc2VsZi5pbWFnZS4kY29udGFpbmVyICk7XG5cbiAgICAgICAgLy8gdXNlIGltZyB0YWdcbiAgICAgICAgaWYgKCBzZWxmLmltYWdlLnVzZUltZ1RhZyApIHtcbiAgICAgICAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoIHtcbiAgICAgICAgICAgICAgICAnb2JqZWN0LWZpdCc6IHNlbGYub3B0aW9ucy5pbWdTaXplLFxuICAgICAgICAgICAgICAgICdvYmplY3QtcG9zaXRpb24nOiBzZWxmLm9wdGlvbnMuaW1nUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBmb3IgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlc1xuICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGBvYmplY3QtZml0OiAkeyBzZWxmLm9wdGlvbnMuaW1nU2l6ZSB9OyBvYmplY3QtcG9zaXRpb246ICR7IHNlbGYub3B0aW9ucy5pbWdQb3NpdGlvbiB9O2AsXG4gICAgICAgICAgICAgICAgJ21heC13aWR0aCc6ICdub25lJyxcbiAgICAgICAgICAgIH0sIGNvbnRhaW5lclN0eWxlcywgaW1hZ2VTdHlsZXMgKTtcblxuICAgICAgICAvLyB1c2UgZGl2IHdpdGggYmFja2dyb3VuZCBpbWFnZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgICAgICBpZiAoIHNlbGYuaW1hZ2Uuc3JjICkge1xuICAgICAgICAgICAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoIHtcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBzZWxmLm9wdGlvbnMuaW1nUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiBzZWxmLm9wdGlvbnMuaW1nU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0Jzogc2VsZi5vcHRpb25zLmltZ1JlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBzZWxmLmltYWdlLmJnSW1hZ2UgfHwgYHVybChcIiR7IHNlbGYuaW1hZ2Uuc3JjIH1cIilgLFxuICAgICAgICAgICAgICAgIH0sIGNvbnRhaW5lclN0eWxlcywgaW1hZ2VTdHlsZXMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ29wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8IDEgPT09IHNlbGYub3B0aW9ucy5zcGVlZCApIHtcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4gQ2hlY2sgaWYgb25lIG9mIHBhcmVudHMgaGF2ZSB0cmFuc2Zvcm0gc3R5bGUgKHdpdGhvdXQgdGhpcyBjaGVjaywgc2Nyb2xsIHRyYW5zZm9ybSB3aWxsIGJlIGludmVydGVkIGlmIHVzZWQgcGFyYWxsYXggd2l0aCBwb3NpdGlvbiBmaXhlZClcbiAgICAgICAgLy8gICAgZGlzY3Vzc2lvbiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy85XG4gICAgICAgIC8vIDIuIENoZWNrIGlmIHBhcmVudHMgaGF2ZSBvdmVyZmxvdyBzY3JvbGxcbiAgICAgICAgaWYgKCAnZml4ZWQnID09PSBzZWxmLmltYWdlLnBvc2l0aW9uICkge1xuICAgICAgICAgICAgY29uc3QgJHBhcmVudHMgPSBnZXRQYXJlbnRzKCBzZWxmLiRpdGVtICkuZmlsdGVyKCAoIGVsICkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRyYW5zZm9ybSA9IHN0eWxlc1sgJy13ZWJraXQtdHJhbnNmb3JtJyBdIHx8IHN0eWxlc1sgJy1tb3otdHJhbnNmb3JtJyBdIHx8IHN0eWxlcy50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICAgICAgICAgICAgICAgIHJldHVybiAoIHBhcmVudFRyYW5zZm9ybSAmJiAnbm9uZScgIT09IHBhcmVudFRyYW5zZm9ybSApIHx8IG92ZXJmbG93UmVnZXgudGVzdCggc3R5bGVzLm92ZXJmbG93ICsgc3R5bGVzWyAnb3ZlcmZsb3cteScgXSArIHN0eWxlc1sgJ292ZXJmbG93LXgnIF0gKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICRwYXJlbnRzLmxlbmd0aCA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHBvc2l0aW9uIHRvIHBhcmFsbGF4IGJsb2NrXG4gICAgICAgIGltYWdlU3R5bGVzLnBvc2l0aW9uID0gc2VsZi5pbWFnZS5wb3NpdGlvbjtcblxuICAgICAgICAvLyBpbnNlcnQgcGFyYWxsYXggaW1hZ2VcbiAgICAgICAgc2VsZi5jc3MoIHNlbGYuaW1hZ2UuJGl0ZW0sIGltYWdlU3R5bGVzICk7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5hcHBlbmRDaGlsZCggc2VsZi5pbWFnZS4kaXRlbSApO1xuXG4gICAgICAgIC8vIHNldCBpbml0aWFsIHBvc2l0aW9uIGFuZCBzaXplXG4gICAgICAgIHNlbGYub25SZXNpemUoKTtcbiAgICAgICAgc2VsZi5vblNjcm9sbCggdHJ1ZSApO1xuXG4gICAgICAgIC8vIGNhbGwgb25Jbml0IGV2ZW50XG4gICAgICAgIGlmICggc2VsZi5vcHRpb25zLm9uSW5pdCApIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkluaXQuY2FsbCggc2VsZiApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGRlZmF1bHQgdXNlciBiYWNrZ3JvdW5kXG4gICAgICAgIGlmICggJ25vbmUnICE9PSBzZWxmLmNzcyggc2VsZi4kaXRlbSwgJ2JhY2tncm91bmQtaW1hZ2UnICkgKSB7XG4gICAgICAgICAgICBzZWxmLmNzcyggc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ25vbmUnLFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5hZGRUb1BhcmFsbGF4TGlzdCgpO1xuICAgIH1cblxuICAgIC8vIGFkZCB0byBwYXJhbGxheCBpbnN0YW5jZXMgbGlzdFxuICAgIGFkZFRvUGFyYWxsYXhMaXN0KCkge1xuICAgICAgICBqYXJhbGxheExpc3QucHVzaCgge1xuICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpZiAoIDEgPT09IGphcmFsbGF4TGlzdC5sZW5ndGggKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGVQYXJhbGxheCApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGZyb20gcGFyYWxsYXggaW5zdGFuY2VzIGxpc3RcbiAgICByZW1vdmVGcm9tUGFyYWxsYXhMaXN0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqYXJhbGxheExpc3QuZm9yRWFjaCggKCBkYXRhLCBrZXkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGRhdGEuaW5zdGFuY2UuaW5zdGFuY2VJRCA9PT0gc2VsZi5pbnN0YW5jZUlEICkge1xuICAgICAgICAgICAgICAgIGphcmFsbGF4TGlzdC5zcGxpY2UoIGtleSwgMSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5yZW1vdmVGcm9tUGFyYWxsYXhMaXN0KCk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHN0eWxlcyBvbiBjb250YWluZXIgYXMgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNUYWcgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyApO1xuICAgICAgICBzZWxmLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyApO1xuICAgICAgICAvLyBudWxsIG9jY3VycyBpZiB0aGVyZSBpcyBubyBzdHlsZSB0YWcgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgICAgaWYgKCAhIG9yaWdpbmFsU3R5bGVzVGFnICkge1xuICAgICAgICAgICAgc2VsZi4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoICdzdHlsZScgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCAnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzZWxmLmltYWdlLnVzZUltZ1RhZyApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBzdHlsZXMgb24gaW1nIHRhZyBhcyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNJbWdUYWcgPSBzZWxmLmltYWdlLiRpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyApO1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycgKTtcbiAgICAgICAgICAgIC8vIG51bGwgb2NjdXJzIGlmIHRoZXJlIGlzIG5vIHN0eWxlIHRhZyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgICAgICAgaWYgKCAhIG9yaWdpbmFsU3R5bGVzSW1nVGFnICkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCAnc3R5bGUnICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc2V0QXR0cmlidXRlKCAnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtb3ZlIGltZyB0YWcgdG8gaXRzIGRlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICggc2VsZi5pbWFnZS4kaXRlbVBhcmVudCApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtUGFyZW50LmFwcGVuZENoaWxkKCBzZWxmLmltYWdlLiRpdGVtICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgYWRkaXRpb25hbCBkb20gZWxlbWVudHNcbiAgICAgICAgaWYgKCBzZWxmLiRjbGlwU3R5bGVzICkge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzZWxmLiRjbGlwU3R5bGVzICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBzZWxmLmltYWdlLiRjb250YWluZXIgKSB7XG4gICAgICAgICAgICBzZWxmLmltYWdlLiRjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2VsZi5pbWFnZS4kY29udGFpbmVyICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIG9uRGVzdHJveSBldmVudFxuICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5vbkRlc3Ryb3kgKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMub25EZXN0cm95LmNhbGwoIHNlbGYgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlbGV0ZSBqYXJhbGxheCBmcm9tIGl0ZW1cbiAgICAgICAgZGVsZXRlIHNlbGYuJGl0ZW0uamFyYWxsYXg7XG4gICAgfVxuXG4gICAgLy8gaXQgd2lsbCByZW1vdmUgc29tZSBpbWFnZSBvdmVybGFwcGluZ1xuICAgIC8vIG92ZXJsYXBwaW5nIG9jY3VyIGR1ZSB0byBhbiBpbWFnZSBwb3NpdGlvbiBmaXhlZCBpbnNpZGUgYWJzb2x1dGUgcG9zaXRpb24gZWxlbWVudFxuICAgIGNsaXBDb250YWluZXIoKSB7XG4gICAgICAgIC8vIG5lZWRlZCBvbmx5IHdoZW4gYmFja2dyb3VuZCBpbiBmaXhlZCBwb3NpdGlvblxuICAgICAgICBpZiAoICdmaXhlZCcgIT09IHRoaXMuaW1hZ2UucG9zaXRpb24gKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgcmVjdCA9IHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZWN0O1xuXG4gICAgICAgIGlmICggISBzZWxmLiRjbGlwU3R5bGVzICkge1xuICAgICAgICAgICAgc2VsZi4kY2xpcFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcbiAgICAgICAgICAgIHNlbGYuJGNsaXBTdHlsZXMuc2V0QXR0cmlidXRlKCAndHlwZScsICd0ZXh0L2NzcycgKTtcbiAgICAgICAgICAgIHNlbGYuJGNsaXBTdHlsZXMuc2V0QXR0cmlidXRlKCAnaWQnLCBgamFyYWxsYXgtY2xpcC0keyBzZWxmLmluc3RhbmNlSUQgfWAgKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaGVhZCcgKVsgMCBdO1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCggc2VsZi4kY2xpcFN0eWxlcyApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xpcCBpcyB1c2VkIGZvciBvbGQgYnJvd3NlcnMuXG4gICAgICAgIC8vIGNsaXAtcGF0aCBmb3IgbW9kZXJuIGJyb3dzZXJzIChhbHNvIGZpeGVzIFNhZmFyaSB2MTQgYnVnIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy8xODEgKS5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gYCNqYXJhbGxheC1jb250YWluZXItJHsgc2VsZi5pbnN0YW5jZUlEIH0ge1xuICAgICAgICAgICAgY2xpcDogcmVjdCgwICR7IHdpZHRoIH1weCAkeyBoZWlnaHQgfXB4IDApO1xuICAgICAgICAgICAgY2xpcDogcmVjdCgwLCAkeyB3aWR0aCB9cHgsICR7IGhlaWdodCB9cHgsIDApO1xuICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICAgICAgICB9YDtcblxuICAgICAgICAvLyBhZGQgY2xpcCBzdHlsZXMgaW5saW5lICh0aGlzIG1ldGhvZCBuZWVkIGZvciBzdXBwb3J0IElFOCBhbmQgbGVzcyBicm93c2VycylcbiAgICAgICAgaWYgKCBzZWxmLiRjbGlwU3R5bGVzLnN0eWxlU2hlZXQgKSB7XG4gICAgICAgICAgICBzZWxmLiRjbGlwU3R5bGVzLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuJGNsaXBTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY292ZXJJbWFnZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY29udEggPSByZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgeyBzcGVlZCB9ID0gc2VsZi5vcHRpb25zO1xuICAgICAgICBjb25zdCBpc1Njcm9sbCA9ICdzY3JvbGwnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2Nyb2xsLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZTtcbiAgICAgICAgbGV0IHNjcm9sbERpc3QgPSAwO1xuICAgICAgICBsZXQgcmVzdWx0SCA9IGNvbnRIO1xuICAgICAgICBsZXQgcmVzdWx0TVQgPSAwO1xuXG4gICAgICAgIC8vIHNjcm9sbCBwYXJhbGxheFxuICAgICAgICBpZiAoIGlzU2Nyb2xsICkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGRpc3RhbmNlIGFuZCBoZWlnaHQgZm9yIGltYWdlXG4gICAgICAgICAgICBpZiAoIDAgPiBzcGVlZCApIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXN0ID0gc3BlZWQgKiBNYXRoLm1heCggY29udEgsIHduZEggKTtcblxuICAgICAgICAgICAgICAgIGlmICggd25kSCA8IGNvbnRIICkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxEaXN0IC09IHNwZWVkICogKCBjb250SCAtIHduZEggKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbERpc3QgPSBzcGVlZCAqICggY29udEggKyB3bmRIICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNpemUgZm9yIHNjcm9sbCBwYXJhbGxheFxuICAgICAgICAgICAgaWYgKCAxIDwgc3BlZWQgKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0SCA9IE1hdGguYWJzKCBzY3JvbGxEaXN0IC0gd25kSCApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggMCA+IHNwZWVkICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdEggPSBzY3JvbGxEaXN0IC8gc3BlZWQgKyBNYXRoLmFicyggc2Nyb2xsRGlzdCApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRIICs9ICggd25kSCAtIGNvbnRIICkgKiAoIDEgLSBzcGVlZCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY3JvbGxEaXN0IC89IDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBzY3JvbGwgZGlzdGFuY2VcbiAgICAgICAgc2VsZi5wYXJhbGxheFNjcm9sbERpc3RhbmNlID0gc2Nyb2xsRGlzdDtcblxuICAgICAgICAvLyB2ZXJ0aWNhbCBjZW50ZXJcbiAgICAgICAgaWYgKCBpc1Njcm9sbCApIHtcbiAgICAgICAgICAgIHJlc3VsdE1UID0gKCB3bmRIIC0gcmVzdWx0SCApIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdE1UID0gKCBjb250SCAtIHJlc3VsdEggKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhcHBseSByZXN1bHQgdG8gaXRlbVxuICAgICAgICBzZWxmLmNzcyggc2VsZi5pbWFnZS4kaXRlbSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHsgcmVzdWx0SCB9cHhgLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBgJHsgcmVzdWx0TVQgfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6ICdmaXhlZCcgPT09IHNlbGYuaW1hZ2UucG9zaXRpb24gPyBgJHsgcmVjdC5sZWZ0IH1weGAgOiAnMCcsXG4gICAgICAgICAgICB3aWR0aDogYCR7IHJlY3Qud2lkdGggfXB4YCxcbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIGNhbGwgb25Db3ZlckltYWdlIGV2ZW50XG4gICAgICAgIGlmICggc2VsZi5vcHRpb25zLm9uQ292ZXJJbWFnZSApIHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkNvdmVySW1hZ2UuY2FsbCggc2VsZiApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHNvbWUgdXNlZnVsIGRhdGEuIFVzZWQgaW4gdGhlIHZpZGVvIGNvdmVyIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogcmVzdWx0SCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJlc3VsdE1ULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogcmVjdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgb25TY3JvbGwoIGZvcmNlICkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCByZWN0ID0gc2VsZi4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY29udFQgPSByZWN0LnRvcDtcbiAgICAgICAgY29uc3QgY29udEggPSByZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge307XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaW4gdmlld3BvcnRcbiAgICAgICAgbGV0IHZpZXdwb3J0UmVjdCA9IHJlY3Q7XG4gICAgICAgIGlmICggc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0ICkge1xuICAgICAgICAgICAgdmlld3BvcnRSZWN0ID0gc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCA9IDAgPD0gdmlld3BvcnRSZWN0LmJvdHRvbVxuICAgICAgICAgICAgJiYgMCA8PSB2aWV3cG9ydFJlY3QucmlnaHRcbiAgICAgICAgICAgICYmIHZpZXdwb3J0UmVjdC50b3AgPD0gd25kSFxuICAgICAgICAgICAgJiYgdmlld3BvcnRSZWN0LmxlZnQgPD0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgLy8gc3RvcCBjYWxjdWxhdGlvbnMgaWYgaXRlbSBpcyBub3QgaW4gdmlld3BvcnRcbiAgICAgICAgaWYgKCBmb3JjZSA/IGZhbHNlIDogISBzZWxmLmlzRWxlbWVudEluVmlld3BvcnQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjdWxhdGUgcGFyYWxsYXggaGVscGluZyB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgYmVmb3JlVG9wID0gTWF0aC5tYXgoIDAsIGNvbnRUICk7XG4gICAgICAgIGNvbnN0IGJlZm9yZVRvcEVuZCA9IE1hdGgubWF4KCAwLCBjb250SCArIGNvbnRUICk7XG4gICAgICAgIGNvbnN0IGFmdGVyVG9wID0gTWF0aC5tYXgoIDAsIC1jb250VCApO1xuICAgICAgICBjb25zdCBiZWZvcmVCb3R0b20gPSBNYXRoLm1heCggMCwgY29udFQgKyBjb250SCAtIHduZEggKTtcbiAgICAgICAgY29uc3QgYmVmb3JlQm90dG9tRW5kID0gTWF0aC5tYXgoIDAsIGNvbnRIIC0gKCBjb250VCArIGNvbnRIIC0gd25kSCApICk7XG4gICAgICAgIGNvbnN0IGFmdGVyQm90dG9tID0gTWF0aC5tYXgoIDAsIC1jb250VCArIHduZEggLSBjb250SCApO1xuICAgICAgICBjb25zdCBmcm9tVmlld3BvcnRDZW50ZXIgPSAxIC0gMiAqICggKCB3bmRIIC0gY29udFQgKSAvICggd25kSCArIGNvbnRIICkgKTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgb24gaG93IHBlcmNlbnQgb2Ygc2VjdGlvbiBpcyB2aXNpYmxlXG4gICAgICAgIGxldCB2aXNpYmxlUGVyY2VudCA9IDE7XG4gICAgICAgIGlmICggY29udEggPCB3bmRIICkge1xuICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQgPSAxIC0gKCBhZnRlclRvcCB8fCBiZWZvcmVCb3R0b20gKSAvIGNvbnRIO1xuICAgICAgICB9IGVsc2UgaWYgKCBiZWZvcmVUb3BFbmQgPD0gd25kSCApIHtcbiAgICAgICAgICAgIHZpc2libGVQZXJjZW50ID0gYmVmb3JlVG9wRW5kIC8gd25kSDtcbiAgICAgICAgfSBlbHNlIGlmICggYmVmb3JlQm90dG9tRW5kIDw9IHduZEggKSB7XG4gICAgICAgICAgICB2aXNpYmxlUGVyY2VudCA9IGJlZm9yZUJvdHRvbUVuZCAvIHduZEg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvcGFjaXR5XG4gICAgICAgIGlmICggJ29wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY3JvbGwtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlICkge1xuICAgICAgICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLDAsMCknO1xuICAgICAgICAgICAgc3R5bGVzLm9wYWNpdHkgPSB2aXNpYmxlUGVyY2VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNjYWxlXG4gICAgICAgIGlmICggJ3NjYWxlJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3NjYWxlLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSApIHtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICBpZiAoIDAgPiBzZWxmLm9wdGlvbnMuc3BlZWQgKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgLT0gc2VsZi5vcHRpb25zLnNwZWVkICogdmlzaWJsZVBlcmNlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYWxlICs9IHNlbGYub3B0aW9ucy5zcGVlZCAqICggMSAtIHZpc2libGVQZXJjZW50ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZXMudHJhbnNmb3JtID0gYHNjYWxlKCR7IHNjYWxlIH0pIHRyYW5zbGF0ZTNkKDAsMCwwKWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY3JvbGxcbiAgICAgICAgaWYgKCAnc2Nyb2xsJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3Njcm9sbC1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb25ZID0gc2VsZi5wYXJhbGxheFNjcm9sbERpc3RhbmNlICogZnJvbVZpZXdwb3J0Q2VudGVyO1xuXG4gICAgICAgICAgICAvLyBmaXggaWYgcGFyYWxsYXggYmxvY2sgaW4gYWJzb2x1dGUgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICggJ2Fic29sdXRlJyA9PT0gc2VsZi5pbWFnZS5wb3NpdGlvbiApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblkgLT0gY29udFQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwkeyBwb3NpdGlvblkgfXB4LDApYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY3NzKCBzZWxmLmltYWdlLiRpdGVtLCBzdHlsZXMgKTtcblxuICAgICAgICAvLyBjYWxsIG9uU2Nyb2xsIGV2ZW50XG4gICAgICAgIGlmICggc2VsZi5vcHRpb25zLm9uU2Nyb2xsICkge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uU2Nyb2xsLmNhbGwoIHNlbGYsIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiByZWN0LFxuXG4gICAgICAgICAgICAgICAgYmVmb3JlVG9wLFxuICAgICAgICAgICAgICAgIGJlZm9yZVRvcEVuZCxcbiAgICAgICAgICAgICAgICBhZnRlclRvcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVCb3R0b20sXG4gICAgICAgICAgICAgICAgYmVmb3JlQm90dG9tRW5kLFxuICAgICAgICAgICAgICAgIGFmdGVyQm90dG9tLFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZVBlcmNlbnQsXG4gICAgICAgICAgICAgICAgZnJvbVZpZXdwb3J0Q2VudGVyLFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY292ZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLmNsaXBDb250YWluZXIoKTtcbiAgICB9XG59XG5cbi8vIGdsb2JhbCBkZWZpbml0aW9uXG5jb25zdCBwbHVnaW4gPSBmdW5jdGlvbiggaXRlbXMsIG9wdGlvbnMsIC4uLmFyZ3MgKSB7XG4gICAgLy8gY2hlY2sgZm9yIGRvbSBlbGVtZW50XG4gICAgLy8gdGhhbmtzOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM4NDI4Ni9qYXZhc2NyaXB0LWlzZG9tLWhvdy1kby15b3UtY2hlY2staWYtYS1qYXZhc2NyaXB0LW9iamVjdC1pcy1hLWRvbS1vYmplY3RcbiAgICBpZiAoICdvYmplY3QnID09PSB0eXBlb2YgSFRNTEVsZW1lbnQgPyBpdGVtcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogaXRlbXMgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBpdGVtcyAmJiBudWxsICE9PSBpdGVtcyAmJiAxID09PSBpdGVtcy5ub2RlVHlwZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1zLm5vZGVOYW1lICkge1xuICAgICAgICBpdGVtcyA9IFsgaXRlbXMgXTtcbiAgICB9XG5cbiAgICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCByZXQ7XG5cbiAgICBmb3IgKCBrOyBrIDwgbGVuOyBrICs9IDEgKSB7XG4gICAgICAgIGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBvcHRpb25zIHx8ICd1bmRlZmluZWQnID09PSB0eXBlb2Ygb3B0aW9ucyApIHtcbiAgICAgICAgICAgIGlmICggISBpdGVtc1sgayBdLmphcmFsbGF4ICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zWyBrIF0uamFyYWxsYXggPSBuZXcgSmFyYWxsYXgoIGl0ZW1zWyBrIF0sIG9wdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggaXRlbXNbIGsgXS5qYXJhbGxheCApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgICAgICByZXQgPSBpdGVtc1sgayBdLmphcmFsbGF4WyBvcHRpb25zIF0uYXBwbHkoIGl0ZW1zWyBrIF0uamFyYWxsYXgsIGFyZ3MgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgcmV0ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbn07XG5wbHVnaW4uY29uc3RydWN0b3IgPSBKYXJhbGxheDtcblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xyXG5cdFx0Ly8gQWxyZWFkeSByZWFkeSBvciBpbnRlcmFjdGl2ZSwgZXhlY3V0ZSBjYWxsYmFja1xyXG5cdFx0Y2FsbGJhY2suY2FsbCgpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xyXG5cdFx0Ly8gT2xkIGJyb3dzZXJzXHJcblx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJylcclxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0Ly8gTW9kZXJuIGJyb3dzZXJzXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spO1xyXG5cdH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vamFyYWxsYXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vamFyYWxsYXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vamFyYWxsYXguY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUxKCkge1xuICAgIGxldCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgICAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgICAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICAgICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbn0oKTtcbmNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldDEoKSB7XG4gICAgY29uc3QgbWVtbyA9IHtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgICB9O1xufSgpO1xuY29uc3Qgc3R5bGVzSW5Eb20gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZENvdW50TWFwID0ge1xuICAgIH07XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICBjb25zdCBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgICAgICBjb25zdCBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZCArICcgJyArIGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gICAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqLyBjb25zdCByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0MSgpIHtcbiAgICBjb25zdCB0ZXh0U3RvcmUgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgICB9O1xufSgpO1xuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgY29uc3QgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyAnQG1lZGlhICcgKyBvYmoubWVkaWEgKyAnIHsnICsgb2JqLmNzcyArICd9JyA6IG9iai5jc3M7XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICAgIGxldCBjc3MgPSBvYmouY3NzO1xuICAgIGNvbnN0IG1lZGlhID0gb2JqLm1lZGlhO1xuICAgIGNvbnN0IHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJztcbiAgICB9XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5sZXQgc2luZ2xldG9uQ291bnRlciA9IDA7XG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IHVwZGF0ZTtcbiAgICBsZXQgcmVtb3ZlO1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKG9iaik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgfTtcbiAgICAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG4gICAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgICB9XG4gICAgbGlzdCA9IGxpc3QgfHwgW107XG4gICAgbGV0IGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICAgICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkxKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpMV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmphcmFsbGF4IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG4uamFyYWxsYXggPiAuamFyYWxsYXgtaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLyogc3VwcG9ydCBmb3IgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlcyAqL1xcclxcbiAgICBmb250LWZhbWlseTogJ29iamVjdC1maXQ6IGNvdmVyOyc7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvamFyYWxsYXgvZGlzdC9qYXJhbGxheC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFFQUFxRTtJQUNyRSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuamFyYWxsYXgge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxufVxcclxcbi5qYXJhbGxheCA+IC5qYXJhbGxheC1pbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAvKiBzdXBwb3J0IGZvciBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnb2JqZWN0LWZpdDogY292ZXI7JztcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBnbG9iYWwgZnJvbSAnZ2xvYmFsJztcblxuLy8gRGVmZXJyZWRcbi8vIHRoYW5rcyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDk2NzE1L2ltcGxlbWVudC1kZWZlcnJlZC1vYmplY3Qtd2l0aG91dC11c2luZy1qcXVlcnlcbmZ1bmN0aW9uIERlZmVycmVkKCkge1xuICAgIHRoaXMuZG9uZUNhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMuZmFpbENhbGxiYWNrcyA9IFtdO1xufVxuXG5EZWZlcnJlZC5wcm90b3R5cGUgPSB7XG4gICAgZXhlY3V0ZSggbGlzdCwgYXJncyApIHtcbiAgICAgICAgbGV0IGkgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmdzICk7XG5cbiAgICAgICAgd2hpbGUgKCBpICkge1xuICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgbGlzdFsgaSBdLmFwcGx5KCBudWxsLCBhcmdzICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlc29sdmUoIC4uLmFyZ3MgKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSggdGhpcy5kb25lQ2FsbGJhY2tzLCBhcmdzICk7XG4gICAgfSxcbiAgICByZWplY3QoIC4uLmFyZ3MgKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSggdGhpcy5mYWlsQ2FsbGJhY2tzLCBhcmdzICk7XG4gICAgfSxcbiAgICBkb25lKCBjYWxsYmFjayApIHtcbiAgICAgICAgdGhpcy5kb25lQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XG4gICAgfSxcbiAgICBmYWlsKCBjYWxsYmFjayApIHtcbiAgICAgICAgdGhpcy5mYWlsQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XG4gICAgfSxcbn07XG5cbmxldCBJRCA9IDA7XG5sZXQgWW91dHViZUFQSWFkZGVkID0gMDtcbmxldCBWaW1lb0FQSWFkZGVkID0gMDtcbmxldCBsb2FkaW5nWW91dHViZVBsYXllciA9IDA7XG5sZXQgbG9hZGluZ1ZpbWVvUGxheWVyID0gMDtcbmNvbnN0IGxvYWRpbmdZb3V0dWJlRGVmZXIgPSBuZXcgRGVmZXJyZWQoKTtcbmNvbnN0IGxvYWRpbmdWaW1lb0RlZmVyID0gbmV3IERlZmVycmVkKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvV29ya2VyIHtcbiAgICBjb25zdHJ1Y3RvciggdXJsLCBvcHRpb25zICkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnVybCA9IHVybDtcblxuICAgICAgICBzZWxmLm9wdGlvbnNfZGVmYXVsdCA9IHtcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgbXV0ZTogZmFsc2UsXG4gICAgICAgICAgICB2b2x1bWU6IDEwMCxcbiAgICAgICAgICAgIHNob3dDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlIaWRkZW46IGZhbHNlLFxuXG4gICAgICAgICAgICAvLyBzdGFydCAvIGVuZCB2aWRlbyB0aW1lIGluIHNlY29uZHNcbiAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIGVuZFRpbWU6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5vcHRpb25zID0gc2VsZi5leHRlbmQoIHt9LCBzZWxmLm9wdGlvbnNfZGVmYXVsdCwgb3B0aW9ucyApO1xuXG4gICAgICAgIC8vIEZpeCB3cm9uZyBvcHRpb24gbmFtZS5cbiAgICAgICAgLy8gVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL3ZpZGVvLXdvcmtlci9pc3N1ZXMvMTMuXG4gICAgICAgIGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuc2hvd0NvbnRvbHMgKSB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzID0gc2VsZi5vcHRpb25zLnNob3dDb250b2xzO1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYub3B0aW9ucy5zaG93Q29udG9scztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIFVSTFxuICAgICAgICBzZWxmLnZpZGVvSUQgPSBzZWxmLnBhcnNlVVJMKCB1cmwgKTtcblxuICAgICAgICAvLyBpbml0XG4gICAgICAgIGlmICggc2VsZi52aWRlb0lEICkge1xuICAgICAgICAgICAgc2VsZi5JRCA9IElEO1xuICAgICAgICAgICAgSUQgKz0gMTtcbiAgICAgICAgICAgIHNlbGYubG9hZEFQSSgpO1xuICAgICAgICAgICAgc2VsZi5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRlbmQgbGlrZSBqUXVlcnkuZXh0ZW5kXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBleHRlbmQoIC4uLmFyZ3MgKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGFyZ3NbIDAgXSB8fCB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyggYXJncyApLmZvckVhY2goICggaSApID0+IHtcbiAgICAgICAgICAgIGlmICggISBhcmdzWyBpIF0gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoIGFyZ3NbIGkgXSApLmZvckVhY2goICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIG91dFsga2V5IF0gPSBhcmdzWyBpIF1bIGtleSBdO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBwYXJzZVVSTCggdXJsICkge1xuICAgICAgICAvLyBwYXJzZSB5b3V0dWJlIElEXG4gICAgICAgIGZ1bmN0aW9uIGdldFlvdXR1YmVJRCggeXRVcmwgKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IC8uKig/OnlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9KShbXiNcXCZcXD9dKikuKi87XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHl0VXJsLm1hdGNoKCByZWdFeHAgKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCAmJiAxMSA9PT0gbWF0Y2hbIDEgXS5sZW5ndGggPyBtYXRjaFsgMSBdIDogZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSB2aW1lbyBJRFxuICAgICAgICBmdW5jdGlvbiBnZXRWaW1lb0lEKCB2bVVybCApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICAgICAgY29uc3QgcmVnRXhwID0gL2h0dHBzPzpcXC9cXC8oPzp3d3dcXC58cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzpjaGFubmVsc1xcLyg/OlxcdytcXC8pP3xncm91cHNcXC8oW15cXC9dKilcXC92aWRlb3NcXC98YWxidW1cXC8oXFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86JHxcXC98XFw/KS87XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHZtVXJsLm1hdGNoKCByZWdFeHAgKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsgMyBdID8gbWF0Y2hbIDMgXSA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgbG9jYWwgc3RyaW5nXG4gICAgICAgIGZ1bmN0aW9uIGdldExvY2FsVmlkZW9zKCBsb2NVcmwgKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRm9ybWF0cyA9IGxvY1VybC5zcGxpdCggLywoPz1tcDRcXDp8d2VibVxcOnxvZ3ZcXDp8b2dnXFw6KS8gKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgbGV0IHJlYWR5ID0gMDtcbiAgICAgICAgICAgIHZpZGVvRm9ybWF0cy5mb3JFYWNoKCAoIHZhbCApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHZhbC5tYXRjaCggL14obXA0fHdlYm18b2d2fG9nZylcXDooLiopLyApO1xuICAgICAgICAgICAgICAgIGlmICggbWF0Y2ggJiYgbWF0Y2hbIDEgXSAmJiBtYXRjaFsgMiBdICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WyAnb2d2JyA9PT0gbWF0Y2hbIDEgXSA/ICdvZ2cnIDogbWF0Y2hbIDEgXSBdID0gbWF0Y2hbIDIgXTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZHkgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIHJldHVybiByZWFkeSA/IHJlc3VsdCA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgWW91dHViZSA9IGdldFlvdXR1YmVJRCggdXJsICk7XG4gICAgICAgIGNvbnN0IFZpbWVvID0gZ2V0VmltZW9JRCggdXJsICk7XG4gICAgICAgIGNvbnN0IExvY2FsID0gZ2V0TG9jYWxWaWRlb3MoIHVybCApO1xuXG4gICAgICAgIGlmICggWW91dHViZSApIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd5b3V0dWJlJztcbiAgICAgICAgICAgIHJldHVybiBZb3V0dWJlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBWaW1lbyApIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd2aW1lbyc7XG4gICAgICAgICAgICByZXR1cm4gVmltZW87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIExvY2FsICkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ2xvY2FsJztcbiAgICAgICAgICAgIHJldHVybiBMb2NhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gISEgdGhpcy52aWRlb0lEO1xuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIG9uKCBuYW1lLCBjYWxsYmFjayApIHtcbiAgICAgICAgdGhpcy51c2VyRXZlbnRzTGlzdCA9IHRoaXMudXNlckV2ZW50c0xpc3QgfHwgW107XG5cbiAgICAgICAgLy8gYWRkIG5ldyBjYWxsYmFjayBpbiBldmVudHMgbGlzdFxuICAgICAgICAoIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXSB8fCAoIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXSA9IFtdICkgKS5wdXNoKCBjYWxsYmFjayApO1xuICAgIH1cblxuICAgIG9mZiggbmFtZSwgY2FsbGJhY2sgKSB7XG4gICAgICAgIGlmICggISB0aGlzLnVzZXJFdmVudHNMaXN0IHx8ICEgdGhpcy51c2VyRXZlbnRzTGlzdFsgbmFtZSBdICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXS5mb3JFYWNoKCAoIHZhbCwga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggdmFsID09PSBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRXZlbnRzTGlzdFsgbmFtZSBdWyBrZXkgXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoIG5hbWUsIC4uLmFyZ3MgKSB7XG4gICAgICAgIGlmICggdGhpcy51c2VyRXZlbnRzTGlzdCAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXSApIHtcbiAgICAgICAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbIG5hbWUgXS5mb3JFYWNoKCAoIHZhbCApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHdpdGggYWxsIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIGlmICggdmFsICkge1xuICAgICAgICAgICAgICAgICAgICB2YWwuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5KCBzdGFydCApIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICggISBzZWxmLnBsYXllciApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ3lvdXR1YmUnID09PSBzZWxmLnR5cGUgJiYgc2VsZi5wbGF5ZXIucGxheVZpZGVvICkge1xuICAgICAgICAgICAgaWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHN0YXJ0ICkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnNlZWtUbyggc3RhcnQgfHwgMCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBnbG9iYWwuWVQuUGxheWVyU3RhdGUuUExBWUlORyAhPT0gc2VsZi5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ3ZpbWVvJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgaWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHN0YXJ0ICkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnNldEN1cnJlbnRUaW1lKCBzdGFydCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0UGF1c2VkKCkudGhlbiggKCBwYXVzZWQgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBwYXVzZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICdsb2NhbCcgPT09IHNlbGYudHlwZSApIHtcbiAgICAgICAgICAgIGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzdGFydCApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5jdXJyZW50VGltZSA9IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBzZWxmLnBsYXllci5wYXVzZWQgKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoICEgc2VsZi5wbGF5ZXIgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICYmIHNlbGYucGxheWVyLnBhdXNlVmlkZW8gKSB7XG4gICAgICAgICAgICBpZiAoIGdsb2JhbC5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HID09PSBzZWxmLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpICkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ3ZpbWVvJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0UGF1c2VkKCkudGhlbiggKCBwYXVzZWQgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhIHBhdXNlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICdsb2NhbCcgPT09IHNlbGYudHlwZSApIHtcbiAgICAgICAgICAgIGlmICggISBzZWxmLnBsYXllci5wYXVzZWQgKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG11dGUoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoICEgc2VsZi5wbGF5ZXIgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICYmIHNlbGYucGxheWVyLm11dGUgKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5tdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd2aW1lbycgPT09IHNlbGYudHlwZSAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUgKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoIDAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ2xvY2FsJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5tdXRlKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCAhIHNlbGYucGxheWVyICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAneW91dHViZScgPT09IHNlbGYudHlwZSAmJiBzZWxmLnBsYXllci5tdXRlICkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIudW5NdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd2aW1lbycgPT09IHNlbGYudHlwZSAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUgKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoIHNlbGYub3B0aW9ucy52b2x1bWUgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJ2xvY2FsJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8ubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFZvbHVtZSggdm9sdW1lID0gZmFsc2UgKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoICEgc2VsZi5wbGF5ZXIgfHwgISB2b2x1bWUgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICYmIHNlbGYucGxheWVyLnNldFZvbHVtZSApIHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSggdm9sdW1lICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd2aW1lbycgPT09IHNlbGYudHlwZSAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUgKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoIHZvbHVtZSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAnbG9jYWwnID09PSBzZWxmLnR5cGUgKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby52b2x1bWUgPSB2b2x1bWUgLyAxMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRWb2x1bWUoIGNhbGxiYWNrICkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCAhIHNlbGYucGxheWVyICkge1xuICAgICAgICAgICAgY2FsbGJhY2soIGZhbHNlICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICYmIHNlbGYucGxheWVyLmdldFZvbHVtZSApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCBzZWxmLnBsYXllci5nZXRWb2x1bWUoKSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAndmltZW8nID09PSBzZWxmLnR5cGUgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lICkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkudGhlbiggKCB2b2x1bWUgKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soIHZvbHVtZSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAnbG9jYWwnID09PSBzZWxmLnR5cGUgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayggc2VsZi4kdmlkZW8udm9sdW1lICogMTAwICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNdXRlZCggY2FsbGJhY2sgKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoICEgc2VsZi5wbGF5ZXIgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayggbnVsbCApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAneW91dHViZScgPT09IHNlbGYudHlwZSAmJiBzZWxmLnBsYXllci5pc011dGVkICkge1xuICAgICAgICAgICAgY2FsbGJhY2soIHNlbGYucGxheWVyLmlzTXV0ZWQoKSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAndmltZW8nID09PSBzZWxmLnR5cGUgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lICkge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkudGhlbiggKCB2b2x1bWUgKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soICEhIHZvbHVtZSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAnbG9jYWwnID09PSBzZWxmLnR5cGUgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayggc2VsZi4kdmlkZW8ubXV0ZWQgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEltYWdlVVJMKCBjYWxsYmFjayApIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBzZWxmLnZpZGVvSW1hZ2UgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayggc2VsZi52aWRlb0ltYWdlICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlU2l6ZXMgPSBbXG4gICAgICAgICAgICAgICAgJ21heHJlc2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICdzZGRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICdocWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBsZXQgc3RlcCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRlbXBJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gdGh1bWJuYWlsLCB5b3V0dWJlIGFkZCB0aGVpciBvd24gaW1hZ2Ugd2l0aCB3aWR0aCA9IDEyMHB4XG4gICAgICAgICAgICAgICAgaWYgKCAxMjAgIT09ICggdGhpcy5uYXR1cmFsV2lkdGggfHwgdGhpcy53aWR0aCApIHx8IHN0ZXAgPT09IGF2YWlsYWJsZVNpemVzLmxlbmd0aCAtIDEgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9rXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9JbWFnZSA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8keyBzZWxmLnZpZGVvSUQgfS8keyBhdmFpbGFibGVTaXplc1sgc3RlcCBdIH0uanBnYDtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soIHNlbGYudmlkZW9JbWFnZSApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBhbm90aGVyIHNpemVcbiAgICAgICAgICAgICAgICAgICAgc3RlcCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8keyBzZWxmLnZpZGVvSUQgfS8keyBhdmFpbGFibGVTaXplc1sgc3RlcCBdIH0uanBnYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGVtcEltZy5zcmMgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHsgc2VsZi52aWRlb0lEIH0vJHsgYXZhaWxhYmxlU2l6ZXNbIHN0ZXAgXSB9LmpwZ2A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICd2aW1lbycgPT09IHNlbGYudHlwZSApIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oICdHRVQnLCBgaHR0cHM6Ly92aW1lby5jb20vYXBpL3YyL3ZpZGVvLyR7IHNlbGYudmlkZW9JRCB9Lmpzb25gLCB0cnVlICk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICggNCA9PT0gdGhpcy5yZWFkeVN0YXRlICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDIwMCA8PSB0aGlzLnN0YXR1cyAmJiA0MDAgPiB0aGlzLnN0YXR1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MhXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoIHRoaXMucmVzcG9uc2VUZXh0ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvSW1hZ2UgPSByZXNwb25zZVsgMCBdLnRodW1ibmFpbF9sYXJnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCBzZWxmLnZpZGVvSW1hZ2UgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIDooXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBvbGQgdmVyc2lvbi5cbiAgICBnZXRJZnJhbWUoIGNhbGxiYWNrICkge1xuICAgICAgICB0aGlzLmdldFZpZGVvKCBjYWxsYmFjayApO1xuICAgIH1cblxuICAgIGdldFZpZGVvKCBjYWxsYmFjayApIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gcmV0dXJuIGdlbmVyYXRlZCB2aWRlbyBibG9ja1xuICAgICAgICBpZiAoIHNlbGYuJHZpZGVvICkge1xuICAgICAgICAgICAgY2FsbGJhY2soIHNlbGYuJHZpZGVvICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZW5lcmF0ZSBuZXcgdmlkZW8gYmxvY2tcbiAgICAgICAgc2VsZi5vbkFQSXJlYWR5KCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGlkZGVuRGl2O1xuICAgICAgICAgICAgaWYgKCAhIHNlbGYuJHZpZGVvICkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFlvdXR1YmVcbiAgICAgICAgICAgIGlmICggJ3lvdXR1YmUnID09PSBzZWxmLnR5cGUgKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyBHRFBSIENvbXBsaWFuY2UuXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6ICdodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbScsXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHNlbGYudmlkZW9JRCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1dG9wbGF5IGVuYWJsZSBvbiBtb2JpbGUgZGV2aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXNpbmxpbmU6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIGhpZGUgY29udHJvbHNcbiAgICAgICAgICAgICAgICBpZiAoICEgc2VsZi5vcHRpb25zLnNob3dDb250cm9scyApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuaXZfbG9hZF9wb2xpY3kgPSAzO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5tb2Rlc3RicmFuZGluZyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLmNvbnRyb2xzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuc2hvd2luZm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5kaXNhYmxla2IgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50c1xuICAgICAgICAgICAgICAgIGxldCB5dFN0YXJ0ZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHl0UHJvZ3Jlc3NJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuZXZlbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5KCBlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMubXV0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5tdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBzZWxmLm9wdGlvbnMudm9sdW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldFZvbHVtZSggc2VsZi5vcHRpb25zLnZvbHVtZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvcGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KCBzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdyZWFkeScsIGUgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHNlYW1sZXNzIGxvb3BzLCBzZXQgdGhlIGVuZFRpbWUgdG8gMC4xIHNlY29uZHMgbGVzcyB0aGFuIHRoZSB2aWRlbydzIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXIvaXNzdWVzLzJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmxvb3AgJiYgISBzZWxmLm9wdGlvbnMuZW5kVGltZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzT2Zmc2V0ID0gMC4xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5lbmRUaW1lID0gc2VsZi5wbGF5ZXIuZ2V0RHVyYXRpb24oKSAtIHNlY29uZHNPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZvbHVtZWNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFZvbHVtZSggKCB2b2x1bWUgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLnZvbHVtZSAhPT0gdm9sdW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3ZvbHVtZWNoYW5nZScsIGUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1MCApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlKCBlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMubG9vcCAmJiBlLmRhdGEgPT09IGdsb2JhbC5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXkoIHNlbGYub3B0aW9ucy5zdGFydFRpbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggISB5dFN0YXJ0ZWQgJiYgZS5kYXRhID09PSBnbG9iYWwuWVQuUGxheWVyU3RhdGUuUExBWUlORyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5dFN0YXJ0ZWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3N0YXJ0ZWQnLCBlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGUuZGF0YSA9PT0gZ2xvYmFsLllULlBsYXllclN0YXRlLlBMQVlJTkcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAncGxheScsIGUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZS5kYXRhID09PSBnbG9iYWwuWVQuUGxheWVyU3RhdGUuUEFVU0VEICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3BhdXNlJywgZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlLmRhdGEgPT09IGdsb2JhbC5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdlbmRlZCcsIGUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZS5kYXRhID09PSBnbG9iYWwuWVQuUGxheWVyU3RhdGUuUExBWUlORyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5dFByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICd0aW1ldXBkYXRlJywgZSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBlbmQgb2YgdmlkZW8gYW5kIHBsYXkgYWdhaW4gb3Igc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIHNlbGYucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5sb29wICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheSggc2VsZi5vcHRpb25zLnN0YXJ0VGltZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxNTAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggeXRQcm9ncmVzc0ludGVydmFsICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoIGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdlcnJvcicsIGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gISBzZWxmLiR2aWRlbztcbiAgICAgICAgICAgICAgICBpZiAoIGZpcnN0SW5pdCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSggJ2lkJywgc2VsZi5wbGF5ZXJJRCApO1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBoaWRkZW5EaXYgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIgPSBzZWxmLnBsYXllciB8fCBuZXcgZ2xvYmFsLllULlBsYXllciggc2VsZi5wbGF5ZXJJRCwgc2VsZi5wbGF5ZXJPcHRpb25zICk7XG4gICAgICAgICAgICAgICAgaWYgKCBmaXJzdEluaXQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIHNlbGYucGxheWVySUQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmFjY2Vzc2liaWxpdHlIaWRkZW4gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICd0YWJpbmRleCcsICctMScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvV2lkdGggPSBwYXJzZUludCggc2VsZi4kdmlkZW8uZ2V0QXR0cmlidXRlKCAnd2lkdGgnICksIDEwICkgfHwgMTI4MDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IHBhcnNlSW50KCBzZWxmLiR2aWRlby5nZXRBdHRyaWJ1dGUoICdoZWlnaHQnICksIDEwICkgfHwgNzIwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVmltZW9cbiAgICAgICAgICAgIGlmICggJ3ZpbWVvJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR0RQUiBDb21wbGlhbmNlLlxuICAgICAgICAgICAgICAgICAgICBkbnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBzZWxmLnZpZGVvSUQsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wYXVzZTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBzZWxmLm9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcbiAgICAgICAgICAgICAgICAgICAgbG9vcDogc2VsZi5vcHRpb25zLmxvb3AgPyAxIDogMCxcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWQ6IHNlbGYub3B0aW9ucy5tdXRlID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLnZvbHVtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnZvbHVtZSA9IHNlbGYub3B0aW9ucy52b2x1bWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBjb250cm9sc1xuICAgICAgICAgICAgICAgIGlmICggISBzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzICkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuYmFkZ2UgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuYnlsaW5lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBvcnRyYWl0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnRpdGxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLmJhY2tncm91bmQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggISBzZWxmLiR2aWRlbyApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllck9wdGlvbnNTdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoIHNlbGYucGxheWVyT3B0aW9ucyApLmZvckVhY2goICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAnJyAhPT0gcGxheWVyT3B0aW9uc1N0cmluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPcHRpb25zU3RyaW5nICs9ICcmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllck9wdGlvbnNTdHJpbmcgKz0gYCR7IGtleSB9PSR7IGVuY29kZVVSSUNvbXBvbmVudCggc2VsZi5wbGF5ZXJPcHRpb25zWyBrZXkgXSApIH1gO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgaWZyYW1lIG1hbnVhbGx5IGJlY2F1c2Ugd2hlbiB3ZSBjcmVhdGUgaXQgdXNpbmcgQVBJXG4gICAgICAgICAgICAgICAgICAgIC8vIGpzIGV2ZW50cyB3b24ndCB0cmlnZ2VycyBhZnRlciBpZnJhbWUgbW92ZWQgdG8gYW5vdGhlciBwbGFjZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpZnJhbWUnICk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSggJ2lkJywgc2VsZi5wbGF5ZXJJRCApO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7IHNlbGYudmlkZW9JRCB9PyR7IHBsYXllck9wdGlvbnNTdHJpbmcgfWAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAnZnJhbWVib3JkZXInLCAnMCcgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAnbW96YWxsb3dmdWxsc2NyZWVuJywgJycgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAnYWxsb3dmdWxsc2NyZWVuJywgJycgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAndGl0bGUnLCAnVmltZW8gdmlkZW8gcGxheWVyJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBhY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMuYWNjZXNzaWJpbGl0eUhpZGRlbiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSggJ3RhYmluZGV4JywgJy0xJyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZCggc2VsZi4kdmlkZW8gKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggaGlkZGVuRGl2ICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgbmV3IGdsb2JhbC5WaW1lby5QbGF5ZXIoIHNlbGYuJHZpZGVvLCBzZWxmLnBsYXllck9wdGlvbnMgKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IHRpbWUgZm9yIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICYmIHNlbGYub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuc2V0Q3VycmVudFRpbWUoIHNlbGYub3B0aW9ucy5zdGFydFRpbWUgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmdldFZpZGVvV2lkdGgoKS50aGVuKCAoIHdpZHRoICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvV2lkdGggPSB3aWR0aCB8fCAxMjgwO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5nZXRWaWRlb0hlaWdodCgpLnRoZW4oICggaGVpZ2h0ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gaGVpZ2h0IHx8IDcyMDtcbiAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICAvLyBldmVudHNcbiAgICAgICAgICAgICAgICBsZXQgdm1TdGFydGVkO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCAndGltZXVwZGF0ZScsICggZSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhIHZtU3RhcnRlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3N0YXJ0ZWQnLCBlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bVN0YXJ0ZWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAndGltZXVwZGF0ZScsIGUgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgZW5kIG9mIHZpZGVvIGFuZCBwbGF5IGFnYWluIG9yIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMuZW5kVGltZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmVuZFRpbWUgJiYgZS5zZWNvbmRzID49IHNlbGYub3B0aW9ucy5lbmRUaW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmxvb3AgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheSggc2VsZi5vcHRpb25zLnN0YXJ0VGltZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIub24oICdwbGF5JywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdwbGF5JywgZSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhcnQgdGltZSBhbmQgc3RhcnQgd2l0aCBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5zdGFydFRpbWUgJiYgMCA9PT0gZS5zZWNvbmRzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KCBzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIub24oICdwYXVzZScsICggZSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAncGF1c2UnLCBlICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCAnZW5kZWQnLCAoIGUgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ2VuZGVkJywgZSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5vbiggJ2xvYWRlZCcsICggZSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAncmVhZHknLCBlICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCAndm9sdW1lY2hhbmdlJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICd2b2x1bWVjaGFuZ2UnLCBlICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLm9uKCAnZXJyb3InLCAoIGUgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ2Vycm9yJywgZSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTG9jYWxcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNvdXJjZVRvTG9jYWwoIGVsZW1lbnQsIHNyYywgdHlwZSApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc291cmNlJyApO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgc291cmNlLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIHNvdXJjZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCAnbG9jYWwnID09PSBzZWxmLnR5cGUgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAhIHNlbGYuJHZpZGVvICkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLnNob3dDb250cm9scyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG11dGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMubXV0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggc2VsZi4kdmlkZW8udm9sdW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8udm9sdW1lID0gc2VsZi5vcHRpb25zLnZvbHVtZSAvIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMubG9vcCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b3BsYXkgZW5hYmxlIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSggJ3BsYXlzaW5saW5lJywgJycgKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCAnd2Via2l0LXBsYXlzaW5saW5lJywgJycgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmFjY2Vzc2liaWxpdHlIaWRkZW4gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICd0YWJpbmRleCcsICctMScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoICdpZCcsIHNlbGYucGxheWVySUQgKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKCBzZWxmLiR2aWRlbyApO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBoaWRkZW5EaXYgKTtcblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyggc2VsZi52aWRlb0lEICkuZm9yRWFjaCggKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTb3VyY2VUb0xvY2FsKCBzZWxmLiR2aWRlbywgc2VsZi52aWRlb0lEWyBrZXkgXSwgYHZpZGVvLyR7IGtleSB9YCApO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIgPSBzZWxmLnBsYXllciB8fCBzZWxmLiR2aWRlbztcblxuICAgICAgICAgICAgICAgIGxldCBsb2NTdGFydGVkO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoICdwbGF5aW5nJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICEgbG9jU3RhcnRlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3N0YXJ0ZWQnLCBlICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9jU3RhcnRlZCA9IDE7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoICd0aW1ldXBkYXRlJywgZnVuY3Rpb24oIGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3RpbWV1cGRhdGUnLCBlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5vcHRpb25zLmVuZFRpbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIHRoaXMuY3VycmVudFRpbWUgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMubG9vcCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KCBzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCAncGxheScsICggZSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAncGxheScsIGUgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3BhdXNlJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdwYXVzZScsIGUgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2VuZGVkJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdlbmRlZCcsIGUgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHRoaXMudmlkZW9XaWR0aCB8fCAxMjgwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlb0hlaWdodCB8fCA3MjA7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCAncmVhZHknICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXkoIHNlbGYub3B0aW9ucy5zdGFydFRpbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCAndm9sdW1lY2hhbmdlJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFZvbHVtZSggKCB2b2x1bWUgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSggJ3ZvbHVtZWNoYW5nZScsIGUgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgKCBlICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoICdlcnJvcicsIGUgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayggc2VsZi4kdmlkZW8gKTtcbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYucGxheWVySUQgPSBgVmlkZW9Xb3JrZXItJHsgc2VsZi5JRCB9YDtcbiAgICB9XG5cbiAgICBsb2FkQVBJKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIFlvdXR1YmVBUElhZGRlZCAmJiBWaW1lb0FQSWFkZGVkICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNyYyA9ICcnO1xuXG4gICAgICAgIC8vIGxvYWQgWW91dHViZSBBUElcbiAgICAgICAgaWYgKCAneW91dHViZScgPT09IHNlbGYudHlwZSAmJiAhIFlvdXR1YmVBUElhZGRlZCApIHtcbiAgICAgICAgICAgIFlvdXR1YmVBUElhZGRlZCA9IDE7XG4gICAgICAgICAgICBzcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkIFZpbWVvIEFQSVxuICAgICAgICBpZiAoICd2aW1lbycgPT09IHNlbGYudHlwZSAmJiAhIFZpbWVvQVBJYWRkZWQgKSB7XG4gICAgICAgICAgICBWaW1lb0FQSWFkZGVkID0gMTtcblxuICAgICAgICAgICAgLy8gVXNlZnVsIHdoZW4gVmltZW8gQVBJIGFkZGVkIHVzaW5nIFJlcXVpcmVKUyBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXIvcHVsbC83XG4gICAgICAgICAgICBpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZ2xvYmFsLlZpbWVvICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjID0gJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggISBzcmMgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2NyaXB0IGluIGhlYWQgc2VjdGlvblxuICAgICAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcbiAgICAgICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2hlYWQnIClbIDAgXTtcbiAgICAgICAgdGFnLnNyYyA9IHNyYztcblxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKCB0YWcgKTtcblxuICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgdGFnID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkFQSXJlYWR5KCBjYWxsYmFjayApIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gWW91dHViZVxuICAgICAgICBpZiAoICd5b3V0dWJlJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBnbG9iYWwgWVQgcGxheWVyIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiAoICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBnbG9iYWwuWVQgfHwgMCA9PT0gZ2xvYmFsLllULmxvYWRlZCApICYmICEgbG9hZGluZ1lvdXR1YmVQbGF5ZXIgKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudHMgUmVhZHkgZXZlbnQgZnJvbSBiZWluZyBjYWxsZWQgdHdpY2VcbiAgICAgICAgICAgICAgICBsb2FkaW5nWW91dHViZVBsYXllciA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGVzIGRlZmVycmVkIHNvLCBvdGhlciBwbGF5ZXJzIGtub3cgd2hlbiB0byB3YWl0LlxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nWW91dHViZURlZmVyLnJlc29sdmUoICdkb25lJyApO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbC5ZVCAmJiAxID09PSBnbG9iYWwuWVQubG9hZGVkICkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdZb3V0dWJlRGVmZXIuZG9uZSggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFZpbWVvXG4gICAgICAgIGlmICggJ3ZpbWVvJyA9PT0gc2VsZi50eXBlICkge1xuICAgICAgICAgICAgaWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGdsb2JhbC5WaW1lbyAmJiAhIGxvYWRpbmdWaW1lb1BsYXllciApIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nVmltZW9QbGF5ZXIgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpbWVvSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZ2xvYmFsLlZpbWVvICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggdmltZW9JbnRlcnZhbCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1ZpbWVvRGVmZXIucmVzb2x2ZSggJ2RvbmUnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZ2xvYmFsLlZpbWVvICkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdWaW1lb0RlZmVyLmRvbmUoICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2NhbFxuICAgICAgICBpZiAoICdsb2NhbCcgPT09IHNlbGYudHlwZSApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiamFyYWxsYXgiLCJqYXJhbGxheFZpZGVvIiwidXNlRWZmZWN0IiwiUGFyYWxsYXgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGVlZCIsInZpZGVvU3JjIl0sInNvdXJjZVJvb3QiOiIifQ==