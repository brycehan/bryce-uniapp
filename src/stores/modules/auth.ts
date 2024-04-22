import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MaUserLoginVo } from '@/types/maUser'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    // 用户信息
    const profile = ref<MaUserLoginVo>()

    // 权限集合
    const authorities = ref<string[]>([])

    /**
     * 保存用户信息
     * @param val 用户信息
     */
    const setProfile = (val: MaUserLoginVo) => {
      profile.value = val
    }

    /**
     * 清除用户信息
     */
    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      authorities,
      setProfile,
      clearProfile,
    }
  },
  {
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
