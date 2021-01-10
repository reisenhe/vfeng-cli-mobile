<template>
  <div class="container">
    <div class="page">
      <div class="ubb" v-html="ubbContent">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant'
Vue.use(Toast);
export default {
  data() {
    return {
      ubbContent: '',
    }
  },
  computed: {
    ubbKey() {
      return this.$route.query.ubbKey
    }
  },
  mounted() {
    this.getUbbInfo()
  },
  methods: {
    getUbbInfo() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      })
      this.requestApi('/api/info/index', {
        type: [this.ubbKey]
      }).then(R => {
        if (!R.error) {
          if (R.data instanceof Array) {
            return
          }
          this.ubbContent = JSON.parse(R.data[this.ubbKey])[this.langUrl]
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
.page {
  padding: 40px;
}
.ubb {
  font-size: 30px;
  line-height: 50px;
  height: 100%;
  color: #333;
  text-align: left;
}
</style>