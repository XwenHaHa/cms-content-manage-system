<template>
  <div>
    <el-form
      label-width="70px"
      ref="phoneFormRef"
      :model="phoneForm"
      :rules="phoneRules"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phoneForm.num" clearable />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phoneForm.code" clearable />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import { phoneRules } from '../config/phone-config'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const phoneFormRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const phoneForm = reactive({
      num: localCache.getCache('num') ?? '',
      code: localCache.getCache('code') ?? ''
    })

    const phoneLoginAction = (isKeepPassword: boolean) => {
      phoneFormRef.value?.validate((valid) => {
        if (valid) {
          const num = phoneForm.num
          const code = phoneForm.code
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache('num', num)
            localCache.setCache('code', code)
          } else {
            localCache.deleteCache('num')
            localCache.deleteCache('code')
          }
          // 2.开始手机登录验证
          store.dispatch('login/phoneLoginAction', { num, code })
        }
      })
    }
    return {
      phoneFormRef,
      phoneForm,
      phoneRules,
      phoneLoginAction
    }
  }
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
