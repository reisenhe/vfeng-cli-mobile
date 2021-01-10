<template>
  <div class="container">
    <div class="form-group">
      <FormDate class="borderB" @select="selectDate"></FormDate>
      <FormSelect class="borderB" @select="selectRoomAdult"></FormSelect>
      <input class="submit1 radius4 colorR1Bg" type="button" value="查找酒店" @click="submitFun()">
    </div>
    <Tabbar :active="0"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import FormDate from './FormDate'
import FormSelect from './FormSelect'
export default {
  components: {
    Tabbar,
    FormDate,
    FormSelect
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      room_num: 1,
      adults: 1,
    }
  },
  mounted() {
    console.log(process.env)
  },
  methods: {
    selectDate(v) {
      const {startDate, endDate} = v;
      this.startDate = startDate;
      this.endDate = endDate
    },
    selectRoomAdult(v) {
      const {room_num, adults} = v;
      this.room_num = room_num;
      this.adults = adults
    },
    submitFun() {
      console.log(this.startDate, this.endDate, this.room_num, this.adults)
    }
  }
}
</script>

<style scoped>
.form-group{
  padding: 0 30px 40px;
}
.submit1{
  margin-top: 30px;
}
</style>