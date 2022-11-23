<template>
  <div class="nav-header">
    <div class="folg-menu" @click="handleFoldClick">
      <el-icon class="fold-menu" v-if="isFold"><Expand /></el-icon>
      <el-icon class="fold-menu" v-else><Fold /></el-icon>
    </div>
    <div class="content">
      <NavBreadCrumb :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import NavBreadCrumb from '../nav-breadcrumb/index.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  name: 'NavHeader',
  components: {
    NavBreadCrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据
    const store = useStore()
    const userMenus = store.state.login.userMenus
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .fold-menu {
    font-size: 25px;
  }
  .content {
    margin-left: 10px;
  }
}
</style>
