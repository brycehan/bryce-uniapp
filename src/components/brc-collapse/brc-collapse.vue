<template>
  <view class="brc-collapse">
    <uni-collapse>
      <uni-collapse-item title="任务管理" :open="true">
        <uni-grid :column="3" :show-border="false">
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">待办任务</text>
          </uni-grid-item>
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">待办任务</text>
          </uni-grid-item>
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">待办任务</text>
          </uni-grid-item>
        </uni-grid>
      </uni-collapse-item>
      <uni-collapse-item title="功能列表" :open="true">
        <uni-grid :column="3">
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">文字</text>
          </uni-grid-item>
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">文字</text>
          </uni-grid-item>
          <uni-grid-item>
            <uni-icons type="contact" size="30"></uni-icons>
            <text class="text">文字</text>
          </uni-grid-item>
        </uni-grid>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.brc-collapse {
  display: flex;
  flex-wrap: wrap;
}
</style>
