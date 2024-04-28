<template>
  <view class="viewport">
    <view class="logo">
      <image src="/static/images/logo.png" />
    </view>
    <!-- 网页端表单登录 -->
    <!-- #ifdef H5 -->
    <uni-forms class="form" :model="loginDto">
      <uni-forms-item name="name">
        <uni-easyinput type="text" v-model="loginDto.username" :input-border="false" :primaryColor="primaryColor" placeholder="请输入账号" />
      </uni-forms-item>
      <uni-forms-item  name="name">
        <uni-easyinput type="password" v-model="loginDto.password" :input-border="false" :primaryColor="primaryColor" placeholder="请输入密码" />
      </uni-forms-item>
    </uni-forms>
    <!-- 短信验证码登录 -->
    <button class="button" @click="onLogin">登录</button>
    <!-- #endif -->
    <!-- 小程序端授权登录 -->
    <!-- #ifdef MP-WEIXIN -->
    <button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetPhonenumber">
      <text class="icon"></text>
      手机号快捷登录
    </button>
    <!-- #endif -->

    <view class="tips">登录/注册即视为您同意《服务条款》和《Bryce隐私协议》</view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { loginApi } from '@/api/maUser'
import { onLoad } from '@dcloudio/uni-app'
import { accountLoginApi } from '@/api/auth'
import type { AccountLoginDto, UserLoginVo } from '@/types/auth'

const loginDto = reactive<AccountLoginDto>({} as AccountLoginDto)
const passwordType = ref('password')
const primaryColor = '#3AB54A'

const switchPasswordType = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

// #ifdef MP-WEIXIN
// 获取 code 登录凭证
let code = ''
onLoad(async () => {
  const res = await wx.login()
  code = res.code
})

/**
 * 获取用户手机号
 * @param ev 事件对象
 */
const onGetPhonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
  if (ev.detail.errMsg !== 'getPhoneNumber:ok') {
    return
  }
  // 获取参数
  const encryptedData = ev.detail.encryptedData!
  const iv = ev.detail.iv!

  // 登录请求
  const res = await loginApi({ code, encryptedData, iv })
  loginSuccess(res.data)
}
// #endif

const loginSuccess = (profile: UserLoginVo) => {
  // 保存用户信息
  const authStore = useAuthStore()
  authStore.setProfile(profile)
  // 成功提示
  uni.showToast({ icon: 'success', title: '登录成功' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 500)
}

/**
 * 登录请求
 */
const onLogin = async () => {
  // 登录请求
  const res = await accountLoginApi(loginDto)
  loginSuccess(res.data)
}
</script>

<style scoped lang="scss">
@import "login.scss";
</style>
