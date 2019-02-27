# stopCountdown

<template>
<ClientOnly>
  <p>example1: </p>
  <button type="button" @click="() => {
    this.$refs.vac1.stopCountdown()
  }">Stop</button>
  <vac :end-time="new Date().getTime() + 1000000" ref="vac1">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
  <p>example2: </p>
  <button type="button" @click="stopCountdown">Stop</button>
  <vac :end-time="new Date().getTime() + 1000000" ref="vac2">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
</ClientOnly>
</template>

``` vue
<p>example1: </p>
<button type="button" @click="() => {
  this.$refs.vac1.stopCountdown()
}">Stop</button>
<vac :end-time="new Date().getTime() + 1000000" ref="vac1">
  <span
    slot="process"
    slot-scope="{ timeObj }">
      {{ timeObj.ceil.s }}
    </span>
    <span slot="finish">Done!</span>
</vac>
```

``` vue
<p>example2: </p>
<button type="button" @click="stopCountdown">Stop</button>
<vac :end-time="new Date().getTime() + 1000000" ref="vac2">
  <span
    slot="process"
    slot-scope="{ timeObj }">
      {{ timeObj.ceil.s }}
    </span>
    <span slot="finish">Done!</span>
</vac>
```

<script>
export default {
  data() {
    return {}
  },
  methods: {
    stopCountdown() {
      const vm = this
      vm.$refs.vac2.stopCountdown()
    }
  }
}
</script>
