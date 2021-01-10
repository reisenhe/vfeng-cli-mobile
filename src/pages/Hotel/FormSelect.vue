<template>
  <div class="itme itme_select">
    <div class="con itme_select_l">
      <div class="borderB">
        <i class="VVfont hm-angle-right-2"></i>
        <div class="d1 dalign">房间数</div>
        <select class="d2" v-model="room_num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
      </div>
    </div>
    <div class="con itme_select_r">
        <div class="borderB">
            <i class="VVfont hm-angle-right-2"></i>
            <div class="d1 dalign">每间成人数</div>
            <select class="d2" v-model="adults">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room_num: 1,
      adults: 1
    }
  },
  watch: {
    room_num() {
      this.emitVal()
    },
    adults() {
      this.emitVal()
    }
  },
  methods: {
    emitVal() {
      this.$emit('select', {
        room_num: this.room_num,
        adults: this.adults
      })
    }
  }
}
</script>

<style scoped>
.itme {
    position: relative;
    height: 104px;
    display: flex;
    align-items: center;
}
.itme_select:before {
  display: none;
}
.itme_select>div {
  width: 100%;
  height: 104px;
}
.itme_select .con {
  float: left;
  width: 50%;
  position: relative;
  box-sizing: border-box;
}
.itme_select .itme_select_l {
  padding-right: 16px;
}
.itme_select .itme_select_r {
  padding-left: 16px;
}
.itme_select .d1 {
  position: absolute;
  display: flex;
  align-items: center;
  line-height: initial;
  left: 0;
  top: 0;
  height: 100%;
  pointer-events: none;
  color: #333;
}
.itme_select .d2 {
  height: 104px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 60px;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  direction: rtl;
}
.hm-angle-right-2 {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #cfcfcf;
}
</style>