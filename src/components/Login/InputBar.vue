<template>
  <div class="login-inp">
    <label class="inp_i"><i :class="fontClass"></i></label>
    <input 
      :type="inputType" 
      :placeholder="placeHolder"
      :value="value"
      @input="inputVal($event)">
    <button v-if="useCodeBtn" class="vcode border0" type="button" @click="captchaLogin()">获取验证码</button>
  </div>
</template>

<script>
export default {
  props: {
    font: String,
    placeH: String,
    type: String,
    vscode: Boolean,
    value: String
  },
  data() {
    return {
      fontClass: this.font,
      placeHolder: this.placeH,
      inputType: this.type || 'text',
      useCodeBtn: this.vscode || false,
    }
  },
  watch: {
    inputVal(newV) {
      this.$emit('change', newV)
    }
  },
  methods: {
    inputVal(e) {
      this.$emit('input', e.target.value)
    },
    captchaLogin() {
      console.log('点击发送验证码')
    }
  }
}
</script>

<style>
.login-inp {
  position: relative;
  font-size: 30px;
  height: 88px;
  line-height: 88px;
}
.login-inp label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
}
.login-inp input {
  box-sizing: border-box;
  padding-left: 48px;
  width: 100%;
  height: 100%;
}
.vcode {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  height: 64px;
  padding: 0 26px;
  font-size: 26px;
  border-radius: 8px;
}
</style>