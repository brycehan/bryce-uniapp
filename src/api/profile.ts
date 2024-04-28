import { request } from '@/utils/request'
import type { MaUserProfileVo } from '@/types/maUser'
import type {
  AccountLoginDto,
  SmsLoginDto,
  LoginVo,
  UserProfileDto,
  ProfileVo,
} from '@/types/auth'

/**
 * 获取用户信息
 */
export const getUserProfileApi = () => {
  return request<ProfileVo>({
    url: '/auth/profile',
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
    url: '/auth/profile',
    method: 'PUT',
    data,
  })
}
