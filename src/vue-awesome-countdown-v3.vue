<template>
  <component :is="tag" v-bind="attrs">
    <slot v-bind="exposed" name="prev" />
    <slot v-if="state === 'beforeStart'" v-bind="exposed" name="before" />
    <slot v-if="state === 'preheat'" v-bind="exposed" name="preheat" />
    <slot v-if="state === 'process' || state === 'stopped' || state === 'paused'" v-bind="exposed" name="process" />
    <slot v-if="state === 'finished'" v-bind="exposed" name="finish" />
    <slot v-bind="exposed" name="default" />
  </component>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

// 定义时间对象类型
interface TimeObject {
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

// 定义组件状态类型
type CountdownState = 'beforeStart' | 'preheat' | 'process' | 'stopped' | 'paused' | 'finished'

// 定义组件属性
const props = withDefaults(defineProps<{
  startTime?: string | number | Date | null
  endTime?: string | number | Date | null
  leftTime?: number
  autoStart?: boolean
  speed?: number
  tag?: string
}>(), {
  startTime: undefined,
  endTime: undefined,
  leftTime: 0,
  autoStart: true,
  speed: 1000,
  tag: 'span'
})

// 定义组件事件
const emit = defineEmits<{
  (e: 'start', component: any): void
  (e: 'stop', component: any): void
  (e: 'paused', component: any): void
  (e: 'finish', component: any): void
  (e: 'process', component: any): void
}>()

// 状态管理
const state = ref<CountdownState>('beforeStart')
const attrs = ref({})
const actualStartTime = ref<number | null>(null)
const actualEndTime = ref<number | null>(null)
const timeObj = ref<TimeObject>({
  endTime: null,
  speed: props.speed,
  leftTime: 0,
  usedTime: 0,
  remainingTime: 0,
  d: '0',
  h: '00',
  m: '00',
  s: '00',
  ms: '000',
  org: {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  },
  ceil: {
    d: 0,
    h: 0,
    m: 0,
    s: 0
  }
})
const countdownTimer = ref<number | null>(null)
const runTimes = ref(0)
const usedTime = ref(0)
const remainingTime = ref(0)

// 计算属性：是否为整数秒速度
const thousandSpeed = computed(() => {
  return props.speed > 0 && props.speed % 1000 === 0
})

// 监听speed变化
watch(() => props.speed, (curSpeed, oldSpeed) => {
  if (curSpeed < 0) {
    curSpeed = 0
  }
  if (curSpeed !== oldSpeed) {
    clearTimer()
    const now = Date.now()
    const runTimesVal = Math.floor((now - (actualStartTime.value || 0)) / curSpeed)
    const nextTime = now % curSpeed
    runTimes.value = runTimesVal
    countdownTimer.value = setTimeout(doCountdown, nextTime)
  }
})

// 清理定时器函数
const clearTimer = () => {
  if (countdownTimer.value) {
    clearTimeout(countdownTimer.value)
    countdownTimer.value = null
  }
}

// 组件挂载时初始化
onMounted(() => {
  if (props.autoStart) {
    state.value = 'preheat'
    // 如果有startTime，等待到startTime再开始
    if (props.startTime) {
      const startTime = new Date(props.startTime).getTime()
      const firstTime = startTime - Date.now()
      countdownTimer.value = setTimeout(() => {
        startCountdown(true)
      }, firstTime)
    }
    // 否则立即开始
    else {
      countdownTimer.value = setTimeout(() => {
        startCountdown(true)
      }, 0)
    }
  }
})

// 组件卸载时清理
onUnmounted(() => {
  clearTimer()
})

// 开始倒计时
const startCountdown = (restart?: boolean) => {
  if (state.value !== 'beforeStart' && state.value !== 'stopped' && state.value !== 'paused' && !restart) {
    return
  }

  clearTimer()

  if (restart) {
    // 重置状态
    state.value = 'beforeStart'
    actualStartTime.value = null
    actualEndTime.value = null
    runTimes.value = 0
    usedTime.value = 0
    remainingTime.value = 0

    // 重置时间对象
    timeObj.value = {
      ...timeObj.value,
      leftTime: 0,
      remainingTime: 0,
      d: '0',
      h: '00',
      m: '00',
      s: '00',
      ms: '000'
    }
  }

  if (state.value === 'stopped') {
    remainingTime.value = (actualEndTime.value || 0) - Date.now()
  }

  if (!actualEndTime.value) {
    actualEndTime.value = props.endTime ? new Date(props.endTime).getTime() : Date.now() + (remainingTime.value || props.leftTime)
  }

  if (state.value === 'paused') {
    actualEndTime.value = Date.now() + remainingTime.value
  }

  emit('start', exposed)
  state.value = 'process'
  doCountdown()
}

// 停止倒计时
const stopCountdown = () => {
  if (state.value !== 'process') {
    return
  }

  clearTimer()
  emit('stop', exposed)
  state.value = 'stopped'
}

// 暂停倒计时
const pauseCountdown = () => {
  if (state.value !== 'process') {
    return
  }

  clearTimer()
  remainingTime.value = (actualEndTime.value || 0) - Date.now()
  emit('paused', exposed)
  state.value = 'paused'
}

// 切换倒计时状态
const switchCountdown = () => {
  if (state.value === 'stopped' || state.value === 'beforeStart') {
    return startCountdown()
  }
  if (state.value === 'process') {
    return stopCountdown()
  }
}

// 完成倒计时
const finishCountdown = () => {
  clearTimer()
  state.value = 'finished'

  // 重置时间对象
  timeObj.value = {
    ...timeObj.value,
    leftTime: 0,
    remainingTime: 0,
    d: '0',
    h: '00',
    m: '00',
    s: '00',
    ms: '000'
  }

  usedTime.value = Date.now() - (actualStartTime.value || 0)
  emit('finish', exposed)
}

// 执行倒计时
const doCountdown = () => {
  if (state.value !== 'process') {
    return
  }

  if (!actualStartTime.value) {
    actualStartTime.value = Date.now()
  }

  let leftTime = (actualEndTime.value || 0) - Date.now()

  if (leftTime > 0) {
    let leftSeconds = leftTime / 1000
    let ms = leftTime % 1000

    // 优化整数秒的显示
    if (thousandSpeed.value && ms > 990) {
      leftSeconds = Math.ceil(leftSeconds)
      ms = 0
    }

    // 原始时间数据
    const org = {
      d: leftSeconds / 60 / 60 / 24,
      h: (leftSeconds / 60 / 60) % 24,
      m: (leftSeconds / 60) % 60,
      s: leftSeconds % 60,
      ms: ms
    }

    // 格式化显示文本
    const txt = {
      d: Math.floor(org.d).toString(),
      h: Math.floor(org.h).toString().padStart(2, '0'),
      m: Math.floor(org.m).toString().padStart(2, '0'),
      s: Math.floor(org.s).toString().padStart(2, '0'),
      ms: org.ms.toString().padStart(3, '0')
    }

    // 向上取整的时间
    const ceil = {
      d: Math.ceil(leftSeconds / 60 / 60 / 24),
      h: Math.ceil(leftSeconds / 60 / 60),
      m: Math.ceil(leftSeconds / 60),
      s: Math.ceil(leftSeconds)
    }

    // 更新状态
    usedTime.value = Date.now() - (actualStartTime.value || 0)
    remainingTime.value = leftTime

    // 更新时间对象
    timeObj.value = {
      endTime: actualEndTime.value,
      speed: props.speed,
      leftTime,
      usedTime: usedTime.value,
      remainingTime: remainingTime.value,
      ...txt,
      org,
      ceil
    }

    emit('process', exposed)
  } else {
    finishCountdown()
    return
  }

  // 计算下一次执行时间
  let nextSpeed = props.speed + ((actualStartTime.value || 0) + runTimes.value++ * props.speed - Date.now())
  if (nextSpeed < 0) {
    nextSpeed = nextSpeed + props.speed
  }
  if (leftTime < props.speed) {
    nextSpeed = leftTime
  }

  countdownTimer.value = setTimeout(doCountdown, nextSpeed)
}

// 暴露给外部的对象
const exposed = {
  get state() { return state.value },
  get attrs() { return attrs.value },
  get actualStartTime() { return actualStartTime.value },
  get actualEndTime() { return actualEndTime.value },
  get timeObj() { return timeObj.value },
  get runTimes() { return runTimes.value },
  get usedTime() { return usedTime.value },
  get remainingTime() { return remainingTime.value },
  get thousandSpeed() { return thousandSpeed.value },
  startCountdown,
  stopCountdown,
  pauseCountdown,
  switchCountdown
}

// 暴露方法给外部
defineExpose(exposed)
</script>
