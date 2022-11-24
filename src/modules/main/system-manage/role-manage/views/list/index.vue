<template>
  <app-page class="role-manage">
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
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
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
import { searchConfig } from './hooks/use-search'
import { useList } from '@/hooks/use-list'
import {
  IRolePageReq,
  IRolePageRes
} from '@/modules/main/system-manage/role-manage/api/type'
import { getRolePageList } from '@/modules/main/system-manage/role-manage/api'

export default defineComponent({
  components: {
    SearchArea,
    HeaderArea,
    AppPage
  },
  name: 'role',
  setup() {
    const {
      params,
      tableTotal,
      tableData,
      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange
    } = useList<IRolePageRes, IRolePageReq>({
      request: {
        api: getRolePageList,
        params: {
          offset: 1,
          size: 10,
          name: '',
          intro: '',
          createAt: []
        }
      }
    })
    handleSearch()
    return {
      params,
      tableTotal,
      tableData,
      searchConfig,

      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped></style>
