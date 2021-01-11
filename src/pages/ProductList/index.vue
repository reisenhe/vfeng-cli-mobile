<template>
  <div class="container">
    <List :list="list"></List>
    <Tabbar :active="1"></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import List from './List'
import { mapGetters, mapMutations } from 'vuex'
import { turnArrtoObj } from '@/utils/utils'
import event from './event'
export default {
  components: {
    Tabbar,
    List
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'hotelListObj'
    ])
  },
  mounted() {
    if (!Object.keys(this.hotelListObj).length) {
      this.getHotelList()
    }
    this.getProductList();
    event.$on('linkToDetail', this.linkToDetail)
  },
  beforeDestroy() {
    event.$off('linkToDetail', this.linkToDetail)
  },
  methods: {
    getHotelList() {
      this.requestApi('/api/info/index',{
        type: ['hotelsLists']
      }).then(R => {
        if (!R.error) {
          let hotelListArr = R.data.hotelsLists;
          let hotelListObj = turnArrtoObj(hotelListArr, 'id')
          this.setHotelListObj(hotelListObj)
        } else {
          console.log(R.msg)
        }
      })
    },
    getProductList() {
      this.requestApi('/api/product_single/lists',{
        channel_id: 1
      }).then(R => {
        if (!R.error) {
          this.list = R.data.productLists
        } else {
          console.log(R.msg)
        }
      }, () => {
      })
    },
    // 跳转到详细
    linkToDetail(id) {
      this.navigateTo('ProductDetail', {
        id
      })
    },
    ...mapMutations({
      setHotelListObj: 'SET_HOTEL_LIST_OBJ'
    })
  }
}
</script>

<style>

</style>