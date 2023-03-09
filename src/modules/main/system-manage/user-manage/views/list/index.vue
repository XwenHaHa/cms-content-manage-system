<template>
  <app-page class="user-manage">
    <template #fheader>
      <SearchArea v-bind="searchConfig" v-model="params" />
    </template>
    <template #header>
      <header-area>
        <template #button>
          <el-button type="primary">创建客户</el-button>
        </template>
      </header-area>
    </template>
    <template #main>
      <CustomTable :data="tableData" :columns="tableColumns">
        <template #status="scope">
          <el-tag :type="scope.row.enable ? '' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
      </CustomTable>
    </template>
    <template #ffooter>
      <el-row style="width: 100%" type="flex" justify="end">
        <el-pagination layout="prev, pager, next" :total="50" />
      </el-row>
    </template>
  </app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPage from '@/components/app-page'
import SearchArea from '@/components/search-area'
import HeaderArea from '@/components/header-area'
import CustomTable from '@/components/custom-table'
import { searchConfig } from './hooks/use-search'
import { useList } from '@/hooks/use-list'
import {
  ICustomerReq,
  ICustomerRes
} from '@/modules/main/system-manage/user-manage/api/type'
import { getCustomerPageList } from '@/modules/main/system-manage/user-manage/api'

export default defineComponent({
  components: {
    SearchArea,
    HeaderArea,
    CustomTable,
    AppPage
  },
  name: 'user',
  setup() {
    const {
      params,
      tableTotal,
      tableData,
      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange
    } = useList<ICustomerRes, ICustomerReq>({
      request: {
        api: getCustomerPageList,
        params: {
          name: '',
          realname: '',
          cellphone: '',
          enable: '',
          createAt: '',
          offset: 1,
          size: 10
        }
      }
    })
    handleSearch()
    const tableColumns = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '180',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '180',
        slotName: 'updateAt'
      }
    ]
    return {
      tableColumns,
      searchConfig,
      params,
      tableTotal,
      tableData,
      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped></style>
