<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

//Components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import GlobalLoader from './components/Loaders/GlobalLoader.vue'

//Define Global Loader
const store = useStore()
const loading = computed(() => store.state.loader.loading)
</script>

<template>
  <GlobalLoader v-if="loading" />
  <header>
    <Header />
  </header>
  <main class="container-fluid flex-fill">
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
