// 兼容ES模块和CommonJS模块
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueAwesomeCountdown = {}))
}(this, (function (exports) {
  'use strict';

  let VueAwesomeCountdownComponent = null

  // 兼容Vue 2和Vue 3的插件安装
  const install = (app, options) => {
    const name = options || 'vac'
    
    // Vue 3
    if (typeof app.use === 'function' && typeof app.component === 'function') {
      // Vue 3版本 - 使用静态导入
      VueAwesomeCountdownComponent = require('./vue-awesome-countdown-v3.vue').default
    }
    // Vue 2
    else if (typeof app.component === 'function') {
      // Vue 2版本 - 使用静态导入
      VueAwesomeCountdownComponent = require('./vue-awesome-countdown.vue').default
    }
    
    if (VueAwesomeCountdownComponent) {
      app.component(name, VueAwesomeCountdownComponent)
      app.component('countdown', VueAwesomeCountdownComponent)
    }
  }

  // 创建插件对象
  const vac = {
    install
  }

  // 自动安装
  if (typeof window !== 'undefined' && window.Vue) {
    // Vue 2自动安装
    window.Vue.use(vac)
  }

  // 导出组件和插件
  exports.default = vac
  exports.VueAwesomeCountdown = vac

  Object.defineProperty(exports, '__esModule', { value: true })

})))
