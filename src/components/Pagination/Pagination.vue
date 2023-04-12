<script setup>
import { computed } from 'vue'

const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['pagechanged'])

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1
  }

  return props.currentPage - 1
})

const endPage = computed(() => {
  return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages)
})

const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
})

const isInFirstPage = computed(() => {
  return props.currentPage === 1
})

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages
})

const onClickFirstPage = () => {
  emit('pagechanged', 1)
}
const onClickPreviousPage = () => {
  emit('pagechanged', props.currentPage - 1)
}
const onClickPage = (page) => {
  emit('pagechanged', page)
}
const onClickNextPage = () => {
  emit('pagechanged', props.currentPage + 1)
}
const onClickLastPage = () => {
  emit('pagechanged', props.totalPages)
}
const isPageActive = (page) => {
  return props.currentPage === page
}
</script>

<template>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <button
          class="page-link"
          :class="{ disabled: isInFirstPage }"
          type="button"
          @click="onClickFirstPage"
        >
          First
        </button>
      </li>

      <li class="page-item">
        <button
          class="page-link"
          :class="{ disabled: isInFirstPage }"
          type="button"
          @click="onClickPreviousPage"
        >
          Previous
        </button>
      </li>
      <li v-for="page of pages" class="page-item">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          class="page-link"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="page-item">
        <button
          class="page-link"
          :class="{ disabled: isInLastPage }"
          type="button"
          @click="onClickNextPage"
        >
          Next
        </button>
      </li>

      <li class="page-item">
        <button
          class="page-link"
          :class="{ disabled: isInLastPage }"
          type="button"
          @click="onClickLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.page-link {
  &:focus {
    box-shadow: none;
    background-color: transparent;
  }
}
</style>
