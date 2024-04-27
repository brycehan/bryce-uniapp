<template>
  <view class="viewport">
    <!-- 表单 -->
    <view>
      <uni-forms  class="form">
        <uni-forms-item label="旧密码">
          <uni-easyinput v-model="userDto.password" :primary-color="primaryColor" type="password" clearable placeholder="请填写旧密码"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="新密码">
          <uni-easyinput v-model="userDto.newPassword" :primary-color="primaryColor" type="password" clearable placeholder="请填写新密码"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="确认密码">
          <uni-easyinput v-model="userDto.confirmPassword" :primary-color="primaryColor" type="password" clearable placeholder="请填写确认密码"></uni-easyinput>
        </uni-forms-item>
      </uni-forms>
      <button class="form-button">提交</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const userDto = reactive<any>({account: 'test', gender: 'M'})
const primaryColor = '#3AB54A'

</script>

<style lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;

  .form {
    margin: 20rpx 20rpx;
    padding:10rpx 20rpx;
    border-radius: 10rpx;
    background-color: white;

    //.uni-forms-item {
    //  justify-content: center;
    //  height: 90rpx;
    //  //border-bottom: 1rpx solid #ddd;
    //}

  }

}
</style>
