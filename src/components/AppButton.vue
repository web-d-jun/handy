<template>
  <div class="app-button p-3 cursor-pointer">
    <a :href="`${$attrs.link}`">
      {{ $attrs.name }}
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  setup() {
    const menu = {};
    return {
      menu,
    };
  },
});
</script>
<style scoped>
.app-button {
}
</style>
