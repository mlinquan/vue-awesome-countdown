// Type definitions for vue-awesome-countdown
// Project: https://github.com/mlinquan/vue-awesome-countdown
// Definitions by: LinQuan <https://github.com/mlinquan>

import { DefineComponent, SlotsType } from 'vue'

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

export type CountdownState = 'beforeStart' | 'preheat' | 'process' | 'stopped' | 'paused' | 'finished'

export interface VueAwesomeCountdownSlotProps {
  state: CountdownState
  timeObj: TimeObject
  runTimes: number
  usedTime: number
  remainingTime: number
  thousandSpeed: number
  startCountdown: (restart?: boolean) => void
  stopCountdown: () => void
  pauseCountdown: () => void
  switchCountdown: () => void
}

export interface VueAwesomeCountdownSlots {
  prev: (props: VueAwesomeCountdownSlotProps) => any
  before: (props: VueAwesomeCountdownSlotProps) => any
  preheat: (props: VueAwesomeCountdownSlotProps) => any
  process: (props: VueAwesomeCountdownSlotProps) => any
  finish: (props: VueAwesomeCountdownSlotProps) => any
  default: (props: VueAwesomeCountdownSlotProps) => any
}

export const VueAwesomeCountdown: DefineComponent<
  VueAwesomeCountdownProps,
  Record<string, any>,
  Record<string, any>,
  {},
  VueAwesomeCountdownMethods,
  {},
  {},
  VueAwesomeCountdownEmits,
  string,
  VueAwesomeCountdownProps,
  {},
  SlotsType<VueAwesomeCountdownSlots>
>

export interface VueAwesomeCountdownPlugin {
  install(app: any, options?: string): void
}

declare const _default: VueAwesomeCountdownPlugin

export default _default
