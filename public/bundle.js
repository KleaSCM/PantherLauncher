/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameList */ "./src/components/GameList.jsx");
/* harmony import */ var _GameDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameDetails */ "./src/components/GameDetails.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedGame = _useState2[0],
    setSelectedGame = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    expandedCategories = _useState4[0],
    setExpandedCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: 'Overwatch 2',
      path: 'path/to/Overwatch2.exe',
      description: 'Join the fray in Overwatch 2, the highly anticipated sequel to Blizzard\'s acclaimed team-based shooter, featuring new heroes, maps, and game modes.',
      icon: '../public/icons/Overwatch2.png'
    }, {
      name: 'BattleNet',
      path: 'path/to/BattleNet.exe',
      description: 'Battle.net is Blizzard\'s game launcher and social hub, providing access to a vast library of Blizzard games and a thriving community.',
      icon: '../public/icons/BattleNet.png'
    }, {
      name: 'WoW',
      path: 'path/to/WoW.exe',
      description: 'Dive into the World of Warcraft, a massive multiplayer online role-playing game set in the rich fantasy universe of Azeroth.',
      icon: '../public/icons/WoW.png'
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    games = _useState6[0],
    setGames = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: 'Spotify',
      path: 'spotify:',
      description: 'Spotify is a leading music streaming service offering millions of songs, podcasts, and curated playlists for every mood and moment.',
      icon: '../public/icons/spotify.png'
    }]),
    _useState8 = _slicedToArray(_useState7, 2),
    music = _useState8[0],
    setMusic = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: 'YouTube',
      url: 'https://www.youtube.com',
      description: 'YouTube is the world\'s largest video-sharing platform, offering a vast array of content from music videos to educational tutorials.',
      icon: '../public/icons/youtube.png'
    }, {
      name: 'ChatGPT',
      url: 'https://chat.openai.com',
      description: 'ChatGPT is OpenAI\'s state-of-the-art conversational AI, capable of engaging in meaningful and intelligent dialogue across a wide range of topics.',
      icon: '../public/icons/chatgpt.png'
    }, {
      name: 'GitHub',
      url: 'https://github.com',
      description: 'GitHub is the world\'s leading software development platform, hosting millions of repositories and fostering collaborative coding.',
      icon: '../public/icons/github.png'
    }, {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      description: 'LinkedIn is a professional networking platform that connects job seekers, employers, and professionals from various industries.',
      icon: '../public/icons/linkedin.png'
    }, {
      name: 'CurseForge',
      url: 'https://www.curseforge.com',
      description: 'CurseForge is a modding platform that offers a wide variety of mods and add-ons for popular games like World of Warcraft and Minecraft.',
      icon: '../public/icons/curseforge.jpg'
    }, {
      name: 'Google',
      url: 'https://www.google.com',
      description: 'Google is the world\'s leading search engine, providing quick and easy access to information, services, and resources on the web.',
      icon: '../public/icons/google.png'
    }]),
    _useState10 = _slicedToArray(_useState9, 2),
    webApps = _useState10[0],
    setWebApps = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: 'Visual Studio',
      path: 'path/to/VisualStudio.exe',
      description: 'Visual Studio is a comprehensive integrated development environment (IDE) from Microsoft for building modern web, cloud, and desktop applications.',
      icon: '../public/icons/Visual_Studio_Icon_2022.png'
    }, {
      name: 'VS Code',
      path: 'path/to/VSCode.exe',
      description: 'Visual Studio Code is a lightweight but powerful source code editor from Microsoft, available for Windows, macOS, and Linux.',
      icon: '../public/icons/VSCODE.png'
    }]),
    _useState12 = _slicedToArray(_useState11, 2),
    software = _useState12[0],
    setSoftware = _useState12[1];
  var toggleCategory = function toggleCategory(category) {
    setExpandedCategories(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, category, !prevState[category]));
    });
  };
  var handleWebClick = function handleWebClick(url) {
    electron__WEBPACK_IMPORTED_MODULE_1__.shell.openExternal(url);
  };
  var launchGame = function launchGame(path) {
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.send('launch-game', path);
  };
  var categories = [{
    name: 'Games',
    items: games
  }, {
    name: 'Music',
    items: music
  }, {
    name: 'Web Applications',
    items: webApps
  }, {
    name: 'Software',
    items: software
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome to PantherLauncher")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "category-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "Search..."
  }), categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: category.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      onClick: function onClick() {
        return toggleCategory(category.name);
      },
      className: "category-title"
    }, category.name), expandedCategories[category.name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GameList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      games: category.items,
      onSelect: setSelectedGame,
      onWebClick: handleWebClick
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-and-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GameDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    game: [].concat(_toConsumableArray(games), _toConsumableArray(music), _toConsumableArray(webApps), _toConsumableArray(software)).find(function (game) {
      return game.name === selectedGame;
    }),
    onLaunch: launchGame
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/GameDetails.jsx":
/*!****************************************!*\
  !*** ./src/components/GameDetails.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var GameDetails = function GameDetails(_ref) {
  var game = _ref.game,
    onLaunch = _ref.onLaunch;
  if (!game) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "game-details"
    }, "Select a game or application to see details");
  }
  var isSoftware = game.path && (game.name === 'Visual Studio' || game.name === 'VS Code');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "game-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, game.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, game.description), game.path && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return onLaunch(game.path);
    }
  }, isSoftware ? 'Run Software' : 'Launch Game'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDetails);

/***/ }),

/***/ "./src/components/GameList.jsx":
/*!*************************************!*\
  !*** ./src/components/GameList.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);


var GameList = function GameList(_ref) {
  var games = _ref.games,
    onSelect = _ref.onSelect,
    onWebClick = _ref.onWebClick;
  var handleClick = function handleClick(game) {
    if (game.url) {
      onWebClick(game.url);
    } else if (game.path && game.name === 'Spotify') {
      electron__WEBPACK_IMPORTED_MODULE_1__.shell.openExternal('spotify:');
    } else {
      onSelect(game.name);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "game-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "game-icons ".concat(games.length > 0 && games[0].url ? 'grid' : '')
  }, games.map(function (game) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: game.name,
      onClick: function onClick() {
        return handleClick(game);
      },
      className: "game-icon-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: game.icon,
      alt: game.name,
      className: "game-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, game.name));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameList);

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));
/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root');
/******/ })()
;
//# sourceMappingURL=bundle.js.map