<template>
  <van-dialog 
    class="dialog-class"
    v-model="showDialog"
    :width="'auto'"
    :show-confirm-button="false"
    :close-on-click-overlay="closeLayer"
    closed="closeEvent">
    <div class="dialog-container">
      <slot></slot>
    </div>
  </van-dialog>
</template>

<script>
import { Dialog } from 'vant';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  props: {
    show: Boolean,
    maskClose: Boolean
  },
  watch: {
    show(newV) {
      console.log('dialog, ', newV)
      this.showDialog = newV
    }
  },
  data() {
    return {
      showDialog: false,
      closeLayer: this.maskClose || true,
    }
  },
  methods: {
    closeEvent() {
      this.$emit('onClose')
    }
  }
}
</script>

<style>
.dialog-class{
  border-radius: 10px;
  min-height: 200px;
}
.dialog-container{
  width: 620px;
  font-size: 28px;
}
</style>