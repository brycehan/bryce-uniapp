<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <brc-navbar />
    <!-- 轮播图 -->
    <brc-swiper />
    <!-- 类目面板 -->
    <brc-category />
    <!-- 折叠面板 -->
    <brc-collapse />
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>
