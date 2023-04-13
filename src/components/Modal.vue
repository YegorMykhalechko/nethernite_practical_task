<script setup>
//Components
import BaseIcon from './Icon/BaseIcon.vue'
</script>

<template>
  <div
    class="modal d-block"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    v-on:click.self="$emit('close')"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            <slot name="title"></slot>
          </h5>
          <button type="button" class="btn d-flex" v-on:click="$emit('close')">
            <BaseIcon icon="close"/>
          </button>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  background-color: transparentize($dark, 0.5);
}
</style>
