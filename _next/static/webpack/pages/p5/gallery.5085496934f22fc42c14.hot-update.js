/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p5/gallery",{

/***/ "./public/codes/p5/DLA-block/master/main.ts":
/*!**************************************************!*\
  !*** ./public/codes/p5/DLA-block/master/main.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./public/codes/p5/DLA-block/master/Circle.ts\");\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square */ \"./public/codes/p5/DLA-block/master/Square.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// https://editor.p5js.org/misteltein/sketches/pmp6gJ0cV\n\n // setup / draw で繰り返し使用する配列\n\nvar colors = [];\nvar circles = [];\nvar squares = []; // 画面いっぱいに図形が充填されるまで継続するためのフラグ\n\nvar ongoing = true;\n\nvar sketch = function sketch(p5) {\n  p5.preload = function () {\n    // 色のリストを作成\n    colors.push(p5.color(101, 81, 147));\n    colors.push(p5.color(109, 128, 172));\n    colors.push(p5.color(252, 71, 51));\n    colors.push(p5.color(131, 153, 97));\n    colors.push(p5.color(181, 98, 69));\n  };\n\n  p5.setup = function () {\n    p5.createCanvas(1000, 600);\n    p5.frameRate(30); // Circle の座標系の原点をカンバスの中心に\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX = p5.width * 0.5;\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY = p5.height * 0.5; // Circle を生成するリングの半径\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.R = Math.sqrt(Math.pow(p5.width * 0.5, 2) + Math.pow(p5.height * 0.5, 2)) + 65; // カンバス中心に，止まった円を生成\n\n    var origin = new _Circle__WEBPACK_IMPORTED_MODULE_0__.default();\n    origin.x = 0.0;\n    origin.y = 0.0;\n    origin.r = 10.0;\n    origin.ongoing = false;\n    circles.push(origin); // １つめの動く円を生成\n\n    circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default()); // 正方形を敷き詰めるように生成\n\n    var RESOLUTION = 60;\n    _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE = Math.max(p5.width, p5.height) / RESOLUTION;\n\n    for (var i = 0; i < RESOLUTION; ++i) {\n      for (var j = 0; j < RESOLUTION; ++j) {\n        squares.push(new _Square__WEBPACK_IMPORTED_MODULE_1__.default(i * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE, j * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE));\n      }\n    }\n  };\n\n  p5.draw = function () {\n    // 正方形の描画（デフォルトの座標系）\n    p5.noStroke();\n    squares.forEach(function (square, idx) {\n      p5.fill(!square.filled ? p5.color(0) : p5.color(255));\n      square.draw(p5);\n    }); // 円の描画（カンバスを中心とする座標系）ここから\n\n    p5.push();\n    p5.translate(_Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX, _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY);\n    p5.stroke(255);\n    p5.strokeWeight(1);\n    circles.forEach(function (circle, i) {\n      p5.fill(colors[i % colors.length]);\n      circle.draw(p5);\n      var neighbors = circle.computeNeighbors(circles);\n\n      if (neighbors.length === 0) {\n        circle.evolution();\n      } else {\n        circle.ongoing = false;\n      }\n    });\n    p5.pop(); // 円の描画ここまで\n    // 正方形の色を更新\n\n    squares.forEach(function (square) {\n      circles.forEach(function (circle) {\n        square.updateState(circle);\n      });\n    }); // 最後に追加した円が静止したら新しく円を追加\n\n    if (!circles[circles.length - 1].ongoing) {\n      try {\n        // 追加してすぐに接触していたら例外が発生するので描画を停止させる\n        circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default());\n      } catch (error) {\n        ongoing = false;\n      }\n    }\n  };\n};\n/* eslint-disable no-new */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvZGVzL3A1L0RMQS1ibG9jay9tYXN0ZXIvbWFpbi50cz9mYzJlIl0sIm5hbWVzIjpbImNvbG9ycyIsImNpcmNsZXMiLCJzcXVhcmVzIiwib25nb2luZyIsInNrZXRjaCIsInA1IiwicHJlbG9hZCIsInB1c2giLCJjb2xvciIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiZnJhbWVSYXRlIiwiQ2lyY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsIm9yaWdpbiIsIngiLCJ5IiwiciIsIlJFU09MVVRJT04iLCJTcXVhcmUiLCJtYXgiLCJpIiwiaiIsImRyYXciLCJub1N0cm9rZSIsImZvckVhY2giLCJzcXVhcmUiLCJpZHgiLCJmaWxsIiwiZmlsbGVkIiwidHJhbnNsYXRlIiwic3Ryb2tlIiwic3Ryb2tlV2VpZ2h0IiwiY2lyY2xlIiwibGVuZ3RoIiwibmVpZ2hib3JzIiwiY29tcHV0ZU5laWdoYm9ycyIsImV2b2x1dGlvbiIsInBvcCIsInVwZGF0ZVN0YXRlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBdUIsR0FBRyxFQUFoQztBQUNBLElBQU1DLE9BQXNCLEdBQUcsRUFBL0I7QUFDQSxJQUFNQyxPQUFzQixHQUFHLEVBQS9CLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxFQUFELEVBQVk7QUFDekJBLElBQUUsQ0FBQ0MsT0FBSCxHQUFhLFlBQU07QUFDakI7QUFDQU4sVUFBTSxDQUFDTyxJQUFQLENBQVlGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEdBQWxCLENBQVo7QUFDQVIsVUFBTSxDQUFDTyxJQUFQLENBQVlGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLENBQVo7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QyxXQUFPLENBQUM0QixPQUFSLENBQWdCLFVBQUNRLE1BQUQsRUFBaUJaLENBQWpCLEVBQStCO0FBQzdDcEIsUUFBRSxDQUFDMkIsSUFBSCxDQUFRaEMsTUFBTSxDQUFDeUIsQ0FBQyxHQUFHekIsTUFBTSxDQUFDc0MsTUFBWixDQUFkO0FBQ0FELFlBQU0sQ0FBQ1YsSUFBUCxDQUFZdEIsRUFBWjtBQUNBLFVBQU1rQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0J2QyxPQUF4QixDQUFsQjs7QUFDQSxVQUFHc0MsU0FBUyxDQUFDRCxNQUFWLEtBQW1CLENBQXRCLEVBQXdCO0FBQ3BCRCxjQUFNLENBQUNJLFNBQVA7QUFDSCxPQUZELE1BRUs7QUFDREosY0FBTSxDQUFDbEMsT0FBUCxHQUFlLEtBQWY7QUFDSDtBQUNGLEtBVEQ7QUFVQUUsTUFBRSxDQUFDcUMsR0FBSCxHQXZCYyxDQXdCZDtBQUVBOztBQUNBeEMsV0FBTyxDQUFDMkIsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQW9CO0FBQ2xDN0IsYUFBTyxDQUFDNEIsT0FBUixDQUFnQixVQUFDUSxNQUFELEVBQW9CO0FBQ2xDUCxjQUFNLENBQUNhLFdBQVAsQ0FBbUJOLE1BQW5CO0FBQ0QsT0FGRDtBQUdELEtBSkQsRUEzQmMsQ0FpQ2Q7O0FBQ0EsUUFBSSxDQUFDcEMsT0FBTyxDQUFDQSxPQUFPLENBQUNxQyxNQUFSLEdBQWlCLENBQWxCLENBQVAsQ0FBNEJuQyxPQUFqQyxFQUEwQztBQUN4QyxVQUFJO0FBQ0Y7QUFDQUYsZUFBTyxDQUFDTSxJQUFSLENBQWEsSUFBSUssNENBQUosRUFBYjtBQUNELE9BSEQsQ0FHRSxPQUFPZ0MsS0FBUCxFQUFjO0FBQ2R6QyxlQUFPLEdBQUcsS0FBVjtBQUNEO0FBQ0Y7QUFDRixHQTFDRDtBQTJDRCxDQW5GRDtBQXFGQTs7O0FBQ0EsK0RBQWVDLE1BQWYiLCJmaWxlIjoiLi9wdWJsaWMvY29kZXMvcDUvRExBLWJsb2NrL21hc3Rlci9tYWluLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9lZGl0b3IucDVqcy5vcmcvbWlzdGVsdGVpbi9za2V0Y2hlcy9wbXA2Z0owY1ZcbmltcG9ydCBQNSBmcm9tIFwicDVcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL1NxdWFyZVwiO1xuXG4vLyBzZXR1cCAvIGRyYXcg44Gn57mw44KK6L+U44GX5L2/55So44GZ44KL6YWN5YiXXG5jb25zdCBjb2xvcnM6IEFycmF5PFA1LkNvbG9yPiA9IFtdO1xuY29uc3QgY2lyY2xlczogQXJyYXk8Q2lyY2xlPiA9IFtdO1xuY29uc3Qgc3F1YXJlczogQXJyYXk8U3F1YXJlPiA9IFtdO1xuXG4vLyDnlLvpnaLjgYTjgaPjgbHjgYTjgavlm7PlvaLjgYzlhYXloavjgZXjgozjgovjgb7jgafntpnntprjgZnjgovjgZ/jgoHjga7jg5Xjg6njgrBcbmxldCBvbmdvaW5nID0gdHJ1ZTtcblxuY29uc3Qgc2tldGNoID0gKHA1OiBQNSkgPT4ge1xuICBwNS5wcmVsb2FkID0gKCkgPT4ge1xuICAgIC8vIOiJsuOBruODquOCueODiOOCkuS9nOaIkFxuICAgIGNvbG9ycy5wdXNoKHA1LmNvbG9yKDEwMSwgODEsIDE0NykpO1xuICAgIGNvbG9ycy5wdXNoKHA1LmNvbG9yKDEwOSwgMTI4LCAxNzIpKTtcbiAgICBjb2xvcnMucHVzaChwNS5jb2xvcigyNTIsIDcxLCA1MSkpO1xuICAgIGNvbG9ycy5wdXNoKHA1LmNvbG9yKDEzMSwgMTUzLCA5NykpO1xuICAgIGNvbG9ycy5wdXNoKHA1LmNvbG9yKDE4MSwgOTgsIDY5KSk7XG4gIH07XG5cbiAgcDUuc2V0dXAgPSAoKSA9PiB7XG4gICAgcDUuY3JlYXRlQ2FudmFzKDEwMDAsIDYwMCk7XG4gICAgcDUuZnJhbWVSYXRlKDMwKVxuICAgIC8vIENpcmNsZSDjga7luqfmqJnns7vjga7ljp/ngrnjgpLjgqvjg7Pjg5Djgrnjga7kuK3lv4PjgatcbiAgICBDaXJjbGUuT1ggPSBwNS53aWR0aCAqIDAuNTtcbiAgICBDaXJjbGUuT1kgPSBwNS5oZWlnaHQgKiAwLjU7XG4gICAgLy8gQ2lyY2xlIOOCkueUn+aIkOOBmeOCi+ODquODs+OCsOOBruWNiuW+hFxuICAgIENpcmNsZS5SID1cbiAgICAgIE1hdGguc3FydChNYXRoLnBvdyhwNS53aWR0aCAqIDAuNSwgMikgKyBNYXRoLnBvdyhwNS5oZWlnaHQgKiAwLjUsIDIpKSArXG4gICAgICA2NTtcbiAgICAvLyDjgqvjg7Pjg5DjgrnkuK3lv4PjgavvvIzmraLjgb7jgaPjgZ/lhobjgpLnlJ/miJBcbiAgICBjb25zdCBvcmlnaW46IENpcmNsZSA9IG5ldyBDaXJjbGUoKTtcbiAgICBvcmlnaW4ueCA9IDAuMDtcbiAgICBvcmlnaW4ueSA9IDAuMDtcbiAgICBvcmlnaW4uciA9IDEwLjA7XG4gICAgb3JpZ2luLm9uZ29pbmcgPSBmYWxzZTtcbiAgICBjaXJjbGVzLnB1c2gob3JpZ2luKTtcbiAgICAvLyDvvJHjgaTjgoHjga7li5XjgY/lhobjgpLnlJ/miJBcbiAgICBjaXJjbGVzLnB1c2gobmV3IENpcmNsZSgpKTtcblxuICAgIC8vIOato+aWueW9ouOCkuaVt+OBjeipsOOCgeOCi+OCiOOBhuOBq+eUn+aIkFxuICAgIGNvbnN0IFJFU09MVVRJT04gPSA2MDtcbiAgICBTcXVhcmUuU0laRSA9IE1hdGgubWF4KHA1LndpZHRoLCBwNS5oZWlnaHQpIC8gUkVTT0xVVElPTjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJFU09MVVRJT047ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBSRVNPTFVUSU9OOyArK2opIHtcbiAgICAgICAgc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoaSAqIFNxdWFyZS5TSVpFLCBqICogU3F1YXJlLlNJWkUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcDUuZHJhdyA9ICgpID0+IHtcbiAgICAvLyDmraPmlrnlvaLjga7mj4/nlLvvvIjjg4fjg5Xjgqnjg6vjg4jjga7luqfmqJnns7vvvIlcbiAgICBwNS5ub1N0cm9rZSgpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlOiBTcXVhcmUsIGlkeCkgPT4ge1xuICAgICAgcDUuZmlsbCghc3F1YXJlLmZpbGxlZCA/IHA1LmNvbG9yKDApIDogcDUuY29sb3IoMjU1KSk7XG4gICAgICBzcXVhcmUuZHJhdyhwNSk7XG4gICAgfSk7XG5cbiAgICAvLyDlhobjga7mj4/nlLvvvIjjgqvjg7Pjg5DjgrnjgpLkuK3lv4PjgajjgZnjgovluqfmqJnns7vvvInjgZPjgZPjgYvjgolcbiAgICBwNS5wdXNoKCk7XG4gICAgcDUudHJhbnNsYXRlKENpcmNsZS5PWCwgQ2lyY2xlLk9ZKTtcbiAgICBwNS5zdHJva2UoMjU1KTtcbiAgICBwNS5zdHJva2VXZWlnaHQoMSk7XG4gICAgY2lyY2xlcy5mb3JFYWNoKChjaXJjbGU6IENpcmNsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBwNS5maWxsKGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF0pO1xuICAgICAgY2lyY2xlLmRyYXcocDUpO1xuICAgICAgY29uc3QgbmVpZ2hib3JzID0gY2lyY2xlLmNvbXB1dGVOZWlnaGJvcnMoY2lyY2xlcyk7XG4gICAgICBpZihuZWlnaGJvcnMubGVuZ3RoPT09MCl7XG4gICAgICAgICAgY2lyY2xlLmV2b2x1dGlvbigpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICAgY2lyY2xlLm9uZ29pbmc9ZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcDUucG9wKCk7XG4gICAgLy8g5YaG44Gu5o+P55S744GT44GT44G+44GnXG5cbiAgICAvLyDmraPmlrnlvaLjga7oibLjgpLmm7TmlrBcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZTogU3F1YXJlKSA9PiB7XG4gICAgICBjaXJjbGVzLmZvckVhY2goKGNpcmNsZTogQ2lyY2xlKSA9PiB7XG4gICAgICAgIHNxdWFyZS51cGRhdGVTdGF0ZShjaXJjbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyDmnIDlvozjgavov73liqDjgZfjgZ/lhobjgYzpnZnmraLjgZfjgZ/jgonmlrDjgZfjgY/lhobjgpLov73liqBcbiAgICBpZiAoIWNpcmNsZXNbY2lyY2xlcy5sZW5ndGggLSAxXS5vbmdvaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyDov73liqDjgZfjgabjgZnjgZDjgavmjqXop6bjgZfjgabjgYTjgZ/jgonkvovlpJbjgYznmbrnlJ/jgZnjgovjga7jgafmj4/nlLvjgpLlgZzmraLjgZXjgZvjgotcbiAgICAgICAgY2lyY2xlcy5wdXNoKG5ldyBDaXJjbGUoKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvbmdvaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5leHBvcnQgZGVmYXVsdCBza2V0Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/codes/p5/DLA-block/master/main.ts\n");

/***/ })

});