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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./public/codes/p5/DLA-block/master/Circle.ts\");\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square */ \"./public/codes/p5/DLA-block/master/Square.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// https://editor.p5js.org/misteltein/sketches/pmp6gJ0cV\n\n // setup / draw で繰り返し使用する配列\n\nvar colors = [];\nvar circles = [];\nvar squares = []; // 画面いっぱいに図形が充填されるまで継続するためのフラグ\n\nvar ongoing = true;\n\nvar sketch = function sketch(p5) {\n  p5.preload = function () {\n    // 色のリストを作成\n    colors.push(p5.color(101, 81, 147));\n    colors.push(p5.color(109, 128, 172));\n    colors.push(p5.color(252, 71, 51));\n    colors.push(p5.color(131, 153, 97));\n    colors.push(p5.color(181, 98, 69));\n  };\n\n  p5.setup = function () {\n    p5.createCanvas(1000, 600);\n    p5.frameRate(30); // Circle の座標系の原点をカンバスの中心に\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX = p5.width * 0.5;\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY = p5.height * 0.5; // Circle を生成するリングの半径\n\n    _Circle__WEBPACK_IMPORTED_MODULE_0__.default.R = Math.sqrt(Math.pow(p5.width * 0.5, 2) + Math.pow(p5.height * 0.5, 2)) + 65; // カンバス中心に，止まった円を生成\n\n    var origin = new _Circle__WEBPACK_IMPORTED_MODULE_0__.default();\n    origin.x = 0.0;\n    origin.y = 0.0;\n    origin.r = 10.0;\n    origin.ongoing = false;\n    circles.push(origin); // １つめの動く円を生成\n\n    circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default()); // 正方形を敷き詰めるように生成\n\n    var RESOLUTION = 60;\n    _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE = Math.max(p5.width, p5.height) / RESOLUTION;\n\n    for (var i = 0; i < RESOLUTION; ++i) {\n      for (var j = 0; j < RESOLUTION; ++j) {\n        squares.push(new _Square__WEBPACK_IMPORTED_MODULE_1__.default(i * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE, j * _Square__WEBPACK_IMPORTED_MODULE_1__.default.SIZE));\n      }\n    }\n  };\n\n  var step = 0;\n\n  p5.draw = function () {\n    step++;\n    p5.background(0); // // 正方形の描画（デフォルトの座標系）\n    // p5.noStroke();\n    // squares.forEach((square: Square, idx) => {\n    //   p5.fill(!square.filled ? p5.color(0) : p5.color(255));\n    //   square.draw(p5);\n    // });\n\n    var neighbors = []; // 円の描画（カンバスを中心とする座標系）ここから\n\n    p5.push();\n    p5.translate(_Circle__WEBPACK_IMPORTED_MODULE_0__.default.OX, _Circle__WEBPACK_IMPORTED_MODULE_0__.default.OY);\n    p5.stroke(255);\n    p5.strokeWeight(1);\n    circles.forEach(function (circle, i) {\n      p5.fill(colors[i % colors.length]);\n      circle.draw(p5);\n      var ns = circle.computeNeighbors(circles);\n      ns.forEach(function (j) {\n        neighbors.push([circle.index, j]);\n      });\n\n      if (ns.length === 0) {\n        circle.evolution();\n      } else {\n        circle.ongoing = false;\n      }\n    });\n    neighbors.forEach(function (pair) {\n      p5.push();\n      p5.stroke(255);\n\n      if (Math.floor(2.25 * step / 30) % 2 == 0) {\n        p5.strokeWeight(4);\n      } else {\n        p5.strokeWeight(7);\n      }\n\n      p5.line(circles[pair[0]].x, circles[pair[0]].y, circles[pair[1]].x, circles[pair[1]].y);\n      p5.pop();\n    });\n    p5.pop(); // 円の描画ここまで\n    // // 正方形の色を更新\n    // squares.forEach((square: Square) => {\n    //   circles.forEach((circle: Circle) => {\n    //     square.updateState(circle);\n    //   });\n    // });\n    // 最後に追加した円が静止したら新しく円を追加\n    // if (!circles[circles.length - 1].ongoing) {\n\n    if (Math.floor(2.25 * step / 30) % 2 == 0) {\n      try {\n        // 追加してすぐに接触していたら例外が発生するので描画を停止させる\n        circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__.default());\n      } catch (error) {\n        ongoing = false;\n      }\n    } // }\n\n  };\n};\n/* eslint-disable no-new */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvZGVzL3A1L0RMQS1ibG9jay9tYXN0ZXIvbWFpbi50cz9mYzJlIl0sIm5hbWVzIjpbImNvbG9ycyIsImNpcmNsZXMiLCJzcXVhcmVzIiwib25nb2luZyIsInNrZXRjaCIsInA1IiwicHJlbG9hZCIsInB1c2giLCJjb2xvciIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiZnJhbWVSYXRlIiwiQ2lyY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsIm9yaWdpbiIsIngiLCJ5IiwiciIsIlJFU09MVVRJT04iLCJTcXVhcmUiLCJtYXgiLCJpIiwiaiIsInN0ZXAiLCJkcmF3IiwiYmFja2dyb3VuZCIsIm5laWdoYm9ycyIsInRyYW5zbGF0ZSIsInN0cm9rZSIsInN0cm9rZVdlaWdodCIsImZvckVhY2giLCJjaXJjbGUiLCJmaWxsIiwibGVuZ3RoIiwibnMiLCJjb21wdXRlTmVpZ2hib3JzIiwiaW5kZXgiLCJldm9sdXRpb24iLCJwYWlyIiwiZmxvb3IiLCJsaW5lIiwicG9wIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBdUIsR0FBRyxFQUFoQztBQUNBLElBQU1DLE9BQXNCLEdBQUcsRUFBL0I7QUFDQSxJQUFNQyxPQUFzQixHQUFHLEVBQS9CLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxFQUFELEVBQVk7QUFDekJBLElBQUUsQ0FBQ0MsT0FBSCxHQUFhLFlBQU07QUFDakI7QUFDQU4sVUFBTSxDQUFDTyxJQUFQLENBQVlGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEdBQWxCLENBQVo7QUFDQVIsVUFBTSxDQUFDTyxJQUFQLENBQVlGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5C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QWYsUUFBRSxDQUFDd0MsR0FBSDtBQUNILEtBVkQ7QUFXQXhDLE1BQUUsQ0FBQ3dDLEdBQUgsR0F4Q2MsQ0F5Q2Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNFLFFBQUc5QixJQUFJLENBQUM0QixLQUFMLENBQVcsT0FBS2hCLElBQUwsR0FBVSxFQUFyQixJQUF5QixDQUF6QixJQUE0QixDQUEvQixFQUFrQztBQUM5QixVQUFJO0FBQ0E7QUFDQTFCLGVBQU8sQ0FBQ00sSUFBUixDQUFhLElBQUlLLDRDQUFKLEVBQWI7QUFDSCxPQUhELENBR0UsT0FBT2tDLEtBQVAsRUFBYztBQUNaM0MsZUFBTyxHQUFHLEtBQVY7QUFDSDtBQUNKLEtBM0RXLENBNERkOztBQUNELEdBN0REO0FBOERELENBdkdEO0FBeUdBOzs7QUFDQSwrREFBZUMsTUFBZiIsImZpbGUiOiIuL3B1YmxpYy9jb2Rlcy9wNS9ETEEtYmxvY2svbWFzdGVyL21haW4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2VkaXRvci5wNWpzLm9yZy9taXN0ZWx0ZWluL3NrZXRjaGVzL3BtcDZnSjBjVlxuaW1wb3J0IFA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vU3F1YXJlXCI7XG5cbi8vIHNldHVwIC8gZHJhdyDjgafnubDjgorov5TjgZfkvb/nlKjjgZnjgovphY3liJdcbmNvbnN0IGNvbG9yczogQXJyYXk8UDUuQ29sb3I+ID0gW107XG5jb25zdCBjaXJjbGVzOiBBcnJheTxDaXJjbGU+ID0gW107XG5jb25zdCBzcXVhcmVzOiBBcnJheTxTcXVhcmU+ID0gW107XG5cbi8vIOeUu+mdouOBhOOBo+OBseOBhOOBq+Wbs+W9ouOBjOWFheWhq+OBleOCjOOCi+OBvuOBp+e2mee2muOBmeOCi+OBn+OCgeOBruODleODqeOCsFxubGV0IG9uZ29pbmcgPSB0cnVlO1xuXG5jb25zdCBza2V0Y2ggPSAocDU6IFA1KSA9PiB7XG4gIHA1LnByZWxvYWQgPSAoKSA9PiB7XG4gICAgLy8g6Imy44Gu44Oq44K544OI44KS5L2c5oiQXG4gICAgY29sb3JzLnB1c2gocDUuY29sb3IoMTAxLCA4MSwgMTQ3KSk7XG4gICAgY29sb3JzLnB1c2gocDUuY29sb3IoMTA5LCAxMjgsIDE3MikpO1xuICAgIGNvbG9ycy5wdXNoKHA1LmNvbG9yKDI1MiwgNzEsIDUxKSk7XG4gICAgY29sb3JzLnB1c2gocDUuY29sb3IoMTMxLCAxNTMsIDk3KSk7XG4gICAgY29sb3JzLnB1c2gocDUuY29sb3IoMTgxLCA5OCwgNjkpKTtcbiAgfTtcblxuICBwNS5zZXR1cCA9ICgpID0+IHtcbiAgICBwNS5jcmVhdGVDYW52YXMoMTAwMCwgNjAwKTtcbiAgICBwNS5mcmFtZVJhdGUoMzApXG4gICAgLy8gQ2lyY2xlIOOBruW6p+aomeezu+OBruWOn+eCueOCkuOCq+ODs+ODkOOCueOBruS4reW/g+OBq1xuICAgIENpcmNsZS5PWCA9IHA1LndpZHRoICogMC41O1xuICAgIENpcmNsZS5PWSA9IHA1LmhlaWdodCAqIDAuNTtcbiAgICAvLyBDaXJjbGUg44KS55Sf5oiQ44GZ44KL44Oq44Oz44Kw44Gu5Y2K5b6EXG4gICAgQ2lyY2xlLlIgPVxuICAgICAgTWF0aC5zcXJ0KE1hdGgucG93KHA1LndpZHRoICogMC41LCAyKSArIE1hdGgucG93KHA1LmhlaWdodCAqIDAuNSwgMikpICtcbiAgICAgIDY1O1xuICAgIC8vIOOCq+ODs+ODkOOCueS4reW/g+OBq++8jOatouOBvuOBo+OBn+WGhuOCkueUn+aIkFxuICAgIGNvbnN0IG9yaWdpbjogQ2lyY2xlID0gbmV3IENpcmNsZSgpO1xuICAgIG9yaWdpbi54ID0gMC4wO1xuICAgIG9yaWdpbi55ID0gMC4wO1xuICAgIG9yaWdpbi5yID0gMTAuMDtcbiAgICBvcmlnaW4ub25nb2luZyA9IGZhbHNlO1xuICAgIGNpcmNsZXMucHVzaChvcmlnaW4pO1xuICAgIC8vIO+8keOBpOOCgeOBruWLleOBj+WGhuOCkueUn+aIkFxuICAgIGNpcmNsZXMucHVzaChuZXcgQ2lyY2xlKCkpO1xuXG4gICAgLy8g5q2j5pa55b2i44KS5pW344GN6Kmw44KB44KL44KI44GG44Gr55Sf5oiQXG4gICAgY29uc3QgUkVTT0xVVElPTiA9IDYwO1xuICAgIFNxdWFyZS5TSVpFID0gTWF0aC5tYXgocDUud2lkdGgsIHA1LmhlaWdodCkgLyBSRVNPTFVUSU9OO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUkVTT0xVVElPTjsgKytpKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFJFU09MVVRJT047ICsraikge1xuICAgICAgICBzcXVhcmVzLnB1c2gobmV3IFNxdWFyZShpICogU3F1YXJlLlNJWkUsIGogKiBTcXVhcmUuU0laRSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBsZXQgc3RlcD0wO1xuICBwNS5kcmF3ID0gKCkgPT4ge1xuICAgICAgc3RlcCsrO1xuICAgICAgcDUuYmFja2dyb3VuZCgwKVxuICAgIC8vIC8vIOato+aWueW9ouOBruaPj+eUu++8iOODh+ODleOCqeODq+ODiOOBruW6p+aomeezu++8iVxuICAgIC8vIHA1Lm5vU3Ryb2tlKCk7XG4gICAgLy8gc3F1YXJlcy5mb3JFYWNoKChzcXVhcmU6IFNxdWFyZSwgaWR4KSA9PiB7XG4gICAgLy8gICBwNS5maWxsKCFzcXVhcmUuZmlsbGVkID8gcDUuY29sb3IoMCkgOiBwNS5jb2xvcigyNTUpKTtcbiAgICAvLyAgIHNxdWFyZS5kcmF3KHA1KTtcbiAgICAvLyB9KTtcblxuICAgIGxldCBuZWlnaGJvcnMgPSBbXVxuICAgIC8vIOWGhuOBruaPj+eUu++8iOOCq+ODs+ODkOOCueOCkuS4reW/g+OBqOOBmeOCi+W6p+aomeezu++8ieOBk+OBk+OBi+OCiVxuICAgIHA1LnB1c2goKTtcbiAgICBwNS50cmFuc2xhdGUoQ2lyY2xlLk9YLCBDaXJjbGUuT1kpO1xuICAgIHA1LnN0cm9rZSgyNTUpO1xuICAgIHA1LnN0cm9rZVdlaWdodCgxKTtcbiAgICBjaXJjbGVzLmZvckVhY2goKGNpcmNsZTogQ2lyY2xlLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHA1LmZpbGwoY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXSk7XG4gICAgICBjaXJjbGUuZHJhdyhwNSk7XG4gICAgICBjb25zdCBucyA9IGNpcmNsZS5jb21wdXRlTmVpZ2hib3JzKGNpcmNsZXMpO1xuICAgICAgbnMuZm9yRWFjaChqPT57XG4gICAgICAgICAgbmVpZ2hib3JzLnB1c2goW2NpcmNsZS5pbmRleCxqXSk7XG4gICAgICB9KVxuICAgICAgaWYobnMubGVuZ3RoPT09MCl7XG4gICAgICAgICAgY2lyY2xlLmV2b2x1dGlvbigpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICAgY2lyY2xlLm9uZ29pbmc9ZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmVpZ2hib3JzLmZvckVhY2gocGFpcj0+e1xuICAgICAgICBwNS5wdXNoKClcbiAgICAgICAgcDUuc3Ryb2tlKDI1NSk7XG4gICAgICAgIGlmKE1hdGguZmxvb3IoMi4yNSpzdGVwLzMwKSUyPT0wKXtcbiAgICAgICAgICAgIHA1LnN0cm9rZVdlaWdodCg0KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwNS5zdHJva2VXZWlnaHQoNyk7XG4gICAgICAgIH1cbiAgICAgICAgcDUubGluZShjaXJjbGVzW3BhaXJbMF1dLngsY2lyY2xlc1twYWlyWzBdXS55LGNpcmNsZXNbcGFpclsxXV0ueCxjaXJjbGVzW3BhaXJbMV1dLnkpXG4gICAgICAgIHA1LnBvcCgpXG4gICAgfSlcbiAgICBwNS5wb3AoKTtcbiAgICAvLyDlhobjga7mj4/nlLvjgZPjgZPjgb7jgadcblxuICAgIC8vIC8vIOato+aWueW9ouOBruiJsuOCkuabtOaWsFxuICAgIC8vIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlOiBTcXVhcmUpID0+IHtcbiAgICAvLyAgIGNpcmNsZXMuZm9yRWFjaCgoY2lyY2xlOiBDaXJjbGUpID0+IHtcbiAgICAvLyAgICAgc3F1YXJlLnVwZGF0ZVN0YXRlKGNpcmNsZSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcblxuICAgIC8vIOacgOW+jOOBq+i/veWKoOOBl+OBn+WGhuOBjOmdmeatouOBl+OBn+OCieaWsOOBl+OBj+WGhuOCkui/veWKoFxuICAgIC8vIGlmICghY2lyY2xlc1tjaXJjbGVzLmxlbmd0aCAtIDFdLm9uZ29pbmcpIHtcbiAgICAgIGlmKE1hdGguZmxvb3IoMi4yNSpzdGVwLzMwKSUyPT0wKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8g6L+95Yqg44GX44Gm44GZ44GQ44Gr5o6l6Kem44GX44Gm44GE44Gf44KJ5L6L5aSW44GM55m655Sf44GZ44KL44Gu44Gn5o+P55S744KS5YGc5q2i44GV44Gb44KLXG4gICAgICAgICAgICAgIGNpcmNsZXMucHVzaChuZXcgQ2lyY2xlKCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIG9uZ29pbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgLy8gfVxuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5leHBvcnQgZGVmYXVsdCBza2V0Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/codes/p5/DLA-block/master/main.ts\n");

/***/ })

});