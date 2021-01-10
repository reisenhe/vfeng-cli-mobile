<template>
  <div class="show-page">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>这是首页</h1>
    <div class="test-box"><i class="VVfont hm-ok"></i></div>
    <Tabbar :active="0"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      data1: '这是data1'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.requestApi('/api/product_single/lists', {
        "channel_id": 5
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .show-page{
    text-align: center;
  }
  .test-box{
    height: 100px;
    width: 100px;
    background-color: $primary-color;
  }
</style>