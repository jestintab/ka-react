
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(547);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jestin/Desktop/KeralaA/components/Layout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/jestin/Desktop/KeralaA/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jestin/Desktop/KeralaA/components/Layout.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jestin/Desktop/KeralaA/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/jestin/Desktop/KeralaA/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jestin/Desktop/KeralaA/components/Header.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(546);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jestin/Desktop/KeralaA/pages/post.js?entry';


var Content = function Content(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.url.query.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'This is the blog post content.'));
};

exports.default = function (props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(Content, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/jestin/Desktop/KeralaA/pages/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jestin/Desktop/KeralaA/pages/post.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[550]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wb3N0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ODgyZGM2NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz84ODJkYzY1Iiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3QuanM/ODgyZGM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAyMCxcbiAgcGFkZGluZzogMjAsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xufVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuXG5jb25zdCBDb250ZW50ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntwcm9wcy51cmwucXVlcnkudGl0bGV9PC9oMT5cbiAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC48L3A+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgIDxDb250ZW50IHVybD17cHJvcHMudXJsfSAvPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        