<template>
  <view class="viewport">
    <!-- 个人资料 -->
    <view class="profile">
      <!-- 已登录 -->
      <view class="overview" v-if="authStore.profile">
        <navigator url="/pages/subPages/my/profile/profile" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="authStore.profile?.avatar || defaultAvatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname"> {{ authStore.profile?.nickname }} </view>
          <navigator class="extra" url="/pages/subPages/my/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
        <view @tap="onLogout" class="quit">退出登录</view>
      </view>
      <!-- 未登录 -->
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="defaultAvatar"></image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <navigator url="/pages/login/login" hover-class="none" class="update">
              <text class="tips">点击登录账号</text>
            </navigator>
          </view>
        </view>
      </view>
    </view>
    <!-- 列表 -->
    <view class="list">
      <uni-list class="list-box" v-if="authStore.profile">
        <uni-list-item title="个人信息" showArrow clickable @click="navigateTo('/pages/subPages/my/profile/profile')"></uni-list-item>
        <uni-list-item title="修改密码" showArrow clickable @click="navigateTo('/pages/subPages/my/password/password')"></uni-list-item>
        <uni-list-item title="帮助中心" showArrow clickable @click="navigateTo('/pages/subPages/my/help/help')"></uni-list-item>
      </uni-list>
      <uni-list class="list-box" v-if="false">
        <button hover-class="none" class="item-button" open-type="openSetting">授权管理
          <uni-icons class="arrow" type="right" size="30"></uni-icons>
        </button>
        <button hover-class="none" class="item-button" open-type="feedback">问题反馈
          <uni-icons class="arrow" type="right" size="30"></uni-icons>
        </button>
        <button hover-class="none" class="item-button" open-type="contact">联系我们
          <uni-icons class="arrow" type="right" size="30"></uni-icons>
        </button>
      </uni-list>
      <uni-list class="list-box">
        <uni-list-item title="关于我们" showArrow clickable @click="navigateTo('/pages/subPages/my/profile/profile')"></uni-list-item>
        <uni-list-item title="意见反馈" showArrow clickable @click="navigateTo('/pages/subPages/my/password/password')"></uni-list-item>
        <uni-list-item title="检查更新" showArrow clickable @click="navigateTo('/pages/subPages/my/help/help')"></uni-list-item>
      </uni-list>

      <uni-list class="list-box">
        <uni-list-item title="系统设置" showArrow clickable @click="navigateTo('/pages/subPages/my/profile/profile')"></uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/modules/auth'

const defaultAvatar = '/static/images/avatar/avatar-1.png'
const authStore = useAuthStore()

/**
 * 路由跳转
 */
const navigateTo = (url: string) => {
  uni.navigateTo({
    url,
  })
}

/**
 * 退出登录
 */
const onLogout = () => {
  uni.showModal({
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        authStore.clearProfile()
        // 返回上一页
        uni.navigateBack()
      }
    }
  })
}
</script>

<style scoped lang="scss">
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;

  /**
 * 用户信息
 */
  .profile {
    padding: 25rpx 0 25rpx;
    position: relative;
    background-color: var(--brc-button-primary-background);

    .overview {
      display: flex;
      height: 120rpx;
      padding: 0 36rpx;
      color: white;
    }

    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      background-color: #eee;
    }

    .meta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 30rpx;
      margin-left: 20rpx;
    }

    .nickname {
      max-width: 350rpx;
      margin-bottom: 16rpx;
      font-size: 30rpx;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .extra {
      display: flex;
      font-size: 20rpx;
    }

    .tips {
      font-size: 22rpx;
    }

    .update {
      padding: 3rpx 10rpx 1rpx;
      color: rgba(255, 255, 255, 0.8);
      border: 1rpx solid rgba(255, 255, 255, 0.8);
      margin-right: 10rpx;
      border-radius: 30rpx;
    }
    // 退出登录
    .quit {
      position: absolute;
      bottom: 10rpx;
      right: 40rpx;
      font-size: 28rpx;
      color: #fff;
      cursor: pointer;
    }
  }
  // 列表
  .list {
    display: flex;
    flex-direction: column;
    margin-top: 10rpx;
    .list-box {
      margin: 10rpx 0;
      background-color: white;

      .item-button {
        display: flex;
        width: 100%;
        line-height: 90rpx;
        padding-left: 10rpx;
        font-size: 30rpx;
        color: #333;
        //border-bottom: 1rpx solid #ddd;
        text-align: left;
        border-radius: 0;
        background-color: #fff;
        //background-color: #f0ad4e;

      }
    }


  }
}
</style>
