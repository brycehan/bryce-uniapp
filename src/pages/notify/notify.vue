<template>
  <view class="viewport">
    <view class="search">
      <uni-search-bar
        class="search-bar"
        :radius="100"
        cancel-button="none"
        placeholder="请输入搜索关键词"
      >
      </uni-search-bar>
      <view class="button">搜索</view>
    </view>
    <view class="list">
      <view class="item" @tap="navigateTo('/pages/subPages/notify/info/info?id=1')">
        <view class="item-title">
          这是一段最多显示一行的文字，多余的内容会被省略托尔斯泰多余的内容会被省略托尔斯泰
        </view>
        <view class="item-text-box">
          <view class="item-text">发送者：brycehan</view>
          <view class="item-text">时间：2021-09-01 13:00</view>
        </view>
      </view>
      <view class="item">
        <div class="item-title">发送</div>
        <view class="item-text-box">
          <view class="item-text">发送者：brycehan</view>
          <view class="item-text">时间：2021-09-01 12:00</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * 路由跳转
 */
const navigateTo = (url: string) => {
  uni.navigateTo({
    url,
  })
}
</script>

<style scoped lang="scss">
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  /**
   * 搜索框
   */
  .search {
    display: flex;
    .search-bar {
      flex: 1;
    }
    .button {
      display: flex;
      align-items: center;
      line-height: 50rpx;
      margin-right: 20rpx;
      color: #333;
    }
  }
  /**
   * 列表
   */
  .list {
    margin: 20rpx;
    border-radius: 20rpx;
    background-color: white;
    .item {
      padding: 30rpx 40rpx;

      .item-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 26rpx;
        color: #505256;
      }
      .item-text-box {
        display: flex;
        justify-content: space-between;
      }
      .item-text {
        font-size: 24rpx;
        color: #909399;
      }
    }
  }
}
</style>
