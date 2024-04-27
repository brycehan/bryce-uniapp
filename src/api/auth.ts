import { request } from '@/utils/request'
import type { MaUserProfileVo } from '@/types/maUser'
import type {
  AccountLoginDto,
  SmsLoginDto,
  UserLoginVo,
  UserProfileDto,
  UserProfileVo,
} from '@/types/auth'

/**
 * app账号密码登录接口
 *
 * @param data 请求体参数
 */
export const accountLoginApi = (data: AccountLoginDto) => {
  return request<UserLoginVo>({
    url: '/auth/app/account/login',
    method: 'POST',
    data,
  })
}

/**
 * 短信验证码登录接口
 *
 * @param data 请求体参数
 */
export const smsLoginApi = (data: SmsLoginDto) => {
  return request<UserLoginVo>({
    url: '/auth/app/sms/login',
    method: 'POST',
    data,
  })
}

/**
 * 获取用户信息
 */
export const getUserProfileApi = () => {
  return request<UserProfileVo>({
    url: '/auth/app/user/profile',
    method: 'GET',
  })
}

/**
 * 修改用户信息
 *
 * @param data 请求体参数
 */
export const putUserProfileApi = (data: UserProfileDto) => {
  return request<MaUserProfileVo>({
    url: '/auth/app/user',
    method: 'PUT',
    data,
  })
}
