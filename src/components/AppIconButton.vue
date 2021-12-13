<template>
  <div class="px-1">
    <button
      type="button"
      class="bar-btn btn-active active:bg-gray-700 icon-btn rounded-full w-9 h-9 hover:bg-black hover:bg-opacity-20 opacity-70 text-xl relative"
    >
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
