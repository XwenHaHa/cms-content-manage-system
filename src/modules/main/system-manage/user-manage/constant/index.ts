// 用户状态
export enum CUSTOMER_STATE_ENUM {
  /** 启用 */
  enable = 1,
  /** 禁用 */
  disable = 0
}

export const CUSTOMER_STATE_LIST = [
  { value: CUSTOMER_STATE_ENUM.enable, label: '启用' },
  { value: CUSTOMER_STATE_ENUM.disable, label: '禁用' }
]
