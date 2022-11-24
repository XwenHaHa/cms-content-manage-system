import http from '@/core/http'
import { IRolePageReq, IRolePageRes } from './type'

/**
 * 获取角色列表
 */
export const getRolePageList = (params: IRolePageReq) => {
  return http.post<IRolePageRes>({
    url: '/role/list',
    data: params
  })
}
