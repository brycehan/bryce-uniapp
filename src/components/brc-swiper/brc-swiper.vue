<template>
  <view class="brc-swiper">
      <swiper :autoplay="true" :circular="true" :interval="3000" @change="onChange">
        <swiper-item v-for="item in list" :key="item.id">
          <navigator class="navigator" url="/pages/index/index" hover-class="none">
            <image class="image" mode="aspectFill" :src="item.imgUrl"> </image>
          </navigator>
        </swiper-item>
      </swiper>
      <!-- 指示点 -->
      <view class="indicator">
        <text
          v-for="(item, index) in list"
          :key="item.id"
          class="dot"
          :class="{ active: index === activeIndex }"
        ></text>
      </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
/**
 * 轮播图数据
 */
const list = [
  {id: 1, imgUrl: '/static/images/banner/howto-ui.png'},
  {id: 2, imgUrl: '/static/images/banner/design-ui.png'},
  {id: 3, imgUrl: '/static/images/banner/develop-ui.png'},
  {id: 4, imgUrl: '/static/images/banner/admin-ui.png'},
  {id: 5, imgUrl: '/static/images/banner/user-ui.png'},
]

/**
 * 轮播图切换，当swiper 下标发生变化时触发
 *
 * @param event 事件
 */
const onChange: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
}
</script>

<style scoped lang="scss">
@import "brc-swiper.scss";
</style>
