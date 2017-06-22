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


// Elements

var player = document.querySelector('.player');
var video = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');
var toggle = player.querySelector('.toggle');
var skipButtons = player.querySelectorAll('[data-skip]');
var ranges = player.querySelectorAll('.player__slider');
var fullscreen = player.querySelector('.player__fullscreen');

// Functions

function togglePlay() {
	// if (video.paused) {
	// 	video.play();
	// } else {
	// 	video.pause();
	// } //  or use ->
	var method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	var icon = this.paused ? '▶' : '▍▍';
	toggle.textContent = icon;
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip); // convert it to float because dataset is a string
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	var percent = video.currentTime / video.duration * 100; // math for calculating progress bar 
	progressBar.style.flexBasis = percent + '%';
}

function scrub(e) {
	var scrubTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
	console.log(e);
}

function expandScreen() {
	player.webkitRequestFullScreen();
	if (this.fullscreenElement) {
		console.log(true);
	}
}

// Event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(function (button) {
	return button.addEventListener('click', skip);
});
ranges.forEach(function (range) {
	return range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(function (range) {
	return range.addEventListener('mousemove', handleRangeUpdate);
});

fullscreen.addEventListener('click', expandScreen);

var mousedown = false; // flag variable

progress.addEventListener('click', scrub);
// when someone moves mouse, this checks mousedown var, and if its true it moves on to scrub(e)
// if mousedown is false, it will return false, so it will not do anything at all
progress.addEventListener('mousemove', function (e) {
	return mousedown && scrub(e);
});
progress.addEventListener('mousedown', function () {
	return mousedown = true;
});
progress.addEventListener('mouseup', function () {
	return mousedown = false;
});

/***/ })
/******/ ]);