# Examples

## Basic Usage

<template>
<ClientOnly>
  <vac :end-time="new Date().getTime() + 10000">
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
  <vac :end-time="new Date().getTime() + 10000">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </vac>
```

<script>
import vac from '../../vue-awesome-countdown.vue'
export default {
  components: { vac }
}
</script>