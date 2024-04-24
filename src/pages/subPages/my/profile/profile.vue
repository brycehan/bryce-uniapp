<template>
  <view class="viewport">
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <u-avatar
            class="avatar"
            size="84"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </view>
      <text class="text">点击修改头像</text>
    </view>
    <!-- 表单 -->
    <u-form class="form">
      <u-form-item label="账号" label-width="80">
        <u-input v-model="userDto.account" border="false" readonly></u-input>
      </u-form-item>
      <u-form-item label="昵称" label-width="80">
        <u-input v-model="userDto.nickname"  border="false" placeholder="请填写昵称"></u-input>
      </u-form-item>
      <u-form-item label="性别" prop="userInfo.name" label-width="80">
        <u-radio-group class="gender" v-model="userDto.gender">
          <u-radio class="gender-radio" name="M" label="男"></u-radio>
          <u-radio class="gender-radio" name="F" label="女"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item class="datetime-pick" label="出生日期" prop="userInfo.name" label-width="80" @click="show = true">
        <u-datetime-picker
            class="datetime-picker"
            :show="show"
            v-model="userDto.birthday"
            mode="date"
            @click="show = true"
            @cancel="show = false"
            @confirm="onDatePickerConfirm"
        >
        </u-datetime-picker>
        <view class="datetime-val" v-if="userDto?.birthday">{{timeFormat(userDto?.birthday, 'yyyy-mm-dd')}}</view>
        <view class="placeholder datetime-val" v-else>请选择日期</view>
      </u-form-item>
      <u-form-item label="职业"  prop="userInfo.name" label-width="80">
        <u-input v-model="userDto.name" :border="false" placeholder="请填写职业"></u-input>
      </u-form-item>
      <div style="margin: 16px">
        <u-button round block type="primary" native-type="submit"> 保存</u-button>
      </div>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import { timeFormat } from "uview-plus";

const userDto = reactive<any>({account: 'test', gender: 'M'})
const show = ref<boolean>(false)
const onDatePickerConfirm = (args: any) => {
  userDto.birthday = timeFormat(args.value, 'yyyy-mm-dd')
  show.value=false
}
</script>

<style lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;

  .avatar {
    margin-top: 20rpx;

    .avatar-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      display: flex;
      padding: 20rpx 0;
      justify-content: center;
      align-items: center;
      font-size: 26rpx;
      color: #333;
    }
  }

  .form {
    margin: 0 20rpx;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: white;

    .u-form-item {
      justify-content: center;
      height: 90rpx;
      border-bottom: 1rpx solid #ddd;
    }

    .gender {
      padding-left: 18rpx;
    }
  }

  // 修复样式bug
  .gender-radio {
    margin-right: 20rpx;
  }
  .datetime-pick {
    display: flex;
    align-items: flex-start;
  }
  .datetime-val {
    font-size: 15px;
    padding-left: 9px;
  }
  .placeholder {
    color: rgb(192, 196, 204);
    font-size: 15px;
  }
}
</style>
