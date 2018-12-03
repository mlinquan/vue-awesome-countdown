# 活动开始时间

<template>
<ClientOnly>
  <vac :left-time="1000000" tag="p">
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `当前时间: ${new Date()}` }}
      </span>
    <span slot="finish">Done!!!</span>
  </vac>
  <vac :start-time="new Date().getTime() + 10000" :end-time="new Date().getTime() + 20000">
    <span
      slot="preheat"
      slot-scope="{ startTime }">
        {{ `活动开始时间: ${new Date(startTime)}` }}
      </span>
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `距离开始剩余: ${timeObj.ceil.s}秒` }}
      </span>
      <span slot="finish"><button type="button">活动开始!!!</button></span>
  </vac>
</ClientOnly>
</template>

``` vue
  <vac :start-time="new Date().getTime() + 10000" :end-time="new Date().getTime() + 20000">
    <span
      slot="preheat"
      slot-scope="{ startTime }">
        {{ `活动开始时间: ${new Date(startTime)}` }}
      </span>
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `距离开始剩余: ${timeObj.ceil.s}秒` }}
      </span>
      <span slot="finish"><button type="button">活动开始!!!</button></span>
  </vac>
```
