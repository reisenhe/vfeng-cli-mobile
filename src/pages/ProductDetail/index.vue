<template>
  <div>
      获取了产品详细
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant'
Vue.use(Toast);
export default {
  data() {
    return {
      detail: {}
    }
  },
  computed: {
    id() {
      return this.$route.query.id
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      })
      this.requestApi('/api/product_single/detail', {
        id: this.id
      }).then(R => {
        if (!R.error) {
          console.log(R.data)
        } else {
          console.log(R.msg)
        }
      }).finally(() => {
        Toast.clear()
      })
    }
  }

}
</script>

<style>

</style>