<template>
  <div class="app-button p-3">
    <a href="/ai">
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
  border: 1px solid;
}
</style>
