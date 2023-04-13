<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchValue = ref('')

//Get Packages
const submit = () => {
  store.dispatch('packageModule/getPackages', searchValue.value)
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
