import axios, { AxiosInstance } from 'axios'

import type { HJRequestInterceptors, HJRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib/components/loading/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class HJRequest {
  instance: AxiosInstance
  interceptors?: HJRequestInterceptors
  showLoading?: boolean
  loading?: LoadingInstance

  constructor(config: HJRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? false

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptor
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (res) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return res
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 2000)
        return res
      },
      (err) => {
        setTimeout(() => {
          this.loading?.close()
        }, 2000)
        return err
      }
    )
  }

  request<T = any>(config: HJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
          this.showLoading = false
        })
        .catch((err) => {
          reject(err)
          this.showLoading = false
        })
    })
  }

  get<T>(config: HJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HJRequest
