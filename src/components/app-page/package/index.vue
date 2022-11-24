<template>
  <div class="app-page" style="height: calc(100vh - 112px)">
    <el-container class="page-center-container" direction="vertical">
      <!-- 渲染固定头部 -->
      <el-header class="page-fixed-header">
        <slot name="fheader"></slot>
      </el-header>
      <!-- 渲染主区域主要是表格 -->
      <el-main class="page-content">
        <el-main class="page-main">
          <el-header class="page-main-header">
            <slot name="header"></slot>
          </el-header>
          <slot name="main"></slot>
          <el-footer class="page-footer">
            <slot name="footer"></slot>
          </el-footer>
        </el-main>
      </el-main>
      <!-- 渲染固定底部 -->
      <el-footer class="page-fixed-footer">
        <slot name="ffooter"></slot>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.app-page {
  overflow-x: auto;
  background-color: #f0f2f5;

  :deep(.el-card__body) {
    height: 100%;
    padding: 0;
  }

  :deep(.el-container) {
    height: 100%;
  }

  :deep(.el-header, .el-footer) {
    height: auto !important;
    padding: 0;
  }

  :deep(.el-main) {
    padding: 0;
  }
  .page-center-container {
    width: auto;
  }
  .page-fixed-header {
    position: relative;
    height: auto important!;
    padding: 15px 10px 0;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 12px;
    :deep(.el-form) {
      width: 100%;
    }

    :deep(.el-form-item) {
      margin-bottom: 15px;

      &.label-hidden {
        .el-form-item__label {
          display: none;
        }
        .el-form-item__content {
          margin-left: 0 !important;
        }
      }
    }

    :deep(.el-date-editor, .el-select) {
      width: 100%;
    }
  }
  .page-content {
    height: 100%;
    padding: 16px 24px;
    border-radius: 4px;
    background-color: #fff;
    .page-main {
      height: 100%;
      &-header {
        padding-bottom: 16px;
      }
    }
    .page-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0;
    }
  }
  .page-fixed-footer {
    background-color: #fff;
    height: auto !important;
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px;
    margin-top: 12px;
    border-radius: 4px;

    :deep(.el-paginatio) {
      white-space: nowrap;
      margin-left: 30px;
    }
  }
  .page-main-header {
    position: relative;
  }
}
</style>
