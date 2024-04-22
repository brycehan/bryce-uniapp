import { request } from '@/utils/request'
import type { MaLoginDto, MaUserLoginVo, MaUserProfileDto, MaUserProfileVo } from '@/types/maUser'

/**
 * 登录接口
 *
 * @param data 请求体参数
 */
export const loginApi = (data: MaLoginDto) => {
  return request<MaUserLoginVo>({
    url: '/ma/user/login',
    method: 'POST',
    data,
  })
}

/**
 * 登录接口
 *
 * @param data 请求体参数
 */
export const appLoginApi = (data: MaLoginDto) => {
  return request<MaUserLoginVo>({
    url: '/auth/user/login',
    method: 'POST',
    data,
  })
}

/**
 * 获取用户信息
 */
export const getUserProfileApi = () => {
  return request<MaUserProfileVo>({
    url: '/ma/user/profile',
    method: 'GET',
  })
}

/**
 * 修改用户信息
 *
 * @param data 请求体参数
 */
export const putUserProfileApi = (data: MaUserProfileDto) => {
  return request<MaUserProfileVo>({
    url: '/ma/user',
    method: 'PUT',
    data,
  })
}
