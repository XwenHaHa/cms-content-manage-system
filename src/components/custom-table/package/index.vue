<template>
  <div class="custom-table">
    <el-table :data="data" border style="width: 100%">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in columns" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <!-- 通过scope拿到当前行数据 -->
          <template #default="scope">
            <!-- 将scope里面的row传到上一层 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="tsx">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      require: true,
      default: () => []
    },
    // 传入的配置项
    columns: {
      type: Array as PropType<any[]>,
      require: true,
      default: () => []
    },
    // 是否展示序号
    showIndexColumn: {
      type: Boolean,
      default: true
    },
    // 是否展示多选框
    showSelectColumn: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
