<template>
  <div class="user">
    <div>
      <SearchArea v-bind="searchConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchArea from '@/components/search-area'
import { searchConfig } from './hooks/use-search'

export default defineComponent({
  components: {
    SearchArea
  },
  name: 'user',
  setup() {
    return {
      searchConfig
    }
  }
})
</script>

<style scoped></style>
