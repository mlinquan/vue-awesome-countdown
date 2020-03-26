module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f3c921e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-awesome-countdown.vue?vue&type=template&id=621ae55a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,_vm._g(_vm._b({tag:"components"},'components',_vm.attrs,false),_vm.$listeners),[_vm._t("prev",null,null,this._self),(_vm.state === 'beforeStart')?_vm._t("before",null,null,this._self):_vm._e(),(_vm.state === 'preheat')?_vm._t("preheat",null,null,this._self):_vm._e(),(_vm.state === 'process' || _vm.state === 'stoped' || _vm.state === 'paused')?_vm._t("process",null,null,this._self):_vm._e(),(_vm.state === 'finised')?_vm._t("finish",null,null,this._self):_vm._e(),_vm._t("default",null,null,this._self)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-awesome-countdown.vue?vue&type=template&id=621ae55a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-awesome-countdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vue_awesome_countdownvue_type_script_lang_js_ = ({
  name: 'vue-awesome-countdown',
  props: {
    startTime: {
      type: [String, Number, Date],
      default: null,
      validator: function(value) {
        return new Date(value).toString() !== 'Invalid Date'
      }
    },
    endTime: {
      type: [String, Number, Date],
      default: null,
      validator: function(value) {
        return new Date(value).toString() !== 'Invalid Date'
      }
    },
    leftTime: {
      type: Number,
      default: 0
    },
    autoStart: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 1000,
      validator: function(value) {
        return value >= 0
      }
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  data: function () {
    return {
      state: 'beforeStart', //beforeStart, stoped, process, finised
      attrs: {},
      actualStartTime: null,
      actualEndTime: null,
      timeObj: {},
      countdownTimer: null,
      runTimes: 0,
      usedTime: 0,
      remainingTime: 0
    }
  },
  watch: {
    speed(curSpeed, oldSpeed) {
      const vm = this
      if (curSpeed < 0) {
        curSpeed = 0
      }
      if (curSpeed !== oldSpeed) {
        clearTimeout(vm.countdownTimer)
        const now = new Date().getTime()
        const runTimes = Math.floor((now - vm.actualStartTime) / curSpeed)
        const nextTime = now % curSpeed
        vm.runTimes = runTimes
        vm.$nextTick(() => {
          vm.countdownTimer = setTimeout(vm.doCountdown, nextTime)
        })
      }
    }
  },
  created() {
    const vm = this
    const startTime = (vm.startTime && new Date(vm.startTime).getTime()) || 0
    const firstTime = (startTime && startTime - new Date().getTime()) || 0
    if (vm.autoStart) {
      vm.state = 'preheat'
      setTimeout(() => {
        vm.startCountdown(true)
      }, firstTime)
    }
  },
  methods: {
    startCountdown(restart) {
      const vm = this
      if (vm.state !== 'beforeStart' && vm.state !== 'stoped' && vm.state !== 'paused' && !restart) {
        return
      }
      if (restart) {
        Object.assign(vm.$data, vm.$options.data.call(vm))
        vm.$emit('start', vm)
      }
      let remainingTime = 0
      if(vm.state === 'stoped') {
        vm.remainingTime = vm.actualEndTime - new Date().getTime()
      }
      if(!vm.actualEndTime) {
        vm.actualEndTime = vm.endTime || (new Date().getTime() + (vm.remainingTime || vm.leftTime))
      }
      if(vm.state === 'paused') {
        vm.actualEndTime = new Date().getTime() + vm.remainingTime
      }
      vm.state = 'process'
      vm.doCountdown()
    },
    stopCountdown() {
      const vm = this
      if (vm.state !== 'process') {
        return
      }
      clearTimeout(vm.countdownTimer)
      vm.$emit('stop', vm)
      vm.state = 'stoped'
    },
    pauseCountdown() {
      const vm = this
      if (vm.state !== 'process') {
        return
      }
      clearTimeout(vm.countdownTimer)
      vm.remainingTime = vm.actualEndTime - new Date().getTime()
      vm.$emit('paused', vm)
      vm.state = 'paused'
    },
    switchCountdown() {
      const vm = this
      if (vm.state === 'stoped' || vm.state === 'beforeStart') {
        return vm.startCountdown()
      }
      if (vm.state === 'process') {
        return vm.stopCountdown()
      }
    },
    finishCountdown() {
      const vm = this
      vm.state = 'finised'
      vm.timeObj = {}
      vm.usedTime = new Date().getTime() - vm.actualStartTime
      vm.$emit('finish', vm)
    },
    doCountdown() {
      const vm = this
      if (vm.state !== 'process') {
        return
      }
      if (!vm.actualStartTime) {
        vm.actualStartTime = new Date().getTime()
      }
      let leftTime = new Date(vm.actualEndTime).getTime() - new Date().getTime()
      if (leftTime > 0) {
        const t = {}
        const leftSeconds = leftTime / 1000

        const org = {
          d: leftSeconds / 60 / 60 / 24,
          h: (leftSeconds / 60 / 60) % 24,
          m: (leftSeconds / 60) % 60,
          s: leftSeconds % 60,
          ms: leftTime % 1000
        }

        const txt = {
          d: parseInt(org.d, 10).toString(),
          h: parseInt(org.h, 10)
            .toString()
            .padStart(2, 0),
          m: parseInt(org.m, 10)
            .toString()
            .padStart(2, 0),
          s: parseInt(org.s, 10)
            .toString()
            .padStart(2, 0),
          ms: org.ms.toString().padStart(3, 0)
        }

        const ceil = {
          d: parseInt(Math.ceil(leftSeconds / 60 / 60 / 24), 10),
          h: parseInt(Math.ceil(leftSeconds / 60 / 60), 10),
          m: parseInt(Math.ceil(leftSeconds / 60), 10),
          s: parseInt(Math.ceil(leftSeconds), 10)
        }

        t.endTime = vm.actualEndTime
        t.speed = vm.speed
        vm.usedTime = new Date().getTime() - vm.actualStartTime
        t.leftTime = leftTime
        vm.remainingTime = leftTime
        vm.timeObj = Object.assign({}, t, txt, {
          org,
          ceil
        })
        vm.timeObj.org = org
        vm.timeObj.ceil = ceil
        vm.$emit('process', vm)
      } else {
        vm.finishCountdown()
        return
      }

      let nextSpeed =
        vm.speed +
        (vm.actualStartTime + vm.runTimes++ * vm.speed - new Date().getTime())
      if (nextSpeed < 0) {
        nextSpeed = nextSpeed + vm.speed
      }
      vm.countdownTimer = setTimeout(vm.doCountdown, nextSpeed)
    }
  }
});

// CONCATENATED MODULE: ./src/vue-awesome-countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_awesome_countdownvue_type_script_lang_js_ = (vue_awesome_countdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-awesome-countdown.vue





/* normalize component */

var component = normalizeComponent(
  src_vue_awesome_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_awesome_countdown = (component.exports);
// CONCATENATED MODULE: ./src/vue-awesome-countdown.js


const vac = {
  install: function (Vue, options) {
    const name = options || 'vac'
    Vue.component(name, vue_awesome_countdown)
    Vue.component('countdown', vue_awesome_countdown)
  }
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vac)
}

/* harmony default export */ var src_vue_awesome_countdown = (vac);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_vue_awesome_countdown);



/***/ })

/******/ });
//# sourceMappingURL=vue-awesome-countdown.common.js.map