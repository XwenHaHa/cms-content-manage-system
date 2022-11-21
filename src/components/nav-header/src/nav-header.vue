<template>
  <div class="nav-header">
    <div @click="handleFoldClick">
      <el-icon class="fold-menu" v-if="isFold"><Expand /></el-icon>
      <el-icon class="fold-menu" v-else><Fold /></el-icon>
    </div>
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavHeader',
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 25px;
  }
}
</style>
