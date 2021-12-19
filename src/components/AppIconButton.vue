<template>
  <div class="px-1">
    <button type="button" class="bar-btn btn-active icon-btn">
      <slot name="icon"></slot>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppIconButton',
});
</script>
<style scoped>
.bar-btn {
  @apply outline-none select-none;
  @apply rounded-full w-9 h-9 opacity-70 text-xl relative;
  @apply active:bg-gray-400;
  @apply lg:active:bg-gray-800 lg:hover:bg-black lg:hover:bg-opacity-20;
}
</style>
