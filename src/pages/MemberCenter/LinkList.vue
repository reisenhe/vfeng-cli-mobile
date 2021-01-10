<template>
  <div class="user-list">
    <LinkItem 
      :font="'VVfont hm-medal'" 
      :text="'会员权益'"
      :link="'equity'"
    ></LinkItem>
    <LinkItem 
      :font="'VVfont hm-square'" 
      :text="'分享奖励'"
      :link="'record'"
    ></LinkItem>
    <LinkItem 
      :font="'VVfont hm-money-4'" 
      :text="'尊享礼遇'"
      :link="'courtesy'"
    ></LinkItem>
  </div>
</template>

<script>
import LinkItem from './LinkItem'
export default {
  components: {
    LinkItem
  }
}
</script>

<style>
</style>