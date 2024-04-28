/**
 * 账号登录dto
 */
type AccountLoginDto = {
  username: string
  password: string
}

/**
 * 短信验证码登录dto
 */
type SmsLoginDto = {
  phone: string
  checkCode: string
}

/**
 * 用户基本信息
 */
type BaseProfile = {
  /**
   * ID
   */
  id: number
  /**
   * 头像
   */
  avatar: string
  /**
   * 账户名
   */
  username: string
  /**
   * 昵称
   */
  nickname?: string
}

/**
 * 用户登录结果
 */
export type LoginVo = BaseProfile & {
  /**
   * 手机号
   */
  phone: string
  /**
   * 登录凭证
   */
  token: string
}

/**
 * 用户详情信息
 */
export type ProfileVo = BaseProfile & {
  /**
   * 性别
   */
  gender?: Gender
  /**
   * 生日
   */
  birthday?: string
  /**
   * 省市区
   */
  fullLocation?: string
  /**
   * 职业
   */
  profession?: string
}

/**
 * 性别
 */
export type Gender = 'M' | 'F'

/**
 * 用户详情信息dto
 */
export type UserProfileDto = Pick<
  UserProfileVo,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /**
   * 省份编码
   */
  province?: string
  /**
   * 城市编码
   */
  city?: string
  /**
   * 区/县编码
   */
  county?: string
}
