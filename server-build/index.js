/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../src/App */ \"./src/App.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.get(\"/\", (req, res) => {\n  fetch(\"https://api.spaceXdata.com/v3/launches?limit=100\").then(res => res.json()).then(result => {\n    const clientApp = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      initialData: result\n    }));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(\"./build/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        return res.status(500).send(\"Oops, better luck next time!\");\n      }\n\n      return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${clientApp}</div>`));\n    });\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"./build\"));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Home */ \"./src/Components/Home.js\");\n\n\n\nfunction App(props) {\n  const {\n    initialData\n  } = { ...props\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    initialData: initialData\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Components/FilterComponent.js":
/*!*******************************************!*\
  !*** ./src/Components/FilterComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction FilterComponent(props) {\n  const [yearsButtonId, setYearsButtonId] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [launchButtonId, setLaunchButtonId] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [landButtonId, setLandButtonId] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-component-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"filter-title\"\n  }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"launch-properties\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"launch-properties-title\"\n  }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2006\",\n    className: yearsButtonId === \"2006\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2006\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2006\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2007\",\n    className: yearsButtonId === \"2007\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2007\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2007\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2008\",\n    className: yearsButtonId === \"2008\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2008\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2008\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2009\",\n    className: yearsButtonId === \"2009\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2009\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2009\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2010\",\n    className: yearsButtonId === \"2010\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2010\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2010\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2011\",\n    className: yearsButtonId === \"2011\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2011\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2011\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2012\",\n    className: yearsButtonId === \"2012\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2012\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2012\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2013\",\n    className: yearsButtonId === \"2013\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2013\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2013\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2014\",\n    className: yearsButtonId === \"2014\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2014\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2014\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2015\",\n    className: yearsButtonId === \"2015\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2015\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2015\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2016\",\n    className: yearsButtonId === \"2016\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2016\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2017\",\n    className: yearsButtonId === \"2017\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2017\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2017\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2018\",\n    className: yearsButtonId === \"2018\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2018\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2018\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2019\",\n    className: yearsButtonId === \"2019\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2019\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2019\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container-last\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"2020\",\n    className: yearsButtonId === \"2020\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"2020\",\n    onClick: e => {\n      e.preventDefault();\n      setYearsButtonId(e.target.id);\n      props.yearActive(e.target.value);\n    }\n  }, \"2020\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"successful-launch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"launch-properties-title\"\n  }, \"Successful Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"successful-launch-true\",\n    className: launchButtonId === \"successful-launch-true\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"true\",\n    onClick: e => {\n      e.preventDefault();\n      setLaunchButtonId(e.target.id);\n      props.successLaunch(true);\n    }\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"successful-launch-false\",\n    className: launchButtonId === \"successful-launch-false\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"false\",\n    onClick: e => {\n      e.preventDefault();\n      setLaunchButtonId(e.target.id);\n      props.successLaunch(false);\n    }\n  }, \"False\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"successful-landing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"launch-properties-title\"\n  }, \"Successful Landing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"successful-land-true\",\n    className: landButtonId === \"successful-land-true\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"true\",\n    onClick: e => {\n      e.preventDefault();\n      setLandButtonId(e.target.id);\n      props.successLanding(true);\n    }\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"successful-land-false\",\n    className: landButtonId === \"successful-land-false\" ? \"launch-years-button-active\" : \"launch-years-button\",\n    value: \"successful-land-false\",\n    onClick: e => {\n      e.preventDefault();\n      setLandButtonId(e.target.id);\n      props.successLanding(false);\n    }\n  }, \"False\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponent);\n\n//# sourceURL=webpack:///./src/Components/FilterComponent.js?");

/***/ }),

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FilterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterComponent */ \"./src/Components/FilterComponent.js\");\n/* harmony import */ var _MissionsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MissionsList */ \"./src/Components/MissionsList.js\");\n\n\n\n\nfunction Home(props) {\n  const {\n    initialData\n  } = { ...props\n  };\n  const [filterValue, setFilterValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const successLaunch = label => {\n    setFilterValue(prevState => ({ ...prevState,\n      launch_success: label\n    }));\n  };\n\n  const successLanding = label => {\n    setFilterValue(prevState => ({ ...prevState,\n      land_success: label\n    }));\n  };\n\n  const yearActive = label => {\n    setFilterValue(prevState => ({ ...prevState,\n      launch_year: label\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app-container-title\"\n  }, \"SpaceX Launch Programs\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    successLaunch: successLaunch,\n    successLanding: successLanding,\n    yearActive: yearActive\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MissionsList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterValue: filterValue,\n    initialData: initialData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Developed by: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"footer-credit\"\n  }, \"Nitin Verma\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/Components/Home.js?");

/***/ }),

/***/ "./src/Components/MissionCard.js":
/*!***************************************!*\
  !*** ./src/Components/MissionCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction MissionCard(props) {\n  const {\n    mission\n  } = { ...props\n  };\n  const year = new Date(mission.launch_date_local).getFullYear();\n  const cover = mission.links.mission_patch ? mission.links.mission_patch : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-card-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: \"mission cover\",\n    src: cover\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-name-data\"\n  }, `${mission.mission_name} #${mission.flight_number}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Mission Ids:\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-data-span\"\n  }, mission.mission_id.length > 0 ? mission.mission_id.map(id => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: id\n  }, id)) : \"N/A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Launch Year: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-data-span\"\n  }, year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Successful Launch:\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-data-span\"\n  }, mission.launch_success ? \"true\" : \"false\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Successful Landing:\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-data-span\"\n  }, mission.launch_landing === true ? \"true\" : mission.launch_landing === false ? \"false\" : \"N/A\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MissionCard);\n\n//# sourceURL=webpack:///./src/Components/MissionCard.js?");

/***/ }),

/***/ "./src/Components/MissionsList.js":
/*!****************************************!*\
  !*** ./src/Components/MissionsList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MissionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MissionCard */ \"./src/Components/MissionCard.js\");\n\n\n\nfunction MissionList(props) {\n  const {\n    initialData\n  } = { ...props\n  };\n  const [missionData, setMissionData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialData);\n  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    filterValue\n  } = { ...props\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var queryString = Object.keys(filterValue).map(key => key + \"=\" + filterValue[key]).join(\"&\");\n    console.log(queryString);\n    const parse_url = Object.keys(filterValue).length > 0 ? `https://api.spaceXdata.com/v3/launches?limit=100&${queryString}` : ``;\n    console.log(parse_url); // const url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${filterValue.launch_success}`;\n\n    setIsLoading(true);\n    fetch(parse_url).then(res => res.json()).then(result => {\n      setIsLoading(false);\n      setMissionData(result);\n    }, // exceptions from actual bugs in components.\n    error => {\n      setErrors(error);\n    });\n  }, [filterValue]); // console.log(missionData[0]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loading-container\"\n  }, \"Loading ....\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-list-container\"\n  }, missionData.length > 0 ? missionData.map(mission => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MissionCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: String(mission.flight_number),\n    mission: mission\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loading-container\"\n  }, \"No Data\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MissionList);\n\n//# sourceURL=webpack:///./src/Components/MissionsList.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });