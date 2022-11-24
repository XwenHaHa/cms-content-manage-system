import { IConfig } from '@/components/search-area'

export const searchConfig: IConfig = {
  labelWidth: '120px',
  configItems: [
    {
      component: 'input',
      label: '用户名：',
      rules: [],
      valueName: 'userName',
      placeholder: '请输入用户名'
    },
    {
      component: 'password',
      label: '密码：',
      rules: [],
      valueName: 'password',
      placeholder: '请输入密码'
    },
    {
      component: 'select',
      label: '爱好：',
      rules: [],
      valueName: 'hobby',
      placeholder: '请输入爱好',
      options: [
        { label: '篮球', value: '篮球' },
        { label: '足球', value: '足球' }
      ]
    },
    {
      component: 'datepicker',
      label: '创建时间：',
      rules: [],
      valueName: ['startTime,endTime'],
      placeholder: ['开始日期', '结束日期']
    }
  ]
}
