import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

export const phoneRules = reactive<FormRules>({
  num: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '必须是11位手机号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,}$/,
      message: '必须是4位验证码',
      trigger: 'blur'
    }
  ]
})
