<template>
  <div class="container">
    <div>这是列表</div>
    <Tabbar :active="1"></Tabbar>
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

    }
  },
}
</script>

<style>

</style>