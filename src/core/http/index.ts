import Request from './Request'
import { API_BASE_URL, TIME_OUT } from './config'
import localCache from '@/utils/cache'

const http = new Request({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = localCache.getCache('token')
      if (config.headers) {
        config.headers.Authorization = token
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default http
