/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p5/gallery",{

/***/ "./public/codes/p5/DLA-block/master/Circle.ts":
/*!****************************************************!*\
  !*** ./public/codes/p5/DLA-block/master/Circle.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Circle; }\n/* harmony export */ });\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n/**\n * 一様乱数\n * @param {number} truncMin - 区間始め\n * @param {number} truncMin - 区間終わり\n */\nvar uniformDistBetween = function uniformDistBetween(truncMin, truncMax) {\n  return Math.random() * (truncMax - truncMin) + truncMin;\n};\n/**\n * 正規乱数\n * @param {number} sigma - 分散\n */\n\n\nvar normalDist = function normalDist(sigma) {\n  var res = 0.0;\n\n  for (var i = 0; i < 12; ++i) {\n    res += uniformDistBetween(0.0, 1.0);\n  }\n\n  return (res - 6.0) * sigma;\n};\n/**\n * 切断正規分布\n * @param sigma - 分散\n * @param mu - 平均\n * @param truncMin - 区間始め\n * @param truncMax - 区間終わり\n */\n\n\nvar normalTrunc = function normalTrunc(sigma, mu, truncMin, truncMax) {\n  var res = normalDist(sigma) + mu;\n\n  if (res < truncMin || truncMax < res) {\n    return normalTrunc(sigma, mu, truncMin, truncMax);\n  }\n\n  return res;\n};\n\nvar distance = function distance(x1, y1, x2, y2) {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n};\n/**\n * 円を書くためのクラス\n */\n\n\nvar Circle = /*#__PURE__*/function () {\n  // 生成するリングの半径\n  // デフォルトの座標系での円を表すための座標系の原点\n  // この座標系での円の座標\n  // 移動速度\n  // 半径\n  // 動いているか\n\n  /**\n   * 円を生成する\n   */\n  function Circle() {\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Circle);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"x\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"y\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"vx\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"vy\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"r\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"ongoing\", void 0);\n\n    (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"index\", void 0);\n\n    this.index = Circle.counter++;\n    var theta = uniformDistBetween(0.0, 2.0 * Math.PI);\n    this.x = Circle.R * Math.sin(theta);\n    this.y = Circle.R * Math.cos(theta);\n    var norm = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    this.vx = -this.x / norm;\n    this.vy = -this.y / norm;\n    this.ongoing = true;\n    this.r = normalTrunc(5.0, 15.0, 5.0, 30.0);\n    this.updateState(0, []);\n\n    if (!this.ongoing) {\n      throw new Error(\"end\");\n    }\n  }\n  /**\n   * デフォルトの座標系での x 座標\n   * @return {number} x 座標\n   */\n\n\n  (0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Circle, [{\n    key: \"getX\",\n    value: function getX() {\n      return this.x + Circle.OX;\n    }\n    /**\n     * デフォルトの座標系での y 座標\n     * @return {number} y 座標\n     */\n\n  }, {\n    key: \"getY\",\n    value: function getY() {\n      return this.y + Circle.OY;\n    }\n    /**\n     * 他の静止している円と接触したら静止させるためのサブルーチン\n     * @param {number} idx - circles における，この円のインデックス\n     * @param {Array<Circle>} circles - すべての円を含む配列\n     */\n\n  }, {\n    key: \"updateState\",\n    value: function updateState(idx, circles) {\n      var _this = this;\n\n      circles.forEach(function (particle, j) {\n        if (_this.ongoing && idx !== j) {\n          if (Math.sqrt((particle.x - _this.x) * (particle.x - _this.x) + (particle.y - _this.y) * (particle.y - _this.y)) <= particle.r + _this.r) {\n            _this.ongoing = false;\n          }\n        }\n      });\n    }\n  }, {\n    key: \"computeNeighbors\",\n    value: function computeNeighbors(circles) {\n      var _this2 = this;\n\n      var res = [];\n      circles.forEach(function (circle) {\n        if (_this2.index !== circle.index && !circle.ongoing) {\n          var d = distance(_this2.x, _this2.y, circle.x, circle.y);\n\n          if (d < _this2.r + circle.r) {\n            res.push(circle.index);\n          }\n        }\n      });\n      return res;\n    }\n    /**\n     * 位置の更新\n     */\n\n  }, {\n    key: \"evolution\",\n    value: function evolution() {\n      if (this.ongoing) {\n        this.x += this.vx;\n        this.y += this.vy;\n      }\n    }\n    /**\n     * 描画\n     * @param {P5} p5\n     */\n\n  }, {\n    key: \"draw\",\n    value: function draw(p5) {\n      // p5.fill(255)\n      // p5.strokeWeight(2);\n      // p5.circle(this.x, this.y, 2.0 * this.r );\n      // p5.noStroke()\n      // for(let s=2.0 * this.r - 1;s>0;s-=1.0){\n      //     p5.fill(255-255*(s/(2.0 * this.r - 1)))\n      //     p5.circle(this.x, this.y, s);\n      // }\n      p5.noStroke();\n\n      if (this.ongoing) {\n        p5.fill(255);\n      } else {\n        p5.fill(100);\n      }\n\n      p5.circle(this.x, this.y, 2.0 * this.r);\n    }\n  }]);\n\n  return Circle;\n}();\n\n(0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, \"counter\", 0);\n\n(0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, \"R\", void 0);\n\n(0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, \"OX\", void 0);\n\n(0,_home_misteltein_misteltein_white_night_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(Circle, \"OY\", void 0);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvZGVzL3A1L0RMQS1ibG9jay9tYXN0ZXIvQ2lyY2xlLnRzPzIxM2UiXSwibmFtZXMiOlsidW5pZm9ybURpc3RCZXR3ZWVuIiwidHJ1bmNNaW4iLCJ0cnVuY01heCIsIk1hdGgiLCJyYW5kb20iLCJub3JtYWxEaXN0Iiwic2lnbWEiLCJyZXMiLCJpIiwibm9ybWFsVHJ1bmMiLCJtdSIsImRpc3RhbmNlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJzcXJ0IiwicG93IiwiQ2lyY2xlIiwiaW5kZXgiLCJjb3VudGVyIiwidGhldGEiLCJQSSIsIngiLCJSIiwic2luIiwieSIsImNvcyIsIm5vcm0iLCJ2eCIsInZ5Iiwib25nb2luZyIsInIiLCJ1cGRhdGVTdGF0ZSIsIkVycm9yIiwiT1giLCJPWSIsImlkeCIsImNpcmNsZXMiLCJmb3JFYWNoIiwicGFydGljbGUiLCJqIiwiY2lyY2xlIiwiZCIsInB1c2giLCJwNSIsIm5vU3Ryb2tlIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFtQkMsUUFBbkIsRUFBZ0Q7QUFDdkUsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLE1BQWlCRixRQUFRLEdBQUdELFFBQTVCLElBQXdDQSxRQUEvQztBQUNILENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUEyQjtBQUMxQyxNQUFJQyxHQUFHLEdBQUcsR0FBVjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0IsRUFBRUEsQ0FBMUIsRUFBNkI7QUFDekJELE9BQUcsSUFBSVAsa0JBQWtCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBekI7QUFDSDs7QUFDRCxTQUFPLENBQUNPLEdBQUcsR0FBRyxHQUFQLElBQWNELEtBQXJCO0FBQ0gsQ0FORDtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNoQkgsS0FEZ0IsRUFFaEJJLEVBRmdCLEVBR2hCVCxRQUhnQixFQUloQkMsUUFKZ0IsRUFLUDtBQUNULE1BQU1LLEdBQUcsR0FBR0YsVUFBVSxDQUFDQyxLQUFELENBQVYsR0FBb0JJLEVBQWhDOztBQUNBLE1BQUlILEdBQUcsR0FBR04sUUFBTixJQUFrQkMsUUFBUSxHQUFHSyxHQUFqQyxFQUFzQztBQUNsQyxXQUFPRSxXQUFXLENBQUNILEtBQUQsRUFBUUksRUFBUixFQUFZVCxRQUFaLEVBQXNCQyxRQUF0QixDQUFsQjtBQUNIOztBQUNELFNBQU9LLEdBQVA7QUFDSCxDQVhEOztBQWFBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBV0MsRUFBWCxFQUFxQkMsRUFBckIsRUFBK0JDLEVBQS9CLEVBQTJDO0FBQ3hELFNBQU9aLElBQUksQ0FBQ2EsSUFBTCxDQUFVYixJQUFJLENBQUNjLEdBQUwsQ0FBVUgsRUFBRSxHQUFDRixFQUFiLEVBQWlCLENBQWpCLElBQW9CVCxJQUFJLENBQUNjLEdBQUwsQ0FBU0YsRUFBRSxHQUFDRixFQUFaLEVBQWUsQ0FBZixDQUE5QixDQUFQO0FBQ0gsQ0FGRDtBQUlBO0FBQ0E7QUFDQTs7O0lBQ3FCSyxNO0FBR2pCO0FBR0E7QUFJQTtBQUdBO0FBR0E7QUFFQTs7QUFLQTtBQUNKO0FBQ0E7QUFDSSxvQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLEtBQUwsR0FBYUQsTUFBTSxDQUFDRSxPQUFQLEVBQWI7QUFFQSxRQUFNQyxLQUFLLEdBQUdyQixrQkFBa0IsQ0FBQyxHQUFELEVBQU0sTUFBTUcsSUFBSSxDQUFDbUIsRUFBakIsQ0FBaEM7QUFDQSxTQUFLQyxDQUFMLEdBQVNMLE1BQU0sQ0FBQ00sQ0FBUCxHQUFXckIsSUFBSSxDQUFDc0IsR0FBTCxDQUFTSixLQUFULENBQXBCO0FBQ0EsU0FBS0ssQ0FBTCxHQUFTUixNQUFNLENBQUNNLENBQVAsR0FBV3JCLElBQUksQ0FBQ3dCLEdBQUwsQ0FBU04sS0FBVCxDQUFwQjtBQUNBLFFBQU1PLElBQUksR0FBR3pCLElBQUksQ0FBQ2EsSUFBTCxDQUFVYixJQUFJLENBQUNjLEdBQUwsQ0FBUyxLQUFLTSxDQUFkLEVBQWlCLENBQWpCLElBQXNCcEIsSUFBSSxDQUFDYyxHQUFMLENBQVMsS0FBS1MsQ0FBZCxFQUFpQixDQUFqQixDQUFoQyxDQUFiO0FBQ0EsU0FBS0csRUFBTCxHQUFVLENBQUMsS0FBS04sQ0FBTixHQUFVSyxJQUFwQjtBQUNBLFNBQUtFLEVBQUwsR0FBVSxDQUFDLEtBQUtKLENBQU4sR0FBVUUsSUFBcEI7QUFDQSxTQUFLRyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtDLENBQUwsR0FBU3ZCLFdBQVcsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosRUFBaUIsSUFBakIsQ0FBcEI7QUFDQSxTQUFLd0IsV0FBTCxDQUFpQixDQUFqQixFQUFvQixFQUFwQjs7QUFDQSxRQUFJLENBQUMsS0FBS0YsT0FBVixFQUFtQjtBQUNmLFlBQU0sSUFBSUcsS0FBSixDQUFVLEtBQVYsQ0FBTjtBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7Ozs7MkJBQ21CO0FBQ1gsYUFBTyxLQUFLWCxDQUFMLEdBQVNMLE1BQU0sQ0FBQ2lCLEVBQXZCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OzsyQkFDbUI7QUFDWCxhQUFPLEtBQUtULENBQUwsR0FBU1IsTUFBTSxDQUFDa0IsRUFBdkI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBQ2dCQyxHLEVBQWFDLE8sRUFBd0I7QUFBQTs7QUFDN0NBLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFDQyxRQUFELEVBQW1CQyxDQUFuQixFQUFpQztBQUM3QyxZQUFJLEtBQUksQ0FBQ1YsT0FBTCxJQUFnQk0sR0FBRyxLQUFLSSxDQUE1QixFQUErQjtBQUMzQixjQUNJdEMsSUFBSSxDQUFDYSxJQUFMLENBQ0ksQ0FBQ3dCLFFBQVEsQ0FBQ2pCLENBQVQsR0FBYSxLQUFJLENBQUNBLENBQW5CLEtBQXlCaUIsUUFBUSxDQUFDakIsQ0FBVCxHQUFhLEtBQUksQ0FBQ0EsQ0FBM0MsSUFDQSxDQUFDaUIsUUFBUSxDQUFDZCxDQUFULEdBQWEsS0FBSSxDQUFDQSxDQUFuQixLQUF5QmMsUUFBUSxDQUFDZCxDQUFULEdBQWEsS0FBSSxDQUFDQSxDQUEzQyxDQUZKLEtBSUFjLFFBQVEsQ0FBQ1IsQ0FBVCxHQUFhLEtBQUksQ0FBQ0EsQ0FMdEIsRUFNRTtBQUNFLGlCQUFJLENBQUNELE9BQUwsR0FBZSxLQUFmO0FBQ0g7QUFDSjtBQUNKLE9BWkQ7QUFhSDs7O3FDQUVnQk8sTyxFQUF1QjtBQUFBOztBQUNwQyxVQUFNL0IsR0FBRyxHQUFHLEVBQVo7QUFDQStCLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFDRyxNQUFELEVBQVU7QUFDdEIsWUFBRyxNQUFJLENBQUN2QixLQUFMLEtBQWF1QixNQUFNLENBQUN2QixLQUFwQixJQUE2QixDQUFDdUIsTUFBTSxDQUFDWCxPQUF4QyxFQUFnRDtBQUM1QyxjQUFNWSxDQUFDLEdBQUdoQyxRQUFRLENBQUMsTUFBSSxDQUFDWSxDQUFOLEVBQVEsTUFBSSxDQUFDRyxDQUFiLEVBQWVnQixNQUFNLENBQUNuQixDQUF0QixFQUF3Qm1CLE1BQU0sQ0FBQ2hCLENBQS9CLENBQWxCOztBQUNBLGNBQUdpQixDQUFDLEdBQUUsTUFBSSxDQUFDWCxDQUFMLEdBQU9VLE1BQU0sQ0FBQ1YsQ0FBcEIsRUFBdUI7QUFDbkJ6QixlQUFHLENBQUNxQyxJQUFKLENBQVNGLE1BQU0sQ0FBQ3ZCLEtBQWhCO0FBQ0g7QUFDSjtBQUNKLE9BUEQ7QUFRQSxhQUFPWixHQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7Z0NBQ2dCO0FBQ1IsVUFBSSxLQUFLd0IsT0FBVCxFQUFrQjtBQUNkLGFBQUtSLENBQUwsSUFBVSxLQUFLTSxFQUFmO0FBQ0EsYUFBS0gsQ0FBTCxJQUFVLEtBQUtJLEVBQWY7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7eUJBQ1NlLEUsRUFBUTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsUUFBRSxDQUFDQyxRQUFIOztBQUNBLFVBQUcsS0FBS2YsT0FBUixFQUFnQjtBQUNaYyxVQUFFLENBQUNFLElBQUgsQ0FBUSxHQUFSO0FBQ0gsT0FGRCxNQUVLO0FBQ0RGLFVBQUUsQ0FBQ0UsSUFBSCxDQUFRLEdBQVI7QUFDSDs7QUFDREYsUUFBRSxDQUFDSCxNQUFILENBQVUsS0FBS25CLENBQWYsRUFBa0IsS0FBS0csQ0FBdkIsRUFBMEIsTUFBTSxLQUFLTSxDQUFyQztBQUNIOzs7Ozs7dUlBM0hnQmQsTSxhQUNBLEM7O3VJQURBQSxNOzt1SUFBQUEsTTs7dUlBQUFBLE0iLCJmaWxlIjoiLi9wdWJsaWMvY29kZXMvcDUvRExBLWJsb2NrL21hc3Rlci9DaXJjbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUDUgZnJvbSBcInA1XCI7XG5cbi8qKlxuICog5LiA5qeY5Lmx5pWwXG4gKiBAcGFyYW0ge251bWJlcn0gdHJ1bmNNaW4gLSDljLrplpPlp4vjgoFcbiAqIEBwYXJhbSB7bnVtYmVyfSB0cnVuY01pbiAtIOWMuumWk+e1guOCj+OCilxuICovXG5jb25zdCB1bmlmb3JtRGlzdEJldHdlZW4gPSAodHJ1bmNNaW46IG51bWJlciwgdHJ1bmNNYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAodHJ1bmNNYXggLSB0cnVuY01pbikgKyB0cnVuY01pbjtcbn07XG5cbi8qKlxuICog5q2j6KaP5Lmx5pWwXG4gKiBAcGFyYW0ge251bWJlcn0gc2lnbWEgLSDliIbmlaNcbiAqL1xuY29uc3Qgbm9ybWFsRGlzdCA9IChzaWdtYTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICBsZXQgcmVzID0gMC4wO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICByZXMgKz0gdW5pZm9ybURpc3RCZXR3ZWVuKDAuMCwgMS4wKTtcbiAgICB9XG4gICAgcmV0dXJuIChyZXMgLSA2LjApICogc2lnbWE7XG59O1xuXG4vKipcbiAqIOWIh+aWreato+imj+WIhuW4g1xuICogQHBhcmFtIHNpZ21hIC0g5YiG5pWjXG4gKiBAcGFyYW0gbXUgLSDlubPlnYdcbiAqIEBwYXJhbSB0cnVuY01pbiAtIOWMuumWk+Wni+OCgVxuICogQHBhcmFtIHRydW5jTWF4IC0g5Yy66ZaT57WC44KP44KKXG4gKi9cbmNvbnN0IG5vcm1hbFRydW5jID0gKFxuICAgIHNpZ21hOiBudW1iZXIsXG4gICAgbXU6IG51bWJlcixcbiAgICB0cnVuY01pbjogbnVtYmVyLFxuICAgIHRydW5jTWF4OiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gICAgY29uc3QgcmVzID0gbm9ybWFsRGlzdChzaWdtYSkgKyBtdTtcbiAgICBpZiAocmVzIDwgdHJ1bmNNaW4gfHwgdHJ1bmNNYXggPCByZXMpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbFRydW5jKHNpZ21hLCBtdSwgdHJ1bmNNaW4sIHRydW5jTWF4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IGRpc3RhbmNlID0gKHgxOm51bWJlcix5MTpudW1iZXIseDI6bnVtYmVyLHkyOm51bWJlcik9PntcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KCh4Mi14MSksMikrTWF0aC5wb3coeTIteTEsMikpO1xufVxuXG4vKipcbiAqIOWGhuOCkuabuOOBj+OBn+OCgeOBruOCr+ODqeOCuVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICAgIHN0YXRpYyBjb3VudGVyID0gMDtcblxuICAgIC8vIOeUn+aIkOOBmeOCi+ODquODs+OCsOOBruWNiuW+hFxuICAgIHN0YXRpYyBSOiBudW1iZXI7XG5cbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jjga7luqfmqJnns7vjgafjga7lhobjgpLooajjgZnjgZ/jgoHjga7luqfmqJnns7vjga7ljp/ngrlcbiAgICBzdGF0aWMgT1g6IG51bWJlcjtcbiAgICBzdGF0aWMgT1k6IG51bWJlcjtcblxuICAgIC8vIOOBk+OBruW6p+aomeezu+OBp+OBruWGhuOBruW6p+aomVxuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgLy8g56e75YuV6YCf5bqmXG4gICAgdng6IG51bWJlcjtcbiAgICB2eTogbnVtYmVyO1xuICAgIC8vIOWNiuW+hFxuICAgIHI6IG51bWJlcjtcbiAgICAvLyDli5XjgYTjgabjgYTjgovjgYtcbiAgICBvbmdvaW5nOiBib29sZWFuO1xuXG4gICAgaW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIOWGhuOCkueUn+aIkOOBmeOCi1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gQ2lyY2xlLmNvdW50ZXIrKztcblxuICAgICAgICBjb25zdCB0aGV0YSA9IHVuaWZvcm1EaXN0QmV0d2VlbigwLjAsIDIuMCAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnggPSBDaXJjbGUuUiAqIE1hdGguc2luKHRoZXRhKTtcbiAgICAgICAgdGhpcy55ID0gQ2lyY2xlLlIgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICAgIGNvbnN0IG5vcm0gPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54LCAyKSArIE1hdGgucG93KHRoaXMueSwgMikpO1xuICAgICAgICB0aGlzLnZ4ID0gLXRoaXMueCAvIG5vcm07XG4gICAgICAgIHRoaXMudnkgPSAtdGhpcy55IC8gbm9ybTtcbiAgICAgICAgdGhpcy5vbmdvaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yID0gbm9ybWFsVHJ1bmMoNS4wLCAxNS4wLCA1LjAsIDMwLjApO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKDAsIFtdKTtcbiAgICAgICAgaWYgKCF0aGlzLm9uZ29pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVuZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODh+ODleOCqeODq+ODiOOBruW6p+aomeezu+OBp+OBriB4IOW6p+aomVxuICAgICAqIEByZXR1cm4ge251bWJlcn0geCDluqfmqJlcbiAgICAgKi9cbiAgICBnZXRYKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyBDaXJjbGUuT1g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OH44OV44Kp44Or44OI44Gu5bqn5qiZ57O744Gn44GuIHkg5bqn5qiZXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB5IOW6p+aomVxuICAgICAqL1xuICAgIGdldFkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIENpcmNsZS5PWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku5bjga7pnZnmraLjgZfjgabjgYTjgovlhobjgajmjqXop6bjgZfjgZ/jgonpnZnmraLjgZXjgZvjgovjgZ/jgoHjga7jgrXjg5bjg6vjg7zjg4Hjg7NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IC0gY2lyY2xlcyDjgavjgYrjgZHjgovvvIzjgZPjga7lhobjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICAgKiBAcGFyYW0ge0FycmF5PENpcmNsZT59IGNpcmNsZXMgLSDjgZnjgbnjgabjga7lhobjgpLlkKvjgoDphY3liJdcbiAgICAgKi9cbiAgICB1cGRhdGVTdGF0ZShpZHg6IG51bWJlciwgY2lyY2xlczogQXJyYXk8Q2lyY2xlPikge1xuICAgICAgICBjaXJjbGVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGUsIGo6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub25nb2luZyAmJiBpZHggIT09IGopIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0aWNsZS54IC0gdGhpcy54KSAqIChwYXJ0aWNsZS54IC0gdGhpcy54KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFydGljbGUueSAtIHRoaXMueSkgKiAocGFydGljbGUueSAtIHRoaXMueSlcbiAgICAgICAgICAgICAgICAgICAgKSA8PVxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5yICsgdGhpcy5yXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25nb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcHV0ZU5laWdoYm9ycyhjaXJjbGVzOiBBcnJheTxDaXJjbGU+KXtcbiAgICAgICAgY29uc3QgcmVzID0gW11cbiAgICAgICAgY2lyY2xlcy5mb3JFYWNoKChjaXJjbGUpPT57XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4IT09Y2lyY2xlLmluZGV4ICYmICFjaXJjbGUub25nb2luZyl7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGRpc3RhbmNlKHRoaXMueCx0aGlzLnksY2lyY2xlLngsY2lyY2xlLnkpO1xuICAgICAgICAgICAgICAgIGlmKGQ8KHRoaXMucitjaXJjbGUucikpe1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChjaXJjbGUuaW5kZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9jee9ruOBruabtOaWsFxuICAgICAqL1xuICAgIGV2b2x1dGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub25nb2luZykge1xuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaPj+eUu1xuICAgICAqIEBwYXJhbSB7UDV9IHA1XG4gICAgICovXG4gICAgZHJhdyhwNTogUDUpIHtcbiAgICAgICAgLy8gcDUuZmlsbCgyNTUpXG4gICAgICAgIC8vIHA1LnN0cm9rZVdlaWdodCgyKTtcbiAgICAgICAgLy8gcDUuY2lyY2xlKHRoaXMueCwgdGhpcy55LCAyLjAgKiB0aGlzLnIgKTtcbiAgICAgICAgLy8gcDUubm9TdHJva2UoKVxuICAgICAgICAvLyBmb3IobGV0IHM9Mi4wICogdGhpcy5yIC0gMTtzPjA7cy09MS4wKXtcbiAgICAgICAgLy8gICAgIHA1LmZpbGwoMjU1LTI1NSoocy8oMi4wICogdGhpcy5yIC0gMSkpKVxuICAgICAgICAvLyAgICAgcDUuY2lyY2xlKHRoaXMueCwgdGhpcy55LCBzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBwNS5ub1N0cm9rZSgpO1xuICAgICAgICBpZih0aGlzLm9uZ29pbmcpe1xuICAgICAgICAgICAgcDUuZmlsbCgyNTUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcDUuZmlsbCgxMDApXG4gICAgICAgIH1cbiAgICAgICAgcDUuY2lyY2xlKHRoaXMueCwgdGhpcy55LCAyLjAgKiB0aGlzLnIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/codes/p5/DLA-block/master/Circle.ts\n");

/***/ })

});