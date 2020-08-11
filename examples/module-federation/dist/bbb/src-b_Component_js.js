(window["webpackJsonpmodule_federation_bbb"] = window["webpackJsonpmodule_federation_bbb"] || []).push([["src-b_Component_js"],{

/***/ 3:
/*!****************************!*\
  !*** ./src-b/Component.js ***!
  \****************************/
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 5);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);

 // date-fns is a shared module, but used as usual
// exposing modules act as async boundary,
// so no additional async boundary need to be added here
// As data-fns is an shared module, it will be placed in a separate file
// It will be loaded in parallel to the code of this module

const Component = ({
  locale
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    border: "5px solid darkblue"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I'm a Component exposed from container B!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Using date-fn in Remote:", " ", (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.formatRelative)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subDays)(new Date(), 2), new Date(), {
  locale
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ })

}]);