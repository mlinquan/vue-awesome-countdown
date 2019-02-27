# startCountdown

<template>
<ClientOnly>
  <p>example1: </p>
  <button type="button" @click="() => {
    this.$refs.vac1.startCountdown(true)
  }">Start</button>
  <vac :left-time="10000" :auto-start="false" ref="vac1">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
  <p>example2: </p>
  <button type="button" @click="startCountdown">Start</button>
  <vac :left-time="10000" :auto-start="false" ref="vac2">
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
  this.$refs.vac.startCountdown(true)
}">
<vac :left-time="10000" :auto-start="false" ref="vac1">
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
<button type="button" @click="startCountdown">
<vac :left-time="10000" :auto-start="false" ref="vac2">
  <span
    slot="process"
    slot-scope="{ timeObj }">
      {{ timeObj.ceil.s }}
    </span>
    <span slot="finish">Done!</span>
</vac>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    startCountdown() {
      const vm = this
      vm.$refs.vac2.startCountdown(true)
    }
  }
}
</script>
```

<script>
export default {
  data() {
    return {}
  },
  methods: {
    startCountdown() {
      const vm = this
      vm.$refs.vac2.startCountdown(true)
    }
  }
}
</script>
