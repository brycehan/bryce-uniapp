import { useAuthStore } from '@/stores/modules/auth'
import type { ResponseResult } from '@/types/glocal'

// 请求基地址
let baseUrl = ''
// #ifdef MP-WEIXIN || APP-PLUS
baseUrl = 'http://localhost:8090'
// #endif
// #ifdef H5
baseUrl = '/api'
// #endif

// 添加token 请求头标识
const authStore = useAuthStore()

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    console.log('拦截请求：', options)
    // 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 请求超时，默认60s
    options.timeout = 10000

    // 添加来源端请求头标识
    let sourceClient = ''
    // #ifdef MP-WEIXIN
    sourceClient = 'miniApp'
    // #endif
    // #ifdef H5
    sourceClient = 'h5'
    // #endif
    // #ifdef APP-PLUS
    sourceClient = 'app'
    // #endif

    options.header = {
      'source-client': sourceClient,
      ...options.header,
    }

    // 添加token 请求头标识
    const authStore = useAuthStore()
    if (authStore.profile) {
      options.header.Authorization = authStore.profile.token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<ResponseResult<T>>((resolve, reject) => {
    uni.request({
      ...options,
      /**
       * 响应成功
       * @param res 响应结果
       */
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const result = (res.data as ResponseResult<T>)
          if (result.code === 200) {
            // 处理自动刷新令牌
            if (res.header.Authorization) {
              authStore.setToken(res.header.Authorization)
            }
            // 刷新token
            resolve(result)
          } else {
            uni.showToast({
              icon: 'none',
              title: result.message || '请求错误',
            })
            reject(res)
          }

        } else if (res.statusCode === 401) {
          // 清理用户信息，跳转到登录页
          const authStore = useAuthStore()
          authStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其它错误，根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as ResponseResult<T>).message || '请求错误',
          })
          reject(res)
        }
      },
      /**
       * 响应失败
       * @param err 失败信息
       */
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
