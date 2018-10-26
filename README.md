# vue-awesome-countdown
[![npm version](https://badge.fury.io/js/vue-awesome-countdown.svg)](https://badge.fury.io/js/vue-awesome-countdown)
[![Build Status](https://travis-ci.org/mlinquan/vue-awesome-countdown.svg?branch=master)](https://travis-ci.org/mlinquan/vue-awesome-countdown)
[![Monthly Downloads](https://img.shields.io/npm/dm/vue-awesome-countdown.svg)](https://www.npmjs.com/package/vue-awesome-countdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Countdown plug-in with high performance and high accuracy for [Vue](http://vuejs.org/)2.5.0+.

## Installation

Install via NPM...

```sh
$ npm install vue-awesome-countdown --save
```

...and import and use the plugin like so:

```js
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown)
```

## Usage

```html
<countdown :end-time="new Date().getTime() + 60000">
  <span
    slot="process"
    slot-scope="anyYouWantedScopName">{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.m}:${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
  <span slot="finish">Done!</span>
</countdown>
```

```html
<countdown :end-time="new Date().getTime() + 60000">
  <span
    slot="process"
    slot-scope="{ timeObj }">{{ `Lefttime: ${timeObj.ceil.m}:${timeObj.ceil.s}` }}</span>
  <span slot="finish">Done!</span>
</countdown>
```

## Example demo

http://linquan.me/vue-awesome-countdown

## Props

| Prop | Required | Explain | Type | Default |
| ------ | ------ | ------ | ------ | ------ |
| endTime | when `leftTime` undefined | Time stamp of countdown end | `[String, Number, Date]` | `null` |
| leftTime | when `endTime` undefined | Unit: millisecond |  `Number` | `0` |
| autoStart | `false` | Remaining milliseconds of countdown end | `Boolean` | `true` |
| speed | `false` | Unit: millisecond | `Number` | `1000` |
| tag | `false` | The wrap tag name | `String` | `span` |

## Data

The data can get it through `slot-scop` or `methods`.

| Data | Explain | Default |
| ------ | ------ | ------ |
| state | The countdown run state, the states are `beforeStart`, `stoped`, `process` and `finised` | `beforeStart` |
| attrs | The countdown component tag attributes | `{}` |
| actualEndTime | Actual countdown end time | `null` |
| timeObj | a |  `{}` |
| countdownTimer | The countdown timer function, Do not use as much as possible. |`null` |
| startTime | The countdown start time. | `null` |
| runTimes | Countdown run times (The `onProcess` methods run times) | `0` |
| usedTime | The total time consuming from the countdown to the end. | `0` |

## Slots

Slot `process` and slot `finish` will not display at the same time.

| name | slot-scop | Position | Display condition |
| ------ | ------ | ------ | ------ |
| before | component `_self` | 1 | Defined, Controllable display |
| process | component `_self` | 2 | On process |
| finish | component `_self` | 2 | On finish |
| default | component `_self` | 3 | Defined, Controllable display |

## Methods

The methods can be accesse through `slot-scop` or `$refs`.

| Method | Explain | Parameters |
| ------ | ------ | ------ |
| startCountdown | | `restart` |
| stopCountdown | | no |
| switchCountdown | | no |
| finishCountdown | | no |
| doCountdown | | no |

## Event

| Event | Explain | Parameters |
| ------ | ------ | ------ |
| onStart | Functions executed at the beginning of countdown | `vm` |
| onProcess | Function executed when countdown is performed | `vm` |
| onStop | Function executed when countdown stops | `vm` |
| onFinish | Function executed when countdown finished | `vm` |

### MIT License

### Copyright &copy; 2018 LinQuan.
