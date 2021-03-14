webpackHotUpdate_N_E("pages/url",{

/***/ "./src/pages/url.tsx":
/*!***************************!*\
  !*** ./src/pages/url.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/cutool/src/pages/url.tsx\";\n\n\n\n\nclass URL extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.decodeUrl = this.decodeUrl.bind(this);\n    this.onSourceInput = this.onSourceInput.bind(this);\n    this.state = {\n      urlSource: \"\",\n      urlTarget: \"\",\n      urlVersion: \"RFC2396\"\n    };\n  }\n\n  onSourceInput(e) {\n    this.setState({\n      urlSource: e.target.value\n    });\n  }\n\n  decodeUrl() {\n    let urlSource = this.state.urlSource;\n\n    if (this.state.urlVersion == '') {}\n\n    let urlTarget = decodeURIComponent(urlSource);\n    this.setState({\n      urlTarget: decodeURIComponent(this.state.urlSource)\n    }); // console.log(this.state)\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      spacing: 3,\n      style: {\n        height: \"100%\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          content: \"url encodint, url decoding\",\n          name: \"keywords\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"https://cdn.bootcss.com/ajv/6.5.0/ajv.min.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlSource\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: this.state.urlSource,\n          onChange: this.onSourceInput\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          style: {\n            float: \"right\",\n            marginTop: 10,\n            marginBottom: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n              children: \"RFC1738 use '+' encode ' ', RFC2396 use '%20' encode ' ' \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 23\n            }, this), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n            id: \"rfcversion\",\n            labelId: \"rfcversion\",\n            style: {\n              marginRight: 10\n            },\n            defaultValue: this.state.urlVersion,\n            onChange: this.state.urlVersion,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              selected: true,\n              value: \"RFC1738\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC1738\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              value: \"RFC2396\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC2396\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 47\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ButtonGroup\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlDecodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              onClick: this.decodeUrl,\n              children: \" Decoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlEncodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Encoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"parseParmBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Extract Params\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlTarget\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: this.state.urlTarget,\n          value: this.state.urlTarget\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        id: \"formItem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (URL);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VybC50c3g/YjU2YyJdLCJuYW1lcyI6WyJVUkwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWNvZGVVcmwiLCJiaW5kIiwib25Tb3VyY2VJbnB1dCIsInN0YXRlIiwidXJsU291cmNlIiwidXJsVGFyZ2V0IiwidXJsVmVyc2lvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVuZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWFBLE1BQU1BLEdBQU4sU0FBa0JDLDRDQUFLLENBQUNDLFNBQXhCLENBQWtEO0FBRTlDQyxhQUFXLENBQUNDLEtBQUQsRUFBYztBQUNyQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsU0FBTCxHQUFnQixLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS0UsS0FBTCxHQUFZO0FBQUNDLGVBQVMsRUFBQyxFQUFYO0FBQWVDLGVBQVMsRUFBQyxFQUF6QjtBQUE2QkMsZ0JBQVUsRUFBQztBQUF4QyxLQUFaO0FBQ0g7O0FBRURKLGVBQWEsQ0FBQ0ssQ0FBRCxFQUFPO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNWSixlQUFTLEVBQUVHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURWLEtBQWQ7QUFHSDs7QUFFRFYsV0FBUyxHQUFHO0FBQ1IsUUFBSUksU0FBUyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsU0FBM0I7O0FBQ0EsUUFBSSxLQUFLRCxLQUFMLENBQVdHLFVBQVgsSUFBdUIsRUFBM0IsRUFB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QUFBQTtBQUFBLG9CQUZKLGVBR0kscUVBQUMsd0RBQUQ7QUFBUSxxQkFBTyxFQUFDLFdBQWhCO0FBQTRCLG1CQUFLLEVBQUMsU0FBbEM7QUFBNEMsZ0JBQUUsRUFBQyxjQUEvQztBQUE4RCxtQkFBSyxFQUFFO0FBQUVBLDJCQUFXLEVBQUU7QUFBZixlQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBaUJJO0FBQVUsWUFBRSxFQUFDLFdBQWI7QUFBeUIsZUFBSyxFQUFFO0FBQUVMLGtCQUFNLEVBQUUsR0FBVjtBQUFlQyxpQkFBSyxFQUFFO0FBQXRCLFdBQWhDO0FBQWdFLHNCQUFZLEVBQUUsS0FBS1gsS0FBTCxDQUFXRSxTQUF6RjtBQUFvRyxlQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRTtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOUSxlQXlCUixxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLFVBQUUsRUFBRSxDQUF2QjtBQUEwQixhQUFLLEVBQUU7QUFBRVEsZ0JBQU0sRUFBRTtBQUFWLFNBQWpDO0FBQXFELFVBQUUsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBNkJIOztBQXpENkM7O0FBNERuQ2xCLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VybC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEdyaWQsIE1lbnVJdGVtLCBTZWxlY3QsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQWx0ZXJuYXRlRW1haWwgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgdXJsU291cmNlOiBzdHJpbmc7XG4gIHVybFRhcmdldDogc3RyaW5nO1xuICB1cmxWZXJzaW9uOiBzdHJpbmc7XG59XG5cblxuY2xhc3MgVVJMIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpJUHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVjb2RlVXJsPSB0aGlzLmRlY29kZVVybC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25Tb3VyY2VJbnB1dCA9IHRoaXMub25Tb3VyY2VJbnB1dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGU9IHt1cmxTb3VyY2U6XCJcIiwgdXJsVGFyZ2V0OlwiXCIsIHVybFZlcnNpb246XCJSRkMyMzk2XCJ9IFxuICAgIH1cblxuICAgIG9uU291cmNlSW5wdXQoZTphbnkpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVybFNvdXJjZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWNvZGVVcmwoKSB7XG4gICAgICAgIGxldCB1cmxTb3VyY2UgPSB0aGlzLnN0YXRlLnVybFNvdXJjZVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS51cmxWZXJzaW9uPT0nJyl7XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsVGFyZ2V0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybFNvdXJjZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1cmxUYXJnZXQ6IGRlY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLnVybFNvdXJjZSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuICg8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInVybCBlbmNvZGludCwgdXJsIGRlY29kaW5nXCIgbmFtZT1cImtleXdvcmRzXCIgLz5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uYm9vdGNzcy5jb20vYWp2LzYuNS4wL2Fqdi5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cInVybC5qc1wiPjwvc2NyaXB0PiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInVybFNvdXJjZVwiIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogXCIxMDAlXCIgfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVybFNvdXJjZX0gb25DaGFuZ2U9e3RoaXMub25Tb3VyY2VJbnB1dH0vPlxuICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuPjxlbT5SRkMxNzM4IHVzZSAnKycgZW5jb2RlICcgJywgUkZDMjM5NiB1c2UgJyUyMCcgZW5jb2RlICcgJyA8L2VtPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBpZD1cInJmY3ZlcnNpb25cIiBsYWJlbElkPVwicmZjdmVyc2lvblwiICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVybFZlcnNpb259IG9uQ2hhbmdlPXt0aGlzLnN0YXRlLnVybFZlcnNpb259PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gc2VsZWN0ZWQgdmFsdWU9XCJSRkMxNzM4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+UkZDMTczODwvZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJGQzIzOTZcIj48ZW0+UkZDMjM5NjwvZW0+PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBpZD1cInVybERlY29kZUJ0blwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXt0aGlzLmRlY29kZVVybH0gPiBEZWNvZGluZyA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaWQ9XCJ1cmxFbmNvZGVCdG5cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+IEVuY29kaW5nIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBpZD1cInBhcnNlUGFybUJ0blwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSA+IEV4dHJhY3QgUGFyYW1zPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidXJsVGFyZ2V0XCIgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fSBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudXJsVGFyZ2V0fSB2YWx1ZT17dGhpcy5zdGF0ZS51cmxUYXJnZXR9Lz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0gaWQ9XCJmb3JtSXRlbVwiPlxuXG4gICAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVJMICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/url.tsx\n");

/***/ })

})