import { ref, UnwrapRef } from 'vue'
import { get, cloneDeep } from 'lodash-es'

interface UseListConfig<T = any, P = any> {
  request: {
    /**
     * 请求列表方法
     */
    api: any
    /**
     * 请求参数
     */
    params?: P
    pageNumKey?: string
    pageSizeKey?: string
    /**
     * 接口响应数据 key
     */
    handleParams?: (params: P) => P
    /**
     * 校验函数返回true 往下执行
     */
    handleValidate?: (params: any) => boolean
    /**
     * 自定义重置方法
     */
    handleCustomReset?: (params: P, defaultParams: P) => P
    /**
     * 重置请求地址
     */
    resetApi?: () => any
  }
  response?: {
    /**
     * 列表数据
     */
    tableDataKey?: string
    /**
     * 列表数据
     */
    totalKey?: string
    /**
     * 请求回来的初始数据
     */
    initDataKey?: any
    handleResponseData?: (list: T[]) => T[]
  }
}

const defaultResponseConfig = {
  tableDataKey: 'data.list',
  totalKey: 'data.total',
  initDataKey: 'data'
}

export function useList<T = any, P = any>(config: UseListConfig<T, P>) {
  let baseParams: any = null
  const { params: requestParams = {} } = config.request
  const cacheConfig = cloneDeep(config)
  cacheConfig.response = Object.assign(
    {},
    defaultResponseConfig,
    cacheConfig.response || {}
  )

  const {
    pageNumKey = 'offset',
    pageSizeKey = 'size',
    handleParams,
    handleValidate,
    handleCustomReset,
    resetApi
  } = cacheConfig.request
  let { api } = cacheConfig.request

  const { tableDataKey, totalKey, initDataKey, handleResponseData } =
    cacheConfig.response

  const tableData = ref<T[]>([])
  const tableTotal = ref(0)
  const tableLoading = ref(false)
  const params = ref(cloneDeep(requestParams) as P)
  const initData = ref<any>(null)

  /**
   * 列表查询
   */
  const handleSearch = async (pageNum = 1) => {
    if (pageNumKey in (params.value as any)) {
      ;(params.value as any)[pageNumKey] = pageNum
    }

    let apiParams = Object.assign({}, params.value) as P

    if (handleValidate && !handleValidate(params.value)) {
      return null
    }

    // 保存原始params
    if (!baseParams) {
      baseParams = cloneDeep(params.value)
    }

    if (handleParams) {
      apiParams = handleParams(cloneDeep(params.value) as P)
    }

    if (resetApi) {
      api = resetApi()
    }

    try {
      tableLoading.value = true
      const res = await api(apiParams)
      if (res.data) {
        let list = get(res, tableDataKey!)
        tableTotal.value = get(res, totalKey!)
        initData.value = get(res, initDataKey!)
        if (handleResponseData) {
          list = handleResponseData(list)
        }
        tableData.value = list
      }
      return Promise.resolve(res)
    } catch (err: any) {
      if (err && err.isCancel) {
        setTimeout(() => {
          tableLoading.value = true
        })
      }
      return Promise.reject(err)
    } finally {
      tableLoading.value = false
    }
  }

  /**
   * 重置查询参数
   */
  const handleReset = () => {
    // 重置清除缓存
    baseParams = null
    if (handleCustomReset) {
      params.value = handleCustomReset(
        params.value as P,
        cloneDeep(baseParams)
      ) as P as UnwrapRef<P>
    } else {
      params.value = cloneDeep(baseParams ?? requestParams) as UnwrapRef<P>
    }
    return handleSearch()
  }

  /**
   * 切换分页大小，刷新列表
   */
  const handleSizeChange = (pageSize: number) => {
    if (pageSizeKey in (params.value as any)) {
      ;(params.value as any)[pageSizeKey] = pageSize
    }
    return handleSearch(1)
  }

  /**
   * 切换页码 刷新列表
   */
  const handleCurrentChange = (pageNum: number) => {
    return handleSearch(pageNum)
  }

  return {
    params,
    tableData,
    tableTotal,
    tableLoading,
    initData,
    handleSearch,
    handleReset,
    handleSizeChange,
    handleCurrentChange
  }
}
