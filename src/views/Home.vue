<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

//Components
import Pagination from '../components/Pagination/Pagination.vue'
import Modal from '../components/Modal.vue'

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
const packages = computed(() => store.getters['packageModule/allPackages'])

//Open Modal
const showModal = ref(false)
const currentPackage = ref(null)
const openModal = (data) => {
  currentPackage.value = data
  showModal.value = true
}

//Render Data
const normalizeDate = computed(() => {
  return new Date(currentPackage.value.package.date)
})
const packageLinks = computed(() => {
  const links = currentPackage.value.package.links
  const arrLinks = Object.entries(links)
  return arrLinks
})
</script>

<template>
  <div class="full-height">
    <div class="container-fluid h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="row justify-content-center">
          <div v-if="packages">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Package Version</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="table-btn"
                    v-for="(p, index) of packages"
                    :key="index"
                    @click="openModal(p)"
                  >
                    <td>{{ p.package.name }}</td>
                    <td>{{ p.package.version }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center">
              <Pagination
                :totalPages="pages"
                :currentPage="currentPage"
                @pagechanged="onPageChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="showModal" @close="showModal = false">
    <template v-slot:title>{{ currentPackage.package.name }}</template>
    <template v-slot:content>
      <div class="p-4">
        <div class="mb-3" v-if="currentPackage.package?.author?.name">
          Author: <strong>{{ currentPackage.package?.author?.name }}</strong>
        </div>
        <div class="mb-3">
          Description: <strong>{{ currentPackage.package.description }}</strong>
        </div>
        <div class="mb-3">
          Date: <strong>{{ normalizeDate }}</strong>
        </div>
        <div class="mb-3">
          Scope: <strong>{{ currentPackage.package.scope }}</strong>
        </div>
        <div class="mb-3">
          Version: <strong>{{ currentPackage.package.version }}</strong>
        </div>
        <div class="mb-3">
          Links:
          <div v-for="(link, index) of packageLinks" :key="index">
            <a target="_blank" :href="link[1]"
              ><strong>{{ link[0] }}</strong></a
            >
          </div>
        </div>

        <div class="mb-3">
          Publisher:
          <a :href="`mailto:${currentPackage.package.publisher.email}`"
            ><strong>{{ currentPackage.package.publisher.username }}</strong></a
          >
        </div>

        <div class="mb-3">
          Maintainers:
          <div v-for="(maintainer, index) of currentPackage.package.maintainers" :key="index">
            <a :href="`mailto:${maintainer.email}`"
              ><strong>{{ maintainer.username }}</strong></a
            >
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.table-btn {
  cursor: pointer;
  &:hover {
    background-color: $primary;
    color: $white;
  }
}
</style>
