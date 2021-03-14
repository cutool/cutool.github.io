webpackHotUpdate_N_E("pages/url",{

/***/ "./src/pages/url.tsx":
/*!***************************!*\
  !*** ./src/pages/url.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/xuwei/xtestw/cutool/src/pages/url.tsx\";\n\n\n\n\nclass URL extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.decodeUrl = this.decodeUrl.bind(this);\n    this.encodeUrl = this.encodeUrl.bind(this);\n    this.onSourceInput = this.onSourceInput.bind(this);\n    this.state = {\n      urlSource: \"\",\n      urlTarget: \"\",\n      urlVersion: \"RFC2396\"\n    };\n  }\n\n  onSourceInput(e) {\n    this.setState({\n      urlSource: e.target.value\n    });\n  }\n\n  decodeUrl() {\n    let urlSource = this.state.urlSource;\n\n    if (this.state.urlVersion == 'RFC2396') {\n      urlSource = urlSource.replaceAll('+', \"%20\");\n    }\n\n    let urlTarget = decodeURIComponent(urlSource);\n    this.setState({\n      urlTarget: urlTarget\n    }); // console.log(this.state)\n  }\n\n  encodeUrl() {\n    let urlSource = this.state.urlSource;\n    let urlTarget = encodeURIComponent(urlSource);\n\n    if (this.state.urlVersion == 'RFC2396') {\n      urlTarget = urlTarget.replaceAll(\"%20\", \"+\");\n    } // alert(urlTarget)\n\n\n    this.setState({\n      urlTarget: urlTarget\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      spacing: 3,\n      style: {\n        height: \"100%\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          content: \"url encodint, url decoding\",\n          name: \"keywords\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"https://cdn.bootcss.com/ajv/6.5.0/ajv.min.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlSource\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: this.state.urlSource,\n          onChange: this.onSourceInput\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          style: {\n            float: \"right\",\n            marginTop: 10,\n            marginBottom: 10\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n              children: \"RFC1738 use '+' encode ' ', RFC2396 use '%20' encode ' ' \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 23\n            }, this), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n            id: \"rfcversion\",\n            labelId: \"rfcversion\",\n            style: {\n              marginRight: 10\n            },\n            defaultValue: this.state.urlVersion,\n            onChange: e => this.setState({\n              urlVersion: e.target.value\n            }),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              selected: true,\n              value: \"RFC1738\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC1738\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n              value: \"RFC2396\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n                children: \"RFC2396\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 47\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 17\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ButtonGroup\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlDecodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              onClick: this.decodeUrl,\n              children: \" Decoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"urlEncodeBtn\",\n              style: {\n                marginRight: 10\n              },\n              onClick: this.encodeUrl,\n              children: \" Encoding \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"contained\",\n              color: \"primary\",\n              id: \"parseParmBtn\",\n              style: {\n                marginRight: 10\n              },\n              children: \" Extract Params\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"urlTarget\",\n          style: {\n            height: 300,\n            width: \"100%\"\n          },\n          defaultValue: this.state.urlTarget,\n          value: this.state.urlTarget\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 6,\n        style: {\n          height: \"100%\"\n        },\n        id: \"formItem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (URL);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VybC50c3g/YjU2YyJdLCJuYW1lcyI6WyJVUkwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWNvZGVVcmwiLCJiaW5kIiwiZW5jb2RlVXJsIiwib25Tb3VyY2VJbnB1dCIsInN0YXRlIiwidXJsU291cmNlIiwidXJsVGFyZ2V0IiwidXJsVmVyc2lvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZUFsbCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbmRlciIsImhlaWdodCIsIndpZHRoIiwiZmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFhQSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBSyxDQUFDQyxTQUF4QixDQUFrRDtBQUU5Q0MsYUFBVyxDQUFDQyxLQUFELEVBQWM7QUFDckIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLFNBQUwsR0FBZ0IsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxTQUFLRSxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJGLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS0csS0FBTCxHQUFZO0FBQUNDLGVBQVMsRUFBQyxFQUFYO0FBQWVDLGVBQVMsRUFBQyxFQUF6QjtBQUE2QkMsZ0JBQVUsRUFBQztBQUF4QyxLQUFaO0FBQ0g7O0FBRURKLGVBQWEsQ0FBQ0ssQ0FBRCxFQUFPO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNWSixlQUFTLEVBQUVHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURWLEtBQWQ7QUFHSDs7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RyxlQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRTtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOUSxlQXlCUixxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLFVBQUUsRUFBRSxDQUF2QjtBQUEwQixhQUFLLEVBQUU7QUFBRVUsZ0JBQU0sRUFBRTtBQUFWLFNBQWpDO0FBQXFELFVBQUUsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBNkJIOztBQXRFNkM7O0FBeUVuQ3JCLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VybC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEdyaWQsIE1lbnVJdGVtLCBTZWxlY3QsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQWx0ZXJuYXRlRW1haWwgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgdXJsU291cmNlOiBzdHJpbmc7XG4gIHVybFRhcmdldDogc3RyaW5nO1xuICB1cmxWZXJzaW9uOiBzdHJpbmc7XG59XG5cblxuY2xhc3MgVVJMIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpJUHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVjb2RlVXJsPSB0aGlzLmRlY29kZVVybC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZW5jb2RlVXJsID0gdGhpcy5lbmNvZGVVcmwuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uU291cmNlSW5wdXQgPSB0aGlzLm9uU291cmNlSW5wdXQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnN0YXRlPSB7dXJsU291cmNlOlwiXCIsIHVybFRhcmdldDpcIlwiLCB1cmxWZXJzaW9uOlwiUkZDMjM5NlwifSBcbiAgICB9XG5cbiAgICBvblNvdXJjZUlucHV0KGU6YW55KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1cmxTb3VyY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVjb2RlVXJsKCkge1xuICAgICAgICBsZXQgdXJsU291cmNlID0gdGhpcy5zdGF0ZS51cmxTb3VyY2VcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXJsVmVyc2lvbj09J1JGQzIzOTYnKXtcbiAgICAgICAgICAgIHVybFNvdXJjZSA9IHVybFNvdXJjZS5yZXBsYWNlQWxsKCcrJyxcIiUyMFwiKVxuICAgICAgICB9XG4gICAgICAgIGxldCB1cmxUYXJnZXQgPSBkZWNvZGVVUklDb21wb25lbnQodXJsU291cmNlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVybFRhcmdldDogdXJsVGFyZ2V0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgfVxuXG4gICAgZW5jb2RlVXJsKCkge1xuICAgICAgICBsZXQgdXJsU291cmNlID0gdGhpcy5zdGF0ZS51cmxTb3VyY2VcbiAgICAgICAgbGV0IHVybFRhcmdldCA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmxTb3VyY2UpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVybFZlcnNpb249PSdSRkMyMzk2Jyl7XG4gICAgICAgICAgICB1cmxUYXJnZXQgPSB1cmxUYXJnZXQucmVwbGFjZUFsbChcIiUyMFwiLFwiK1wiKVxuICAgICAgICB9XG4gICAgICAgIC8vIGFsZXJ0KHVybFRhcmdldClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1cmxUYXJnZXQ6IHVybFRhcmdldFxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuICg8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInVybCBlbmNvZGludCwgdXJsIGRlY29kaW5nXCIgbmFtZT1cImtleXdvcmRzXCIgLz5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uYm9vdGNzcy5jb20vYWp2LzYuNS4wL2Fqdi5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cInVybC5qc1wiPjwvc2NyaXB0PiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInVybFNvdXJjZVwiIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogXCIxMDAlXCIgfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVybFNvdXJjZX0gb25DaGFuZ2U9e3RoaXMub25Tb3VyY2VJbnB1dH0vPlxuICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuPjxlbT5SRkMxNzM4IHVzZSAnKycgZW5jb2RlICcgJywgUkZDMjM5NiB1c2UgJyUyMCcgZW5jb2RlICcgJyA8L2VtPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBpZD1cInJmY3ZlcnNpb25cIiBsYWJlbElkPVwicmZjdmVyc2lvblwiICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVybFZlcnNpb259IG9uQ2hhbmdlPXtlPT50aGlzLnNldFN0YXRlKHt1cmxWZXJzaW9uOiBlLnRhcmdldC52YWx1ZX0pfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHNlbGVjdGVkIHZhbHVlPVwiUkZDMTczOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPlJGQzE3Mzg8L2VtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSRkMyMzk2XCI+PGVtPlJGQzIzOTY8L2VtPjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgaWQ9XCJ1cmxEZWNvZGVCdG5cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gb25DbGljaz17dGhpcy5kZWNvZGVVcmx9ID4gRGVjb2RpbmcgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGlkPVwidXJsRW5jb2RlQnRuXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IG9uQ2xpY2s9e3RoaXMuZW5jb2RlVXJsfT4gRW5jb2RpbmcgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGlkPVwicGFyc2VQYXJtQnRuXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19ID4gRXh0cmFjdCBQYXJhbXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ1cmxUYXJnZXRcIiBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgd2lkdGg6IFwiMTAwJVwiIH19IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS51cmxUYXJnZXR9IHZhbHVlPXt0aGlzLnN0YXRlLnVybFRhcmdldH0vPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBpZD1cImZvcm1JdGVtXCI+XG5cbiAgICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVUkwgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/url.tsx\n");

/***/ })

})