import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus/lib/components/loading/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HJRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean
  interceptorHooks?: InterceptorHooks
}

interface HJData<T> {
  data: T
  returnCode: string
  success: boolean
}

class Request {
  config: AxiosRequestConfig
  instance: AxiosInstance
  interceptorHooks?: InterceptorHooks
  showLoading?: boolean
  loading?: LoadingInstance

  constructor(options: HJRequestConfig) {
    // 创建axios实例
    this.config = options
    this.instance = axios.create(options)
    this.showLoading = options.showLoading ?? false
    this.interceptorHooks = options.interceptorHooks
    this.setupInterceptor()
  }

  setupInterceptor(): void {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      return config
    })

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T = any>(config: HJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 判断是否需要显示Loading
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, HJData<T>>(config)
        .then((res) => {
          resolve(res.data)
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

export default Request
