/**
 * 登录用户dto
 */
type MaLoginDto = {
  code: string
  encryptedData: string
  iv: string
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
  account: string
  /**
   * 昵称
   */
  nickname?: string
}

/**
 * 登录用户结果
 */
export type MaUserLoginVo = BaseProfile & {
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
export type MaUserProfileVo = BaseProfile & {
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
  /**
   * 省
   */
  province?: string
  /**
   * 市
   */
  city?: string
  /**
   * 区县
   */
  county?: string
}

/**
 * 性别
 */
export type Gender = 'M' | 'F'

/**
 * 用户详情信息dto
 */
export type MaUserProfileDto = Pick<
  MaUserProfileVo,
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
