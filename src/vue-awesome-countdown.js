// 直接导出组件，依赖Vite的构建配置来处理Vue文件
import Vue2Component from './vue-awesome-countdown.vue'
import Vue3Component from './vue-awesome-countdown-v3.vue'

// 根据环境获取对应的组件
const getComponent = () => {
  // 检查是否在Vue 2环境
  if (typeof window !== 'undefined' && window.Vue && window.Vue.version && window.Vue.version.startsWith('2.')) {
    return Vue2Component
  }
  // 默认使用Vue 3组件
  return Vue3Component
}

// 兼容Vue 2和Vue 3的插件安装
const install = (app, options) => {
  const name = options || 'vac'
  const component = getComponent()
  
  if (component) {
    app.component(name, component)
    app.component('countdown', component)
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

// 导出插件
export default vac

// 导出组件 - 用于直接导入使用
export const VueAwesomeCountdown = getComponent()
