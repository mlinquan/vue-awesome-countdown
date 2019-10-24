# vue-awesome-countdown
[![npm version](https://badge.fury.io/js/vue-awesome-countdown.svg)](https://badge.fury.io/js/vue-awesome-countdown)
[![Gzip Size](http://img.badgesize.io/https://unpkg.com/vue-awesome-countdown@latest/dist/vue-awesome-countdown.umd.min.js?compression=gzip&style=flat-square)](https://unpkg.com/vue-awesome-countdown)
[![Monthly Downloads](https://img.shields.io/npm/dm/vue-awesome-countdown.svg)](https://www.npmjs.com/package/vue-awesome-countdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Countdown plug-in with high performance and high accuracy for [Vue](http://vuejs.org/)2.5.0+.

## Installation

Install

```sh
$ npm install vue-awesome-countdown --save
# or
$ yarn add vue-awesome-countdown
```

### ES6

```js

import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default
```

### CommonJS

```js
var Vue = require('vue');
var vueAwesomeCountdown = require('vue-awesome-countdown').default;

Vue.use(vueAwesomeCountdown);
```

### Browser

```html
<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/vue-awesome-countdown@latest"></script>
<!-- OR -->
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-awesome-countdown/dist/vue-awesome-countdown.umd.min.js"></script>

```

## Usage

Vue2.5.0+.
```html
<countdown :end-time="new Date().getTime() + 60000">
  <span
    slot="process"
    slot-scope="anyYouWantedScopName">{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
  <span slot="finish">Done!</span>
</countdown>
```

```html
<vac :end-time="new Date().getTime() + 60000">
  <span
    slot="process"
    slot-scope="{ timeObj }">{{ `Lefttime: ${timeObj.m}:${timeObj.s}` }}</span>
  <span slot="finish">Done!</span>
</vac>
```

Vue2.6.0+.
```html
<countdown :end-time="new Date().getTime() + 60000">
  <template
    v-slot:process="anyYouWantedScopName">
      <span>{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
    </template>
  <template
    v-slot:finish>
      <span>Done!</span>
  </template>
</countdown>
```

```html
<vac :end-time="new Date().getTime() + 60000">
  <template
    v-slot:process="{ timeObj }">
    <span>{{ `Lefttime: ${timeObj.m}:${timeObj.s}` }}</span>
  </template>
  <template
    v-slot:finish>
      <span>Done!</span>
  </template>
</vac>
```

### SSR (Nuxt)
```html
<no-ssr>
  <vac :end-time="new Date().getTime() + 60000">
    <span
      slot="process"
      slot-scope="{ timeObj }">{{ `Lefttime: ${timeObj.m}:${timeObj.s}` }}</span>
    <span slot="finish">Done!</span>
  </vac>
</no-ssr>
```

## Example demo

[https://vac.js.org](https://vac.js.org)

## Props

| Prop | Required | Explain | Type | Default |
| ------ | ------ | ------ | ------ | ------ |
| startTime | `false` | Time stamp of countdown start | `[String, Number, Date]` | `null` |
| endTime | when `leftTime` undefined | Time stamp of countdown end | `[String, Number, Date]` | `null` |
| leftTime | when `endTime` undefined | Remaining milliseconds of countdown end |  `Number` | `0` |
| autoStart | `false` | Start countdown automatically | `Boolean` | `true` |
| speed | `false` | Unit: millisecond | `Number` | `1000` |
| tag | `false` | The wrap tag name | `String` | `span` |

## Data

The data can get it through `slot-scop` or `methods`.

| Data | Explain | Default |
| ------ | ------ | ------ |
| state | The countdown run state, the states are `beforeStart`, `stoped`, `paused`, `process` and `finised` | `beforeStart` |
| attrs | The countdown component tag attributes | `{}` |
| actualEndTime | Actual countdown end time | `null` |
| timeObj | <a href="#timeobj">Look look</a> |  `{}` |
| countdownTimer | The countdown timer function, Do not use as much as possible. |`null` |
| actualStartTime | Actual countdown start time. | `null` |
| runTimes | Countdown run times (The `onProcess` methods run times) | `0` |
| usedTime | The total time consuming from the countdown to the end. | `0` |

## timeObj

```json
{
    "endTime": 1542634411361,
    "speed": 1000,
    "leftTime": 97019,
    "d": "0",
    "h": "00",
    "m": "01",
    "s": "37",
    "ms": "019",
    "org": {
        "d": 0.001134247685185185,
        "h": 0.02722194444444444,
        "m": 1.6333166666666665,
        "s": 37.998999999999995,
        "ms": 19
    },
    "ceil": {
        "d": 1,
        "h": 1,
        "m": 2,
        "s": 98
    }
}
```

## Slots

Slot `process` and slot `finish` will not display at the same time.

| name | slot-scop | Position | Display condition |
| ------ | ------ | ------ | ------ |
| prev | component `_self` | 1 | Defined, Controllable display |
| before | component `_self` | 2 | On before start, `state === 'beforeStart'` |
| process | component `_self` | 2 | On process,  `state === 'process'` or `state === 'stoped'` or `state === 'paused'` |
| finish | component `_self` | 3 | On finish,  `state === 'finished'` |
| default | component `_self` | 3 | Defined, Controllable display |

## Methods

The methods can be accesse through `slot-scop` or `$refs`.

| Method | Explain | Parameters |
| ------ | ------ | ------ |
| startCountdown | | `restart` |
| stopCountdown | | no |
| pauseCountdown | | no |
| switchCountdown | | no |
| finishCountdown | | no |
| doCountdown | | no |

## Event

| Event | Explain | Parameters |
| ------ | ------ | ------ |
| start | Functions executed at the beginning of countdown | `vm` |
| process | Function executed when countdown is performed | `vm` |
| stop | Function executed when countdown stops | `vm` |
| pause | Function executed when countdown paused | `vm` |
| finish | Function executed when countdown finished | `vm` |

### MIT License

### Copyright &copy; 2018 LinQuan.
