# Send sms code

<template>
<ClientOnly>
  Phone Number: <input type="text" name="phoneNumber">
  <vac
    ref="sendSMSCode"
    tag="button"
    type="button"
    :autoStart="false"
    :left-time="6000"
    @click="sendSMS"
    @onFinish="(vac) => finish(vac)"
  >
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ `${timeObj.ceil.s}s` }}
      </span>
      <span slot-scope="{ state }" v-if="state !== 'process'">{{ buttonTxt }}</span>
  </vac>
</ClientOnly>
</template>

``` vue
<template>
  <form action="/reg" method="post">
    Phone Number: <input type="text" name="phoneNumber" v-model="formData.phoneNumber">
    <vac
      ref="sendSMSCode"
      tag="button"
      type="button"
      :autoStart="false"
      :left-time="60000"
      @click="sendSMS"
      @onFinish="(vac) => finish(vac)"
    >
      <span
        slot="process"
        slot-scope="{ timeObj }">
          {{ `${timeObj.ceil.s}s` }}
        </span>
        <span slot-scope="{ state }" v-if="state !== 'process'">{{ buttonTxt }}</span>
    </vac>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  components: { vac },
  data() {
    return {
      buttonTxt: 'Send SMS code',
      formData: {
        phoneNumber: ''
      }
    }
  },
  methods: {
    sendSMS() {
      const vm = this
      const voc = vm.$refs.sendSMSCode
      voc.attrs.disabled = true
      vm.buttonTxt = 'Sending'
      let dots = 1
      let txtLoading = setInterval(() => {
        if (dots > 6) {
          dots = 1
        }
        vm.buttonTxt = 'Sending' + Array.apply(null, {length: dots}).join('.')
        dots++
      }, 300)
      axios({
        url: '/reg/sendSMS',
        method: 'post',
        data: vm.formData
      })
      .then((res) => {
        clearInterval(txtLoading)
        if(res.error === 0) {
          voc.startCountdown('restart')
          return
        }
        voc.attrs.disabled = false
        vm.buttonTxt = 'Send fail'
      })
      .catch(() => {
        clearInterval(txtLoading)
        voc.attrs.disabled = false
        vm.buttonTxt = 'System error'
      })
    },
    finish(vac) {
      const vm = this
      vm.buttonTxt = 'Resend'
      vac.attrs.disabled = false
    }
  }
}
</script>
```

<script>
export default {
  data() {
    return {
      buttonTxt: 'Send SMS code'
    }
  },
  methods: {
    sendSMS() {
      const vm = this
      vm.$refs.sendSMSCode.attrs.disabled = true
      vm.buttonTxt = 'Sending'
      let dots = 1
      let txtLoading = setInterval(() => {
        if (dots > 6) {
          dots = 1
        }
        vm.buttonTxt = 'Sending' + Array.apply(null, {length: dots}).join('.')
        dots++
      }, 300)
      setTimeout(() => {
        clearInterval(txtLoading)
        vm.$refs.sendSMSCode.startCountdown('restart')
      }, 3000)
    },
    finish(vac) {
      const vm = this
      vm.buttonTxt = 'Resend'
      vac.attrs.disabled = false
    }
  }
}
</script>