"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Certificates_js"],{

/***/ "./src/app/components/Certificate.js":
/*!*******************************************!*\
  !*** ./src/app/components/Certificate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_certificates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/certificates */ \"./src/app/consts/certificates.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n\n\n\nfunction mapLink({ platform, linkId }) {\n  const href = `https://${_consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][platform]}${linkId}`;\n  const name = platform[0].toUpperCase() + platform.slice(1);\n\n  return /*html*/ `<a href=\"${href}\" target=\"_blank\" class=\"button\">${name} =></a>`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n  const certificate = _consts_certificates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((certificate) => certificate.id === id);\n  if (!certificate) return \"\";\n\n  const { hasImage } = certificate;\n\n  return /*html*/ `\n    <div class=\"certificate\">\n      ${\n        hasImage\n          ? `<img src=\"/images/certificates/${id}.png\" alt=\"${t[id].name}\" class=\"certificate__image\">`\n          : \"\"\n      }\n      <div class=\"certificate__content\">\n        <div class=\"certificate__name\">${t[id].name}</div>\n        <div class=\"certificate__links\">${mapLink(certificate)}</div>\n      </div>\n    </div>\n  `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Certificate.js?");

/***/ }),

/***/ "./src/app/components/CertificateList.js":
/*!***********************************************!*\
  !*** ./src/app/components/CertificateList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Certificate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Certificate */ \"./src/app/components/Certificate.js\");\n/* harmony import */ var _consts_certificates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/certificates */ \"./src/app/consts/certificates.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((\n  { title, filter = () => true, limit = _consts_certificates__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length },\n  t\n) => {\n  return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"certificate-list\">\n                ${_consts_certificates__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                  .filter(filter)\n                  .slice(0, limit)\n                  .sort((a, b) => a.hasImage - b.hasImage)\n                  .map(({ id }) => (0,_components_Certificate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                  .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/CertificateList.js?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/consts/certificates.js":
/*!****************************************!*\
  !*** ./src/app/consts/certificates.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst certificates = [\n  {\n    id: \"frontend-developer-nanodegree\",\n    linkId: \"0990e88a-92f0-11eb-99fa-07f04dddd2b4\",\n    platform: \"udacity\",\n    hasImage: true,\n  },\n  {\n    id: \"fullstack-developer-nanodegree\",\n    linkId: \"7c573428-7366-11ea-bac6-7b69eceb68a3\",\n    platform: \"udacity\",\n    hasImage: true,\n  },\n  {\n    id: \"design-patterns\",\n    linkId: \"4a6afdf52dcabe85c8d1114c77707dd4\",\n    platform: \"coursera\",\n    hasImage: true,\n  },\n  {\n    id: \"object-orianted-design\",\n    linkId: \"262d8da5fbd5670b0b990a22ecb4bee8\",\n    platform: \"coursera\",\n    hasImage: true,\n  },\n  {\n    id: \"fullstack-development\",\n    linkId: \"866c5c1c-5567-11ea-8447-77b3f5cbb653\",\n    platform: \"udacity\",\n    hasImage: true,\n  },\n  {\n    id: \"machine-learning-nanodegree\",\n    linkId: \"52021f46-f927-11ec-8bea-7fb7efc21e5e\",\n    platform: \"udacity\",\n    hasImage: true,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificates);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/certificates.js?");

/***/ }),

/***/ "./src/app/views/Certificates.js":
/*!***************************************!*\
  !*** ./src/app/views/Certificates.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_CertificateList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CertificateList.js */ \"./src/app/components/CertificateList.js\");\n/* harmony import */ var styles_pages_certificates_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/certificates.sass */ \"./src/assets/styles/pages/certificates.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        ${(0,_components_CertificateList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.udacity, filter: (p) => p.platform === \"udacity\" }, t2.certificates)}\n        ${(0,_components_CertificateList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.coursera, filter: (p) => p.platform === \"coursera\" }, t2.certificates)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Certificates.js?");

/***/ }),

/***/ "./src/assets/styles/pages/certificates.sass":
/*!***************************************************!*\
  !*** ./src/assets/styles/pages/certificates.sass ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/certificates.sass?");

/***/ })

}]);