(window["webpackJsonpmodule_federation_aaa"] = window["webpackJsonpmodule_federation_aaa"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react_react"],{

/***/ 10:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mfe_b_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mfe-b/Component */ 11);
/* harmony import */ var mfe_b_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mfe_b_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mfe_c_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mfe-c/Component */ 13);
/* harmony import */ var mfe_c_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mfe_c_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ 15);

 // <- these are remote modules,

 // <- but they are used as usual packages

 // remote modules can also be used with import() which lazy loads them as usual

const ComponentD = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_mfe-c_Component2").then(__webpack_require__.t.bind(__webpack_require__, /*! mfe-c/Component2 */ 27, 7)));

const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello World")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This component is from a remote container:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((mfe_b_Component__WEBPACK_IMPORTED_MODULE_1___default()), {
  locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "And this component is from another remote container:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((mfe_c_Component__WEBPACK_IMPORTED_MODULE_2___default()), {
  locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lazy loading component...")
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "And this component is from this remote container too, but lazy loaded:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ComponentD, null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 2:
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ 3);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 10);

 // <- this is a shared module, but used as usual

 // load app

const el = document.createElement("main");
react_dom__WEBPACK_IMPORTED_MODULE_0___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), el);
document.body.appendChild(el); // remove spinner

document.body.removeChild(document.getElementsByClassName("spinner")[0]);

/***/ })

}]);