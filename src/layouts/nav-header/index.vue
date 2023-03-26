<template>
  <div class="nav-header">
    <div class="folg-menu" @click="handleFoldClick">
      <el-icon class="fold-menu" v-if="isFold"><Expand /></el-icon>
      <el-icon class="fold-menu" v-else><Fold /></el-icon>
    </div>
    <div class="content">
      <NavBreadCrumb :breadcrumbs="breadcrumbs" />
    </div>
    <div class="theme">
      <el-dropdown trigger="click" @command="handleSetTheme">
        <div>
          <el-tooltip effect="dark" content="主题模式" placement="bottom">
            <el-icon :size="20">
              <MagicStick />
            </el-icon>
          </el-tooltip>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(theme, index) in themeList"
              :key="index"
              :disabled="activeThemeName === theme.name"
              :command="theme.name"
            >
              <span>{{ theme.title }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref, computed } from 'vue'
import { type ThemeName, useTheme } from '@/hooks/useTheme'
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

    const { themeList, activeThemeName, setTheme } = useTheme()

    const handleSetTheme = (name: ThemeName) => {
      setTheme(name)
    }

    return {
      isFold,
      handleFoldClick,
      breadcrumbs,
      themeList,
      activeThemeName,
      handleSetTheme
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
  .theme {
    margin-left: 20px;
  }
}
</style>
