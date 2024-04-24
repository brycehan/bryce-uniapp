<template>
  <view class="viewport">
    <view class="search">
      <u-search
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
      >
      </u-search>
    </view>
    <view class="list">
      <view class="item" @tap="navigateTo('/pages/subPages/notify/info/info?id=1')">
        <div class="u-line-1">
          这是一段最多显示一行的文字，多余的内容会被省略托尔斯泰多余的内容会被省略托尔斯泰
        </div>
        <u-row>
          <u-col span="6">发送者：brycehan</u-col>
          <u-col span="6">时间：2021-09-01 12:00</u-col>
        </u-row>
      </view>
      <view class="item">
        <div class="u-line-1">发送</div>
        <u-row>
          <u-col span="6">发送者：brycehan</u-col>
          <u-col span="6">时间：2021-09-01 12:00</u-col>
        </u-row>
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
  .u-search {
    margin: 0 20rpx;
    border-radius: 20rpx;
  }
  .list {
    margin: 20rpx;
    border-radius: 20rpx;
    background-color: white;
    .item {
      padding: 30rpx 40rpx;
      .u-line-1 {
        font-size: 26rpx;
        color: #505256;
      }
      .u-col {
        color: #909399;
        font-size: 24rpx;
      }
    }
  }
}
</style>
