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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./public/codes/p5/DLA-block/master/Circle.ts\");\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square */ \"./public/codes/p5/DLA-block/master/Square.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// https://editor.p5js.org/misteltein/sketches/pmp6gJ0cV\n\n // setup / draw で繰り返し使用する配列\n\nvar colors = [];\nvar circles = [];\nvar squares = []; // 画面いっぱいに図形が充填されるまで継続するためのフラグ\n\nvar ongoing = true;\n\nvar sketch = function sketch(p5) {\n  p5.preload = function () {\n    // 色のリストを作成\n    colors.push(p5.color(101, 81, 147));\n    colors.push(p5.color(109, 128, 172));\n    colors.push(p5.color(252, 71, 51));\n    colors.push(p5.color(131, 153, 97));\n    colors.push(p5.color(181, 98, 69));\n  };\n\n  p5.setup = function () {\n    p5.createCanvas(1000, 600);\n    p5.frameRate(30); // Circle の座標系の原点をカンバスの中心に\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX = p5.width * 0.5;\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY = p5.height * 0.5; // Circle を生成するリングの半径\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.R = Math.sqrt(Math.pow(p5.width * 0.5, 2) + Math.pow(p5.height * 0.5, 2)) + 65; // カンバス中心に，止まった円を生成\n\n    var origin = new _Circle__WEBPACK_IMPORTED_MODULE_0__.default();\n    origin.x = 0.0;\n    origin.y = 0.0;\n    origin.r = 10.0;\n    origin.ongoing = false;\n    circles.push(origin); // １つめの動く円を生成\n\n    circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default()); // 正方形を敷き詰めるように生成\n\n    var RESOLUTION = 60;\n    _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE = Math.max(p5.width, p5.height) / RESOLUTION;\n\n    for (var i = 0; i < RESOLUTION; ++i) {\n      for (var j = 0; j < RESOLUTION; ++j) {\n        squares.push(new _Square__WEBPACK_IMPORTED_MODULE_1__.default(i * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE, j * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE));\n      }\n    }\n  };\n\n  p5.draw = function () {\n    // 正方形の描画（デフォルトの座標系）\n    p5.noStroke();\n    squares.forEach(function (square, idx) {\n      p5.fill(!square.filled ? p5.color(0) : p5.color(255));\n      square.draw(p5);\n    }); // 円の描画（カンバスを中心とする座標系）ここから\n\n    p5.push();\n    p5.translate(_Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX, _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY);\n    p5.stroke(255);\n    p5.strokeWeight(1);\n    circles.forEach(function (circle, i) {\n      p5.fill(colors[i % colors.length]);\n      circle.draw(p5); // circle.updateState(i, circles);\n\n      var neighbors = circle.computeNeighbors(circles);\n      console.log(neighbors);\n\n      if (neighbors.length === 0) {\n        circle.ongoing = false;\n        circle.evolution();\n      }\n    });\n    p5.pop(); // 円の描画ここまで\n    // 正方形の色を更新\n\n    squares.forEach(function (square) {\n      circles.forEach(function (circle) {\n        square.updateState(circle);\n      });\n    }); // 最後に追加した円が静止したら新しく円を追加\n\n    if (!circles[circles.length - 1].ongoing) {\n      try {\n        // 追加してすぐに接触していたら例外が発生するので描画を停止させる\n        circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default());\n      } catch (error) {\n        ongoing = false;\n      }\n    }\n  };\n};\n/* eslint-disable no-new */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvZGVzL3A1L0RMQS1ibG9jay9tYXN0ZXIvbWFpbi50cz9mYzJlIl0sIm5hbWVzIjpbImNvbG9ycyIsImNpcmNsZXMiLCJzcXVhcmVzIiwib25nb2luZyIsInNrZXRjaCIsInA1IiwicHJlbG9hZCIsInB1c2giLCJjb2xvciIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiZnJhbWVSYXRlIiwiQ2lyY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsIm9yaWdpbiIsIngiLCJ5IiwiciIsIlJFU09MVVRJT04iLCJTcXVhcmUiLCJtYXgiLCJpIiwiaiIsImRyYXciLCJub1N0cm9rZSIsImZvckVhY2giLCJzcXVhcmUiLCJpZHgiLCJmaWxsIiwiZmlsbGVkIiwidHJhbnNsYXRlIiwic3Ryb2tlIiwic3Ryb2tlV2VpZ2h0IiwiY2lyY2xlIiwibGVuZ3RoIiwibmVpZ2hib3JzIiwiY29tcHV0ZU5laWdoYm9ycyIsImNvbnNvbGUiLCJsb2ciLCJldm9sdXRpb24iLCJwb3AiLCJ1cGRhdGVTdGF0ZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtDQUdBOztBQUNBLElBQU1BLE1BQXVCLEdBQUcsRUFBaEM7QUFDQSxJQUFNQyxPQUFzQixHQUFHLEVBQS9CO0FBQ0EsSUFBTUMsT0FBc0IsR0FBRyxFQUEvQixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsRUFBRCxFQUFZO0FBQ3pCQSxJQUFFLENBQUNDLE9BQUgsR0FBYSxZQUFNO0FBQ2pCO0FBQ0FOLFVBQU0sQ0FBQ08sSUFBUCxDQUFZRixFQUFFLENBQUNHLEtBQUgsQ0FBUyxHQUFULEVBQWMsRUFBZCxFQUFrQixHQUFsQixDQUFaO0FBQ0FSLFVBQU0sQ0FBQ08sSUFBUCxDQUFZRixFQUFFLENBQUNHLEtBQUgsQ0FBUyxHQUFULEVBQWMsR0FBZCxF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bG9jay9tYXN0ZXIvbWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZWRpdG9yLnA1anMub3JnL21pc3RlbHRlaW4vc2tldGNoZXMvcG1wNmdKMGNWXG5pbXBvcnQgUDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL0NpcmNsZVwiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9TcXVhcmVcIjtcblxuLy8gc2V0dXAgLyBkcmF3IOOBp+e5sOOCiui/lOOBl+S9v+eUqOOBmeOCi+mFjeWIl1xuY29uc3QgY29sb3JzOiBBcnJheTxQNS5Db2xvcj4gPSBbXTtcbmNvbnN0IGNpcmNsZXM6IEFycmF5PENpcmNsZT4gPSBbXTtcbmNvbnN0IHNxdWFyZXM6IEFycmF5PFNxdWFyZT4gPSBbXTtcblxuLy8g55S76Z2i44GE44Gj44Gx44GE44Gr5Zuz5b2i44GM5YWF5aGr44GV44KM44KL44G+44Gn57aZ57aa44GZ44KL44Gf44KB44Gu44OV44Op44KwXG5sZXQgb25nb2luZyA9IHRydWU7XG5cbmNvbnN0IHNrZXRjaCA9IChwNTogUDUpID0+IHtcbiAgcDUucHJlbG9hZCA9ICgpID0+IHtcbiAgICAvLyDoibLjga7jg6rjgrnjg4jjgpLkvZzmiJBcbiAgICBjb2xvcnMucHVzaChwNS5jb2xvcigxMDEsIDgxLCAxNDcpKTtcbiAgICBjb2xvcnMucHVzaChwNS5jb2xvcigxMDksIDEyOCwgMTcyKSk7XG4gICAgY29sb3JzLnB1c2gocDUuY29sb3IoMjUyLCA3MSwgNTEpKTtcbiAgICBjb2xvcnMucHVzaChwNS5jb2xvcigxMzEsIDE1MywgOTcpKTtcbiAgICBjb2xvcnMucHVzaChwNS5jb2xvcigxODEsIDk4LCA2OSkpO1xuICB9O1xuXG4gIHA1LnNldHVwID0gKCkgPT4ge1xuICAgIHA1LmNyZWF0ZUNhbnZhcygxMDAwLCA2MDApO1xuICAgIHA1LmZyYW1lUmF0ZSgzMClcbiAgICAvLyBDaXJjbGUg44Gu5bqn5qiZ57O744Gu5Y6f54K544KS44Kr44Oz44OQ44K544Gu5Lit5b+D44GrXG4gICAgQ2lyY2xlLk9YID0gcDUud2lkdGggKiAwLjU7XG4gICAgQ2lyY2xlLk9ZID0gcDUuaGVpZ2h0ICogMC41O1xuICAgIC8vIENpcmNsZSDjgpLnlJ/miJDjgZnjgovjg6rjg7PjgrDjga7ljYrlvoRcbiAgICBDaXJjbGUuUiA9XG4gICAgICBNYXRoLnNxcnQoTWF0aC5wb3cocDUud2lkdGggKiAwLjUsIDIpICsgTWF0aC5wb3cocDUuaGVpZ2h0ICogMC41LCAyKSkgK1xuICAgICAgNjU7XG4gICAgLy8g44Kr44Oz44OQ44K55Lit5b+D44Gr77yM5q2i44G+44Gj44Gf5YaG44KS55Sf5oiQXG4gICAgY29uc3Qgb3JpZ2luOiBDaXJjbGUgPSBuZXcgQ2lyY2xlKCk7XG4gICAgb3JpZ2luLnggPSAwLjA7XG4gICAgb3JpZ2luLnkgPSAwLjA7XG4gICAgb3JpZ2luLnIgPSAxMC4wO1xuICAgIG9yaWdpbi5vbmdvaW5nID0gZmFsc2U7XG4gICAgY2lyY2xlcy5wdXNoKG9yaWdpbik7XG4gICAgLy8g77yR44Gk44KB44Gu5YuV44GP5YaG44KS55Sf5oiQXG4gICAgY2lyY2xlcy5wdXNoKG5ldyBDaXJjbGUoKSk7XG5cbiAgICAvLyDmraPmlrnlvaLjgpLmlbfjgY3oqbDjgoHjgovjgojjgYbjgavnlJ/miJBcbiAgICBjb25zdCBSRVNPTFVUSU9OID0gNjA7XG4gICAgU3F1YXJlLlNJWkUgPSBNYXRoLm1heChwNS53aWR0aCwgcDUuaGVpZ2h0KSAvIFJFU09MVVRJT047XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBSRVNPTFVUSU9OOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgUkVTT0xVVElPTjsgKytqKSB7XG4gICAgICAgIHNxdWFyZXMucHVzaChuZXcgU3F1YXJlKGkgKiBTcXVhcmUuU0laRSwgaiAqIFNxdWFyZS5TSVpFKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHA1LmRyYXcgPSAoKSA9PiB7XG4gICAgLy8g5q2j5pa55b2i44Gu5o+P55S777yI44OH44OV44Kp44Or44OI44Gu5bqn5qiZ57O777yJXG4gICAgcDUubm9TdHJva2UoKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZTogU3F1YXJlLCBpZHgpID0+IHtcbiAgICAgIHA1LmZpbGwoIXNxdWFyZS5maWxsZWQgPyBwNS5jb2xvcigwKSA6IHA1LmNvbG9yKDI1NSkpO1xuICAgICAgc3F1YXJlLmRyYXcocDUpO1xuICAgIH0pO1xuXG4gICAgLy8g5YaG44Gu5o+P55S777yI44Kr44Oz44OQ44K544KS5Lit5b+D44Go44GZ44KL5bqn5qiZ57O777yJ44GT44GT44GL44KJXG4gICAgcDUucHVzaCgpO1xuICAgIHA1LnRyYW5zbGF0ZShDaXJjbGUuT1gsIENpcmNsZS5PWSk7XG4gICAgcDUuc3Ryb2tlKDI1NSk7XG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgIGNpcmNsZXMuZm9yRWFjaCgoY2lyY2xlOiBDaXJjbGUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgcDUuZmlsbChjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdKTtcbiAgICAgIGNpcmNsZS5kcmF3KHA1KTtcbiAgICAgIC8vIGNpcmNsZS51cGRhdGVTdGF0ZShpLCBjaXJjbGVzKTtcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IGNpcmNsZS5jb21wdXRlTmVpZ2hib3JzKGNpcmNsZXMpO1xuICAgICAgY29uc29sZS5sb2cobmVpZ2hib3JzKVxuICAgICAgaWYobmVpZ2hib3JzLmxlbmd0aD09PTApe1xuICAgICAgICAgIGNpcmNsZS5vbmdvaW5nPWZhbHNlO1xuICAgICAgICAgIGNpcmNsZS5ldm9sdXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwNS5wb3AoKTtcbiAgICAvLyDlhobjga7mj4/nlLvjgZPjgZPjgb7jgadcblxuICAgIC8vIOato+aWueW9ouOBruiJsuOCkuabtOaWsFxuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlOiBTcXVhcmUpID0+IHtcbiAgICAgIGNpcmNsZXMuZm9yRWFjaCgoY2lyY2xlOiBDaXJjbGUpID0+IHtcbiAgICAgICAgc3F1YXJlLnVwZGF0ZVN0YXRlKGNpcmNsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIOacgOW+jOOBq+i/veWKoOOBl+OBn+WGhuOBjOmdmeatouOBl+OBn+OCieaWsOOBl+OBj+WGhuOCkui/veWKoFxuICAgIGlmICghY2lyY2xlc1tjaXJjbGVzLmxlbmd0aCAtIDFdLm9uZ29pbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOi/veWKoOOBl+OBpuOBmeOBkOOBq+aOpeinpuOBl+OBpuOBhOOBn+OCieS+i+WkluOBjOeZuueUn+OBmeOCi+OBruOBp+aPj+eUu+OCkuWBnOatouOBleOBm+OCi1xuICAgICAgICBjaXJjbGVzLnB1c2gobmV3IENpcmNsZSgpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uZ29pbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbmV4cG9ydCBkZWZhdWx0IHNrZXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/codes/p5/DLA-block/master/main.ts\n");

/***/ })

});