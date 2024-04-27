<template>
  <view class="brc-collapse">
    <uni-collapse class="collapse-box">
      <uni-collapse-item class="collapse-item" title="任务管理" :open="true" >
        <text>内容</text>
      </uni-collapse-item>
      <uni-collapse-item class="collapse-item" title="功能列表" :open="true">
        <text>内容</text>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.brc-collapse {
  display: flex;
  background-color: #007aff;
  /* 修复 uni-collapse 小程序端宽度不占满问题 */
  .collapse-box {
    flex: 1;
  }
}
</style>
