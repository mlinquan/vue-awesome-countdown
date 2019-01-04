import vueAwesomeCountdown from './vue-awesome-countdown.vue'

const vac = {
  install: function (Vue, options) {
    const name = options || 'vac'
    Vue.component(name, vueAwesomeCountdown)
    Vue.component('countdown', vueAwesomeCountdown)
  }
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vac)
}

export default vac