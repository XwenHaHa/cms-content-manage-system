import http from '../http/index'
import { IAccount, IDataType, ILoginResult, IUserInfo } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return http.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return http.get<IDataType<IUserInfo>>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return http.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
