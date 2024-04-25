<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <text class="logo-image">Bryce</text>
      <text class="logo-text">专业 · 高效 · 领先</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
    </view>
  </view>
</template>

<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style scoped lang="scss">
@import "brc-navbar.scss";
</style>
