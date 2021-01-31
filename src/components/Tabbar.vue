<template>
  <div>
    <van-tabbar v-model="activeIndex" active-color="#e60012" inactive-color="#333">
      <van-tabbar-item replace to="/hotel">
        <div class="icon-btn">
          <i class="lnicon LN-bed"></i>
          <p class="p-t">客房预订</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/productList">
        <div class="icon-btn">
          <i class="lnicon LN-classification"></i>
          <p class="p-t">商城</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/memberCenter">
        <div class="icon-btn">
          <i class="lnicon LN-user"></i>
          <p class="p-t">我的</p>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  props: {
    active: Number
  },
  computed: {
    activeIndex: {
      get() {
        return this.active
      },
      set() {
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar{
  height: 100px;
}
.icon-btn{
  text-align: center;
}
.icon-btn p {
  font-size: 22px;
  line-height: 1;
  margin-top: 4px;
}
.icon-btn i {
  height: 44px;
  font-size: 40px;
}
.icon-btn .LN-bed{
  font-size: 44px;
}
</style>