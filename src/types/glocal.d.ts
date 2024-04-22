/**
 * 响应结果
 */
export type ResponseResult<T> = {
  /**
   * 响应编码（200表示成功，其它值表示失败）
   */
  code: number
  /**
   * 响应消息
   */
  message: string
  /**
   * 响应数据
   */
  data: T
  /**
   * 响应时间
   */
  time: string
}

/**
 * 分页结果
 */
export type PageResult<T> = {
  /**
   * 当前页数
   */
  current: number
  /**
   * 每页条数
   */
  size: number
  /**
   * 总条数
   */
  total: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 列表数据
   */
  list: T[]
}

/**
 * 分页参数
 */
export type PageParam = {
  /**
   * 当前页数，默认值为1
   */
  current?: number
  /**
   * 每页条数，默认值为 20
   */
  size?: number
}
