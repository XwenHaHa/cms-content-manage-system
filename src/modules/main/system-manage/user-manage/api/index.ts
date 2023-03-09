import http from '@/core/http'
import { ICustomerReq, ICustomerRes } from './type'

/**
 * 获取用户列表
 */
export const getCustomerPageList = (params: ICustomerReq) => {
  return http.post<ICustomerRes>({
    url: '/users/list',
    data: params,
    showLoading: true
  })
}
