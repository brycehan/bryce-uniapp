<template>
  <view class="viewport">
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <van-image
          class="avatar"
          round
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="abc" label="账号名" readonly />
      <van-field
        v-model="password"
        label="昵称"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="M">男</van-radio>
            <van-radio name="F">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="result"
        is-link
        readonly
        name="datePicker"
        label="出生日期"
        placeholder="点击选择日期"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
      <van-field
        v-model="password"
        label="职业"
        placeholder="请填写职业"
        :rules="[{ required: true, message: '请填写职业' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 保存 </van-button>
      </div>
    </van-form>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;

  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;

    .van-image {
      width: 160rpx;
      height: 160rpx;
    }
    .text {
      display: block;
      padding: 20rpx 0;
      font-size: 26rpx;
      color: #333;
    }
  }
  .form {
  }
}
</style>
