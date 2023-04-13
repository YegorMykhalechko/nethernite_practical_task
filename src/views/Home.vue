<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

//Components
import Pagination from '../components/Pagination/Pagination.vue'

const store = useStore()

//Pagintation
const currentPage = ref(1)
const onPageChange = (page) => {
  currentPage.value = page
  const offset = (page - 1) * 10
  store.dispatch('packageModule/getNextPackages', offset)
}
const pages = computed(() => store.getters['packageModule/allPages'])

//Packages
const packages = computed(() => {
  const test = store.getters['packageModule/allPackages']
  console.log(test)
})
</script>

<template>
  {{ packages }}
  <div class="containet-fluid">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :totalPages="pages" :currentPage="currentPage" @pagechanged="onPageChange" />
  </div>
</template>

<style scoped></style>
