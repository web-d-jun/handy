<template>
  <div class="app-menus">
    <slot name="button"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppMenus',
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.app-menus {
  @apply relative;
}
</style>
