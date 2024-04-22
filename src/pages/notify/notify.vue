<template>
  <view class="viewport">
    <view class="search">
      <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </view>
    <view class="list">
      <view class="item" @tap="navigateTo('/pages/subPages/notify/info/info?id=1')">
        <div class="van-ellipsis">
          这是一段最多显示一行的文字，多余的内容会被省略托尔斯泰多余的内容会被省略托尔斯泰
        </div>
        <van-row>
          <van-col span="12">发送者：brycehan</van-col>
          <van-col span="12">时间：2021-09-01 12:00</van-col>
        </van-row>
      </view>
      <view class="item">
        <div class="van-ellipsis">发送</div>
        <van-row>
          <van-col span="12">发送者：brycehan</van-col>
          <van-col span="12">时间：2021-09-01 12:00</van-col>
        </van-row>
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
  .van-search {
    margin: 0 20rpx;
    border-radius: 20rpx;
  }
  .list {
    margin: 20rpx;
    border-radius: 20rpx;
    background-color: white;
    .item {
      padding: 30rpx 40rpx;
      .van-ellipsis {
        padding-bottom: 15rpx;
        font-size: 26rpx;
        color: #505256;
      }
      .van-col {
        color: #909399;
        font-size: 24rpx;
      }
    }
  }
}
</style>
