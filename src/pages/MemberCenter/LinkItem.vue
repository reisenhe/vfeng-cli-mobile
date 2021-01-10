<template>
  <div class="li-link borderB" @click="linkTo">
    <div class="i_left border0">
      <i :class="fontClass"></i>
    </div>
    <p>{{linkText}}</p>
    <span class="i_right"><i class="VVfont hm-angle-right-2"></i></span>
  </div>
</template>

<script>
import event from './event'
export default {
  props: {
    font: String,
    text: String,
    link: String
  },
  data() {
    return {
      fontClass: this.font,
      linkText: this.text
    }
  },
  methods: {
    linkTo() {
      event.$emit('linkTo', this.link)
    }
  }
}
</script>

<style>
.i_left {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ccc;
}
.i_left::before{
  border-radius: 100%;
}
.i_left i{
  top: 2px;
}
.i_left+p {
    padding-left: 24px;
}
</style>