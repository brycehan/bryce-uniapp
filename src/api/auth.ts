import { request } from '@/utils/request'
import type {
  AccountLoginDto,
  SmsLoginDto,
  LoginVo
} from '@/types/auth'

/**
 * app账号密码登录接口
 *
 * @param data 请求体参数
 */
export const accountLoginApi = (data: AccountLoginDto) => {
  return request<LoginVo>({
    url: '/auth/loginByAccount',
    method: 'POST',
    data,
  })
}

/**
 * app账号密码登录接口
 *
 * @param data 请求体参数
 */
export const appAccountLoginApi = (data: AccountLoginDto) => {
  return request<LoginVo>({
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
  return request<LoginVo>({
    url: '/auth/app/sms/login',
    method: 'POST',
    data,
  })
}

