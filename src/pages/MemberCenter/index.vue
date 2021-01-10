<template>
  <div class="container">
    <User></User>
    <Order></Order>
    <LinkList></LinkList>
    <Tabbar :active="2"></Tabbar>
    <Login :showLogin="showLogin"></Login>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Login from '@/components/Login'
import User from './User'
import Order from './Order'
import LinkList from './LinkList'

import event from './event'
export default {
  components: {
    Tabbar,
    Login,
    User,
    Order,
    LinkList
  },
  data() {
    return {
      showLogin: false
    }
  },
  mounted() {
    // this.getMemberCenter()

    event.$on('linkTo', this.onLinkTo)
  },
  beforeDestroy() {
    event.$off('linkTo', this.onLinkTo)
  },
  methods: {
    // 获取会员信息
    getMemberCenter() {
      this.requestApi('/api/member/getInfo').then(R => {
        if (!R.error) {
          console.log('no error')
        } else {
          this.showLogin = true
          console.log(this.showLogin)
        }
      })
    },
    // 跳转路由
    onLinkTo(link) {
      if (link === 'equity') {
        this.navigateTo('MemberContent', {
          ubbKey: 'memberInterwork'
        })
      }
    }
  }
}
</script>

<style>

</style>