/**
 * 首页-广告区域数据类型
 */
export type BannerItem = {
  /**
   * ID
   */
  id: number
  /**
   * 图片链接
   */
  imgUrl: string
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * 跳转类型
   */
  type: number
}

/**
 * 首页-类目数据类型
 */
export type CategoryItem = {
  /**
   * ID
   */
  id: number
  /**
   * 分类名称
   */
  name: string
  /**
   * 分类图标路径
   */
  icon: string
}

/**
 * 首页-热门推荐数据类型
 */
export type HotPanelItem = {
  /**
   * ID
   */
  id: number
  /**
   * 标题
   */
  title: string
  /**
   * 说明
   */
  alt: string
  /**
   * 图片
   */
  pictures: string[]
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * 推荐类型
   */
  type: string
}

export type GuessLikeItem = {
  /**
   * ID
   */
  id: number
  /**
   * 商品名称
   */
  name: string
  /**
   * 描述
   */
  desc: string
  /**
   * 价格
   */
  price: number
  /**
   * 原价
   */
  oldPrice: number
  /**
   * 折扣
   */
  discount: number
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
}
