"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "./pages/api/categories/index.ts":
/*!***************************************!*\
  !*** ./pages/api/categories/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.ts\");\n\nconst selectFields = {\n  id: true,\n  name: true,\n  products: {\n    select: {\n      id: true,\n      name: true,\n      image: true,\n      price: true,\n      slug: true\n    }\n  }\n};\n\nconst getCategoriesWithProducts = async (req, res) => {\n  if (req.method !== \"GET\") {\n    return res.status(405).json({\n      message: \"Method not allowed.\"\n    });\n  }\n\n  const categories = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.category.findMany({\n    where: {\n      products: {\n        some: {}\n      }\n    },\n    select: selectFields,\n    orderBy: {\n      name: \"asc\"\n    }\n  });\n  return res.status(200).json(categories);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategoriesWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBRUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxFQUFFLEVBQUUsSUFEZTtBQUVuQkMsRUFBQUEsSUFBSSxFQUFFLElBRmE7QUFHbkJDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkgsTUFBQUEsRUFBRSxFQUFFLElBREU7QUFFTkMsTUFBQUEsSUFBSSxFQUFFLElBRkE7QUFHTkcsTUFBQUEsS0FBSyxFQUFFLElBSEQ7QUFJTkMsTUFBQUEsS0FBSyxFQUFFLElBSkQ7QUFLTkMsTUFBQUEsSUFBSSxFQUFFO0FBTEE7QUFEQTtBQUhTLENBQXJCOztBQWNBLE1BQU1DLHlCQUF5QixHQUFHLE9BQ2hDQyxHQURnQyxFQUVoQ0MsR0FGZ0MsS0FHN0I7QUFDSCxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixXQUFPRCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFHLE1BQU1oQixrRUFBQSxDQUF5QjtBQUNoRG1CLElBQUFBLEtBQUssRUFBRTtBQUNMZixNQUFBQSxRQUFRLEVBQUU7QUFBRWdCLFFBQUFBLElBQUksRUFBRTtBQUFSO0FBREwsS0FEeUM7QUFJaERmLElBQUFBLE1BQU0sRUFBRUosWUFKd0M7QUFLaERvQixJQUFBQSxPQUFPLEVBQUU7QUFDUGxCLE1BQUFBLElBQUksRUFBRTtBQURDO0FBTHVDLEdBQXpCLENBQXpCO0FBVUEsU0FBT1EsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJFLFVBQXJCLENBQVA7QUFDRCxDQW5CRDs7QUFxQkEsaUVBQWVQLHlCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emEtZXhwcmVzcy1uZXh0anMvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cz85NWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB0eXBlIHsgRXJyb3JEdG8sIENhdGVnb3J5V2l0aFByb2R1Y3RzRHRvIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3ByaXNtYVwiO1xuXG5jb25zdCBzZWxlY3RGaWVsZHMgPSB7XG4gIGlkOiB0cnVlLFxuICBuYW1lOiB0cnVlLFxuICBwcm9kdWN0czoge1xuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgaW1hZ2U6IHRydWUsXG4gICAgICBwcmljZTogdHJ1ZSxcbiAgICAgIHNsdWc6IHRydWVcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldENhdGVnb3JpZXNXaXRoUHJvZHVjdHMgPSBhc3luYyAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPEVycm9yRHRvIHwgQ2F0ZWdvcnlXaXRoUHJvZHVjdHNEdG9bXT5cbikgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkLlwiIH0pO1xuICB9XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yeS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHByb2R1Y3RzOiB7IHNvbWU6IHt9IH1cbiAgICB9LFxuICAgIHNlbGVjdDogc2VsZWN0RmllbGRzLFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIG5hbWU6IFwiYXNjXCJcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhdGVnb3JpZXNXaXRoUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsicHJpc21hIiwic2VsZWN0RmllbGRzIiwiaWQiLCJuYW1lIiwicHJvZHVjdHMiLCJzZWxlY3QiLCJpbWFnZSIsInByaWNlIiwic2x1ZyIsImdldENhdGVnb3JpZXNXaXRoUHJvZHVjdHMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImZpbmRNYW55Iiwid2hlcmUiLCJzb21lIiwib3JkZXJCeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/categories/index.ts\n");

/***/ }),

/***/ "./util/prisma.ts":
/*!************************!*\
  !*** ./util/prisma.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: [\"query\"]\n});\n\nif (true) {\n  global.prisma = prisma;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3ByaXNtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQU1PLE1BQU1DLE1BQU0sR0FDakJDLE1BQU0sQ0FBQ0QsTUFBUCxJQUNBLElBQUlELHdEQUFKLENBQWlCO0FBQ2ZHLEVBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFEVSxDQUFqQixDQUZLOztBQU1QLElBQUksTUFBdUM7QUFDekNELEVBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQkEsTUFBaEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLWV4cHJlc3MtbmV4dGpzLy4vdXRpbC9wcmlzbWEudHM/MTFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWwucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogW1wicXVlcnlcIl1cbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/prisma.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/index.ts"));
module.exports = __webpack_exports__;

})();