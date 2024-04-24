<template>
  <view class="viewport">
    <!-- 个人资料 -->
    <view class="profile">
      <!-- 已登录 -->
      <view class="overview" v-if="true">
        <navigator url="/pages/subPages/my/profile/profile" hover-class="none">
          <u-avatar
            class="avatar"
            size="64"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </navigator>
        <view class="meta">
          <view class="nickname"> brycehan </view>
          <navigator class="extra" url="/pages/subPages/my/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
        <navigator class="quit" hover-class="none"> 退出登录 </navigator>
      </view>
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <u-avatar
            class="avatar"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <navigator url="/pages/login/login" hover-class="none" class="nickname">
              <text class="tips">点击登录账号</text>
            </navigator>
          </view>
        </view>
      </view>
    </view>
    <!-- 列表 -->
    <view class="list">
      <u-cell-group>
        <u-cell
          title="个人信息"
          icon="account"
          is-link
          @tap="navigateTo('/pages/subPages/my/profile/profile')"
        />
        <u-cell title="修改密码" icon="lock" is-link />
        <u-cell title="帮助中心" icon="question-circle" is-link />
      </u-cell-group>
      <u-cell-group>
        <u-cell title="关于我们" icon="heart" is-link />
        <u-cell title="意见反馈" icon="kefu-ermai" is-link />
        <u-cell title="检查更新" icon="clock" is-link />
      </u-cell-group>
      <u-cell-group>
        <u-cell title="系统设置" icon="setting" is-link />
      </u-cell-group>
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
 * 用户信息
 */
  .profile {
    padding-top: 20rpx;
    padding-bottom: 30rpx;
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
      align-items: flex-start;
      line-height: 30rpx;
      padding: 16rpx 0;
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
    }
  }
  // 列表
  .list {
    .u-cell-group {
      margin: 20rpx 0;
      background-color: white;
    }
  }
}
</style>
