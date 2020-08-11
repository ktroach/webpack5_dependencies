(window["webpackJsonpmodule_federation_ccc"] = window["webpackJsonpmodule_federation_ccc"] || []).push([["src-c_LazyComponent_js"],{

/***/ 6:
/*!********************************!*\
  !*** ./src-c/LazyComponent.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ 7);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);



const Component = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    border: "5px solid darkgreen"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I'm a lazy Component exposed from container C!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I'm lazy loaded by the app and lazy load another component myself."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Using lodash in Remote: ", lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, 6)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ })

}]);