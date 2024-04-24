<template>
  <view class="brc-swiper">
    <u-swiper
        :list="pictures"
        key-name="imgUrl"
        :indicator="true"
        imgMode="scaleToFill"
        :circular="true"
        :autoplay="true"
        height="500rpx"
        radius="0"
        @change="(e: any) => current = e.current"
        bg-color="var(--brc-button-primary-background)"
    >
      <template #indicator>
        <view class="indicator">
          <view
              class="indicator__dot"
              v-for="(item, index) in pictures"
              :key="item.id"
              :class="[index === current && 'indicator__dot--active']"
          >
          </view>
        </view>
      </template>
    </u-swiper>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue";

let current = ref(0);

/**
 * 轮播图数据
 */
const pictures = [
  {id: 1, imgUrl: '/static/images/banner/howto-ui.png'},
  {id: 2, imgUrl: '/static/images/banner/design-ui.png'},
  {id: 3, imgUrl: '/static/images/banner/develop-ui.png'},
  {id: 4, imgUrl: '/static/images/banner/admin-ui.png'},
  {id: 5, imgUrl: '/static/images/banner/my-ui.png'},
]
</script>

<style scoped lang="scss">
.brc-swiper {
  .indicator {
    @include flex(row);
    justify-content: center;

    &__dot {
      width: 36rpx;
      height: 9rpx;
      background-color: white;
      border-radius: 20%;
      margin: 0 5rpx;
      opacity: 0.3;
      transition: opacity 0.5s,
      background-color 0.5s;

      &--active {
        background-color: #ffffff;
        opacity: 1;
      }
    }
  }

}
</style>
