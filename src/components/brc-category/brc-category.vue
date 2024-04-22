<template>
  <view class="brc-category">
    <u-grid :border="false" :col="5">
      <u-grid-item>
        <u-icon name="photo" :size="size"></u-icon>
        <text class="grid-text">文字</text>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="photo" :size="size"></u-icon>
        <text class="grid-text">文字</text>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="photo" :size="size"></u-icon>
        <text class="grid-text">文字</text>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="photo" :size="size"></u-icon>
        <text class="grid-text">文字</text>
      </u-grid-item>
      <u-grid-item>
        <u-icon name="photo" :size="size"></u-icon>
        <text class="grid-text">文字</text>
      </u-grid-item>

    </u-grid>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue";

const size = ref<number>(52)
</script>

<style scoped lang="scss">
.brc-category {
  margin-top: 20rpx;

  .grid-text {
    font-size: 14px;
    color: #909399;
    padding: 10rpx 0 20rpx 0;
    /* #ifndef APP-PLUS */
    box-sizing: border-box;
    /* #endif */
  }
}
</style>
