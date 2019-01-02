(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueWsc"] = factory();
	else
		root["VueWsc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var i=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._eventType=e,this._handler=t}var e,t,o;return e=n,(t=[{key:"compareTo",value:function(e){return e instanceof n&&e.eventType===this._eventType&&e.handler.toString()===this._handler.toString()}},{key:"eventType",get:function(){return this._eventType}},{key:"handler",get:function(){return this._handler}}])&&r(e.prototype,t),o&&r(e,o),n}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._id=e,this._value=t}var e,t,o;return e=n,(t=[{key:"id",get:function(){return this._id}},{key:"value",get:function(){return this._value},set:function(e){this._value=e}}])&&c(e.prototype,t),o&&c(e,o),n}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementId=0,this._repository=[]}var t,n,o;return t=e,(n=[{key:"getById",value:function(t){var n=null;return this._repository.forEach(function(e){null===n&&e.id===t&&(n=e.value)}),n}},{key:"getAll",value:function(){return this._repository.map(function(e){return e.value})}},{key:"add",value:function(e){var t=new s(++this._elementId,e);return this._repository.push(t),t.id}},{key:"deleteById",value:function(o){var r=!1;return this._repository.forEach(function(e,t,n){e.id===o&&(n.splice(t,1),r=!0)}),r}},{key:"deleteByIndex",value:function(e){return void 0!==this._repository[e]&&(this._repository.splice(e,1),!0)}},{key:"clear",value:function(){this._repository=[]}},{key:"length",get:function(){return this._repository.length}}])&&u(t.prototype,n),o&&u(t,o),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,p(t).call(this))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a),n=t,(o=[{key:"add",value:function(e){return y(p(t.prototype),"add",this).call(this,e)}},{key:"getByEventType",value:function(t){return this.getAll().filter(function(e){return e.eventType===t})}},{key:"getByHandler",value:function(t){return this.getAll().filter(function(e){return e.handler.toString()===t.toString()})}},{key:"hasByEventType",value:function(e){return Boolean(this.getByEventType(e).length)}},{key:"hasByHandler",value:function(e){return Boolean(this.getByHandler(e).length)}},{key:"deleteByEventType",value:function(t){var n=this,o=!1;return this._repository.forEach(function(e){e.value.eventType===t&&n.deleteById(e.id)&&(o=!0)}),o}},{key:"deleteByHandler",value:function(t){var n=this,o=!1;return this._repository.forEach(function(e){e.value.handler.toString()===t.toString()&&n.deleteById(e.id)&&(o=!0)}),o}}])&&f(n.prototype,o),r&&f(n,r),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,v(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,a),t}();function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var O=function(){function o(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),void 0===e)throw new TypeError("Required URL parameter is missing");if("object"!==m(n))throw new TypeError("Options is must be an object");this._url=e,this._protocols=t,this._options=function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,o;t=r,o=i[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return r}({},{useMessageQueue:!0,reconnection:!0,reconnectionOptions:{attempts:1/0,delay:1e3,maxDelay:5e3,increaseDelay:1e3}},n),this._webSocket=void 0,this._binaryType=void 0,this._extensions=void 0,this._protocol=void 0,this._eventHandlerRepository=new d,this._messageRepository=new k,this._reconnectionAttemptAt=Date.now(),this._currentAttempts=0,this._currentReconnectionDelay=this._options.reconnectionOptions.delay}var e,t,n;return e=o,n=[{key:"_standardEventTypes",get:function(){return["open","message","close","error"]}},{key:"_customEventTypes",get:function(){return["opening","closing","ready"]}}],(t=[{key:"connect",value:function(){var o=this;try{this._webSocket=new window.WebSocket(this._url,this._protocols)}catch(e){throw new Error(e.message)}["binaryType","extensions","protocol"].forEach(function(e){void 0!==o["_"+e]&&(o._webSocket[e]=o[e])}),this._executeCustomEvents("opening"),this._addEventsFromStandardQueue(),this._webSocket.addEventListener("open",function(e){o._currentAttempts=0,o._currentReconnectionDelay=o._options.reconnectionOptions.delay,o._sendMessagesFromQueue(),o._executeCustomEvents("ready",e)}),this._options.reconnection&&this._webSocket.addEventListener("close",function(e){if(!e.wasClean&&o._currentAttempts<o._options.reconnectionOptions.attempts){var t=Date.now(),n=o._currentReconnectionDelay-(t-o._reconnectionAttemptAt);n<0?o.reconnect():setTimeout(function(){o.reconnect()},n),o._currentAttempts++,o._currentReconnectionDelay+=o._options.reconnectionOptions.increaseDelay,o._currentReconnectionDelay>o._options.reconnectionOptions.maxDelay&&(o._currentReconnectionDelay=o._options.reconnectionOptions.maxDelay)}})}},{key:"reconnect",value:function(){if(!(this._webSocket instanceof window.WebSocket))throw new Error("WebSocket instance is not defined");this._reconnectionAttemptAt=Date.now(),this._webSocket.readyState===window.WebSocket.OPEN&&this._webSocket.close(),this.connect()}},{key:"send",value:function(e){this._webSocket instanceof window.WebSocket&&this._webSocket.readyState===window.WebSocket.OPEN?this._webSocket.send(e):this._options.useMessageQueue&&this._messageRepository.add(e)}},{key:"close",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3,t=1<arguments.length?arguments[1]:void 0;if(!(this._webSocket instanceof window.WebSocket))throw new Error("WebSocket instance is not defined");this._executeCustomEvents("closing"),this._messageRepository.clear(),this._options.reconnection&&(this._currentAttempts=this._options.reconnectionOptions.attempts);try{this._webSocket.close(e,t)}catch(e){throw new Error(e.message)}}},{key:"on",value:function(e,t){return-1<g(o._standardEventTypes).concat(g(o._customEventTypes)).indexOf(e)&&this._eventHandlerRepository.add(new i(e,t))}},{key:"off",value:function(e){var t=!1;switch(m(e)){case"number":t=this._eventHandlerRepository.deleteById(e);break;case"string":t=this._eventHandlerRepository.deleteByEventType(e);break;case"function":t=this._eventHandlerRepository.deleteByHandler(e)}return t}},{key:"_addEventsFromStandardQueue",value:function(){var n=this;o._standardEventTypes.forEach(function(e){n._webSocket.addEventListener(e,function(t){n._eventHandlerRepository.getByEventType(e).forEach(function(e){e.handler.call(n,t)})})})}},{key:"_executeCustomEvents",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._eventHandlerRepository.getByEventType(e).forEach(function(e){e.handler.call(t,n)})}},{key:"_sendMessagesFromQueue",value:function(){var n=this;this._messageRepository.getAll().forEach(function(e,t){n._webSocket.readyState===window.WebSocket.OPEN&&(n.send(e),n._messageRepository.deleteByIndex(t))})}},{key:"binaryType",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.binaryType:void 0!==this._binaryType?m(this._binaryType):"blob"},set:function(e){this._binaryType=e,this._webSocket instanceof window.WebSocket&&(this._webSocket.binaryType=e)}},{key:"bufferedAmount",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.bufferedAmount:0}},{key:"extensions",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.extensions:void 0!==this._extensions?m(this._extensions):""},set:function(e){this._binaryType=extensions,this._webSocket instanceof window.WebSocket&&(this._webSocket.extensions=e)}},{key:"protocol",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.protocol:void 0!==this._protocol?m(this._protocol):""},set:function(e){this._protocol=e,this._webSocket instanceof window.WebSocket&&(this._webSocket.extensions=e)}},{key:"readyState",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.readyState:0}},{key:"url",get:function(){return this._webSocket instanceof window.WebSocket?this._webSocket.url:this._url}}])&&S(e.prototype,t),n&&S(e,n),o}();t.default=O}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./lib/Main.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ var Main = ({
  /**
   * Устанавливает плагин.
   *
   * @param {Vue} Vue основная библиотека
   * @param {string|Object} urlOrMultipleConnections URL-адрес для соединения или объект с множеством соединений
   * @param {undefined|string|string[]} protocols протоколы
   * @param {{}} options дополнительные опции
   */
  install: function install(Vue, urlOrMultipleConnections, protocols, options) {
    /**
     * Идентификатор объекта для взаимодействия с веб-сокетами по умолчанию.
     *
     * @const {string}
     */
    var DEFAULT_WSC_ID = ['_', Math.random()].join();
    /**
     * Типы событий.
     *
     * @type {{onOpening: string, onOpen: string, onMessage: string, onClosing: string, onClose: string}}
     */

    var EVENT_TYPES = {
      onOpening: 'opening',
      onOpen: 'open',
      onMessage: 'message',
      onClosing: 'closing',
      onClose: 'close'
    };
    /**
     * Класс для создания
     *
     * @type {Wsc}
     */

    var Wsc = __webpack_require__(0).default;
    /**
     * Контекст плагина.
     *
     * @type {default}
     * @private
     */


    var _root = this;
    /**
     * Хранилище соединений.
     *
     * @type {Object}
     * @private
     */


    var _wscRepository = {};
    /**
     * Хранилище событий.
     *
     * @type {Object}
     * @private
     */

    var _eventsRepository = {};
    /**
     * Заполняет хранилище объектов для взаимодействия с веб-сокетами.
     *
     * @param {string|Object} urlOrMultipleConnections URL-адрес для соединения или объект для мульти-подключения
     * @param {undefined|string|string[]} protocols протоколы
     * @param {{}} options дополнительные опции
     */

    this._fillWscRepository = function (urlOrMultipleConnections, protocols, options) {
      switch (_typeof(urlOrMultipleConnections)) {
        case 'string':
          _wscRepository[DEFAULT_WSC_ID] = new Wsc(urlOrMultipleConnections, protocols, options);
          break;

        case 'object':
          Object.keys(urlOrMultipleConnections).forEach(function (key) {
            _wscRepository[key] = new Wsc(urlOrMultipleConnections[key].url, urlOrMultipleConnections[key].protocols, urlOrMultipleConnections[key].options);
          });
          break;
      }
    };
    /**
     * Получает объект для взаимодействия с веб-сокетами по идентификатору.
     *
     * @param {string} id идентификатор соединения
     */


    this._getWsc = function (id) {
      return _wscRepository[id] || _wscRepository[DEFAULT_WSC_ID];
    };

    this._fillWscRepository(urlOrMultipleConnections, protocols, options);

    Vue.mixin({
      /**
       * Обработчик события создания экземпляра.
       */
      created: function created() {
        var _this = this;

        if (this.$options.wsc) {
          var wsc;
          var eventId;
          _eventsRepository[this._uid] = {};
          Object.keys(this.$options.wsc).forEach(function (key) {
            switch (_typeof(_this.$options.wsc[key])) {
              case 'function':
                if (EVENT_TYPES[key]) {
                  if (typeof _eventsRepository[_this._uid][DEFAULT_WSC_ID] === 'undefined') {
                    _eventsRepository[_this._uid][DEFAULT_WSC_ID] = [];
                  }

                  wsc = _root._getWsc(DEFAULT_WSC_ID);
                  eventId = wsc.on(EVENT_TYPES[key], _this.$options.wsc[key].bind(_this));

                  _eventsRepository[_this._uid][DEFAULT_WSC_ID].push(eventId);
                }

                break;

              case 'object':
                wsc = _root._getWsc(key);

                if (typeof _eventsRepository[_this._uid][key] === 'undefined') {
                  _eventsRepository[_this._uid][key] = [];
                }

                Object.keys(_this.$options.wsc[key]).forEach(function (innerKey) {
                  if (EVENT_TYPES[innerKey]) {
                    eventId = wsc.on(EVENT_TYPES[innerKey], _this.$options.wsc[key][innerKey].bind(_this));

                    _eventsRepository[_this._uid][key].push(eventId);
                  }
                });
                break;
            }
          });
        }
      },

      /**
       * Обработчик события начала уничтожения экземпляра.
       */
      beforeDestroy: function beforeDestroy() {
        var _this2 = this;

        if (_eventsRepository[this._uid]) {
          var wsc;
          Object.keys(_eventsRepository[this._uid]).forEach(function (key) {
            wsc = _root._getWsc(key);

            _eventsRepository[_this2._uid][key].forEach(function (eventId) {
              wsc.off(eventId);
            });
          });
          delete _eventsRepository[this._uid];
        }
      }
    });

    Vue.prototype.$wsc = function (id) {
      var wsc = _root._getWsc(id);

      if (typeof wsc === 'undefined') {
        throw new Error('WebSocket instance is not defined');
      }

      return {
        connect: function connect() {
          wsc.connect();
        },
        send: function send(data) {
          wsc.send(data);
        },
        close: function close() {
          var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          var reason = arguments.length > 1 ? arguments[1] : undefined;
          wsc.close(code, reason);
        }
      };
    };
  }
});
// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (Main);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-wsc-1.0.0.js.map