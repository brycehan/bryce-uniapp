<template>
  <view class="category">
    <navigator
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" mode="aspectFill" :src="item.icon"> </image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">

/**
 * 类目数据
 */
const list = [
  {
    id: 1,
    icon: '/static/images/nav/nav_icon_1.png',
    name: '手机'
  },
  {
    id: 2,
    icon: '/static/images/nav/nav_icon_2.png',
    name: '电脑'
  },
  {
    id: 3,
    icon: '/static/images/nav/nav_icon_3.png',
    name: '电视'
  },
  {
    id: 4,
    icon: '/static/images/nav/nav_icon_4.png',
    name: '笔记本'
  },
  {
    id: 5,
    icon: '/static/images/nav/nav_icon_5.png',
    name: '家电'
  }
]

</script>

<style scoped lang="scss">
@import 'brc-category.scss';
/* #ifdef H5 */
::v-deep(a.navigator-wrap) {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* #endif */
</style>
