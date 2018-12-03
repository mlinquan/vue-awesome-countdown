# Event start time

<template>
<ClientOnly>
  <vac :left-time="1000000" tag="p">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `Now Time: ${new Date()}` }}
      </span>
    <span slot="finish">Done!!!</span>
  </vac>
  <vac :start-time="new Date().getTime() + 10000" :end-time="new Date().getTime() + 20000">
    <span
      slot="preheat"
      slot-scope="{ startTime }">
        {{ `Event start time: ${new Date(startTime)}` }}
      </span>
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `Start left time: ${timeObj.ceil.s}s` }}
      </span>
      <span slot="finish"><button type="button">Go Go Go!!!</button></span>
  </vac>
</ClientOnly>
</template>

``` vue
  <vac :start-time="new Date().getTime() + 10000" :end-time="new Date().getTime() + 20000">
    <span
      slot="preheat"
      slot-scope="{ startTime }">
        {{ `Event start time: ${new Date(startTime)}` }}
      </span>
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `Start left time: ${timeObj.ceil.s}s` }}
      </span>
      <span slot="finish"><button type="button">Go Go Go!!!</button></span>
  </vac>
```
