/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p5/gallery/droplet",{

/***/ "./p5/sketch/droplet.ts":
/*!******************************!*\
  !*** ./p5/sketch/droplet.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar Wave = /*#__PURE__*/function () {\n  function Wave(x, y, xMax, yMax) {\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Wave);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"xCenter\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"yCenter\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"xMax\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"yMax\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"step\", 0);\n\n    this.xCenter = x;\n    this.yCenter = y;\n    this.xMax = xMax;\n    this.yMax = yMax;\n    this.step = 0;\n  }\n\n  (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Wave, [{\n    key: \"strength\",\n    value: function strength(x, y) {\n      var d = Math.sqrt(Math.pow(x - this.xCenter, 2) + Math.pow(y - this.yCenter, 2));\n      return Math.sin(-0.06 * d + this.step);\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.step += 0.02;\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var theta = Math.random() * Math.PI * 2;\n      var xNext = 0.1 * Math.sin(theta) + this.xCenter;\n      var yNext = 0.1 * Math.cos(theta) + this.yCenter;\n\n      if (xNext >= 0 && xNext <= this.xMax && yNext >= 0 && yNext <= this.yMax) {\n        this.xCenter = xNext;\n        this.yCenter = yNext;\n      }\n    }\n  }]);\n\n  return Wave;\n}();\n\nvar rWave;\nvar gWave;\nvar bWave;\n\nvar sketch = function sketch(p5) {\n  p5.setup = function () {\n    p5.createCanvas(900, 400);\n    p5.frameRate(15);\n    p5.blendMode(p5.ADD);\n    p5.stroke(255);\n    p5.strokeWeight(0.5);\n    rWave = new Wave(0.2 * p5.width, 0.4 * p5.height, p5.width, p5.height);\n    gWave = new Wave(0.5 * p5.width, 0.1 * p5.height, p5.width, p5.height);\n    bWave = new Wave(0.7 * p5.width, 0.9 * p5.height, p5.width, p5.height);\n  };\n\n  p5.draw = function () {\n    p5.clear();\n\n    for (var x = 0; x < p5.width; x += 13) {\n      for (var y = 0; y < p5.height; y += 13) {\n        var r = rWave.strength(x, y) * 200 + 10;\n        var g = gWave.strength(x, y) * 200 + 10;\n        var b = bWave.strength(x, y) * 200 + 10;\n        var bright = Math.max(Math.min((r + g + b) / 3, 255), 0);\n\n        if (bright < 100) {\n          continue;\n        }\n\n        p5.fill(r, g, b, bright * 3);\n        p5.circle(x, y, Math.max(0, Math.min(0.2 * bright, 27)));\n        console.log(bright * 3);\n      }\n    }\n\n    rWave.addStep();\n    gWave.addStep();\n    bWave.addStep();\n    var rand = Math.random();\n\n    if (rand < 0.33) {\n      rWave.move();\n    } else if (rand < 0.66) {\n      gWave.move();\n    } else {\n      bWave.move();\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcDUvc2tldGNoL2Ryb3BsZXQudHM/YmJmMiJdLCJuYW1lcyI6WyJXYXZlIiwieCIsInkiLCJ4TWF4IiwieU1heCIsInhDZW50ZXIiLCJ5Q2VudGVyIiwic3RlcCIsImQiLCJNYXRoIiwic3FydCIsInBvdyIsInNpbiIsInRoZXRhIiwicmFuZG9tIiwiUEkiLCJ4TmV4dCIsInlOZXh0IiwiY29zIiwicldhdmUiLCJnV2F2ZSIsImJXYXZlIiwic2tldGNoIiwicDUiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsImZyYW1lUmF0ZSIsImJsZW5kTW9kZSIsIkFERCIsInN0cm9rZSIsInN0cm9rZVdlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyIsImNsZWFyIiwiciIsInN0cmVuZ3RoIiwiZyIsImIiLCJicmlnaHQiLCJtYXgiLCJtaW4iLCJmaWxsIiwiY2lyY2xlIiwiY29uc29sZSIsImxvZyIsImFkZFN0ZXAiLCJyYW5kIiwibW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBRU1BLEk7QUFPRixnQkFBWUMsQ0FBWixFQUF1QkMsQ0FBdkIsRUFBa0NDLElBQWxDLEVBQWdEQyxJQUFoRCxFQUE4RDtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHlKQUZ2RCxDQUV1RDs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlSixDQUFmO0FBQ0EsU0FBS0ssT0FBTCxHQUFlSixDQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csSUFBTCxHQUFZLENBQVo7QUFDSDs7Ozs2QkFFUU4sQyxFQUFXQyxDLEVBQVc7QUFDM0IsVUFBTU0sQ0FBQyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FDTkQsSUFBSSxDQUFDRSxHQUFMLENBQVNWLENBQUMsR0FBRyxLQUFLSSxPQUFsQixFQUEyQixDQUEzQixJQUFnQ0ksSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsR0FB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cnQgUDUgZnJvbSBcInA1XCI7XG5cbmNsYXNzIFdhdmUge1xuICAgIHhDZW50ZXI6IG51bWJlcjtcbiAgICB5Q2VudGVyOiBudW1iZXI7XG4gICAgeE1heDogbnVtYmVyO1xuICAgIHlNYXg6IG51bWJlcjtcbiAgICBzdGVwID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB4TWF4OiBudW1iZXIsIHlNYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnhDZW50ZXIgPSB4O1xuICAgICAgICB0aGlzLnlDZW50ZXIgPSB5O1xuICAgICAgICB0aGlzLnhNYXggPSB4TWF4O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgICAgICB0aGlzLnN0ZXAgPSAwO1xuICAgIH1cblxuICAgIHN0cmVuZ3RoKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyh4IC0gdGhpcy54Q2VudGVyLCAyKSArIE1hdGgucG93KHkgLSB0aGlzLnlDZW50ZXIsIDIpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBNYXRoLnNpbigtMC4wNiAqIGQgKyB0aGlzLnN0ZXApO1xuICAgIH1cblxuICAgIGFkZFN0ZXAoKSB7XG4gICAgICAgIHRoaXMuc3RlcCArPSAwLjAyO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICBjb25zdCB4TmV4dCA9IDAuMSAqIE1hdGguc2luKHRoZXRhKSArIHRoaXMueENlbnRlcjtcbiAgICAgICAgY29uc3QgeU5leHQgPSAwLjEgKiBNYXRoLmNvcyh0aGV0YSkgKyB0aGlzLnlDZW50ZXI7XG4gICAgICAgIGlmICh4TmV4dCA+PSAwICYmIHhOZXh0IDw9IHRoaXMueE1heCAmJiB5TmV4dCA+PSAwICYmIHlOZXh0IDw9IHRoaXMueU1heCkge1xuICAgICAgICAgICAgdGhpcy54Q2VudGVyID0geE5leHQ7XG4gICAgICAgICAgICB0aGlzLnlDZW50ZXIgPSB5TmV4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IHJXYXZlOiBXYXZlO1xubGV0IGdXYXZlOiBXYXZlO1xubGV0IGJXYXZlOiBXYXZlO1xuXG5jb25zdCBza2V0Y2ggPSAocDU6IFA1KSA9PiB7XG4gICAgcDUuc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyg5MDAsIDQwMCk7XG4gICAgICAgIHA1LmZyYW1lUmF0ZSgxNSk7XG4gICAgICAgIHA1LmJsZW5kTW9kZShwNS5BREQpO1xuICAgICAgICBwNS5zdHJva2UoMjU1KTtcbiAgICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDAuNSk7XG4gICAgICAgIHJXYXZlID0gbmV3IFdhdmUoMC4yICogcDUud2lkdGgsIDAuNCAqIHA1LmhlaWdodCwgcDUud2lkdGgsIHA1LmhlaWdodCk7XG4gICAgICAgIGdXYXZlID0gbmV3IFdhdmUoMC41ICogcDUud2lkdGgsIDAuMSAqIHA1LmhlaWdodCwgcDUud2lkdGgsIHA1LmhlaWdodCk7XG4gICAgICAgIGJXYXZlID0gbmV3IFdhdmUoMC43ICogcDUud2lkdGgsIDAuOSAqIHA1LmhlaWdodCwgcDUud2lkdGgsIHA1LmhlaWdodCk7XG4gICAgfTtcbiAgICBwNS5kcmF3ID0gKCkgPT4ge1xuICAgICAgICBwNS5jbGVhcigpO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcDUud2lkdGg7IHggKz0gMTMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcDUuaGVpZ2h0OyB5ICs9IDEzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJXYXZlLnN0cmVuZ3RoKHgsIHkpICogMjAwICsgMTA7XG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IGdXYXZlLnN0cmVuZ3RoKHgsIHkpICogMjAwICsgMTA7XG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IGJXYXZlLnN0cmVuZ3RoKHgsIHkpICogMjAwICsgMTA7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJpZ2h0ID0gTWF0aC5tYXgoTWF0aC5taW4oKHIgKyBnICsgYikgLyAzLCAyNTUpLCAwKTtcbiAgICAgICAgICAgICAgICBpZihicmlnaHQ8MTAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA1LmZpbGwociwgZywgYiwgYnJpZ2h0ICogMyk7XG4gICAgICAgICAgICAgICAgcDUuY2lyY2xlKHgsIHksIE1hdGgubWF4KDAsIE1hdGgubWluKDAuMiAqIGJyaWdodCwgMjcpKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnJpZ2h0KjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJXYXZlLmFkZFN0ZXAoKTtcbiAgICAgICAgZ1dhdmUuYWRkU3RlcCgpO1xuICAgICAgICBiV2F2ZS5hZGRTdGVwKCk7XG5cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGlmIChyYW5kIDwgMC4zMykge1xuICAgICAgICAgICAgcldhdmUubW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmQgPCAwLjY2KSB7XG4gICAgICAgICAgICBnV2F2ZS5tb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiV2F2ZS5tb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBza2V0Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./p5/sketch/droplet.ts\n");

/***/ })

});