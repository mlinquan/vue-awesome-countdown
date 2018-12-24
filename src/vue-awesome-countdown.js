import vueAwesomeCountdown from './vue-awesome-countdown.vue'

export default {
  install(Vue, name) {
    name = name || 'vac'
    Vue.component(name, vueAwesomeCountdown)
    Vue.component('countdown', vueAwesomeCountdown)
  }
}
