<template>
  <div class="search-area">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in configItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="
                  item.component === 'input' || item.component === 'password'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.component === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.component === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.component === 'datepicker'">
                <el-date-picker
                  :type="item.dateType ?? 'daterange'"
                  range-separator="至"
                  :start-placeholder="item.placeholder[0] ?? '开始日期'"
                  :end-placeholder="item.placeholder[1] ?? '结束日期'"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { IConfigItem } from './types'

export default defineComponent({
  props: {
    // 配置项
    configItems: {
      type: Array as PropType<IConfigItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    // 每个formItem之间的间距
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 30px' })
    },
    // 栅格布局属性
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.search-area {
  padding-top: 22px;
}
</style>
