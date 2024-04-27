<template>
  <view class="viewport">
    <!-- 头像 -->
    <view class="avatar">
      <view @tap="onAvatarChange" class="avatar-content">
        <image class="image" mode="aspectFill" :src="authStore.profile?.avatar || defaultAvatar"></image>
      </view>
      <text class="text">点击修改头像</text>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile!.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio-label">
              <radio value="M" :color="primaryColor" :checked="profile?.gender === 'M'" />
              <text>男</text>
            </label>
            <label class="radio-label">
              <radio value="F" :color="primaryColor" :checked="profile?.gender === 'F'" />
              <text>女</text>
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">出生日期</text>
          <picker class="picker" mode="date" start="1900-01-01" :end="new Date()" @change="onBirthdayChange"
                  :value="profile?.birthday || '2000-01-01'">
            <view v-if="profile?.birthday">{{ profile?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <!-- 只有微信小程序端内置了省市区数据 -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="form-item">
          <text class="label">城市</text>
          <picker class="picker" mode="region" @change="onFullLocationChange"
                  :value="profile?.fullLocation?.split(' ')">
            <view v-if="profile?.fullLocation">{{ profile?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <!-- #endif -->
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button @tap="onSubmit" class="form-button">保 存</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useAuthStore } from '@/stores/modules/auth'
import type { Gender, UserProfileVo } from '@/types/auth'
import { getUserProfileApi, putUserProfileApi } from '@/api/auth'
import { onLoad } from '@dcloudio/uni-app'
import { getMaUserProfileApi, putMaUserProfileApi } from '@/api/user'

const defaultAvatar = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
const primaryColor = '#3AB54A'
// 城市
const fullLocationCode = ref<[string, string, string]>(['', '', ''])
// 个人信息
const profile = ref<UserProfileVo>({} as UserProfileVo)
const authStore = useAuthStore()

/**
 * 获取个人信息
 */
const getUserProfileData = async () => {
  let result
  // #ifdef MP-WEIXIN
  result = await getMaUserProfileApi()
  // #endif
  // #ifdef H5 || APP-PLUS
  result = await getUserProfileApi()
  // #endif
  profile.value = result.data
  const data = result.data as any
  // 省市区县
  fullLocationCode.value = [data.province || '', data.city || '', data.county || '']
  // 同步store中的头像和昵称
  authStore.profile!.avatar = result.data.avatar
  authStore.profile!.nickname = result.data.nickname
}

onLoad(() => {
  getUserProfileData()
})

const onAvatarChange = () => {
  // 调用拍照/选择图片
  // #ifdef H5 || APP-PLUS
  uni.chooseImage({
    count: 1,
    success: (res) => {
      // 文件路径
      const tempFilePath = res.tempFilePaths
      // 上传
      uploadFile(tempFilePath[0])
    }
  })
  // #endif

  // #ifdef MP-WEIXIN
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (res) => {
      // 文件路径
      const { tempFilePath } = res.tempFiles[0]
      // 上传
      uploadFile(tempFilePath)
    }
  })
  // #endif
}

/**
 * 上传文件
 * @param file 文件路径
 */
const uploadFile = (file: string) => {
  // 上传文件
  uni.uploadFile({
    url: '/ma/user/avatar',
    name: 'file',
    filePath: file,
    success: (res) => {
      if (res.statusCode === 200) {
        const avatar = JSON.parse(res.data).data.url
        // 个人信息页数据更新
        profile.value.avatar = avatar
        // 更新到store中
        authStore.profile!.avatar = avatar
        uni.showToast({
          icon: 'success',
          title: '更新成功'
        })
      } else {
        uni.showToast({
          icon: 'error',
          title: '出现错误'
        })
      }
    }
  })
}

/**
 * 修改性别
 *
 * @param ev 事件对象
 */
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value.gender = ev.detail.value as Gender
}

/**
 * 修改出生日期
 *
 * @param ev 事件对象
 */
const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  profile.value.birthday = ev.detail.value
}

/**
 * 修改城市
 *
 * @param ev 事件对象
 */
const onFullLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  profile.value.fullLocation = ev.detail.value.join(' ')
  fullLocationCode.value = ev.detail.code!
}

/**
 * 提交表单
 */
const onSubmit = async () => {
  const { nickname, gender, birthday, profession } = profile.value
  let result = null
  let data = {
    nickname,
    gender,
    birthday,
    province: fullLocationCode.value[0],
    city: fullLocationCode.value[1],
    county: fullLocationCode.value[2],
    profession
  }
  // #ifdef MP-WEIXIN
  result = await putMaUserProfileApi(data)
  // #endif
  // #ifdef H5 || APP-PLUS
  result = await putUserProfileApi(data)
  // #endif

  // 更新到store中
  authStore.profile!.nickname = result.data.nickname
  uni.showToast({
    icon: 'success',
    title: '保存成功'
  })
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}


</script>

<style lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;

  .avatar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 260rpx;
    justify-content: center;
    align-items: center;

    .image {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      background-color: grey;
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26rpx;
      color: #333;
    }
  }

  .form {
    background-color: #f4f4f4;

    &-content {
      margin: 10rpx 20rpx 0;
      padding: 0 20rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }

    &-item {
      display: flex;
      height: 46rpx;
      line-height: 46rpx;
      padding: 25rpx 10rpx;
      background-color: white;
      font-size: 28rpx;
      border-bottom: 1rpx solid #ddd;

      &:last-child {
        border: none;
      }

      .label {
        width: 180rpx;
        color: #333;
      }

      .account {
        color: #666;
      }

      .input {
        flex: 1;
        display: block;
        height: 46rpx;
      }

      .radio-label {
        margin-right: 20rpx;
      }

      .picker {
        flex: 1;
      }

      .placeholder {
        color: #808080;
      }
    }

  }
}
</style>
