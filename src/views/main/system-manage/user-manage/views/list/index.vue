<template>
  <div class="user">
    <div>
      <SearchArea v-bind="searchConfig" v-model="formData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SearchArea from '@/components/search-area'
import { searchConfig } from './hooks/use-search'

export default defineComponent({
  components: {
    SearchArea
  },
  name: 'user',
  setup() {
    const formData = ref({
      userName: '',
      password: '',
      hobby: '',
      startTime: '',
      endTime: ''
    })
    return {
      formData,
      searchConfig
    }
  }
})
</script>

<style scoped></style>
