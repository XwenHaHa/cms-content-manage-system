<template>
  <div class="user">
    <div>
      <SearchArea :IConfig="formItems" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchArea, { IConfigItem } from '@/base-ui/search-area'

export default defineComponent({
  components: {
    SearchArea
  },
  name: 'user',
  setup() {
    const formItems: IConfigItem[] = [
      {
        component: 'input',
        label: '用户名：',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        component: 'password',
        label: '密码：',
        rules: [],
        placeholder: '请输入密码'
      },
      {
        component: 'select',
        label: '爱好：',
        rules: [],
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
        placeholder: ['开始日期', '结束日期']
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
