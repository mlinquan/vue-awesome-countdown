# All methods

<template>
<ClientOnly>
  <vac :left-time="9999999000">
    <div
      slot="prev"
      slot-scope="vac">
      <button type="button"
        @click="() => {
          vac.startCountdown()
        }"
        :disabled="vac.state === 'process' || vac.state === 'finished'">Start</button>
      <button type="button"
        @click="() => {
          vac.startCountdown(true)
        }"
        :disabled="vac.state !== 'finished' && vac.state !== 'stopped'">reStart</button>
      <button type="button"
        @click="() => {
          vac.pauseCountdown()
        }"
        :disabled="vac.state !== 'process'">Pause</button>
      <button type="button"
        @click="() => {
          vac.stopCountdown()
        }"
        :disabled="vac.state !== 'process'">Stop</button>
      <button type="button"
        @click="() => {
          vac.switchCountdown()
        }"
        :disabled="vac.state === 'finished'"
        >Switch - {{ vac.state === 'stopped' ? 'Start' : 'Stop' }}</button>
      <button type="button"
        @click="() => {
          vac.finishCountdown()
        }"
        :disabled="vac.state === 'finished'">Finish</button>
    </div>
    <span
      slot="process"
      slot-scope="{ timeObj, state }">
        {{ timeObj.ceil.s }} {{ state }}
    </span>
    <span slot="finish">Done!</span>
  </vac>
</ClientOnly>
</template>

```vue
<vac :left-time="9999999000">
  <div
    slot="prev"
    slot-scope="vac">
    <button type="button"
      @click="() => {
        vac.startCountdown()
      }"
      :disabled="vac.state === 'process' || vac.state === 'finished'">Start</button>
    <button type="button"
      @click="() => {
        vac.startCountdown(true)
      }"
      :disabled="vac.state !== 'finished' && vac.state !== 'stopped'">reStart</button>
    <button type="button"
      @click="() => {
        vac.pauseCountdown()
      }"
      :disabled="vac.state !== 'process'">Pause</button>
    <button type="button"
      @click="() => {
        vac.stopCountdown()
      }"
      :disabled="vac.state !== 'process'">Stop</button>
    <button type="button"
      @click="() => {
        vac.switchCountdown()
      }"
      :disabled="vac.state === 'finished'"
      >Switch - {{ vac.state === 'stopped' ? 'Start' : 'Stop' }}</button>
    <button type="button"
      @click="() => {
        vac.finishCountdown()
      }"
      :disabled="vac.state === 'finished'">Finish</button>
  </div>
  <span
    slot="process"
    slot-scope="{ timeObj, state }">
      {{ timeObj.ceil.s }} {{ state }}
  </span>
  <span slot="finish">Done!</span>
</vac>
```

