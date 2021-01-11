<template>
  <li v-if="productItem.id" class="borderB" @click="clickItem">
    <div class="a">
      <div class="img" style="position: relative;"
            :style="{backgroundImage:`url(${cdnUrl}/` + JSON.parse(productItem.pictures)[0] + ')'}">
      </div>
      <div class="con">
        <div>
          <h3 class="d1">{{productItem.name | JSONPLang}}</h3>
          <div class="d5">岭客汇</div>
          <p class="d4">销售时间：{{saleDate.start}}至{{saleDate.end}}</p>
          <div class="d3 c">
              <div class="pr">
                  <!--纯积分-->
                  <template v-if="productItem.is_pure_point && checkHotelsIsPoint">
                      <p class="p1 colorB1"><span>{{productItem.now_point}}</span>积分</p>
                  </template>
                  <!--非纯积分-->
                  <template v-else>
                      <!--多规格-->
                      <p v-if="productItem.priceLists.length" class="p1">
                          ￥<span>{{productItem.priceLists[0].now_price}}</span>.{{productItem.priceLists.now_price}}起
                          <b v-if="productItem.priceLists[0].old_price !== '0.00' && parseFloat(productItem.priceLists[0].now_price) < parseFloat(productItem.priceLists[0].old_price)" class="b3"><s>￥{{productItem.priceLists[0].old_price}}</s></b>
                      </p>
                      <!--无规格-->
                      <p v-else class="p1">
                          ￥<span>{{productItem.now_price}}</span>
                          <b v-if="productItem.old_price !== '0.00' && parseFloat(productItem.now_price) < parseFloat(productItem.old_price)" class="b3"><s>￥{{productItem.old_price}}</s></b>
                      </p>
                  </template>
              </div>
              <div class="btn">{{buyingBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import * as moment from 'moment';
import { mapGetters } from 'vuex';
import event from './event'
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      productItem: this.item
    }
  },
  computed: {
    ...mapGetters([
      'hotelsListObj'
    ]),
    saleDate() {
      return {
        start: moment.unix(this.productItem.sale_start_date).format("YYYY-MM-DD"),
        end: moment.unix(this.productItem.sale_end_date).format("YYYY-MM-DD")
      }
    },
    buyingBtnText() {
      let text = this.productItem.is_pre_buy ? '立即抢购' : '立即购买'
      return text
    },
    checkHotelsIsPoint() {
      if (!this.hotelsListObj || !this.productItem.hotels_id) {
        return false
      }
      return this.hotelsListObj[this.productItem.hotels_id] && this.hotelsListObj[this.productItem.hotels_id].is_point;
    }
  },
  methods: {
    clickItem() {
      event.$emit('linkToDetail', this.productItem.id)
    }
  }
}
</script>

<style lang="scss" scoped>
li {
    padding: 40px 0;
}
li .a {
    display: flex;
}
.img {
    width: 200px;
    height: 148px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.con {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.con > div {
  width: 100%;
}
.con .d1 {
    font-size: 32px;
    color: #000;
    line-height: 38px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: normal;
    overflow: hidden;
    height: 76px;
}
.d3 {
    padding-top: 6px;
}
.d3 .pr {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    height: 68px;
    color: $color1;
}
.d3 .pr .b3 {
    font-size: 24px;
    color: #999;
    margin-left: 6px;
    font-weight: normal;
}
.d3 .btn {
    float: right;
    margin-top: 10px;
    line-height: 58px;
    font-size: 26px;
    background-color: $color1;
    border-radius: 6px;
    padding: 0 20px;
    color: #fff;
}
.d4 {
    margin-top: 20px;
    margin-bottom: 6px;
    position: relative;
    z-index: 1;
    line-height: 1;
    font-size: 24px;
    color: #999;
}
.d5 {
    font-size: 24px;
    color: #666;
    line-height: 1.3;
}
</style>