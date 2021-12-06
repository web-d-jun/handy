<template>
  <div class="app-button-container mb-1.5">
    <div class="app-button-wrap px-3">
      <div class="app-button p-3 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded">
        <a :href="`${$attrs.link}`">
          <div class="menu-title text-white opacity-80 text-sm font-mono">
            <span>{{ $attrs.name }}</span>
          </div>
        </a>
      </div>
    </div>
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
