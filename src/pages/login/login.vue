<template>
  <view class="viewport">
    <view class="logo">
      <image src="/static/images/logo.png" />
    </view>
    <!-- 网页端表单登录 -->
    <!-- #ifdef H5 -->
    <van-form class="form" @submit="onLogin">
      <van-cell-group inset>
        <van-field
          v-model="loginDto.username"
          :clearable="true"
          label=""
          placeholder="账号名/邮箱/手机号"
        />
        <van-field
          v-model="loginDto.password"
          :clearable="true"
          :type="passwordType"
          label=""
          placeholder="请输入密码"
        >
          <template v-slot:right-icon>
            <span class="solts" @click="switchPasswordType">
              <van-icon name="closed-eye" v-if="passwordType === 'password'" />
              <van-icon name="eye" v-else />
            </span>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
    <!-- #endif -->
    <!-- 小程序端授权登录 -->
    <!-- #ifdef MP-WEIXIN -->
    <button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetPhonenumber">
      <text class="icon"></text>
      手机号快捷登录
    </button>
    <!-- #endif -->

    <view class="extra">
      <view class="caption">
        <text>其它登录方式</text>
      </view>
      <view class="options">
        <button>
          <text class="icon icon-phone">手机验证</text>
        </button>
      </view>
    </view>
    <view class="tips">登录/注册即视为您同意《服务条款》和《Bryce隐私协议》</view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { MaUserLoginVo } from '@/types/maUser'
import { useAuthStore } from '@/stores/modules/auth'
import { loginApi } from '@/api/user'
import { onLoad } from '@dcloudio/uni-app'
import { accountLoginApi } from '@/api/auth'
import type { AccountLoginDto, UserLoginVo } from '@/types/auth'

const loginDto = reactive<AccountLoginDto>({} as AccountLoginDto)
const passwordType = ref('password')

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
.viewport {
  height: 100%;
  background-color: #f5f5f5;

  .logo {
    display: flex;
    justify-content: center;
    image {
      width: 120rpx;
      height: 120rpx;
      margin-top: 20vh;
    }
  }
  .form {
    margin-top: 40rpx;
  }
}
</style>
