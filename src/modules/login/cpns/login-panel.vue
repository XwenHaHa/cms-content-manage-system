<template>
  <div class="login-panel">
    <h1 class="title">VUE3-TS-CMS</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox @change="handleCheck">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      size="large"
      class="login-btn"
      @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const currentTab = ref('account')
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    // 2.定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.accountLoginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.phoneLoginAction(isKeepPassword.value)
      }
    }

    const handleCheck = () => {
      // 点击记住密码则修改值为true,保存到localStorage中
      isKeepPassword.value = !isKeepPassword.value
    }

    return {
      currentTab,
      isKeepPassword,
      accountRef,
      phoneRef,
      handleLoginClick,
      handleCheck
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .demo-tabs {
    .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
    .custom-tabs-label {
      .el-icon {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
