<!-- 此组件用于header插槽的时候筛选条件与按钮布局 -->
<template>
  <div class="header">
    <div class="header-content">
      <slot />
    </div>
    <div class="header-bth">
      <slot name="button" />
    </div>
  </div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderArea'
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  &-content {
    flex: 1 1 auto;
  }
  &-btn {
    display: flex;
    align-items: flex-end;
  }
}
</style>
