/**
 * 角色列表请求体
 */
export interface IRolePageReq {
  /**
   * 角色名称
   */
  name: string
  /**
   * 权限介绍
   */
  intro: string
  /**
   * 创建时间
   */
  createAt: string[]
  /**
   * 当前查询的页码
   */
  offset?: number
  /**
   * 当前查询单页的数据量
   */
  size?: number
}

export interface IMenuListItem {
  /**
   * 图标
   */
  icon: string
  /**
   * id
   */
  id: string
  /**
   * 菜单名
   */
  name: string
  /**
   * 排序
   */
  sort: string
  /**
   * 类型
   */
  type: string
  /**
   * url地址
   */
  url: string
  children: IMenuListItem[]
}

export interface IRolePageResListItem {
  /**
   * 序号
   */
  id: string
  /**
   * 角色管理
   */
  name: string
  /**
   * 角色权限
   */
  intro: string
  /**
   * 创建时间
   */
  createAt: string
  /**
   * 更新时间
   */
  updateAt: string
  /**
   * 菜单列表
   */
  menuList: IMenuListItem[]
}

/**
 * 角色列表返回体
 */
export interface IRolePageRes {
  totalCount: string
  list: IRolePageResListItem[]
}
