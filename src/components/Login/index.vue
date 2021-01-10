<template>
  <Dialog 
    :show="show"
    @onClose="closeDialog()">
    <div class="login-form">
      <div class="input-bar">
        <InputBar
          :font="'VVfont hm-contact'"
          :placeH="'请输入手机号/邮箱'"
          v-model="username"
        ></InputBar>
      </div>
      <div class="input-bar">
        <InputBar
          :font="'VVfont hm-lock-3'"
          :placeH="'请输入密码'"
          :type="'password'"
          v-model="password"
        ></InputBar>
      </div>
      <div class="subbtn mt15">
        <button type="button" class="submit1 colorR1Bg" @click="login()">登录</button>
      </div>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'
import InputBar from './InputBar'
export default {
  components: {
    Dialog,
    InputBar
  },
  props: {
    showLogin: Boolean
  },
  data() {
    return {
      show: this.showLogin,
      username: '',
      password: ''
    }
  },
  watch: {
    showLogin(newV) {
      this.show = newV
    }
  },
  methods: {
    closeDialog() {
      console.log('close dialog')
    },
    login() {
      this.requestApi('/api/member/login', {
        username: this.username,
        password: this.password,
      }).then(R => {
        if (!R.error) {
          this.show = false;
          this.$emit('login', true)
        } else {
          console.log(R.msg)
        }
      })
    }
  }
}
</script>

<style>
.login-form{
  padding: 0 40px 40px;
}
.input-bar{
  margin-top: 20px;
  border-bottom: 1px solid #e5e5e5;
}
.subbtn{
  margin-top: 30px;
}
.submit1{
  border-radius: 8px;
}
</style>