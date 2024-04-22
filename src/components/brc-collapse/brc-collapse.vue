<template>
  <view>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="任务管理" name="1" icon="list-switch">
        <van-grid :border="false" :column-num="3">
          <van-grid-item icon="clock-o" icon-color="#1989fa" text="待办任务" />
          <van-grid-item icon="passed" icon-color="#3AB54A" text="已办任务" />
          <van-grid-item icon="description-o" icon-color="#1989fa" text="我相关的" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="功能列表" name="1" icon="list-switch">
        <van-grid :border="false" :column-num="5">
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </van-collapse-item>
    </van-collapse>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1', '2'])
</script>

<style scoped lang="scss"></style>
