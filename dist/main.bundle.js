/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var nextBtn = document.querySelector('#nextBtn');
var backBtn = document.querySelector('#backBtn');
var sliderContainer = document.querySelector('.slider-container');
var App = /*#__PURE__*/function () {
  function App(data) {
    var _this = this;

    _classCallCheck(this, App);

    this._serviceData = data;
    this._currentPage = 1;

    this._renderPages(data.pages);

    nextBtn.addEventListener('click', function () {
      if (_this._currentPage < _this._serviceData.pages.length) {
        _this._currentPage += 1;
        sliderContainer.style.transform = "translateX(-".concat((_this._currentPage - 1) * 100, "%)");
      }
    });
    backBtn.addEventListener('click', function () {
      if (_this._currentPage !== 1) {
        _this._currentPage -= 1;
        sliderContainer.style.transform = "translateX(-".concat((_this._currentPage - 1) * 100, "%)");
      }
    });
  }

  _createClass(App, [{
    key: "_renderPages",
    value: function _renderPages(pages) {
      var sliderContainer = document.querySelector('.slider-container');
      pages.forEach(function (page) {
        var sliderItem = document.createElement('div');
        sliderItem.style.position = 'relative';
        sliderItem.style.minWidth = '100%';
        sliderItem.style.width = '100%';
        sliderItem.style.height = '100%';
        sliderItem.style.flex = '1';
        sliderItem.style.background = 'url(' + page.background + ')';
        sliderContainer.appendChild(sliderItem);
      });
    }
  }]);

  return App;
}();
;// CONCATENATED MODULE: ./src/js/index.js



var appHeight = function appHeight() {
  var doc = document.documentElement;
  doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
};

window.addEventListener('resize', appHeight);
appHeight();
window.app = new App({
  generalData: {
    "lang": "GE",
    "darkMode": true
  },
  pages: [{
    text1: 'Text1',
    text2: 'Text2',
    pageName: 'page1',
    background: '/assets/img/1.svg'
  }, {
    text1: 'Text1',
    text2: 'Text2',
    pageName: 'page2',
    background: '/assets/img/2.svg'
  }, {
    text1: 'Text1',
    text2: 'Text2',
    pageName: 'page3',
    background: '/assets/img/1.svg'
  }, {
    text1: 'Text1',
    text2: 'Text2',
    pageName: 'page4',
    background: '/assets/img/2.svg'
  }]
});
/******/ })()
;