<template>
  <div>
    <el-form
      label-width="60px"
      ref="accountFormRef"
      :model="accountForm"
      :rules="accountRules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password clearable />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import { accountRules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const accountFormRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const accountForm = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const accountLoginAction = (isKeepPassword: boolean) => {
      accountFormRef.value?.validate((valid) => {
        if (valid) {
          const name = accountForm.name
          const password = accountForm.password
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', name)
            localCache.setCache('password', password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始登录验证
          store.dispatch('login/accountLoginAction', { name, password })
        }
      })
    }

    return {
      accountFormRef,
      accountForm,
      accountRules,
      accountLoginAction
    }
  }
})
</script>

<style scoped lang="less"></style>
