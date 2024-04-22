<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <text class="logo-image">Bryce</text>
      <text class="logo-text">专业 · 高效 · 领先</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <u-search
        v-model="searchStr"
        shape="round"
        searchIcon="search"
        placeholder="请输入搜索关键词"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const searchStr = ref('')
</script>

<style  lang="scss">
/**
 * 导航栏
 */
.navbar {
  background-color: var(--van-button-primary-background);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;
    .logo-image {
      //width: 166rpx;
      //height: 39rpx;
      // 字体样式
      color: white;
      align-items: center;
      justify-content: center;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: white;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }

  .search  {
   span {
     color: white !important;
   }
  }
}

</style>
