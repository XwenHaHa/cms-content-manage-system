import { IConfig } from '@/components/search-area'

export const searchConfig: IConfig = {
  labelWidth: '96px',
  configItems: [
    {
      component: 'input',
      label: '角色名称：',
      rules: [],
      valueName: 'name',
      placeholder: '请输入角色名称'
    },
    {
      component: 'input',
      label: '权限介绍：',
      rules: [],
      valueName: 'intro',
      placeholder: '请输入权限介绍'
    },
    {
      component: 'datepicker',
      label: '创建时间：',
      rules: [],
      valueName: 'createAt',
      placeholder: ['开始时间', '结束时间']
    }
  ]
}
