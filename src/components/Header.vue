<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import api from '../api'
const searchValue = ref('')
const store = useStore()
const submit = () => {
  const data = {
    query: searchValue.value,
    size: 10
  }
  store.dispatch('packageModule/getPackages', data)
  searchValue.value = ''
}
</script>

<template>
  <nav class="navbar navbar-light bg-light py-3">
    <div class="container-fluid justify-content-center">
      <form class="input-group" @submit.prevent="submit">
        <input v-model="searchValue" class="form-control" type="search" placeholder="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.input-group {
  max-width: 30rem;
  .form-control {
    &:focus {
      box-shadow: none;
    }
  }
}
</style>
