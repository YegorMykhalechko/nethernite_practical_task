<script setup>
import { computed } from 'vue'
import GitHubIcon from './Icons/GitHubIcon.vue'

const props = defineProps({
  icon: String
})

const icons = {
  github: GitHubIcon
}

const iconComponent = computed(() => icons[props.icon])
</script>

<template>
  <component
    :is="iconComponent"
    role="img"
    class="icon inline-block fill-current"
  />
</template>

<style scoped></style>
