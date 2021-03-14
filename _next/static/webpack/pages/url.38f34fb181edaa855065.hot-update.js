webpackHotUpdate_N_E("pages/url",{

/***/ "./src/pages/url.tsx":
/*!***************************!*\
  !*** ./src/pages/url.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/cutool/src/pages/url.tsx\";\n\n\n\n\nclass URL extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      urlSource: \"\",\n      urlTarget: \"\",\n      urlVersion: \"\"\n    };\n  }\n\n  decodeUrl() {\n    this.state.urlTarget = decodeURIComponent(urlSource);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      spacing: 3,\n      style: {\n        height: \"100%\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          content: \"url encodint, url decoding\",\n          name: \"keywords\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"https://cdn.bootcss.com/ajv/6.5.0/ajv.min.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"url.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlSource\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          style: {\n            float: \"right\",\n            marginTop: 10,\n            marginBottom: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"RFC1738 use '+' encode ' ', RFC2396 use '%20' encode ' '  \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n            id: \"rfcversion\",\n            labelId: \"rfcversion\",\n            style: {\n              marginRight: 10\n            },\n            defaultValue: \"RFC1738\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              selected: true,\n              value: \"RFC1738\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC1738\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              value: \"RFC2396\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC2396\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 47\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ButtonGroup\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlDecodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Decoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlEncodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Encoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"parseParmBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Extract Params\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlTarget\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: urlTarget,\n          value: urlTarget,\n          onChange: e => urlTarget = e.target.value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (URL);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VybC50c3g/YjU2YyJdLCJuYW1lcyI6WyJVUkwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInVybFNvdXJjZSIsInVybFRhcmdldCIsInVybFZlcnNpb24iLCJkZWNvZGVVcmwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW5kZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImZsb2F0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBYUEsTUFBTUEsR0FBTixTQUFrQkMsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0Q7QUFFOUNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFjO0FBQ3JCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQVc7QUFBQ0MsZUFBUyxFQUFDLEVBQVg7QUFBZUMsZUFBUyxFQUFDLEVBQXpCO0FBQTZCQyxnQkFBVSxFQUFDO0FBQXhDLEtBQVg7QUFDSDs7QUFFREMsV0FBUyxHQUFHO0FBRVIsU0FBS0osS0FBTCxDQUFXRSxTQUFYLEdBQXVCRyxrQkFBa0IsQ0FBQ0osU0FBRCxDQUF6QztBQUNIOztBQUVESyxRQUFNLEdBQUU7QUFDSix3QkFBUSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BQW5DO0FBQUEsOEJBQ1IscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUMsNEJBQWQ7QUFBMkMsY0FBSSxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFRLGFBQUcsRUFB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RUFBRTtBQUFFUixnQkFBTSxFQUFFO0FBQVY7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQTRCSDs7QUF6QzZDOztBQTRDbkNaLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VybC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEdyaWQsIE1lbnVJdGVtLCBTZWxlY3QsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQWx0ZXJuYXRlRW1haWwgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgdXJsU291cmNlPzogc3RyaW5nO1xuICB1cmxUYXJnZXQ/OiBzdHJpbmc7XG4gIHVybFZlcnNpb24/OiBzdHJpbmc7XG59XG5cblxuY2xhc3MgVVJMIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpJUHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e3VybFNvdXJjZTpcIlwiLCB1cmxUYXJnZXQ6XCJcIiwgdXJsVmVyc2lvbjpcIlwifVxuICAgIH1cblxuICAgIGRlY29kZVVybCgpIHtcblxuICAgICAgICB0aGlzLnN0YXRlLnVybFRhcmdldCA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxTb3VyY2UpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19ID5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PVwidXJsIGVuY29kaW50LCB1cmwgZGVjb2RpbmdcIiBuYW1lPVwia2V5d29yZHNcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5ib290Y3NzLmNvbS9hanYvNi41LjAvYWp2Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJ1cmwuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInVybFNvdXJjZVwiIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5SRkMxNzM4IHVzZSAnKycgZW5jb2RlICcgJywgUkZDMjM5NiB1c2UgJyUyMCcgZW5jb2RlICcgJyAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJyZmN2ZXJzaW9uXCIgbGFiZWxJZD1cInJmY3ZlcnNpb25cIiAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IGRlZmF1bHRWYWx1ZT1cIlJGQzE3MzhcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHNlbGVjdGVkIHZhbHVlPVwiUkZDMTczOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPlJGQzE3Mzg8L2VtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSRkMyMzk2XCI+PGVtPlJGQzIzOTY8L2VtPjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaWQ9XCJ1cmxEZWNvZGVCdG5cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gPiBEZWNvZGluZyA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaWQ9XCJ1cmxFbmNvZGVCdG5cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+IEVuY29kaW5nIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBpZD1cInBhcnNlUGFybUJ0blwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSA+IEV4dHJhY3QgUGFyYW1zPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidXJsVGFyZ2V0XCIgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fSBkZWZhdWx0VmFsdWU9e3VybFRhcmdldH0gdmFsdWU9e3VybFRhcmdldH0gb25DaGFuZ2U9e2U9PiB1cmxUYXJnZXQgPSBlLnRhcmdldC52YWx1ZX0vPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVUkwgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/url.tsx\n");

/***/ })

})