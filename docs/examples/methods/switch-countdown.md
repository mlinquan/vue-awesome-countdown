# switchCountdown

<template>
<ClientOnly>
  <p>example1: </p>
  <vac :left-time="10000000">
    <button type="button"
      @click="() => {
        vac.switchCountdown()
      }"
      slot="prev"
      slot-scope="vac"
    >Switch - {{ vac.state === 'stoped' ? 'Start' : 'Stop' }}</button>
    <span
      slot="process"
      slot-scope="{ timeObj, state }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
  <p>example2: </p>
  <button type="button"
    @click="switchCountdown"
  >Switch - {{ btnTxt }}</button>
  <vac :left-time="10000000" ref="vac2">
    <span
      slot="process"
      slot-scope="{ timeObj, state }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
</ClientOnly>
</template>

``` vue
<p>example1: </p>
<vac :left-time="10000000">
  <button type="button"
    @click="() => {
      vac.switchCountdown()
    }"
    slot="prev"
    slot-scope="vac"
  >Switch - {{ vac.state === 'stoped' ? 'Start' : 'Stop' }}</button>
  <span
    slot="process"
    slot-scope="{ timeObj, state }">
      {{ timeObj.ceil.s }}
    </span>
    <span slot="finish">Done!</span>
</vac>
```

``` vue
<p>example2: </p>
<button type="button"
  @click="switchCountdown"
>Switch - {{ btnTxt }}</button>
<vac :left-time="10000000" ref="vac2">
  <span
    slot="process"
    slot-scope="{ timeObj, state }">
      {{ timeObj.ceil.s }}
    </span>
    <span slot="finish">Done!</span>
</vac>
<script>
export default {
  data() {
    return {
      btnTxt: 'Stop'
    }
  },
  methods: {
    switchCountdown() {
      const vm = this
      vm.$refs.vac2.switchCountdown()
      vm.$nextTick(() => {
        vm.btnTxt = vm.$refs.vac2.state === 'stoped' ? 'Start' : 'Stop'
      })
    }
  }
}
</script>
```

<script>
export default {
  data() {
    return {
      btnTxt: 'Stop'
    }
  },
  methods: {
    switchCountdown() {
      const vm = this
      vm.$refs.vac2.switchCountdown()
      vm.$nextTick(() => {
        vm.btnTxt = vm.$refs.vac2.state === 'stoped' ? 'Start' : 'Stop'
      })
    }
  }
}
</script>
