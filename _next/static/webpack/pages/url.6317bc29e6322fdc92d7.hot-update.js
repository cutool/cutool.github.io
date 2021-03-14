webpackHotUpdate_N_E("pages/url",{

/***/ "./src/pages/url.tsx":
/*!***************************!*\
  !*** ./src/pages/url.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/cutool/src/pages/url.tsx\";\n\n\n\n\nclass URL extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      urlSource: \"\",\n      urlTarget: \"\",\n      urlVersion: \"\"\n    };\n  }\n\n  decodeUrl() {\n    let urlSource = this.state.urlSource;\n    let urlTarget = decodeURIComponent(urlSource);\n    this.setState({\n      urlTarget: decodeURIComponent(this.state.urlSource)\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      spacing: 3,\n      style: {\n        height: \"100%\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          content: \"url encodint, url decoding\",\n          name: \"keywords\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"https://cdn.bootcss.com/ajv/6.5.0/ajv.min.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"url.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlSource\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          style: {\n            float: \"right\",\n            marginTop: 10,\n            marginBottom: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"RFC1738 use '+' encode ' ', RFC2396 use '%20' encode ' '  \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n            id: \"rfcversion\",\n            labelId: \"rfcversion\",\n            style: {\n              marginRight: 10\n            },\n            defaultValue: \"RFC1738\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              selected: true,\n              value: \"RFC1738\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC1738\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              value: \"RFC2396\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC2396\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 47\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ButtonGroup\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlDecodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              onClick: this.decodeUrl,\n              children: \" Decoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlEncodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Encoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"parseParmBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Extract Params\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlTarget\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: this.state.urlTarget,\n          value: this.state.urlTarget\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (URL);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VybC50c3g/YjU2YyJdLCJuYW1lcyI6WyJVUkwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInVybFNvdXJjZSIsInVybFRhcmdldCIsInVybFZlcnNpb24iLCJkZWNvZGVVcmwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImhlaWdodCIsIndpZHRoIiwiZmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFhQSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBSyxDQUFDQyxTQUF4QixDQUFrRDtBQUU5Q0MsYUFBVyxDQUFDQyxLQUFELEVBQWM7QUFDckIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBVztBQUFDQyxlQUFTLEVBQUMsRUFBWDtBQUFlQyxlQUFTLEVBQUMsRUFBekI7QUFBNkJDLGdCQUFVLEVBQUM7QUFBeEMsS0FBWDtBQUNIOztBQUVEQyxXQUFTLEdBQUc7QUFDUixRQUFJSCxTQUFnQixHQUFHLEtBQUtELEtBQUwsQ0FBV0MsU0FBbEM7QUFDQSxRQUFJQyxTQUFTLEdBQUdHLGtCQUFrQixDQUFDSixTQUFELENBQWxDO0FBRUEsU0FBS0ssUUFBTCxDQUFjO0FBQ1ZKLGVBQVMsRUFBRUcsa0JBQWtCLENBQUMsS0FBS0wsS0FBTCxDQUFXQyxTQUFaO0FBRG5CLEtBQWQ7QUFHSDs7QUFFRE0sUUFBTSxHQUFFO0FBQ0osd0JBQVEscUVBQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQTRCLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUFuQztBQUFBLDhCQUNSLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0k7QUFBTSxpQkFBTyxFQUFDLDRCQUFkO0FBQTJDLGNBQUks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QUE7QUFBQSxjQU5RLGVBeUJSLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLGFBQUssRUFBRTtBQUFFTSxnQkFBTSxFQUFFO0FBQVY7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQTRCSDs7QUE3QzZDOztBQWdEbkNiLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VybC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEdyaWQsIE1lbnVJdGVtLCBTZWxlY3QsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQWx0ZXJuYXRlRW1haWwgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgdXJsU291cmNlOiBzdHJpbmc7XG4gIHVybFRhcmdldDogc3RyaW5nO1xuICB1cmxWZXJzaW9uOiBzdHJpbmc7XG59XG5cblxuY2xhc3MgVVJMIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpJUHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e3VybFNvdXJjZTpcIlwiLCB1cmxUYXJnZXQ6XCJcIiwgdXJsVmVyc2lvbjpcIlwifVxuICAgIH1cblxuICAgIGRlY29kZVVybCgpIHtcbiAgICAgICAgbGV0IHVybFNvdXJjZTpzdHJpbmcgPSB0aGlzLnN0YXRlLnVybFNvdXJjZVxuICAgICAgICBsZXQgdXJsVGFyZ2V0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybFNvdXJjZSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdXJsVGFyZ2V0OiBkZWNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS51cmxTb3VyY2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0gPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ1cmwgZW5jb2RpbnQsIHVybCBkZWNvZGluZ1wiIG5hbWU9XCJrZXl3b3Jkc1wiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmJvb3Rjc3MuY29tL2Fqdi82LjUuMC9hanYubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInVybC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cblxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidXJsU291cmNlXCIgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxuICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuPlJGQzE3MzggdXNlICcrJyBlbmNvZGUgJyAnLCBSRkMyMzk2IHVzZSAnJTIwJyBlbmNvZGUgJyAnICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBpZD1cInJmY3ZlcnNpb25cIiBsYWJlbElkPVwicmZjdmVyc2lvblwiICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gZGVmYXVsdFZhbHVlPVwiUkZDMTczOFwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gc2VsZWN0ZWQgdmFsdWU9XCJSRkMxNzM4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+UkZDMTczODwvZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJGQzIzOTZcIj48ZW0+UkZDMjM5NjwvZW0+PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBpZD1cInVybERlY29kZUJ0blwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXt0aGlzLmRlY29kZVVybH0gPiBEZWNvZGluZyA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaWQ9XCJ1cmxFbmNvZGVCdG5cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+IEVuY29kaW5nIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBpZD1cInBhcnNlUGFybUJ0blwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSA+IEV4dHJhY3QgUGFyYW1zPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidXJsVGFyZ2V0XCIgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fSBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudXJsVGFyZ2V0fSB2YWx1ZT17dGhpcy5zdGF0ZS51cmxUYXJnZXR9Lz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVJMICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/url.tsx\n");

/***/ })

})