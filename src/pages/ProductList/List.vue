<template>
  <ul class="list-ul">
    <ListItem v-for="item in productList" :key="item.id" :item="item"></ListItem>
  </ul>
</template>

<script>
import ListItem from './ListItem'
export default {
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    productList() {
      return this.list
    }
  },
  mounted() {
  }
}
</script>

<style>
.list-ul{
  padding: 0 30px 200px;
}
</style>