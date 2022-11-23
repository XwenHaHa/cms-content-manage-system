<template>
  <app-page class="role-manage">
    <template #fheader>
      <SearchArea v-bind="searchConfig" v-model="formData" />
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
import { defineComponent, ref } from 'vue'
import AppPage from '@/components/app-page'
import SearchArea from '@/components/search-area'
import HeaderArea from '@/components/header-area'
import { searchConfig } from './hooks/use-search'

export default defineComponent({
  components: {
    SearchArea,
    HeaderArea,
    AppPage
  },
  name: 'role',
  setup() {
    const formData = ref({
      userName: '',
      password: '',
      hobby: '',
      startTime: '',
      endTime: ''
    })
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
    return {
      formData,
      tableData,
      searchConfig
    }
  }
})
</script>

<style scoped></style>
