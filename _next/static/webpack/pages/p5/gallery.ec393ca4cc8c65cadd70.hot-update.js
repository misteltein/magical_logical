/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p5/gallery",{

/***/ "./p5/sketch/rotation-flow.ts":
/*!************************************!*\
  !*** ./p5/sketch/rotation-flow.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar sketch = function sketch(p) {\n  var canvasSizeW = 1000;\n  var canvasSizeH = 600;\n  var t = 0.0;\n  var r = 10;\n  var size = 30;\n  var sign = 1;\n  var step = 0;\n  var speed = 0.075;\n\n  p.setup = function () {\n    p.createCanvas(canvasSizeW, canvasSizeH);\n    p.frameRate(20);\n    p.noStroke();\n  };\n\n  p.draw = function () {\n    p.background(0);\n\n    for (var i = 0; i < 50; i += 3) {\n      for (var j = 1; j <= 6; ++j) {\n        switch (j) {\n          case 1:\n            p.fill(p.color(255, 0, 0, 100));\n            break;\n\n          case 2:\n            p.fill(p.color(0, 255, 0, 200));\n            break;\n\n          case 3:\n            p.fill(0, 0, 255);\n            break;\n\n          case 4:\n            p.fill(255, 0, 255);\n            break;\n\n          case 5:\n            p.fill(0, 255, 255);\n            break;\n\n          case 6:\n            p.fill(255, 255, 0);\n            break;\n\n          default:\n            p.fill(255);\n        }\n\n        {\n          var x = i * r * Math.sin(t / (i + 2 * j));\n          var y = i * r * Math.cos(t / (i + 2 * j));\n          p.circle(x + 0.5 * canvasSizeW, y + 0.5 * canvasSizeH, size);\n          p.circle(x + 0.5 * canvasSizeW, -y + 0.5 * canvasSizeH, size);\n          p.circle(-x + 0.5 * canvasSizeW, y + 0.5 * canvasSizeH, size);\n          p.circle(-x + 0.5 * canvasSizeW, -y + 0.5 * canvasSizeH, size);\n        }\n        {\n          var _x = i * r * Math.sin(-t / (i + 2 * j));\n\n          var _y = i * r * Math.cos(-t / (i + 2 * j));\n\n          p.circle(_x + 0.5 * canvasSizeW, _y + 0.5 * canvasSizeH, size);\n          p.circle(_x + 0.5 * canvasSizeW, -_y + 0.5 * canvasSizeH, size);\n          p.circle(-_x + 0.5 * canvasSizeW, _y + 0.5 * canvasSizeH, size);\n          p.circle(-_x + 0.5 * canvasSizeW, -_y + 0.5 * canvasSizeH, size);\n        }\n      }\n    }\n\n    t += sign * speed;\n\n    if (step % 2800 === 0) {\n      sign *= -1;\n    }\n\n    ++step;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcDUvc2tldGNoL3JvdGF0aW9uLWZsb3cudHM/ZWMyOSJdLCJuYW1lcyI6WyJza2V0Y2giLCJwIiwiY2FudmFzU2l6ZVciLCJjYW52YXNTaXplSCIsInQiLCJyIiwic2l6ZSIsInNpZ24iLCJzdGVwIiwic3BlZWQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsImZyYW1lUmF0ZSIsIm5vU3Ryb2tlIiwiZHJhdyIsImJhY2tncm91bmQiLCJpIiwiaiIsImZpbGwiLCJjb2xvciIsIngiLCJNYXRoIiwic2luIiwieSIsImNvcyIsImNpcmNsZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLEdBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUcsRUFBUjtBQUVBLE1BQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLE1BQU1DLEtBQUssR0FBRyxLQUFkOztBQUVBUixHQUFDLENBQUNTLEtBQUYsR0FBVSxZQUFNO0FBQ1pULEtBQUMsQ0FBQ1UsWUFBRixDQUFlVCxXQUFmLEVBQTRCQyxXQUE1QjtBQUNBRixLQUFDLENBQUNXLFNBQUYsQ0FBWSxFQUFaO0FBQ0FYLEtBQUMsQ0FBQ1ksUUFBRjtBQUNILEdBSkQ7O0FBTUFaLEdBQUMsQ0FBQ2EsSUFBRixHQUFTLFlBQU07QUFDWGIsS0FBQyxDQUFDYyxVQUFGLENBQWEsQ0FBYjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM1QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElB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QXdERyxJQUF4RDtBQUNBTCxXQUFDLENBQUN3QixNQUFGLENBQVMsQ0FBQ0wsRUFBRCxHQUFLLE1BQU1sQixXQUFwQixFQUFpQyxDQUFDcUIsRUFBRCxHQUFLLE1BQU1wQixXQUE1QyxFQUF5REcsSUFBekQ7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RGLEtBQUMsSUFBSUcsSUFBSSxHQUFHRSxLQUFaOztBQUNBLFFBQUlELElBQUksR0FBRyxJQUFQLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CRCxVQUFJLElBQUksQ0FBQyxDQUFUO0FBQ0g7O0FBQ0QsTUFBRUMsSUFBRjtBQUNILEdBakREO0FBa0RILENBbkVEOztBQXFFQSwrREFBZVIsTUFBZiIsImZpbGUiOiIuL3A1L3NrZXRjaC9yb3RhdGlvbi1mbG93LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHA1IGZyb20gJ3A1JztcblxuY29uc3Qgc2tldGNoID0gKHA6IHA1KSA9PiB7XG4gICAgY29uc3QgY2FudmFzU2l6ZVcgPSAxMDAwXG4gICAgY29uc3QgY2FudmFzU2l6ZUggPSA2MDBcbiAgICBsZXQgdCA9IDAuMDtcbiAgICBsZXQgciA9IDEwO1xuXG4gICAgY29uc3Qgc2l6ZSA9IDMwO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgY29uc3Qgc3BlZWQgPSAwLjA3NTtcblxuICAgIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIHAuY3JlYXRlQ2FudmFzKGNhbnZhc1NpemVXLCBjYW52YXNTaXplSCk7XG4gICAgICAgIHAuZnJhbWVSYXRlKDIwKTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgIH07XG5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIHAuYmFja2dyb3VuZCgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSArPSAzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA2OyArK2opIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKHAuY29sb3IoMjU1LCAwLCAwLCAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwocC5jb2xvcigwLCAyNTUsIDAsIDIwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDAsIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDAsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMjU1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gaSAqIHIgKiBNYXRoLnNpbih0IC8gKGkgKyAyICogaikpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogciAqIE1hdGguY29zKHQgLyAoaSArIDIgKiBqKSk7XG4gICAgICAgICAgICAgICAgICAgIHAuY2lyY2xlKHggKyAwLjUgKiBjYW52YXNTaXplVywgeSArIDAuNSAqIGNhbnZhc1NpemVILCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgcC5jaXJjbGUoeCArIDAuNSAqIGNhbnZhc1NpemVXLCAteSArIDAuNSAqIGNhbnZhc1NpemVILCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgcC5jaXJjbGUoLXggKyAwLjUgKiBjYW52YXNTaXplVywgeSArIDAuNSAqIGNhbnZhc1NpemVILCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgcC5jaXJjbGUoLXggKyAwLjUgKiBjYW52YXNTaXplVywgLXkgKyAwLjUgKiBjYW52YXNTaXplSCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGkgKiByICogTWF0aC5zaW4oLXQgLyAoaSArIDIgKiBqKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogciAqIE1hdGguY29zKC10IC8gKGkgKyAyICogaikpO1xuICAgICAgICAgICAgICAgICAgICBwLmNpcmNsZSh4ICsgMC41ICogY2FudmFzU2l6ZVcsIHkgKyAwLjUgKiBjYW52YXNTaXplSCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHAuY2lyY2xlKHggKyAwLjUgKiBjYW52YXNTaXplVywgLXkgKyAwLjUgKiBjYW52YXNTaXplSCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHAuY2lyY2xlKC14ICsgMC41ICogY2FudmFzU2l6ZVcsIHkgKyAwLjUgKiBjYW52YXNTaXplSCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHAuY2lyY2xlKC14ICsgMC41ICogY2FudmFzU2l6ZVcsIC15ICsgMC41ICogY2FudmFzU2l6ZUgsIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ICs9IHNpZ24gKiBzcGVlZDtcbiAgICAgICAgaWYgKHN0ZXAgJSAyODAwID09PSAwKSB7XG4gICAgICAgICAgICBzaWduICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgICsrc3RlcDtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2tldGNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./p5/sketch/rotation-flow.ts\n");

/***/ })

});