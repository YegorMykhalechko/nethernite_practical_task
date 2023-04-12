<script setup>
import { ref } from 'vue'

//Components
import Pagination from '../components/Pagination/Pagination.vue'

const currentPage = ref(1)
const onPageChange = (page) => {
  currentPage.value = page
}
</script>

<template>
  <Pagination
    :total-pages="15"
    :total="114"
    :per-page="10"
    :current-page="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<style scoped></style>
