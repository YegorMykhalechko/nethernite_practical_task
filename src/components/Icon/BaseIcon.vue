<script setup>
import { computed } from 'vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'

const props = defineProps({
  icon: String
})

const icons = {
  github: GitHubIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon
}

const iconComponent = computed(() => icons[props.icon])
</script>

<template>
  <component :is="iconComponent" role="img" class="icon inline-block fill-current" />
</template>

<style scoped></style>
