// Type definitions for vue-awesome-countdown
// Project: https://github.com/mlinquan/vue-awesome-countdown
// Definitions by: LinQuan <https://github.com/mlinquan>

import { DefineComponent } from 'vue'

export interface TimeObject {
  endTime: number | null
  speed: number
  leftTime: number
  usedTime: number
  remainingTime: number
  d: string
  h: string
  m: string
  s: string
  ms: string
  org: {
    d: number
    h: number
    m: number
    s: number
    ms: number
  }
  ceil: {
    d: number
    h: number
    m: number
    s: number
  }
}

export interface VueAwesomeCountdownProps {
  startTime?: string | number | Date
  endTime?: string | number | Date
  leftTime?: number
  autoStart?: boolean
  speed?: number
  tag?: string
}

export interface VueAwesomeCountdownEmits {
  (e: 'start', component: any): void
  (e: 'stop', component: any): void
  (e: 'paused', component: any): void
  (e: 'finish', component: any): void
  (e: 'process', component: any): void
}

export interface VueAwesomeCountdownMethods {
  startCountdown(restart?: boolean): void
  stopCountdown(): void
  pauseCountdown(): void
  switchCountdown(): void
}

export const VueAwesomeCountdown: DefineComponent<VueAwesomeCountdownProps, any, any, VueAwesomeCountdownMethods>

export interface VueAwesomeCountdownPlugin {
  install(app: any, options?: string): void
}

declare const _default: VueAwesomeCountdownPlugin

export default _default
