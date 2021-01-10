<template>
  <div>
    <div class="itme itme_date" @click="showCalendar">
      <div class="con itme_date_l">
        <div class="d1"><span class="s1">{{startDate.slice(5,10)}}</span><span class="s2">{{startDate.slice(0,10) | setWeekDate(langUrl)}}</span></div>
        <div class="d2 dalign border0">共<span class="numday">1</span>晚</div>
      </div>
      <div class="con itme_date_r">
        <div class="d1"><span class="s1">{{endDate.slice(5,10)}}</span><span class="s2">{{endDate.slice(0,10) | setWeekDate(langUrl)}}</span></div>
      </div>
    </div>
    <van-calendar v-model="show" 
      type="range" 
      :default-date="[vantStartDate, vantEndDate]"
      @confirm="onConfirm" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
import * as moment from 'moment';
export default {
  data() {
    return {
      show: false,  // 显示日历
      startDate: moment().format("YYYY-MM-DD"),  //入住日期
      endDate: moment().add(1, 'days').format("YYYY-MM-DD"),    //离店日期
    }
  },
  computed: {
    vantStartDate() {
      return moment(this.startDate).toDate()
    },
    vantEndDate() {
      return moment(this.endDate).toDate()
    }
  },
  mounted() {
    this.emitVal()
  },
  methods: {
    showCalendar() {
      this.show = true;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.startDate = moment(start).format("YYYY-MM-DD");
      this.endDate = moment(end).format("YYYY-MM-DD");
      this.show = false;
      this.emitVal()
    },
    emitVal() {
      this.$emit('select', {
        startDate: this.startDate,
        endDate: this.endDate
      })
    }
  },
  filters:{
    setWeekDate: function (value,lang) {
      if(lang == 'zh_cn'){
        return "周" + "日一二三四五六".charAt(new Date(value).getDay());
      }else{
        return ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][new Date(value).getDay()]
      }
    }
  },
}
</script>

<style>
.itme {
    position: relative;
    height: 104px;
    display: flex;
    align-items: center;
}
.itme_date .itme_date_l {
    padding-right: 15px;
}
.itme_date .itme_date_r {
    padding-left: 10px;
}
.itme_date .con {
    display: flex;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
}
.itme_date .con .d1 {
    font-size: 36px;
    flex: 1;
}
.itme_date .con .d1 .s2 {
    font-size: 22px;
    color: #999;
    margin-left: 10px;
}
.itme_date .con .d2 {
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 50px;
    line-height: normal;
    font-size: 22px;
}
.itme_date .con .d2 span {
    margin: 0 6px;
}
.itme_date .con .d2:before {
    border-color: #666;
    border-radius: 50px;
}
</style>