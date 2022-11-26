<template>
  <div class="search-area">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in configItems" :key="item.label">
          <el-col
            v-bind="colLayout"
            v-show="index < showLength || (index >= showLength && isOpen)"
          >
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="
                  item.component === 'input' || item.component === 'password'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.component === 'password'"
                  :clearable="item.clearable ?? true"
                  v-model="formData[`${item.valueName}`]"
                ></el-input>
              </template>
              <template v-else-if="item.component === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :clearable="item.clearable ?? true"
                  style="width: 100%"
                  v-model="formData[`${item.valueName}`]"
                >
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
        <el-col v-bind="colLayout">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
          <el-button
            v-if="configItems.length > showLength"
            @click="handleOpenRetract"
          >
            {{ isOpen ? '收起' : '展开' }}
            <el-icon class="margin-left-5">
              <arrow-up v-if="isOpen" />
              <arrow-down v-else />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="tsx">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IConfigItem } from './types'

export default defineComponent({
  props: {
    // 传入的v-model值
    modelValue: {
      type: Object,
      require: true
    },
    // 配置项
    configItems: {
      type: Array as PropType<IConfigItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '96px'
    },
    // 每个formItem之间的间距
    itemStyle: {
      type: Object,
      default: () => ({})
    },
    // 栅格布局属性
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 8,
        sm: 12,
        xs: 24
      })
    },
    // 默认展示的数量
    showLength: {
      type: Number,
      default: 3
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 这里相当于拷贝一份modelValue的值生成新对象
    // 如果直接赋值相当于直接去修改违反了Vue的单向数据流
    const formData = ref({ ...props.modelValue })

    // 控制展开收起
    const isOpen = ref(false)
    // 点击展开收起
    const handleOpenRetract = () => {
      const resizeEvent = new Event('resize')
      window.dispatchEvent(resizeEvent)
      isOpen.value = !isOpen.value
    }

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return {
      formData,
      isOpen,
      handleOpenRetract
    }
  }
})
</script>

<style scoped lang="less">
.search-area {
  padding: 22px 0;
  padding-right: 12px;
}
</style>
