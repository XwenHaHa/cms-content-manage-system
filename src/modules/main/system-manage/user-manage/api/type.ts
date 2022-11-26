import { CUSTOMER_STATE_ENUM } from '@/modules/main/system-manage/user-manage/constant'

/**
 * 用户列表请求体
 */
export interface ICustomerReq {
  /**
   * 用户名
   */
  name: string
  /**
   * 真实姓名
   */
  realname: string
  /**
   * 手机号码
   */
  cellphone: string
  /**
   * 状态
   */
  enable: CUSTOMER_STATE_ENUM | ''
  /**
   * 创建时间
   */
  createAt: string[] | ''
  /**
   * 当前查询的页码
   */
  offset?: number
  /**
   * 当前查询单页的数据量
   */
  size?: number
}

export interface ICustomerListItem {
  /**
   * 手机号码
   */
  cellphone: string
  /**
   * 创建时间
   */
  createAt: string
  /**
   * 部门Id
   */
  departmentId: string
  /**
   * 状态
   */
  enable: CUSTOMER_STATE_ENUM
  /**
   * id
   */
  id: string
  /**
   * 用户名
   */
  name: string
  /**
   * 真实名
   */
  realname: string
  /**
   * 角色Id
   */
  roleId: string
  /**
   * 更新时间
   */
  updateAt: string
}

/**
 * 用户列表返回体
 */
export interface ICustomerRes {
  totalCount: string
  list: ICustomerListItem[]
}
