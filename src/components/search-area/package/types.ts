type ISearchType = 'input' | 'password' | 'select' | 'datepicker'

export interface IConfigItem {
  component: ISearchType
  label: string
  rules?: any[]
  // 日期组件需要传两个placeholder
  placeholder: string | string[]
  // 下拉组件options
  options?: any[]
  // 是否可清空
  clearable?: boolean
  // 日期格式,默认YYYY-MM-DD HH:mm:ss
  valueFormat?: string
  // 日期组件type
  dateType?: string
}

export interface IConfig {
  configItems: IConfigItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
