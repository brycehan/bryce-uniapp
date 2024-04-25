<template>
  <view class="viewport">
    <!-- 表单 -->
    <u-form class="form">
      <u-form-item label="旧密码" label-width="80">
        <u-input v-model="userDto.nickname" type="password" border="false" clearable placeholder="请填写旧密码"></u-input>
      </u-form-item>
      <u-form-item label="新密码" label-width="80">
        <u-input v-model="userDto.nickname" type="password" border="false" clearable placeholder="请填写新密码"></u-input>
      </u-form-item>
      <u-form-item label="确认密码" label-width="80">
        <u-input v-model="userDto.nickname" type="password" border="false" clearable placeholder="请填写确认密码"></u-input>
      </u-form-item>
      <div style="margin: 16px">
        <u-button round block type="primary" native-type="submit"> 保存</u-button>
      </div>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const userDto = reactive<any>({account: 'test', gender: 'M'})

</script>

<style lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;

  .form {
    margin: 20rpx 20rpx;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: white;

    .u-form-item {
      justify-content: center;
      height: 90rpx;
      border-bottom: 1rpx solid #ddd;
    }

  }

}
</style>
