/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************!*\
  !*** ./scr.js ***!
  \****************/
/***/ function(module, exports) {

	"use strict";
	
	//TODO:
	
	/*
	* 1. Create proxies with traps
	* 2. Create proxies with Reflect()
	* 3. Create proxies with get/set
	* 4. Intercept a keychain
	* 5. Check if the transpiler needs stage-0 in babel
	*/
	
	var target = {};
	
	var handler = {
	  get: function get(target, propKey, reciever) {
	    console.log("It has " + propKey);
	    return 123;
	  },
	  has: function has(target, propKey) {
	    console.log(" it has also has " + propKey);
	
	    return true;
	  }
	};
	var obj = new Proxy(target, handler);
	
	console.log(obj.foo);
	console.log(obj);
	
	for (var foo in obj) {
	  console.log("yass" + prop);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map