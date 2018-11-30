import vueAwesomeCountdown from './vue-awesome-countdown.vue'

export default {
  install(Vue) {
    Vue.component('vac', vueAwesomeCountdown)
    Vue.component('countdown', vueAwesomeCountdown)
  }
}
