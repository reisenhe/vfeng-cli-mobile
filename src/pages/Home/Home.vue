<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>这是首页</h1>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      data1: '这是data1'
    }
  },
  mounted() {
    request.get('/api/list', {
      data: '1-1'
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>