<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <brc-navbar />
    <!-- 滚动容器 -->
    <scroll-view
        :enable-back-to-top="true"
        :refresher-enabled="true"
        :scroll-y="true"
        class="scroll-view">
      <!-- 轮播图 -->
      <brc-swiper />
      <!-- 类目面板 -->
      <brc-category />
      <!-- 折叠面板 -->
      <brc-collapse />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
//@import "./index.scss";
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;

  .scroll-view {
    flex: 1;
    overflow: hidden;
  }


}

</style>
