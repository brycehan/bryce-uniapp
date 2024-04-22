<template>
  <view>
    <u-collapse v-model="activeNames" :value="['0','1']">
      <u-collapse-item title="任务管理" name="0" icon="list">
        <u-grid :border="false" :col="3">
          <u-grid-item>
            <u-icon name="clock" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">待办任务</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="checkmark-circle" color="#3AB54A" :size="size"></u-icon>
            <text class="grid-text">已办任务</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="file-text" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">我相关的</text>
          </u-grid-item>
        </u-grid>
      </u-collapse-item>
      <u-collapse-item title="功能列表" name="1" icon="list-dot">
        <u-grid :border="false" :col="5">
          <u-grid-item>
            <u-icon name="photo" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">文字</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="photo" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">文字</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="photo" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">文字</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="photo" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">文字</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="photo" color="#1989fa" :size="size"></u-icon>
            <text class="grid-text">文字</text>
          </u-grid-item>
        </u-grid>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1', '2'])
const size = ref<number>(52)

</script>

<style scoped lang="scss"></style>
