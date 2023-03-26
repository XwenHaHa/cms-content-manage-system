<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from '@/hooks/useTheme'

export default defineComponent({
  name: 'App',
  setup() {
    const { initTheme } = useTheme()

    /** 初始化主题 */
    initTheme()
    return {}
  }
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
