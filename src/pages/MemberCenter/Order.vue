<template>
  <div>
    <div class="li-link">
      <p>我的订单</p>
      <span class="i_right"><span>查看全部订单</span><i class="VVfont hm-angle-right-2"></i></span>
    </div>
    <ul class="user_order borderB borderT">
      <li>
        <a>
          <i class="VVfont hm-wallet"><!----></i> 
          <p>待付款</p>
        </a>
      </li>
      <li>
        <a>
          <i class="VVfont hm-money"></i>
          <p>待使用</p>
        </a>
      </li>
      <li>
        <a>
          <i class="VVfont hm-comments"></i>
          <p>已完成</p>
        </a>
      </li>
      <li>
        <a>
          <i class="VVfont hm-data-1"></i>
          <p>已取消</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* 订单类型 */
.user_order {
    display: flex;
    background-color: #fff;
    padding: 44px 14px 60px;
}
.user_order li {
    flex: 1;
    box-sizing: border-box;
    padding: 0 24px;
    text-align: center;
}
.user_order li i {
    font-size: 50px;
    color: #333;
}
.user_order li p {
    padding-top: 22px;
    font-size: 24px;
    line-height: 1;
    color: #333;
}
</style>