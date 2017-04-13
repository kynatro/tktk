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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Highlight outstanding images and copy
 *
 * Outlines images and highlights copy in magenta wherever "tktk" is found.
 * Simply start outstanding copy blocks with "tktk" to highlight text. Add
 * a "#tktk" to the end of image src values and un-defined href values to
 * outline images and highlight links respectively.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var css = ".tktk, a[href*=\"#tktk\"] {\n    color: magenta !important;\n  }\n  img[src*=\"#tktk\"], img[srcset*=\"#tktk\"] {\n    box-shadow: 0 0 0 2px magenta;\n  }";
  var styleTag = document.createElement('style');
  styleTag.type = "text/css";
  styleTag.innerHTML = css;
  document.querySelector('head').appendChild(styleTag);

  document.querySelectorAll("p,li,dt,dd,blockquote,cite,div,h1,h2,h3,h4,h5,h6").forEach(function (element) {
    element.childNodes.forEach(function (childNode) {
      if (childNode.nodeType === 3 && /^\s*tktk/.test(childNode.nodeValue)) {
        childNode.nodeValue = childNode.nodeValue.replace(/^\s*tktk\s*/gi, "");
        element.classList.add('tktk');
      }
    });
  });
};

/***/ })
/******/ ]);