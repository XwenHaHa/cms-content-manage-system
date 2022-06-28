import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: Error) => Error
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: Error) => Error
}

export interface HJRequestConfig extends AxiosRequestConfig {
  interceptors?: HJRequestInterceptors
  showLoading?: boolean
}
