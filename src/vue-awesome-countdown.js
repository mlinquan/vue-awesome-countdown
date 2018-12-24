import vueAwesomeCountdown from './vue-awesome-countdown.vue'

const vac = {
  install(Vue, name) {
    name = name || 'vac'
    Vue.component(name, vueAwesomeCountdown)
    Vue.component('countdown', vueAwesomeCountdown)
  }
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vac)
}

export default vac